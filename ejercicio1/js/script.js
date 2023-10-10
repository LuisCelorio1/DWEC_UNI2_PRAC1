
/*function separarPalabras(texto, separador){

    return texto.split(separador);
}

function girarPalabras(texto){

     return texto.split('').reverse().join('');
}

while(true){

    const texto1 = prompt("Escribe una frase");

    if (texto1=== "ESC" || texto1 === "esc"){

        break;
    }   else {

        const texto = texto1;
        console.log("texto: "+ texto);

        const reverso = texto.reverse();
        console.log("reverso: "+reverso);

        console.log("texto: "+texto);
    
        
  }

}*/
function separarPalabras(texto, separador){

    return texto.split(separador);
}

function girarPalabras(texto){
    return texto.split("").reverse().join("");
}

while(true){

    const texto1 = prompt("Escribe una frase");

    if (texto1=== "ESC" || texto1 === "esc"){

        break;
    }   else {

        const separar = separarPalabras(texto1);
        console.log(separar);
        const alreves = girarPalabras(texto1);
        console.log(texto1);
        console.log(alreves);
    }

   
}




