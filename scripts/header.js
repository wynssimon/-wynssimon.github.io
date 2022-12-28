function headerSlide() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.height = "60px";
      header.style.transitionDuration = "1s";
    } else {
      header.style.height = "12vh";
      header.style.transitionDuration = "1s";
    }
  });
}
