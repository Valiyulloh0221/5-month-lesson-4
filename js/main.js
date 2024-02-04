const hiddenCatalog = document.querySelector(".hidden__catalog");
const hiddenPart = document.querySelector(".hidden__part");
const footerPart = document.querySelector(".footer__link__bottom");



footerPart.addEventListener("click", function () {
  hiddenCatalog.classList.toggle("show-catalog");
});

hiddenPart.addEventListener("click", () => {
    hiddenCatalog.classList.toggle("show-catalog");
  });

