const toggler = document.querySelector(
  ".page__content__menu__dropdown__toggle"
);
const menu = document.querySelector(".dropdown__list");
const menuButtonWedding = document.querySelector(".wedding");
const menuButtonCelebration = document.querySelector(".celebration");
const svg = document.querySelector(
  ".page__content__menu__dropdown__toggle__svg"
);
const celebZone = document.querySelector(".page__content__card__celebration");
const weddingZone = document.querySelector(".page__content__card__wedding");

menuButtonWedding.addEventListener("click", function () {
  menuButtonWedding.classList.add("active");
  menuButtonCelebration.classList.remove("active");
  weddingZone.classList.add("active");

  celebZone.classList.remove("active");
});
menuButtonCelebration.addEventListener("click", function () {
  menuButtonCelebration.classList.add("active");
  menuButtonWedding.classList.remove("active");
  celebZone.classList.add("active");
  weddingZone.classList.remove("active");
});
toggler.addEventListener("click", function () {
  menu.classList.toggle("active");
  svg.classList.toggle("active");
});
