function mostrar()
{
//tomo el mes del año.
//tomo variable  
var mes = document.getElementById('mes').value;

//alert (mes);
    switch(mes)
    {case "Enero":
    case "Marzo":
    case "Mayo":
    case "julio":
    case "Agosto":                          
    case "Octubre":
    case "Diciembre":
            alert("Tiene 31");
            break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
             alert("Tiene 30 dias"); 
             break; 
            default:      
                    alert("Tiene 28 dias");      
    }
	
	



}//FIN DE LA FUNCIÓN