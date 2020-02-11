/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    resultadoSuma = (precioUno + precioDos + precioTres);

    alert(resultadoSuma);

}
function Promedio () 
{var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var resultadoPromedio;
    
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    resultadoSuma = (precioUno + precioDos + precioTres);
    resultadoPromedio = (resultadoSuma/3);


    alert(resultadoPromedio);
	
}
function PrecioFinal () 
{ var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var precioFinal;

    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    resultadoSuma = (precioUno + precioDos + precioTres);
    precioFinal= (resultadoSuma*21/100 + resultadoSuma);
    
    alert(precioFinal);
	
}