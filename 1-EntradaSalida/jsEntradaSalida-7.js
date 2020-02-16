/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
// describimos nuestras variables.
    var numero1;
    var numero2;
    var resultado;
   // damos valor  a nuestras variables. 
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);

    resultado=(numero1+numero2);
// mostramos nuestro resultado.
   alert("La suma es igual a " + resultado);
	//console.log("la suma es igual a " + resultado);
}

function restar()
{// describimos nuestras variables.
    var numero1;
    var numero2;
    var resultado;
   // damos valor  a nuestras variables. 
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);

    resultado=(numero1-numero2);
// mostramos nuestro resultado.
    alert("La resta es igual a " + resultado);
    //console.log("la resta es igual a " + resultado);
	
}

function multiplicar()
{ // describimos nuestras variables.
    var numero1;
    var numero2;
    var resultado;
   // damos valor  a nuestras variables. 
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);

    resultado=(numero1*numero2);
// mostramos nuestro resultado.
    alert("El producto es igual a " + resultado);
    	//console.log("El producto es igual a " + resultado);
}

function dividir()
{// describimos nuestras variables.
    var numero1;
    var numero2;
    var resultado;
   // damos valor  a nuestras variables. 
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);

    resultado=(numero1/numero2);
// mostramos nuestro resultado.
    alert("La division es igual a " + resultado);
    //	console.log("la division es igual a " + resultado);
}

