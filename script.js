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
