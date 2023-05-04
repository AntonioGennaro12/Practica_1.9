const cuerpo  = document.querySelector ("body");
const titulo1 = document.querySelector ("h1");
const titulo2 = document.querySelector ("h2");
const titulo3 = document.querySelector ("h3");
const titulo4 = document.querySelector ("h4");
const miBoton = document.querySelector ("#mi-bot")

titulo1.textContent = "TITULO 1";
titulo2.textContent = "TITULO 2";
titulo3.textContent = "TITULO 3";
titulo4.textContent = "TITULO 4";

miBoton.style.fontSize = "24px";
var cont = 0;

function cambiaAspecto(){
    cont ++;
    if ((cont % 4)==1){
        cuerpo.style.color = "black";
        cuerpo.style.fontFamily = "Arial";
        cuerpo.style.fontSize= "35px";
        cuerpo.style.backgroundColor = "white";
        titulo4.textContent = "TITULO 4 - ciclo:" +cont;
    }
    else if ((cont % 4)==2){
        cuerpo.style.color = "violet";
        cuerpo.style.fontFamily = "lucida";
        cuerpo.style.fontSize= "18px";
        cuerpo.style.backgroundColor = "grey";
        titulo4.textContent = "TITULO 4 - ciclo:" +cont;
    }
    else if ((cont % 4)==3){
        cuerpo.style.color = "green";
        cuerpo.style.fontFamily = "courier";
        cuerpo.style.fontSize= "28px";
        cuerpo.style.backgroundColor = "orange";
        titulo4.textContent = "TITULO 4 - ciclo:" +cont;
    }
    else {
        cuerpo.style.color = "white";
        cuerpo.style.fontFamily = "courrier-new";
        cuerpo.style.fontSize= "12px";
        cuerpo.style.backgroundColor = "black";
        titulo4.textContent = "TITULO 4 << Además de los colores, parece ser lo único que cambia >>";

    }


}