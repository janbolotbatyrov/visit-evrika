const boolReading = document.querySelector(".boolReading");

const fastReading = document.querySelector(".fastReading");

const boolReadingScratch = document.querySelector(".boolReadingScratch");

const manuscript = document.querySelector(".manuscript");

const english = document.querySelector(".english");

const freeSpeech = document.querySelector(".freeSpeech");

const matematika = document.querySelector(".matematika");

function showInfoBoolReading() {
  boolReading.classList.toggle("boolReading");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoBoolReading() {
  boolReading.classList.toggle("boolReading");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoFastReading() {
  fastReading.classList.toggle("fastReading");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoFastReading() {
  fastReading.classList.toggle("fastReading");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoBoolReadingScratch() {
  boolReadingScratch.classList.toggle("boolReadingScratch");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoBoolReadingScratch() {
  boolReadingScratch.classList.toggle("boolReadingScratch");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoManuscript() {
  manuscript.classList.toggle("manuscript");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoManuscript() {
  manuscript.classList.toggle("manuscript");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoEnglish() {
  english.classList.toggle("english");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoEnglish() {
  english.classList.toggle("english");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoFreeSpeech() {
  freeSpeech.classList.toggle("freeSpeech");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoFreeSpeech() {
  freeSpeech.classList.toggle("freeSpeech");
  document.querySelector("body").style.overflow = "auto";
}

function showInfoMatematika() {
  matematika.classList.toggle("matematika");
  document.querySelector("body").style.overflow = "hidden";
}

function hideInfoMatematika() {
  matematika.classList.toggle("matematika");
  document.querySelector("body").style.overflow = "auto";
}
