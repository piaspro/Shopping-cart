// Adding item to the cart
const addNumber = document.getElementById('add-item');
addNumber.addEventListener('click', function addingItem() {
    const input = document.getElementById('numberInput').value;
    const number = parseFloat(input);
    document.getElementById('numberInput').value = number + 1;

    const current = document.getElementById('iphonePrice').innerText;
    const currentAmount = parseFloat(current);
    document.getElementById('iphonePrice').innerText = currentAmount + 1219;

    const present = document.getElementById('subTotalPrice').innerText;
    const presentAmount = parseFloat(present);
    document.getElementById('subTotalPrice').innerText = presentAmount + 1219;

    const presentTax = document.getElementById('tax').innerText;
    const totalTax = parseFloat(presentTax);
    document.getElementById('tax').innerText = totalTax + 12;

    const amount = document.getElementById('totalPrice').innerText;
    const totalAmount = parseFloat(amount);
    document.getElementById('totalPrice').innerText = totalAmount + 1231;
})

// Removing item from the cart
const removeNumber = document.getElementById('remove-item');
removeNumber.addEventListener('click', function removingItem() {
    const input = document.getElementById('numberInput').value;
    const number = parseFloat(input);
    document.getElementById('numberInput').value = number - 1;

    const current = document.getElementById('iphonePrice').innerText;
    const currentAmount = parseFloat(current);
    document.getElementById('iphonePrice').innerText = currentAmount - 1219;

    const present = document.getElementById('subTotalPrice').innerText;
    const presentAmount = parseFloat(present);
    document.getElementById('subTotalPrice').innerText = presentAmount - 1219;

    const presentTax = document.getElementById('tax').innerText;
    const totalTax = parseFloat(presentTax);
    document.getElementById('tax').innerText = totalTax - 12;

    const amount = document.getElementById('totalPrice').innerText;
    const totalAmount = parseFloat(amount);
    document.getElementById('totalPrice').innerText = totalAmount - 1231;
})