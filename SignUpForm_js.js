function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById('usernameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  document.getElementById('confirmPasswordError').innerText = '';

  // Get values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Username
  if (username === '') {
    document.getElementById('usernameError').innerText = 'Username is required';
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').innerText = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerText = 'Invalid email format';
    isValid = false;
  }

  // Password
  if (password === '') {
    document.getElementById('passwordError').innerText = 'Password is required';
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
    isValid = false;
  }

  // Confirm Password
  if (confirmPassword === '') {
    document.getElementById('confirmPasswordError').innerText = 'Please confirm your password';
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
    isValid = false;
  }

  return isValid;
}