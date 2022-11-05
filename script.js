// create 16x16 grid

function removeBodyContent() {
  document.body.innerHTML = "";
}

function setTitle(title) {
  document.title = title;
}

function addCssFile(fileName) {
  let head = document.head;
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = fileName;
  head.appendChild(link);
}

function createElement(elementName, className = "", text = "") {
  const element = document.createElement(elementName);
  if (className != "") element.classList.add(className);
  if (text != "") element.textContent = text;
  return element;
}

function applyHover(e) {
  this.classList.add("hover");
}

function createGrid() {
  let grid = createElement("div", "grid");
  for (let i = 1; i <= 16; i++) {
    let row = createElement("div", "grid-row");
    row.classList.add(`grid-row-${i}`);
    for (let j = 1; j <= 16; j++) {
      let square = createElement("div", "square");
      square.classList.add(`square-${i}-${j}`);
      square.addEventListener("mouseover", applyHover, {
        capture: true,
        once: true,
      });
      row.appendChild(square);
    }
    grid.appendChild(row);
  }

  document.body.appendChild(grid);
}

function createHead() {
  setTitle("Etch-A-Sketch");
  addCssFile("style.css");
}

function createBody() {
  removeBodyContent();
  createGrid();
}

function createPage() {
  createHead();
  createBody();
}

/******************************************************************************/
function main() {
  createPage();
}

/******************************************************************************/
main();
