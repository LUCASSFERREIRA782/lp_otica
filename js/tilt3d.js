/**
 * tilt3d.js
 * -------------------------------------------------------
 * Inclinação 3D real (CSS perspective + rotateX/rotateY)
 * acompanhando a posição do mouse — não uma lib externa,
 * só matemática simples. Pensado como "vidro reagindo à luz".
 * Desativado totalmente se o usuário pedir menos movimento.
 * -------------------------------------------------------
 */

function setupTilt3D() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.body.style.perspective = "1400px";

  document.addEventListener("mousemove", e => {
    document.querySelectorAll(".glass-card").forEach(card => {
      const rect = card.getBoundingClientRect();
      const dentroDaTela = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!dentroDaTela) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      // Só inclina de verdade quando o mouse está razoavelmente perto do card —
      // evita todo card da página tremer ao mexer o mouse em qualquer lugar.
      const perto = Math.abs(dx) < 2.2 && Math.abs(dy) < 2.2;
      const rx = perto ? dy * -6 : 0;
      const ry = perto ? dx * 6 : 0;

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".glass-card").forEach(card => (card.style.transform = "rotateX(0) rotateY(0)"));
  });
}