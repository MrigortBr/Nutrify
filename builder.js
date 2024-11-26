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

let indexSlide = 0;

function setStateContent() {
  const slides = document.getElementsByClassName("content-benefits")
  console.log(indexSlide);
  for (let index = 0; index < slides.length; index++) {
    if (index == indexSlide){
      slides[index].setAttribute("show-this", 'true')
    }else{
      slides[index].setAttribute("show-this", 'false')
    }
  }
}

function pastSlide(params) {
  const slides = document.getElementsByClassName("content-benefits")

  if (indexSlide == 0){
    indexSlide = slides.length-1;
  }else{
    indexSlide--
  }

setStateContent();
  
}

function nextSlide(params) {
  const slides = document.getElementsByClassName("content-benefits")
  if (indexSlide == slides.length-1){
    indexSlide = 0;
  }else{
    indexSlide++
  }

  setStateContent();
}

function showFalseAll() {
  const spans = document.getElementsByClassName("question-desc")
  const arrows = document.getElementsByClassName("question-arrow")


  for (const span of spans) {
    span.setAttribute("show", "false")
  }

  
  for (const arrow of arrows) {
    arrow.setAttribute("show", "false")
  }
}

function openSpan(element) {

  const showNow = element.querySelector(".question-desc").getAttribute("show")

  showFalseAll();
  
  if (showNow == "false"){
    element.querySelector(".question-desc").setAttribute("show", "true")
    element.querySelector(".question-arrow").setAttribute("show", "true")
  }
}

function openPage(url) {
  window.open(url, '_blank');
}