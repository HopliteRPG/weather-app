export { createFrontUiHtml };

const body = document.querySelector("body");
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
const pCreate = document.createElement("p");
const imageCreate = document.createElement("IMG");
const formCreate = document.createElement("form");
const inputCreate = document.createElement("input");

function createDivSection(parentDiv, className) {
  let cloneDivCreate = divCreate.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, buttonText, buttonClass) {
  let cloneButtonCreate = buttonCreate.cloneNode(true);
  cloneButtonCreate.innerText = buttonText;
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return { cloneButtonCreate };
}

function createP(div, pText, pClass) {
  let clonePCreate = pCreate.cloneNode(true);
  clonePCreate.innerText = pText;
  clonePCreate.classList.add(pClass);
  div.appendChild(clonePCreate);
}

function createImage(div, imgClass) {
  let cloneImageCreate = imageCreate.cloneNode(true);
  cloneImageCreate.classList.add(imgClass);
  cloneImageCreate.src = "#";
  div.appendChild(cloneImageCreate);
}

function createForm(parentDiv) {
  let cloneFormCreate = formCreate.cloneNode(true);
  parentDiv.appendChild(cloneFormCreate);
  return { cloneFormCreate };
}

function createInput(div, type, name, inputName) {
  let cloneInputCreate = inputCreate.cloneNode(true);
  cloneInputCreate.classList.add(name);
  div.appendChild(cloneInputCreate);
  cloneInputCreate.type = type;
  cloneInputCreate.setAttribute("name", name);
  cloneInputCreate.classList.add(inputName);
  return { cloneInputCreate };
}

function createFrontUiHtml() {
  let parentDiv = createDivSection(body, "parentDiv");

  let forecastTitleDiv = createDivSection(
    parentDiv.cloneDivCreate,
    "forecastTitleDiv",
  );

  let forecastTitle = createP(
    forecastTitleDiv.cloneDivCreate,
    "Weather Forecast",
    "forecastTitle",
  );

  let searchbarForm = createForm(parentDiv.cloneDivCreate);
  let searchbarInput = createInput(
    searchbarForm.cloneFormCreate,
    "input",
    "searchbarInput",
    "searchbarInput",
  );
  let searchButton = createButton(
    searchbarForm.cloneFormCreate,
    "Search",
    "searchButton",
  );

  let weatherDivContainer = createDivSection(
    parentDiv.cloneDivCreate,
    "weatherDivContainer",
  );

  let weatherDiv = createDivSection(
    weatherDivContainer.cloneDivCreate,
    "weatherDiv",
  );
  let placeholderP = createP(
    weatherDiv.cloneDivCreate,
    "this is a test",
    "placeholderP",
  );
}
