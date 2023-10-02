document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".info-item:nth-child(1) .btn");
    const signUpBtn = document.querySelector(".info-item:nth-child(2) .btn");
    const container = document.querySelector(".container");
    const loginForm = document.querySelector(".form-item.log-in");
    const signUpForm = document.querySelector(".form-item.sign-up");
  
    signUpForm.style.left = "100%"; // Initially, hide the sign-up form
  
    loginBtn.addEventListener("click", function () {
      // Move the container to the right and show the login form
      container.classList.remove("active");
      signUpForm.style.left = "100%";
      loginForm.style.left = "0";
    });
  
    signUpBtn.addEventListener("click", function () {
      // Move the container to the left and show the sign-up form
      container.classList.add("active");
      signUpForm.style.left = "0";
      loginForm.style.left = "100%";
    });
  });
  