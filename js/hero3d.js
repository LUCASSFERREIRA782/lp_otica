/**
 * hero3d.js
 * -------------------------------------------------------
 * Lente de vidro facetada em WebGL (Three.js), girando devagar.
 * Não é decoração genérica — é literalmente o objeto do negócio
 * (lente). Cuidados de performance: pixelRatio limitado, pausa
 * via IntersectionObserver quando fora de tela, e fallback em
 * CSS puro se o WebGL falhar ou não existir.
 * -------------------------------------------------------
 */

function setupHero3D() {
  const wrap = document.getElementById("hero-canvas-wrap");
  const fallback = document.getElementById("hero-canvas-fallback");
  if (!wrap) return;

  if (typeof THREE === "undefined") {
    fallback.style.display = "block";
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (e) {
    fallback.style.display = "block";
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 4.2);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  wrap.appendChild(renderer.domElement);

  function resize() {
    const size = wrap.clientWidth;
    renderer.setSize(size, size);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  // ---- Luz (três pontos, uma por cor do prisma) ----
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const l1 = new THREE.PointLight(0x7c5cff, 2.2, 10);
  l1.position.set(-3, 2, 3);
  const l2 = new THREE.PointLight(0x3e8bff, 2.2, 10);
  l2.position.set(3, -1, 2);
  const l3 = new THREE.PointLight(0x22d3c7, 2.2, 10);
  l3.position.set(0, 3, -2);
  scene.add(l1, l2, l3);

  // ---- A lente: icosaedro facetado, material "vidro" ----
  const geometry = new THREE.IcosahedronGeometry(1.35, 1);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.05,
    roughness: 0.12,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    transparent: true,
    opacity: 0.85,
  });
  const lens = new THREE.Mesh(geometry, material);
  scene.add(lens);

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
  );
  lens.add(edges);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Pausa a renderização quando o hero sai da tela ----
  let isVisible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => (isVisible = entries[0].isIntersecting), { threshold: 0.05 }).observe(wrap);
  }

  if (reduceMotion) {
    renderer.render(scene, camera);
    return;
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;
    lens.rotation.y += 0.004;
    lens.rotation.x = Math.sin(Date.now() * 0.0003) * 0.15;
    renderer.render(scene, camera);
  }
  animate();
}