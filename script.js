document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Display the error message
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Incorrect Username or Password";
    errorMessage.style.display = "block";
});
