// Obtén el elemento del navbar por su ID
var navbar = document.getElementById("navbar");
var search = document.getElementById("search");

// Agrega un evento para cambiar la opacidad al pasar el cursor por encima
navbar.addEventListener("mouseover", function() {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Hacer el navbar completamente visible
});

navbar.addEventListener("mouseout", function() {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Restaurar la opacidad al 70%
});

search.addEventListener("mouseover", function() {
    search.style.backgroundColor = "rgba(255, 255, 255, 1)"; 
});

search.addEventListener("mouseout", function() {
    search.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Restaurar la opacidad al 70%
});

document.getElementById("Cotiza_tu_seguro").addEventListener("change", function () {
  var selectedOption = this.value;
  var valorSeguroElement = document.getElementById("valorSeguro");
  var valorSeguro;

  switch (selectedOption) {
    case "Básico":
      valorSeguro = "$500";
      break;
    case "Intermedio":
      valorSeguro = "$1000";
      break;
    case "Premium":
      valorSeguro = "$1500";
      break;
    default:
      valorSeguro = "No se ha seleccionado un tipo de seguro.";
  }

  valorSeguroElement.textContent = "Valor del seguro: " + valorSeguro;
});
