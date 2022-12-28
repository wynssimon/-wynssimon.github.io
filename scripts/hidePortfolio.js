function showHidePortfolio() {
  let showAllButton = document.querySelector("#showAll");
  let isButtonClicked = false;

  const hiddenImages = document.querySelectorAll(".hidden-image");

  showAllButton.addEventListener("click", () => {
    isButtonClicked = !isButtonClicked;
    hiddenImages.forEach((image) => {
      image.classList.toggle("hidden-image");
    });
    if (isButtonClicked) {
      showAllButton.innerHTML = "Hide some";
    } else {
      showAllButton.innerHTML = "Show all";
    }
  });
}
