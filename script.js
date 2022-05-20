const selectedCoin = document.getElementById('coins');
const coinAmt = document.getElementById('number-input');

const moneyButton = document.getElementById('money-btn');
const circleDiv = document.getElementById('coins-div');
const circleObject = document.createElement('div');
moneyButton.addEventListener('click', (event) => {
    // console.log(selectedCoin.value);
    // console.log(coinAmt.value);
    for (let i = 0; i< coinAmt.value; i++){
        
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
    
        coinObject.style.cssText = 'width: 100px; height: 100px; background-color: lightgray; border-radius: 50%; text-align: center; border: 5px solid gray;';
        circleObject.setAttribute("id", "");
        circleObject.append(coinObject);
        circleDiv.append(circleObject);
    };
    
});

circleDiv.addEventListener('click', (event) => {
    circleDiv.remove();
})