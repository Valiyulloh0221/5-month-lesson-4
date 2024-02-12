const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", (event) => {
  let imgUrl = event.target.src;
  imgUrl && (show.src = imgUrl);
});