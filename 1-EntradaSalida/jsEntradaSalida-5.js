/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	// agregear variables.
    var nombre;
    var edad;
// dar valor a las variables.

nombre=document.getElementById("elNombre").value;
edad=document.getElementById("laEdad").value;

// debemos concatenar nombre - edad y mostrar.

alert("Usted se llama " + nombre + " y tiene "+ edad + " años.");

}

