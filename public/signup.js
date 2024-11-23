// signup.js

document.getElementById('signup-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const first_name = document.getElementById('first-name').value.trim();
  const last_name = document.getElementById('last-name').value.trim();
  const phone_number = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    // Send data to the backend
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone_number,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
      // Redirect to another page, e.g., login
      window.location.href = 'login.html';
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});
