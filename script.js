
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
        totalCost =  newCount * 1219;
    } else if (input == 'coverInput'){
        totalCost =  newCount * 59;
    }
    document.getElementById(price).innerText = totalCost;
    calculateSubTotal()
    calculateTotal()
    }
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
    function floatToNumber(id) {
        let input = document.getElementById(id);
        let inputNumber = parseInt(input.value);
        return inputNumber;
    }