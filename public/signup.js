// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Get the form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send the data to the server via fetch API
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Handle success or error
    if (data.success) {
      alert('Login successful!');
      // Redirect user to a new page after successful login, for example:
      // window.location.href = '/dashboard'; // Or whatever your app's next page is
    } else {
      alert('Error: ' + data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred');
  });
});
