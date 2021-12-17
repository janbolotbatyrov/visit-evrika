const infoBoolReading = document.querySelector("#info-boolReading");
const boolReading = document.querySelector(".boolReading");

function showInfoBoolReading() {
  boolReading.classList.toggle("boolReading");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoBoolReading() {
  boolReading.classList.toggle("boolReading");
  document.querySelector("body").style.overflow = "auto";
}
