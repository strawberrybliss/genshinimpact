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

// menu hamburguesa

document.addEventListener("DOMContentLoaded", () => {
  const abrirMenu = document.getElementById("abrir-menu");
  const cerrarMenu = document.getElementById("cerrar-menu");
  const menuResponsive = document.getElementById("menu-responsive");


  abrirMenu.addEventListener("click", () => {
    menuResponsive.classList.add("activo");
    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
  });


  cerrarMenu.addEventListener("click", () => {
    menuResponsive.classList.remove("activo");
    cerrarMenu.style.display = "none";
    abrirMenu.style.display = "block";
  });

  
  document.querySelectorAll(".menu-responsive a").forEach(link => {
    link.addEventListener("click", () => {
      menuResponsive.classList.remove("activo");
      cerrarMenu.style.display = "none";
      abrirMenu.style.display = "block";
    });
  });
});

