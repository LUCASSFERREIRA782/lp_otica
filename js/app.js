/**
 * app.js
 * -------------------------------------------------------
 * Ordem importa: primeiro o conteúdo (DOM precisa existir
 * antes do tilt3D poder selecionar os cards), depois os
 * comportamentos interativos.
 * -------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  renderIdentity();
  renderServicos();
  renderDiferenciais();
  renderGaleria();
  renderAvaliacoes();
  renderHorarios();

  setupTilt3D();
  setupHero3D();
});