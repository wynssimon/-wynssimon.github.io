window.onload = () => {
  portfolioslide();
  headerSlide();
  showHidePortfolio();
};
function portfolioslide() {
  const portfolioItems = document.querySelector("#portfolioItems");

  portfolioItems.style.top = "0";
  portfolioItems.style.transitionDuration = "1s";
}
