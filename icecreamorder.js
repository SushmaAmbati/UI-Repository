function calculateOrder() {

    var flavor = document.getElementById('flavor').value;
    var radioButtons = document.getElementsByName('rbtn');
    var size, price, isSalted, isSugarFree;
    var quantity = document.getElementById('quantity').value;
    var toppings = document.getElementsByName('toppings')

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            size = radioButtons[i].value;
            break;
        }
    }


    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            if (i == 0)
                isSalted = true;
            if (i == 1)
                isSugarFree = true;
        }
    }
    const priceChart = {
        small: 6.00,
        medium: 9.00,
        large: 11.00,
        chocolate: 1.00,
        mintchocolatechip: 1.25,
        strawberry: 1.50,
        vanilla: 1.50,
        salted: 0.50,
        sugarfree: 0.70


    };

    const map = new Map(Object.entries(priceChart));
    if (flavor && size && quantity) {

        price = quantity * (map.get(flavor) + map.get(size));
        if (isSalted)
            price = price + map.get("salted");
        if (isSugarFree)
            price = price + map.get("sugarfree");
    }
    if (price) {
        document.getElementById('submit').style.color = '#FFFF00';
        document.getElementById('submit').style.backgroundColor = '#f44336';
        if (isSalted) {

            document.getElementById('priceResult').innerText = "The total cost for " + quantity + " " + size + " " + flavor + " salted caramel icecream/s is $ " + price.toFixed(2);
            document.getElementById('timeResult').innerText = "Your order of " + quantity + " " + size + " " + flavor + " salted caramel icecream/s will be delivered in about "
                + (Math.floor(Math.random() * (45 - 25 + 1)) + 25) + " minutes"
        }
        if (isSugarFree) {
            document.getElementById('priceResult').innerText = "The total cost for " + quantity + " " + size + " " + flavor + " sugar free strawberry icecream/s is $ " + price.toFixed(2);
            document.getElementById('timeResult').innerText = "Your order of " + quantity + " " + size + " " + flavor + " sugar free strawberry icecream/s will be delivered in about "
                + (Math.floor(Math.random() * (45 - 25 + 1)) + 25) + " minutes"
        }

        else {
            document.getElementById('priceResult').innerText = "The total cost for " + quantity + " " + size + " " + flavor + " icecream/s is $ " + price.toFixed(2);
            document.getElementById('timeResult').innerText = "Your order of " + quantity + " " + size + " " + flavor + " icecream/s will be delivered in about "
                + (Math.floor(Math.random() * (45 - 25 + 1)) + 25) + " minutes"

        }
        if (flavor == "chocolate") {

            document.getElementById('imgDiv').innerHTML = '<img src="choco1.jpg">'
        }
        else if (flavor == "mintchocolatechip") {
            document.getElementById('imgDiv').innerHTML = '<img src="mintchoco.jpg">'

        }
        else if (flavor == "strawberry") {
            document.getElementById('imgDiv').innerHTML = '<img src="strawberry.jpg">'
        }
        else if (flavor == "vanilla") {
            document.getElementById('imgDiv').innerHTML = '<img src="vanilla.jpg">'
        }
    }

}

function enableSubmit() {
    var ins = document.getElementsByTagName("INPUT");
    var txs = document.getElementsByTagName("SELECT");
    var pass = true;
    for (var j = 0; j < txs.length; j++) {
        if (txs[j].value == "")
            pass = false;
    }
    ;
    for (var j = 0; j < ins.length; j++) {
        if (ins[j].type == "checkbox")
            continue;
        if (ins[j].value == "")
            pass = false;
    }
    ;
    if (pass)
        document.getElementById('submit').disabled = false;
    else
        document.getElementById('submit').disabled = true;

};