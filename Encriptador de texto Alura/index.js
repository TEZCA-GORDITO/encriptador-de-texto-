function encriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let lacositas = document.getElementById("lacositas");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        texto=textoCifrado;
        tituloMensaje.textContent="Texto encriptado con exito";
        parrafo.textContent="";
        lacositas.src="./img/encriptado.jpg"
        else{
        lacositas.src="./img/lacositas.jpg"
        alert("debes ingresar un texto")  
        }
    }
}