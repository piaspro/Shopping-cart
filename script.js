// // Common function for purse float
function floatingNumber(id) {
    const input = document.getElementById(id).value;
    const number = parseFloat(input);
    return number;
}

function floatingTextNumber(id) {
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText);
    return inputNumber;
}


// Adding iphone to the cart
const addNumber = document.getElementById('add-item');
addNumber.addEventListener('click', function addingItem() {
    document.getElementById('numberInput').value = floatingNumber('numberInput') + 1;

    document.getElementById('iphonePrice').innerText = floatingTextNumber('iphonePrice') + 1219;

    document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') + 1219;

    document.getElementById('tax').innerText = floatingTextNumber('tax') + 12;

    document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') + 1231;
})

// Removing iphone from the cart
const removeNumber = document.getElementById('remove-item');
removeNumber.addEventListener('click', function removingItem() {
    document.getElementById('numberInput').value = floatingNumber('numberInput') - 1;

    document.getElementById('iphonePrice').innerText = floatingTextNumber('iphonePrice') - 1219;

    document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') - 1219;

    document.getElementById('tax').innerText = floatingTextNumber('tax') - 12;

    document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') - 1231;
})

// Adding iphone cover to the cart
const addCover = document.getElementById('add-cover');
addCover.addEventListener('click', function addingItem() {
    document.getElementById('coverInput').value = floatingNumber('coverInput') + 1;

    document.getElementById('coverPrice').innerText = floatingTextNumber('coverPrice') + 59;

    document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') + 59;

    document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') + 59;
})


// Remove iphone cover to the cart
const removeCover = document.getElementById('remove-cover');
removeCover.addEventListener('click', function addingItem() {
    document.getElementById('coverInput').value = floatingNumber('coverInput') - 1;

    document.getElementById('coverPrice').innerText = floatingTextNumber('coverPrice') - 59;

    document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') - 59;

    document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') - 59;
})

// Removing the cart
const remove = document.getElementsByClassName('remove-item');
for (let i = 0; i < remove.length; i++) {
    const element = remove[i];
    element.addEventListener('click', function removeItem() {
        document.getElementsByClassName("cart-item")[i]
        // .style.display = "none"
        if (document.getElementsByClassName("cart-item")[i] == document.getElementsByClassName("cart-item")[0]) {
            document.getElementsByClassName("cart-item")[i].style.display = "none"

            document.getElementById('tax').innerText = floatingTextNumber('tax') - floatingTextNumber('tax');

            document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') - floatingTextNumber('iphonePrice');

            document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') - (floatingTextNumber('iphonePrice') + floatingTextNumber('tax'));
        } else if (document.getElementsByClassName("cart-item")[i] == document.getElementsByClassName("cart-item")[1]) {
            document.getElementsByClassName("cart-item")[i].style.display = "none"

            document.getElementById('subTotalPrice').innerText = floatingTextNumber('subTotalPrice') - floatingTextNumber('coverPrice');

            document.getElementById('totalPrice').innerText = floatingTextNumber('totalPrice') - floatingTextNumber('coverPrice');
        }
    })
}