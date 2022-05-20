const selectedCoin = document.getElementById('coins');

const moneyButton = document.getElementById('money-btn');
moneyButton.addEventListener('click', (event) => {
    console.log(selectedCoin.value);
})