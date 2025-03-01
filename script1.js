document.addEventListener("DOMContentLoaded", function () {
    const statusMessage = document.getElementById("statusMessage");
    const instructionBtn = document.getElementById("instructionBtn");
    const signUpBtn = document.getElementById("signUpBtn");

    // Check if the user has already signed up
    if (localStorage.getItem("signedUp") === "true") {
        if (statusMessage) statusMessage.innerText = "Already signed in.";
        if (instructionBtn) instructionBtn.style.display = "none";
        if (signUpBtn) signUpBtn.style.display = "none";
    }

    // Handle the instruction page navigation
    if (instructionBtn) {
        instructionBtn.addEventListener("click", function () {
            window.location.href = "instructions.html";
        });
    }

    // Enable sign-up button if instructions are read
    if (localStorage.getItem("instructionsRead") === "true") {
        if (signUpBtn) signUpBtn.disabled = false;
    }

    // Handle sign-up button click
    if (signUpBtn) {
        signUpBtn.addEventListener("click", function () {
            localStorage.setItem("signedUp", "true");
            alert("Signed up successfully!");
            window.location.reload();
        });
    }

    // Handle instruction acknowledgment
    const acknowledgeBtn = document.getElementById("acknowledgeBtn");
    if (acknowledgeBtn) {
        acknowledgeBtn.addEventListener("click", function () {
            localStorage.setItem("instructionsRead", "true");
            window.location.href = "index.html";
        });
    }
});
