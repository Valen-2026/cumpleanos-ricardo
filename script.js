/* ==========================================
   LLUVIA DE CÓDIGO: SOLO 1 Y 0
========================================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let ancho;
let alto;

function ajustarCanvas() {

    ancho = canvas.width = window.innerWidth;
    alto = canvas.height = window.innerHeight;

}

ajustarCanvas();

const tamaño = 17;

let columnas = Math.floor(ancho / tamaño);
let gotas = [];

for (let i = 0; i < columnas; i++) {
    gotas[i] = Math.random() * alto;
}


function lluvia() {

    ctx.fillStyle = "rgba(0, 4, 11, 0.10)";

    ctx.fillRect(
        0,
        0,
        ancho,
        alto
    );

    ctx.font = tamaño + "px monospace";

    for (let i = 0; i < columnas; i++) {

        const numero =
            Math.random() < 0.5
                ? "0"
                : "1";

        ctx.fillStyle = "#008cff";

        ctx.shadowColor = "#0066ff";
        ctx.shadowBlur = 6;

        ctx.fillText(
            numero,
            i * tamaño,
            gotas[i]
        );

        gotas[i] += tamaño;

        if (gotas[i] > alto) {

            gotas[i] = 0;

        }

    }

    ctx.shadowBlur = 0;

    requestAnimationFrame(lluvia);
}

lluvia();


/* ==========================================
   AJUSTAR AL CAMBIAR TAMAÑO
========================================== */

window.addEventListener("resize", () => {

    ajustarCanvas();

    columnas = Math.floor(ancho / tamaño);

    gotas = [];

    for (let i = 0; i < columnas; i++) {

        gotas[i] = Math.random() * alto;

    }

});


/* ==========================================
   CAMBIAR DE PANTALLA
========================================== */

function mostrarPantalla(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });

    const pantalla =
        document.getElementById(id);

    if (pantalla) {

        pantalla.classList.add("activa");

    }

}


/* ==========================================
   CUENTA REGRESIVA
========================================== */

let cuenta = 3;

const contador =
    document.getElementById("contador");


const intervalo =
    setInterval(() => {

        cuenta--;

        if (cuenta > 0) {

            contador.textContent = cuenta;

        } else {

            clearInterval(intervalo);

            mostrarPantalla("birthday");

        }

    }, 1000);


/* ==========================================
   ABRIR CARTA
========================================== */

document
    .getElementById("abrirCarta")
    .addEventListener("click", () => {

        mostrarPantalla("cartaPantalla");

    });


/* ==========================================
   UNA SOLA FOTO
========================================== */

document
    .getElementById("verFotos")
    .addEventListener("click", () => {

        mostrarPantalla("galeria");

    });