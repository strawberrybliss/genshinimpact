// funcionalidad precios entradas

document.addEventListener("DOMContentLoaded", function() {
  const entradas = document.querySelectorAll(".entrada");

  entradas.forEach(function(entrada) {
    const priceElement = entrada.querySelector(".price");
    const countElement = entrada.querySelector(".count");
    const plusBtn = entrada.querySelector(".plus");
    const minusBtn = entrada.querySelector(".minus");
    const basePrice = parseFloat(entrada.dataset.price);

    let count = 0;

    priceElement.textContent = basePrice.toFixed(2) + "€";

    function updatePrice() {
      if (count === 0) {
        priceElement.textContent = basePrice.toFixed(2) + "€";
      } else {
        const total = basePrice * count;
        priceElement.textContent = total.toFixed(2) + "€";
      }

      countElement.textContent = count;
    }

    plusBtn.addEventListener("click", function() {
      count++;
      updatePrice();
    });

    minusBtn.addEventListener("click", function() {
      if (count > 0) {
        count--;
        updatePrice();
      }
    });
  });
});

