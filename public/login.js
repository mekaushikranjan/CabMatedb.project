document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
  
    // Get the form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Log the email and password to ensure they are being captured
    console.log('Login form submitted:', { email, password });
  
    // Send the data to the server via fetch API
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Login response:', data); // Log the response from the server
      if (data.success) {
        alert('Login successful!');
        window.location.href = '/dashboard';  // Redirect after successful login
      } else {
        alert('Error: ' + data.message);  // Show error message if login failed
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred during login');
    });
  });
  