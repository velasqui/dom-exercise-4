const selectedCoin = document.getElementById('coins');

const moneyButton = document.getElementById('money-btn');
moneyButton.addEventListener('click', (event) => {
    // console.log(selectedCoin.value);
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
    coinObject.style.cssText = 'width: 100px; height: 100px; background-color: lightgray; list-style: none; border-radius: 50%; text-align: center;';
    const circleObject = document.createElement('div');
    const circleDiv = document.getElementById('coins-div');
    circleObject.append(coinObject);
    circleDiv.append(circleObject);

})