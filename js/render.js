/**
 * render.js
 * -------------------------------------------------------
 * Lê o objeto CONFIG e preenche o HTML. Nenhum texto de
 * conteúdo deve ficar hardcoded fora de config.js.
 * -------------------------------------------------------
 */

function whatsappLink(mensagem) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem || CONFIG.whatsappMensagem)}`;
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach(el => (el.textContent = value));
}

function renderIdentity() {
  document.title = CONFIG.seo.titulo;
  document.querySelector('meta[name="description"]').setAttribute("content", CONFIG.seo.descricao);
  setText("[data-nome]", CONFIG.nome);
  setText("[data-slogan]", CONFIG.slogan);
  setText("[data-descricao]", CONFIG.descricao);
  setText("[data-endereco]", CONFIG.endereco);

  document.querySelectorAll("[data-whats-link]").forEach(el => (el.href = whatsappLink()));
  document.querySelectorAll("[data-instagram-link]").forEach(el => (el.href = CONFIG.instagram));
  document.querySelectorAll("[data-maps-link]").forEach(el => (el.href = CONFIG.googleMapsLink));

  setText("[data-footer-ano]", new Date().getFullYear());
}

function renderServicos() {
  const wrap = document.getElementById("servicos-list");
  wrap.innerHTML = CONFIG.servicos
    .map(
      s => `
    <div class="servico-row glass-card" data-tilt>
      <div class="servico-nome">${s.nome}</div>
      <div>
        <p class="servico-desc">${s.descricao}</p>
        <span class="servico-preco">${s.preco}</span>
      </div>
    </div>`
    )
    .join("");
}

function renderDiferenciais() {
  const wrap = document.getElementById("diferenciais-list");
  wrap.innerHTML = CONFIG.diferenciais
    .map(
      d => `
    <div class="col-md-6 mb-4">
      <div class="dif-item glass-card" data-tilt>
        <h3>${d.titulo}</h3>
        <p>${d.texto}</p>
      </div>
    </div>`
    )
    .join("");
}

const GALERIA_GRADIENTES = [
  "linear-gradient(145deg,#7C5CFF,#3E8BFF)",
  "linear-gradient(145deg,#3E8BFF,#22D3C7)",
  "linear-gradient(145deg,#22D3C7,#7C5CFF)",
];

function renderGaleria() {
  const wrap = document.getElementById("galeria-grid");
  wrap.innerHTML = CONFIG.galeria
    .map((item, i) => {
      const altura = item.alto ? 320 : 220;
      const gradiente = GALERIA_GRADIENTES[i % GALERIA_GRADIENTES.length];
      return `
      <div class="galeria-item glass-card" data-tilt>
        <div class="frame-visual" style="height:${altura}px;background:${gradiente};">${item.legenda}</div>
      </div>`;
    })
    .join("");
}

let quoteIndex = 0;
function renderAvaliacoes() {
  const textEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");
  const dotsEl = document.getElementById("quote-dots");

  function paint() {
    const q = CONFIG.avaliacoes[quoteIndex];
    textEl.textContent = `“${q.texto}”`;
    authorEl.textContent = q.autor;
    dotsEl.querySelectorAll(".quote-dot").forEach((d, i) => d.classList.toggle("is-active", i === quoteIndex));
  }

  dotsEl.innerHTML = CONFIG.avaliacoes.map((_, i) => `<span class="quote-dot" data-dot="${i}"></span>`).join("");
  dotsEl.querySelectorAll("[data-dot]").forEach(dot =>
    dot.addEventListener("click", () => {
      quoteIndex = Number(dot.dataset.dot);
      paint();
    })
  );
  paint();
}

function renderHorarios() {
  const wrap = document.getElementById("horarios-list");
  wrap.innerHTML = CONFIG.horarios.map(h => `<div class="hours-row"><span>${h.dia}</span><span class="mono">${h.horario}</span></div>`).join("");
}