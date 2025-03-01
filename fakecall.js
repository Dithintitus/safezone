let audio = new Audio("Ringtone.mp3"); // Ensure this file exists

function startFakeCall() {
    audio.loop = true; // Make the ringtone loop
    audio.play();

    // Show an alert with an option to stop the ringtone
    let answerCall = confirm("Incoming Fake Call! Click OK to answer.");
    
    if (answerCall) {
        stopFakeCall(); // Stop the ringtone when answering
    }
}

function stopFakeCall() {
    audio.pause();  // Pause the audio
    audio.currentTime = 0;  // Reset the audio to start
    alert("Call answered. Speak as if you're on a real call!");
}
