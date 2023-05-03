let preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

const toggleBacktotop = () => {
  if (window.scrollY > 100) {
    backtotop.classList.add("active");
  } else {
    backtotop.classList.remove("active");
  }
};
let backtotop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  let header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY > 80);

  toggleBacktotop();
});
