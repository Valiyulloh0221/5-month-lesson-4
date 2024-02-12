// Elementlarni tanlash
const minusButton = document.getElementById("minus");
const numberButton = document.getElementById("son");
const plusButton = document.getElementById("plus");

// Sonni o'zgartirish
function changeNumber(operation) {
    let number = parseInt(numberButton.textContent);
    if (operation === '+') {
        number++;
    } else if (operation === '-') {
        number--;
    }
    numberButton.textContent = number;
}

// "+" tugmasi bosilganda
plusButton.addEventListener('click', () => {
    changeNumber('+');
});

// "-" tugmasi bosilganda
minusButton.addEventListener('click', () => {
    changeNumber('-');
});
