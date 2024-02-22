document.getElementById("add").addEventListener("click", function () {
  let food = document.getElementById("calc-food").value;
  let price = parseFloat(document.getElementById("calc-price").value);
  let quantity = parseInt(document.getElementById("calc-quantity").value);

  if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
    let totalCost = price * quantity;
    let pricePerPiece = totalCost / quantity;

    let listItem = document.createElement("li");
    listItem.textContent = `${food}: Total $${totalCost.toFixed(
      2
    )}, $${pricePerPiece.toFixed(2)} per piece (Quantity: ${quantity})`;

    document.getElementById("calc-price-list").appendChild(listItem);

    document.getElementById("calc-food").value = "";
    document.getElementById("calc-price").value = "";
    document.getElementById("calc-quantity").value = "";
  } else {
    alert("Please enter valid price and quantity.");
  }
});

document.getElementById("calculate").addEventListener("click", function () {
  let total = 0;
  let items = document.querySelectorAll("#calc-price-list li");
  items.forEach(function (item) {
    let itemPrice = parseFloat(item.textContent.split("$")[1]);
    if (!isNaN(itemPrice)) {
      total += itemPrice;
    }
  });

  document.getElementById("calc-result").textContent = `Total: $${total.toFixed(
    2
  )}`;

  document.getElementById(
    "receipt-result"
  ).textContent = `Total: $${total.toFixed(2)}`;
  document.getElementById("receipt-price-list").innerHTML = "";
  items.forEach(function (item) {
    let clonedItem = item.cloneNode(true);
    document.getElementById("receipt-price-list").appendChild(clonedItem);
  });
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("calc-price-list").innerHTML = "";
  document.getElementById("calc-result").textContent = "";

  document.getElementById("receipt-price-list").innerHTML = "";
  document.getElementById("receipt-result").textContent = "";
});
