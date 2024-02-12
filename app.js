//Decalaración de variables
let numeroSecreto;
let intentos;
let listaDeNumeros = [];
let maximo = 10;

//Función para asignar texto
function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;  
}

//Función para verificar la respuesta del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTexto("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTexto("p", "El número es menor");
        } else{
            asignarTexto("p", "El número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*maximo) + 1;
    if(listaDeNumeros.length == maximo){
        asignarTexto("p", "Game Over");
    } else{
        //Verificar que el número no se repita
        if(listaDeNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaDeNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexto("h1", "Juego del numero secreto");
    asignarTexto("p", `Indica un número del 1 al ${maximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Establece las condiciones iniciales para ejecutar el juego
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();