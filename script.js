// increase decrease price
function increaseDecreaseHandler(input, price, isIncrease) {
    const Input = document.getElementById(input);
    const number = parseInt(Input.value);
    let newCount = number;
    if (isIncrease == true) {
        newCount = number + 1;
    } else if (isIncrease == false && number > 0) {
        newCount = number - 1;
    }
    Input.value = newCount;
    let totalCost = 0;
    if (input == 'phoneInput') {
        totalCost = newCount * 1219;
    } else if (input == 'coverInput') {
        totalCost = newCount * 59;
    }
    document.getElementById(price).innerText = totalCost;
    calculateSubTotal()
    calculateTotal()
}
// calculate subtotal
function calculateSubTotal() {
    const phoneInput = floatToNumber('phoneInput');
    const coverInput = floatToNumber('coverInput');
    let subtotal = phoneInput * 1219 + coverInput * 59;
    document.getElementById('subTotalPrice').innerText = subtotal;

    const tax = subtotal * 0.1;
    document.getElementById('tax').innerText = Math.round(tax);

    const total = subtotal + tax;
    document.getElementById('totalPrice').innerText = Math.round(total);
}
// converting string to number
function floatToNumber(id) {
    let input = document.getElementById(id);
    let inputNumber = parseInt(input.value);
    return inputNumber;
}
// active remove icon
let removeIcon = document.getElementsByClassName("remove-item");
for (let i = 0; i < removeIcon.length; i++) {
    const removeElement = removeIcon[i];
    removeElement.addEventListener('click', function () {
        if (removeElement == removeIcon[0]) {
            document.getElementById('phone-cart').style.display = ("none");
        } else {
            document.getElementById('case-cart').style.display = ("none");
        }
    })

}