document.getElementById("sos-btn").addEventListener("click", function() {
    let emergencyNumber = localStorage.getItem("emergencyNumber");

    
    if (!emergencyNumber) {
        alert("Please set an emergency contact number first!");
        window.location.href = "settings.html"; 
        return;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            
            var locationLink = `https://www.google.com/maps?q=${lat},${lon}`;

            
            var message = `🚨 HELP! I am in danger. My live location: ${locationLink}`;

            
            var whatsappLink = `https://wa.me/${emergencyNumber}?text=${encodeURIComponent(message)}`;

            
            window.open(whatsappLink, "_blank");

        }, function(error) {
            alert("Geolocation failed: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
