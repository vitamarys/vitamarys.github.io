const showBtn = document.querySelector(".mobile__showbtn");
const slideMobile = document.querySelectorAll(".show");

for (let i = 0; i < slideMobile.length; i++) {
  const sl = slideMobile[i];
  console.log(sl);
  showBtn.addEventListener("click", function () {
    sl.classList.add("active");
    showBtn.classList.add("active");
  });
}
