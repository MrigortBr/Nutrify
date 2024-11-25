document.addEventListener("DOMContentLoaded", () => {resizeWave(document.getElementsByTagName("main")[0].clientHeight)})
window.addEventListener("resize", () => {resizeWave(document.getElementsByTagName("main")[0].clientHeight)})

function resizeWave(newHeight) {
  const svg = document.querySelector('#wave');
  
  if (!svg) {
    console.error("SVG not found!");
    return;
  }

  // Dimensões originais do SVG
  const originalWidth = 2208;
  const originalHeight = 2160;

  // Calcula a nova largura proporcional ao novo height
  const newWidth = (newHeight / originalHeight) * originalWidth;

  // Define os novos atributos de largura e altura no SVG
  svg.setAttribute('width', newWidth);
  svg.setAttribute('height', newHeight);
}

