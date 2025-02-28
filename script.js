document.getElementById("sos-btn").addEventListener("click", function() {
    let emergencyNumber = localStorage.getItem("emergencyNumber");

    // Check if the number is set
    if (!emergencyNumber) {
        alert("Please set an emergency contact number first!");
        window.location.href = "settings.html"; // Redirect to settings page
        return;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            // Generate Google Maps location link
            var locationLink = `https://www.google.com/maps?q=${lat},${lon}`;

            // Message to send
            var message = `🚨 HELP! I am in danger. My live location: ${locationLink}`;

            // WhatsApp API Link
            var whatsappLink = `https://wa.me/${emergencyNumber}?text=${encodeURIComponent(message)}`;

            // Open WhatsApp automatically
            window.open(whatsappLink, "_blank");

        }, function(error) {
            alert("Geolocation failed: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
