const loginForm = document.querySelector('.login-form');



loginForm.addEventListener('submit', event => {
    event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  event.currentTarget.reset();
});