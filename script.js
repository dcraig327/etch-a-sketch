let gridSize = 16;

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

function createGrid(gridSize = 16) {
  const gridWidth = 800;
  const squareWidth = gridWidth / gridSize;

  let numSquares = gridSize * gridSize;
  let grid = createElement("div", "grid");
  grid.setAttribute("style", `width:${gridWidth}px; height: ${gridWidth}px`);
  for (let i = 1; i <= numSquares; i++) {
    let square = createElement("div", "square");
    square.setAttribute(
      "style",
      `width:${squareWidth}px; height: ${squareWidth}px`
    );
    square.classList.add(`square-${i}`);
    square.addEventListener("mouseover", applyHover, {
      capture: true,
      once: true,
    });
    grid.appendChild(square);
  }
  document.body.appendChild(grid);
}

function createHead() {
  setTitle("Etch-A-Sketch");
  addCssFile("style.css");
}

function clearGrid() {
  let grid = document.querySelector(".grid");
  grid.remove();
}

function buttonReset(e) {
  //  let gridSize = prompt("What is the Grid Size?");
  //  createGrid(gridSize);
  clearGrid();
  createGrid(gridSize);
}
function buttonResize(e) {
  do {
    gridSize = prompt("What is the Grid Size (16-100)?");
  } while (gridSize < 16 || gridSize > 100);
  buttonReset(e);
}

function createResetButton() {
  let btn = createElement("button", "button-reset", "Reset");
  btn.addEventListener("click", buttonReset);
  let container = document.querySelector(".button-container");
  container.appendChild(btn);
}
function createResizeButton() {
  let btn = createElement("button", "button-resize", "Resize");
  btn.addEventListener("click", buttonResize);
  let container = document.querySelector(".button-container");
  container.appendChild(btn);
}
function createButtonContainer() {
  let container = createElement("div", "button-container");
  document.body.appendChild(container);
}
function createButtons() {
  createButtonContainer();
  createResetButton();
  createResizeButton();
}

function createBody() {
  removeBodyContent();
  createButtons();
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
