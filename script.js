document.getElementById("sos-btn").addEventListener("click", function() {
    let emergencyContacts = JSON.parse(localStorage.getItem("emergencyContacts")) || [];

    if (emergencyContacts.length === 0) {
        alert("Please set emergency contact numbers first!");
        window.location.href = "contacts.html"; // Redirect to contacts page
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

            // Open WhatsApp for each contact
            emergencyContacts.forEach((number, index) => {
                setTimeout(() => {
                    var whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappLink, "_blank");
                }, index * 1000); // Delays each message by 1 second to prevent spam detection
            });

        }, function(error) {
            alert("Geolocation failed: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
