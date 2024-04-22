const form = document.getElementById('form');
const email = document.getElementById('mail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const errorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (email.value === '' || email.value == null) {
    messages.push('Email is required!')
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  }

  if (zip.value === '' || zip.value == null) {
    messages.push('ZIP is required!')
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  } 

  if (password.value === '' || password.value == null) {
    messages.push('Password is required!')
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  } else if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters!')
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  }

  if (passwordConfirm.value != password.value ) {
    messages.push("Passwords don't match!")
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  } else if (passwordConfirm.value === '' || passwordConfirm.value == null) {
    messages.push('Confirming password is required!')
    let input = document.querySelector('input');
    input.style.border = "2px solid #ff3860";
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join('\n ');
  }
});


