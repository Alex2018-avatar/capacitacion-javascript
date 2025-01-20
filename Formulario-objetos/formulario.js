const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

const inputNombre = document.getElementById("nombre").value;
const inputEmail = document.getElementById("email").value;

const seleccionSexo = document.getElementsByName("sexo");
let seleccionado = null;

for (const opcionRadioButton of seleccionSexo) {
  if (opcionRadioButton.checked) {
    seleccionado = opcionRadioButton.value;
    break;
  }
}

const checkboxOption1 = document.getElementById("checkbox1");
const checkboxOption2 = document.getElementById("checkbox2");

const radiobuttonOption = document.getElementById("selectOpciones");
opcionSeleccionada = radiobuttonOption.value;

console.log("Nombre: " + inputNombre);
console.log("Email: " + inputEmail);
console.log("Sexo: " + seleccionado);
console.log(checkboxOption1.value + " : " + checkboxOption1.checked);
console.log(checkboxOption2.value + " : " + checkboxOption2.checked);
console.log("Selección desplegable: " + opcionSeleccionada);
})

