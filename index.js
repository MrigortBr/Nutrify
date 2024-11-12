document.addEventListener("wheel", (event) => {

  const scrollAmount = document.getElementsByTagName("main")[0].clientHeight; // Quantidade de pixels para rolar
  if (event.deltaY > 0) {
      // Rola para baixo
      window.scrollBy({
          top: scrollAmount,
          behavior: "smooth",
      });
  } else {
      // Rola para cima
      window.scrollBy({
          top: -scrollAmount,
          behavior: "smooth",
      });
  }
});


document.addEventListener("DOMContentLoaded", () => {resizeWave()})
window.addEventListener("resize", () => {resizeWave()});

function resizeWave() {
  const widthWindow = (document.getElementsByTagName("main")[0].clientWidth) * 0.4;
  const heightWindow = (document.getElementsByTagName("main")[0].clientHeight * 2);
  const svg = document.getElementById("wave");
  svg.setAttribute('width', widthWindow)
  svg.setAttribute('height', heightWindow)
}

