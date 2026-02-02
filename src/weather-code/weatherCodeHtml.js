export { createWeatherGrid };
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

function clearWeatherDiv() {
  const weatherDiv = document.querySelector(".weatherDiv");
  weatherDiv.innerText = "";
}

function createWeatherGrid(weatherWeek) {
  clearWeatherDiv();
  const weatherWeekForcast = weatherWeek.slice(0, 7);
  const weatherDiv = document.querySelector(".weatherDiv");
  weatherWeekForcast.forEach((day) => {
    let dayDiv = createDivSection(weatherDiv, "dayDiv");
    let dayWeatherReport = createP(
      dayDiv.cloneDivCreate,
      day.conditions,
      "dayWeatherReport",
    );
    console.log(day);
  });
}
