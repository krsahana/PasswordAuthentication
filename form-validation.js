const form = document.getElementById('myForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let errorMessage = '';
  
  if (fullname.value.length < 5) {
    errorMessage += 'Full Name must be at least 5 characters long. ';
  }

  if (!email.value.includes('@')) {
    errorMessage += 'Email ID must contain @ character. ';
  }

  if (phone.value === '123456789' || phone.value.length !== 10) {
    errorMessage += 'Phone Number must be a 10-digit number and not equal to 123456789. ';
  }

  if (password.value.length < 8 || password.value === 'password' || password.value === fullname.value) {
    errorMessage += 'Password must be at least 8 characters long and cannot be "password" or your name. ';
  }

  if (password.value !== confirmpassword.value) {
    errorMessage += 'Password and Confirm Password do not match. ';
  }

  if (errorMessage !== '') {
    alert(errorMessage);
  } else {
    alert('Form submitted successfully!Good job!');
    form.reset();
  }
});
