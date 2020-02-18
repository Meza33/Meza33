function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	//while(clave!="utn750")
	while (!(numero >0 && numero <= 10)){
		numero = prompt("Ingrese numero. Reingrese numero :")
	
	} 
	document.getElementById("Numero").value = numero;
	

}//FIN DE LA FUNCIÓN