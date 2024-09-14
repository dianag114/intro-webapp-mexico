// Obtener los elementos del DOM
const sliderVerde = document.getElementById("sliderVerde");
const sliderRojo = document.getElementById("sliderRojo");
const valorVerdeText = document.getElementById("valorVerde");
const valorRojoText = document.getElementById("valorRojo");

const greenBand = document.querySelector(".green");
const redBand = document.querySelector(".red");

// Funciones para convertir a hexadecimal
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Función para actualizar el color verde
function actualizarColorVerde() {
    const intensidadVerde = sliderVerde.value;
    const colorVerdeHex = rgbToHex(0, intensidadVerde, 71);
    valorVerdeText.textContent = colorVerdeHex;
    greenBand.style.backgroundColor = `rgb(0, ${intensidadVerde}, 71)`;
}

// Función para actualizar el color rojo
function actualizarColorRojo() {
    const intensidadRojo = sliderRojo.value;
    const colorRojoHex = rgbToHex(intensidadRojo, 17, 38);
    valorRojoText.textContent = colorRojoHex;
    redBand.style.backgroundColor = `rgb(${intensidadRojo}, 17, 38)`;
}

// Escuchar eventos de los sliders
sliderVerde.addEventListener("input", actualizarColorVerde);
sliderRojo.addEventListener("input", actualizarColorRojo);
