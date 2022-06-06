var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("glass");
  } else {
    nav.classList.remove("glass");
  }
});
