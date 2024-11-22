document.addEventListener("DOMContentLoaded", () => {
    const payButton = document.getElementById("payButton");
    const paymentForm = document.getElementById("paymentForm");

    // Populate booking details on the payment page
    const payCabType = document.getElementById("payCabType");
    const payFare = document.getElementById("payFare");
    const payTime = document.getElementById("payTime");

    // Assuming you passed these values via URL or some session data
    const bookingDetails = {
        cabType: "Sedan",  // This can be dynamically populated
        fare: 350,         // This can be dynamically calculated
        time: "30 mins"    // This can be dynamically calculated
    };

    payCabType.textContent = bookingDetails.cabType;
    payFare.textContent = bookingDetails.fare;
    payTime.textContent = bookingDetails.time;

    // Handle payment form submission
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;

        if (name && cardNumber && expiryDate && cvv) {
            // Simulate payment process
            alert(`Payment of ₹${payFare.textContent} confirmed for ${name}. Booking complete!`);

            // Redirect to a success page or show a success message
            window.location.href = "payment-success.html"; // You can replace this with your success page URL
        } else {
            alert("Please fill in all the payment details.");
        }
    });
});
