document.addEventListener('DOMContentLoaded', () => {
    
    var entradaTexto = document.querySelector(".form__input");
    var salidaTexto = document.createElement("textarea");
    salidaTexto.classList.add("salida-texto"); 
    var seccionTexto1 = document.querySelector(".result__title");
    var seccionTexto2 = document.querySelector(".result__text");
    var btnCopiar = document.querySelector(".form__btn--secundary.hidden");
    var btnEncriptar = document.querySelector("input[value='Encriptar']");
    var btnDesencriptar = document.querySelector("input[value='Desencriptar']");

    
    document.querySelector("main").appendChild(salidaTexto);

   
    if (entradaTexto && salidaTexto && seccionTexto1 && seccionTexto2 && btnCopiar && btnEncriptar && btnDesencriptar) {
        btnEncriptar.addEventListener('click', encriptar);
        btnDesencriptar.addEventListener('click', desencriptar);
        btnCopiar.addEventListener('click', copiar);
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM.");
    }


    function validar(textoValidar) {
        const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Á", "É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú"];
        var conteo = 0;

        for (var posicion = 0; posicion < textoValidar.length; posicion++) {
            for (var letra = 0; letra < letras.length; letra++) {
                if (textoValidar.charAt(posicion) == letras[letra]) {
                    conteo++;
                }
            }
        }
        return conteo == 0;
    }

    function encriptar(event) {
        event.preventDefault();
        var texto = entradaTexto.value;
        var salida = "";
        if (!validar(texto)) {
            alert("Texto inválido, verifique su texto.");
            return;
        }
        for (var posicion = 0; posicion < texto.length; posicion++) {
            if (texto.charAt(posicion) == "a") {
                salida += "ai";
            } else if (texto.charAt(posicion) == "e") {
                salida += "enter";
            } else if (texto.charAt(posicion) == "i") {
                salida += "imes";
            } else if (texto.charAt(posicion) == "o") {
                salida += "ober";
            } else if (texto.charAt(posicion) == "u") {
                salida += "ufat";
            } else {
                salida += texto.charAt(posicion);
            }
        }
        entradaTexto.value = "";
        salidaTexto.value = salida;
        ocultar();
    }

    function desencriptar(event) {
        event.preventDefault();
        var texto = entradaTexto.value;
        var salida = "";
        if (!validar(texto)) {
            alert("Texto inválido, verifique su texto.");
            return;
        }
        for (var posicion = 0; posicion < texto.length; posicion++) {
            if (texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i") {
                salida += "a";
                posicion++;
            } else if (texto.charAt(posicion) == "e" && texto.charAt(posicion + 1) == "n" && texto.charAt(posicion + 2) == "t" && texto.charAt(posicion + 3) == "e" && texto.charAt(posicion + 4) == "r") {
                salida += "e";
                posicion += 4;
            } else if (texto.charAt(posicion) == "i" && texto.charAt(posicion + 1) == "m" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "s") {
                salida += "i";
                posicion += 3;
            } else if (texto.charAt(posicion) == "o" && texto.charAt(posicion + 1) == "b" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "r") {
                salida += "o";
                posicion += 3;
            } else if (texto.charAt(posicion) == "u" && texto.charAt(posicion + 1) == "f" && texto.charAt(posicion + 2) == "a" && texto.charAt(posicion + 3) == "t") {
                salida += "u";
                posicion += 3;
            } else {
                salida += texto.charAt(posicion);
            }
        }
        entradaTexto.value = "";
        salidaTexto.value = salida;
        ocultar();
    }

    function ocultar() {
        salidaTexto.style.background = "white";
        seccionTexto1.style.display = "none";
        seccionTexto2.style.display = "none";
        btnCopiar.style.display = "";
    }

    function mostrar() {
        salidaTexto.style.background = "#FFF no-repeat center
