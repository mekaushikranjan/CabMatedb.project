document.addEventListener("DOMContentLoaded", () => {
    // Get query parameters from URL (assuming the details are passed from the payment page)
    const urlParams = new URLSearchParams(window.location.search);
    const fare = urlParams.get('fare');
    const cabType = urlParams.get('cabType');
    const carBrand = urlParams.get('carBrand');
    const driver = urlParams.get('driver') || "Assigned after booking";  // Default driver if not passed

    // Display the payment details
    document.getElementById("amountPaid").textContent = fare;
    document.getElementById("paymentCabType").textContent = cabType;
    document.getElementById("paymentCarBrand").textContent = carBrand;
    document.getElementById("paymentDriver").textContent = driver;

    // Event listener for 'Back to Home' button
    document.getElementById("backToHome").addEventListener("click", () => {
        window.location.href = "index.html";  // Redirect to home page
    });

    // Event listener for 'View Booking' button
    document.getElementById("viewBooking").addEventListener("click", () => {
        window.location.href = "index.html";  // Redirect to a booking details page
    });
});
