// Add click event listeners to elements with class "btn" inside elements with class "info-item"
document.querySelectorAll(".info-item .btn").forEach(function(button) {
  button.addEventListener("click", function() {
    // Toggle the "log-in" class on elements with class "container"
    const containers = document.querySelectorAll(".container");
    containers.forEach(function(container) {
      container.classList.toggle("log-in");
    });
  });
});

// Add click event listeners to elements with class "btn" inside elements with class "container-form"
document.querySelectorAll(".container-form .btn").forEach(function(button) {
  button.addEventListener("click", function() {
    // Add the "active" class to elements with class "container"
    const containers = document.querySelectorAll(".container");
    containers.forEach(function(container) {
      container.classList.add("active");
    });
  });
});

// Add a click event listener to the login button
document.querySelector(".form-item.log-in .btn").addEventListener("click", function() {
  // Get values from the input fields
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Send the login data to the server for verification
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Authentication successful, handle 2FA if required
        if (data.requires2FA) {
          // Implement 2FA logic here
          // You might want to show a 2FA input form to the user
          // and send the 2FA code to the server for verification
        } else {
          // Redirect to the user's dashboard or another page
          window.location.href = "/dashboard";
        }
      } else {
        // Authentication failed, display an error message
        alert("Login failed. Please check your credentials.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
