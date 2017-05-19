var boton = document.getElementById("suscribirse");
boton.addEventListener("click", validateForm);

function validateForm(){
	var nombre = document.getElementById('name').value;
	var correo = document.getElementById('input-email').value;
	var direccion = document.getElementById('input-adress').value;
	var selector = document.getElementsByTagName('select');

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		alert("Debe ingresar un nombre válido");
	}
	if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo)){
		alert("Debe ingresar un correo válido");
	}
	if(direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)){
		alert("Debe ingresar dirección");
	}	
	if(selector[0].selectedIndex == 0){
		alert("Debe seleccionar una opción");
	}
	else{
		alert("Muchas gracias por suscribirte");
	}

	clear(); //resetear campos 
}

function clear(){
	document.getElementById('name').value ="";
	document.getElementById('input-email').value = "";
	document.getElementById('input-adress').value = "";
	document.getElementById('select-box').selectedIndex = 0;	
	document.getElementById('checkbox').checked = "";
}
