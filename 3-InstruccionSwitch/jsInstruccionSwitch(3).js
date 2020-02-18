function mostrar()
{
//tomo variable  
var mes = document.getElementById('mes').value;

//alert (mes);
    switch(mes)
    {case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "julio":
    case "Agosto":
    case "Septiembre":                          
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
            alert("Este mes tiene 30 o mas dias ");
            break;
            default:      
                    alert("Este mes no tiene mas de 29 dias");      
    }
	


}//FIN DE LA FUNCIÓN