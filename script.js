const selectedCoin = document.getElementById('coins');

const moneyButton = document.getElementById('money-btn');
moneyButton.addEventListener('click', (event) => {
    console.log(selectedCoin.value);
    const coinObject = document.createElement('div');
    if (selectedCoin.value === 'Penny') {
        coinObject.innerText = 'Penny';
    } else if (selectedCoin.value === 'Nickel') {
        coinObject.innerText = 'Nickel';
    } else if (selectedCoin.value === 'Dime') {
        coinObject.innerText = 'Dime';
    } else {
        coinObject.innerText = 'Quarter';
    };
})