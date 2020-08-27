window.onload = function () {
  const btn = document.querySelector(".menu-toggle__wrapper");
  const line1 = document.querySelector(".menu-toggle__line_1");
  const line2 = document.querySelector(".menu-toggle__line_2");
  const line3 = document.querySelector(".menu-toggle__line_3");
  const menu = document.querySelector(".mobile__menu");
  const link = document.querySelector(".menu__link");
  const body = document.querySelector("body");
  btn.onclick = function () {
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    menu.classList.toggle("active");
    link.classList.add("active");
    body.classList.toggle("no-scroll");
  };
};
