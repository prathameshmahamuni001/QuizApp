document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const formData = new FormData(this);

    // You can add validation checks here

    // Display collected data (for testing purposes)
    console.log("Form Data Collected:");
    formData.forEach((value, key) => {
        console.log(key + ": " + value);
    });

    // Here you would typically send data to the server using fetch or AJAX
    alert("Registration form submitted successfully!");

    // Optionally, reset the form
    this.reset();
});
