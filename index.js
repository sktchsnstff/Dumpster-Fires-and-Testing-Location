let coin = document.querySelector('.coin_cost')
let parsedCoin = parseFloat(coin.innerHTML)

let clickercost = document.querySelector('.ClickerCost');
let parsedClickerCost = parseFloat(clickercost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let Pickaxecost = document.querySelector('.PickaxeCost');
let parsedPickaxeCost = parseFloat(Pickaxecost.innerHTML);
let PickaxeLevel = document.querySelector(".Pickaxe-level")
let PickaxeIncrease = document.querySelector(".Pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(PickaxeIncrease.innerHTML)

let gpc = 1;

let gps = 0;

function incrementCoin() {
    coin.innerHTML = Math.round(parsedCoin += gpc);
}

function buyClicker(){
    if (parsedCoin >= parsedClickerCost){
        coin.innerHTML = Math.round(parsedCoin -= parsedClickerCost);
        
        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.02).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.15;
        clickercost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyPickaxe(){
    if (parsedCoin >= parsedPickaxeCost){
        coin.innerHTML = Math.round(parsedCoin -= parsedPickaxeCost);
        
        PickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.01).toFixed(2))
        PickaxeIncrease.innerHTML = parsedPickaxeIncrease
        gps += parsedPickaxeIncrease

        parsedPickaxeCost *= 1.5;
        Pickaxecost.innerHTML = Math.round(parsedPickaxeCost)
    }
    setInterval(() => {
    parsedCoin += gps
    coin.innerHTML = Math.round(parsedCoin)
    }, 150)
}
