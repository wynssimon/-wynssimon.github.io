const expandableImages = document.querySelectorAll(".expandable");
const overlay = document.querySelector("#overlay");
const expandedImage = document.querySelector("#expanded-image");
const closeButton = document.querySelector("#close-button");

expandableImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.stopPropagation();
    expandedImage.src = image.src;
    overlay.classList.remove("hidden");
  });
});

closeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  overlay.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  if (event.target === overlay) {
    return;
  }

  overlay.classList.add("hidden");
});
