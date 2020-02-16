/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
 { // ingresar variables
     var numero1;
    var numero2;
    var resultado;
// dar valor a las variable con parseint.
numero1=parseInt(document.getElementById("numeroUno").value);
numero2=parseInt(document.getElementById("numeroDos").value);
resultado=(numero1+numero2);

// mostramos el resaultado por alert.

alert(resultado);

}

