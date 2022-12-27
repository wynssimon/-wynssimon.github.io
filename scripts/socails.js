const headerIFrame = document.querySelector('iframe[name="my-header"]');
const headerLinks = headerIFrame.contentWindow.document.querySelectorAll("a");

headerLinks.forEach((link) => {
  link.href = link.href.replace("../", "/");
});
