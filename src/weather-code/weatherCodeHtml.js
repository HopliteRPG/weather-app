export { createWeatherGrid };
import { format, parseISO } from "date-fns";
import snowIcon from "../photos/snow.svg";
import rainIcon from "../photos/rain.svg";
import fogIcon from "../photos/fog.svg";
import windIcon from "../photos/wind.svg";
import cloudyIcon from "../photos/cloudy.svg";
import partlyCloudyDay from "../photos/partly-cloudy-day.svg";
import partlyCloudyNight from "../photos/partly-cloudy-night.svg";
import clearDay from "../photos/clear-day.svg";
import clearNight from "../photos/clear-night.svg";

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
  return { cloneImageCreate };
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

function clearWeatherDivContainer() {
  const weatherDivContainer = document.querySelector(".weatherDivContainer");
  weatherDivContainer.innerText = "";
}

function createWeatherGrid(weatherWeek) {
  clearWeatherDivContainer();
  const weatherDivContainer = document.querySelector(".weatherDivContainer");
  console.log(weatherDivContainer);
  const weatherDiv = createDivSection(weatherDivContainer, "weatherDiv");
  const weatherWeekForcast = weatherWeek.slice(0, 7);
  weatherWeekForcast.forEach((day) => {
    let dayDiv = createDivSection(weatherDiv.cloneDivCreate, "dayDiv");
    let dayTemp = createP(dayDiv.cloneDivCreate, day.temp, "dayTemp");
    let dayIcon = createImage(dayDiv.cloneDivCreate, "dayIcon");
    console.log(dayIcon);
    switch (day.icon) {
      case "snow":
        dayIcon.cloneImageCreate.src = snowIcon;
        break;
      case "rain":
        dayIcon.cloneImageCreate.src = rainIcon;
        break;
      case "fog":
        dayIcon.cloneImageCreate.src = fogIcon;
        break;
      case "wind":
        dayIcon.cloneImageCreate.src = windIcon;
        break;
      case "cloudy":
        dayIcon.cloneImageCreate.src = cloudyIcon;
        break;
      case "partly-cloudy-day":
        dayIcon.cloneImageCreate.src = partlyCloudyDay;
        break;
      case "partly-cloudy-night":
        dayIcon.cloneImageCreate.src = partlyCloudyNight;
        break;
      case "clear-day":
        dayIcon.cloneImageCreate.src = clearDay;
        break;
      case "clear-night":
        dayIcon.cloneImageCreate.src = clearNight;
        break;
    }

    let minAndMaxDivContainer = createDivSection(
      dayDiv.cloneDivCreate,
      "minAndMaxDiv",
    );

    let minTempDiv = createDivSection(
      minAndMaxDivContainer.cloneDivCreate,
      "minTempDiv",
    );

    let minTempLabel = createP(
      minTempDiv.cloneDivCreate,
      "Min:",
      "minTempLabel",
    );

    let minTemp = createP(minTempDiv.cloneDivCreate, day.tempmin, "minTemp");

    let maxTempDiv = createDivSection(
      minAndMaxDivContainer.cloneDivCreate,
      "maxTempDiv",
    );

    let maxTempLabel = createP(
      maxTempDiv.cloneDivCreate,
      "Max:",
      "maxTempLabel",
    );

    let maxTemp = createP(maxTempDiv.cloneDivCreate, day.tempmax, "maxTemp");
    let date = day.datetime;
    console.log(date);

    let dateP = createP(
      dayDiv.cloneDivCreate,
      format(parseISO(date), "EEEE, MM/dd/yyyy"),
      "dateP",
    );

    let dayWeatherReport = createP(
      dayDiv.cloneDivCreate,
      day.conditions,
      "dayWeatherReport",
    );
    console.log(day);
  });
}
