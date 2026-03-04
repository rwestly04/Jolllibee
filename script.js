function computeTotal() {
    const price1 = 120;
    const price2 = 95;
    const price3 = 40;

    let qty1 = parseInt(document.getElementById("item1").value) || 0;
    let qty2 = parseInt(document.getElementById("item2").value) || 0;
    let qty3 = parseInt(document.getElementById("item3").value) || 0;

    let total = (qty1 * price1) + (qty2 * price2) + (qty3 * price3);

    let age = parseInt(document.getElementById("age").value) || 0;
    let discount = 0;

    if (age >= 60) {
        discount = total * 0.12;
    }

    let finalTotal = total - discount;

    document.getElementById("originalTotal").innerText = total.toFixed(2);
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);

    alert("Main Course Total: ₱" + finalTotal.toFixed(2));
}

function computeDrinks() {
    const price1 = 50;
    const price2 = 60;
    const price3 = 45;

    let qty1 = parseInt(document.getElementById("drink1").value) || 0;
    let qty2 = parseInt(document.getElementById("drink2").value) || 0;
    let qty3 = parseInt(document.getElementById("drink3").value) || 0;

    let total = (qty1 * price1) + (qty2 * price2) + (qty3 * price3);

    document.getElementById("drinkTotal").innerText = total.toFixed(2);

    alert("Drinks Total: ₱" + total.toFixed(2));
}

function computeDessert() {
    const price1 = 45;
    const price2 = 39;
    const price3 = 70;

    let qty1 = parseInt(document.getElementById("dessert1").value) || 0;
    let qty2 = parseInt(document.getElementById("dessert2").value) || 0;
    let qty3 = parseInt(document.getElementById("dessert3").value) || 0;

    let total = (qty1 * price1) + (qty2 * price2) + (qty3 * price3);

    document.getElementById("dessertTotal").innerText = total.toFixed(2);

    alert("Dessert Total: ₱" + total.toFixed(2));
}