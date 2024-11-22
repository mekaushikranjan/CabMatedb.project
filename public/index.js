document.addEventListener("DOMContentLoaded", () => {
    // Toggle Menu for Small Screens
    const hamburger = document.querySelector(".hamburger");
    const menu = document.getElementById("menu");

    // Add both touch and click event handling using pointerup
    hamburger.addEventListener("pointerup", () => {
        menu.classList.toggle("active");
    });

    // Optional: Close the menu if clicking outside
    document.addEventListener("pointerup", (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const payNowButton = document.getElementById("payNow");

    const fareElement = document.getElementById("fare");
    const cabTypeDisplay = document.getElementById("cabTypeDisplay");
    const carBrandDisplay = document.getElementById("carBrandDisplay");

    // Handle Pay Now button click
    payNowButton.addEventListener("click", () => {
        const fare = fareElement.textContent;
        const cabType = cabTypeDisplay.textContent;
        const carBrand = carBrandDisplay.textContent;

        // Check if all details are available before proceeding
        if (fare && cabType && carBrand) {
            // Redirect to payment page with query parameters
            const paymentPageURL = `pay.html?fare=${encodeURIComponent(fare)}&cabType=${encodeURIComponent(cabType)}&carBrand=${encodeURIComponent(carBrand)}`;
            window.location.href = paymentPageURL;
        } else {
            alert("Please make sure all details are filled out before proceeding to payment.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Get the "Book Now" button
    const bookNowButton = document.getElementById("bookNowBtn");

    // Add click event listener to the "Book Now" button
    bookNowButton.addEventListener("click", () => {
        // Redirect to the signup page when the button is clicked
        window.location.href = "signup.html"; // This redirects to the signup page
    });
});
