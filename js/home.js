/// modal content
const modalOpen = document.getElementById('btn-open');
const modalClose = document.getElementById('btn-close');
const modal = document.querySelector('.autorization');
const modalContent = document.querySelector('.autorization-content');

modalOpen.addEventListener('click', function (e) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', function (e) {
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
});

modalContent.addEventListener('click', function (e) {
  e.stopPropagation();
});

modal.addEventListener('click', function (e) {
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
});



const itemCardMain = document.querySelector(".discount__item__main");
const searchInput = document.querySelector(".search-input");
let search = "";
const productQuantity = document.querySelector(".products__quantity");
const pagination = document.querySelector(".pagination");
let activePage = 1;
const LIMIT = 4;

function getStar(rating) {
  const starImages = [
    "1star.svg",
    "2star.png",
    "2.5star.png",
    "3star.png",
    "4star.png",
    "4.5star.png",
    "5star.png",
  ];

  const starIndex = Math.round(rating) - 1;
  return `../assets/images/index/${starImages[starIndex]}`;
}

function getThisProductCard({ name, category, description, price, rating, discount, images }) {
  return `
    <div class="discount__item__card">
      <img class="discount__item__image" src="${images[0]}" alt="${name}" />
      <img class="discount__item__heart" src="../assets/images/index/homeheart/feather-icon/heart.svg" alt="image" />
      <a href=""><h6>${discount}</h6></a>
      <div class="discount__details">
        <div class="discount__payment">
          <div class="discount__payment__right">
            <h2>${price}</h2>
            <p>${category}</p>
          </div>
          <div class="discount__payment__left">
            <h3>${price}</h3>
            <p>${category}</p>
          </div>
        </div>
        <p class="description">${name}</p>
        <h4>${description}</h4>
        <img class="starimage" src="${getStar(rating)}" alt="star image" />
        <a href="#">В корзину</a>
      </div>
    </div>
  `;
}

let discountedProducts = products.filter((el) => el.discount).slice(-4);

discountedProducts.forEach((el) => {
  itemCardMain.innerHTML += getThisProductCard(el);
});

function getProducts() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(search));
  let pages = Math.ceil(results.length / LIMIT);

  if (pages < 1) {
    pagination.innerHTML = `<li class="page-item"><button onclick="getPage('-')" class="page-link"><img src="../assets/images/index/left.svg" alt=""></button></li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${i === activePage ? "active" : ""}"><button class="page-link" onclick="getPage(${i})">${i}</button></li>`;
    }

    pagination.innerHTML += `<li class="page-item"><button onclick="getPage('+')" class="page-link page-next"><img src="../assets/images/index/right.svg" alt=""></button></li>`;
  }

  itemCardMain.innerHTML = "";

  let startProduct = activePage * LIMIT;
  let endProduct = (activePage - 1) * LIMIT;

  results.slice(endProduct, startProduct).forEach((product) => {
    let card = getThisProductCard(product);
    itemCardMain.innerHTML += card;
  });


}

getProducts();

searchInput.addEventListener("keyup" , function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = 1;
  }
  getProducts();
}
