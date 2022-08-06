const cambia = document.querySelector(".cambia");
//creo la funcion llave
function crearLlave(nombre,modelo,precio){
    img = "<img class='imagen' src='./llave.png'>";
    nombre = '<h4>Nombre: <b>'+nombre+'</b></h4>';
    modelo = '<h4>Modelo: <b>'+modelo+'</b></h4>';
    precio = '<h4>Precio: <b>'+precio+'</b></h4>';
    return[nombre,modelo,precio,img];
}
//Declaro las llaves
const llave = crearLlave("Llave Rectangular","Modelo Spy",33);
const yave = crearLlave("Llave Redonda","Modelo X",40);
const pave = crearLlave("Llave Escuadra","Modelo Jason",67);
const cave = crearLlave("Llave Antigua","Modelo Kubic",20);
//desplegar llaves
function desplegar(){
    if(document.querySelector(".llave-1").checked){
        cambia.innerHTML = llave[3] + llave[0]+llave[1]+llave[2];
    }
    else if(document.querySelector(".llave-2").checked){
        cambia.innerHTML = yave[3] + yave[0]+yave[1]+yave[2];;
    }
    else if(document.querySelector(".llave-3").checked){
        cambia.innerHTML = pave[3] + pave[0]+pave[1]+pave[2];
    }
    else if(document.querySelector(".llave-4").checked){
        cambia.innerHTML = cave[3] + cave[0]+cave[1]+cave[2];
    } 
}
//completa el text
 function completar(){
    let texto = document.querySelector(".como");
    if(document.querySelector(".llave-1").checked){
        texto.value = "Llave Rectangular";
    }
    else if(document.querySelector(".llave-2").checked){
        texto.value = "Llave Redonda";
    }
    else if(document.querySelector(".llave-3").checked){
        texto.value = "Llave Escuadra";
    }
    else if(document.querySelector(".llave-4").checked){
        texto.value = "Llave Antigua";
    } 
 }

 function resolucion(){
    let texto = document.querySelector(".como");
    if (texto.value == "Llave Antigua"){
        alert("Elegiste la llave correcta");
    }
    else if (texto.value == ""){
        alert("Rellena el campo");
    }
    else{
        alert("Te equivocaste de llave y te perdiste la clase");
    }
 }

