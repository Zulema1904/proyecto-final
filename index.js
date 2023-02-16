//Declaramos las variables y a que apartado se refieren en nuestro documento HTML.
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//Iniciamos todas las funciónes cuando el usuario pulse enviar.
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	forSuccessMessage();
});

function checkInputs() {
	// Utilizamos una constante para guardar lo que el usuario ha introducido.
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
        //cuando el usuario no introduzca nada le devolvemos error.
		setErrorFor(usuario, 'Rellene este campo');
	} else {
        //creamos una constante para utilizar solo el diccionario alfabetico.
		const pattern = new RegExp('^[A-Z]+$', 'i');
        if(!pattern.test(usuarioValue)){ 
            // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
            // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1).
            setErrorFor(usuario, 'Introduce únicamente caracteres alfabéticos');
            } else {
            // Si pasamos todas la validaciones anteriores, entonces el input es valido.
            setSuccessFor(usuario);
			
			
	}}	
	
	if(emailValue === '') {
        //cuando el usuario no introduzca nada le devolvemos error.
		setErrorFor(email, 'Rellene este campo');
	} else if (!isEmail(emailValue)) {
        //utilizamos la función isEmail descrita mas abajo para validarlo con expresiones regulares
        //si no coinciden, sera Error.
		setErrorFor(email, 'Email inválido');
	} else {
		setSuccessFor(email);
		
	}
	
	if(passwordValue === '') {
        //cuando el usuario no introduzca nada le devolvemos error.
		setErrorFor(password, 'Rellene este campo');
	} else {
        //añadimos una constante con un maximo de 8
        const maximo = 8;
        //comparamos la longitud de lo caracteres introducidas por el usuario
        if(passwordValue.length > maximo) {
            //lo comparamos con nuestro maximo y si es superior a 8 
            //saltara el  siguiente error:
            setErrorFor(password, 'No debe de tener más de 8 caracteres');
        } else {
            //sino, lo dara por valido.
            setSuccessFor(password);
			
        }
		
	}
	
	if(password2Value === '') {
        //cuando el usuario no introduzca nada le devolvemos error.
		setErrorFor(password2, 'Rellene este campo');
        //comparamos los dos valores, el introducido en la clave 
        // y el que el usuario acaba de introducir.
	} else if(passwordValue !== password2Value) {
        //si son distintos saldra el siguiente error:
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else {
        //si son identicos, lo dara por valido.
		setSuccessFor(password2);
		
	}
	
}
//creamos la función del mensaje de error.
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
//creamos la función de validacion correcta.
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
//creamos una constante de control.
const formControll = document.getElementsByClassName('form-control')
//creamos la función de comprovacion de los valores son correctos.
function forSuccessMessage() {
	let success = 0;
	for (i = 0; i < formControll.length; i++) {
	  let formIterate = formControll;
	  let check = formIterate[i].classList.contains('success');
	  if (check !== true) {
		success++;
		break;
	  }
	}
	if (success === 1) {
	  return 0;
	} else {
	//solo si, todos los valores son correctos enviara la alerta
	  alert('La inscripción ha salido correctamente');
	}
  }

//la función de Email con las expresiones regulares.
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





