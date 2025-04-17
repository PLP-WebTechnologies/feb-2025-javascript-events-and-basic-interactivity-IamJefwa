// Event listener for form submission
const form = document.getElementById("myForm");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to simulate validation
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  // Clear previous messages
  errorMessage.textContent = '';
  successMessage.textContent = '';

  // Simple form validation
  if (!name || !email || !age) {
    errorMessage.textContent = "All fields are required!";
    return;
  }

  if (age < 18) {
    errorMessage.textContent = "You must be 18 or older.";
    return;
  }

  successMessage.textContent = "Form submitted successfully!";
});

// Event listener to change background color
const changeColorBtn = document.getElementById("change-color-btn");

changeColorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
