document.getElementById("sos-btn").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            // Generate Google Maps location link
            var locationLink = `https://www.google.com/maps?q=${lat},${lon}`;

            // Emergency contact number (change this)
            var emergencyNumber = "916282672737";  // Replace with actual emergency contact number

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
