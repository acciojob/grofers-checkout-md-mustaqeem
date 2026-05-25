const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Prevent multiple total rows
  if (document.getElementById("ans")) {
    return;
  }

  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach(price => {

    total += Number(price.innerText);

  });

  const tr = document.createElement("tr");
  tr.id = "ans";

  const td = document.createElement("td");

  td.colSpan = 2;

  td.innerText = total;

  tr.appendChild(td);

  document.querySelector("table").appendChild(tr);

};

getSumBtn.addEventListener("click", getSum);