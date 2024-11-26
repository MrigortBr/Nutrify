let page = 1;

window.addEventListener("resize", () => {sendToPage()})


document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    if(page < 4) page++;
    sendToPage()
  } else {
    if(page > 1) page--;
    sendToPage()
  }
});

function sendToPage(){
  
  switch (page) {
    case 1:
      showIndex();
      
      break;
    case 2: 
      showFunc()
      
      break;
    case 3: 
      showFaq()
      
      break;
    case 4: 
      showTeam()
    
      break;
  }
}

function noSelectedALL(params) {
  const li = document.getElementsByTagName("li");

  for (const element of li) {
    element.setAttribute("selected", 'false')
  }
}


function showIndex() {
  document.getElementById("index").scrollIntoView({ behavior: "smooth" });
  document.getElementById("logo").setAttribute('attr-show-image', '0')
  noSelectedALL()
  page= 1
  hiddenUp();
}

function showFunc() {
  document.getElementById("func").scrollIntoView({ behavior: "smooth" });
  document.getElementById("logo").setAttribute('attr-show-image', '1')
  noSelectedALL();
  document.getElementById("li-func").setAttribute("selected", 'true')
  page = 2
  setUp()
}


function showFaq() {
  document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  document.getElementById("logo").setAttribute('attr-show-image', '1')
  noSelectedALL()
  document.getElementById("li-faq").setAttribute("selected", 'true')
  page = 3
  setUp()
}


function showTeam() {
  document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  document.getElementById("logo").setAttribute('attr-show-image', '1')
  noSelectedALL()
  document.getElementById("li-team").setAttribute("selected", 'true')
  page = 4
  setUp()
}

function setUp(params) {
  document.getElementById("up").setAttribute("showUp", "true")
}

function hiddenUp(params) {
  document.getElementById("up").setAttribute("showUp", "false")
}
