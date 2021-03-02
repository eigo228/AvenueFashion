$(document).ready(function() {
	
	const form = document.getElementById('login');

	const texts = form.querySelector('[type="email"]');
	const pass = form.querySelector('[type="password"]');
	texts.oninput = evt => validateText(texts);
	pass.oninput = evt => validatePass(pass);



	const regForm = document.getElementById('register');

	const email = regForm.querySelector('[type="email"]');
	const passwd = regForm.querySelectorAll('[type="password"]');
	email.oninput = evt => validateText(email);
	passwd.forEach(text => {
		text.oninput = evt => validatePass(text);
	})

	function validateText(el) {
		if(el.value.length > 6 && el.value.indexOf('@') > -1 && !el.value.endsWith('@')) {  // Check if el is greater than 6, contains the '@' and doesnt ends with '@'
			el.dataset.isValid = true;
			el.classList.remove('invalid');
			el.classList.add('valid')
		} else {
			el.dataset.isValid = false;
			el.classList.remove('valid');
			el.classList.add('invalid')
		}
	}
	function validatePass(el) {
		if(el.value.length > 5) {
			el.dataset.isValid = true;
			el.classList.remove('invalid');
			el.classList.add('valid')
		} else {
			el.dataset.isValid = false;
			el.classList.remove('valid');
			el.classList.add('invalid')
		}
	}
})