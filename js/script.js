// menu hamburguesa

function openMenu() {
  console.log("Función openMenu");
  document.getElementById("menu-responsive").classList.add("activo");
  document.getElementById("abrir").style.display = "none";
}

function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById("menu-responsive").classList.remove("activo");
  document.getElementById("abrir").style.display = "block";
}

// ventana modal

function openModal() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var mensaje = document.getElementById("comment").value;

  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Mensaje", mensaje);

  document.getElementById("n").innerHTML = nombre
  document.getElementById("c").innerHTML = correo
  document.getElementById("m").innerHTML = mensaje

  document.getElementById("modal").style.display = "flex";

  return false;
}

// cerrar ventana modal

function closeModal() {
  document.getElementById("modal").style.display = "none";

  return false;
}


// precios entradas

function costeTotal() {
  var countGeneral = parseInt(document.getElementById("contargeneral").innerHTML);
  var countVIP = parseInt(document.getElementById("contarvip").innerHTML);

  var precioGeneral = 14.00;
  var precioVIP = 26.00;

  var totalGeneral = countGeneral * precioGeneral;
  var totalVIP = countVIP * precioVIP;

  document.getElementById("preciogeneral").innerHTML = parseFloat(totalGeneral).toFixed(2) + "€";

  document.getElementById("preciovip").innerHTML = parseFloat (totalVIP).toFixed(2) + "€";
}

function sumarGeneral() {
  var count = parseInt(document.getElementById("contargeneral").innerHTML);
  document.getElementById("contargeneral").innerHTML = count + 1.00;
  costeTotal();
}

function sumarVip() {
  var count = parseInt(document.getElementById("contarvip").innerHTML);
  document.getElementById("contarvip").innerHTML = count + 1.00;
  costeTotal();
}

function restarGeneral() {
  var count = parseInt(document.getElementById("contargeneral").innerHTML);
  if (count > 0) {
    document.getElementById("contargeneral").innerHTML = count - 1.00;
    costeTotal();
  }
}

function restarVip() {
  var count = parseInt(document.getElementById("contarvip").innerHTML);
  if (count > 0) {
    document.getElementById("contarvip").innerHTML = count - 1.00;
    costeTotal();
  }
}