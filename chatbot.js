async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    let userMessage = `<div class="user-message">${userInput}</div>`;
    chatBox.innerHTML += userMessage;

    // API Request
    let apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your key
    let apiUrl = "https://api.openai.com/v1/chat/completions";

    let requestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a safety advisor." }, { role: "user", content: userInput }]
    };

    try {
        let response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        let data = await response.json();
        let botResponse = data.choices[0].message.content;

        let botMessage = `<div class="bot-message">${botResponse}</div>`;
        chatBox.innerHTML += botMessage;
    } catch (error) {
        chatBox.innerHTML += `<div class="bot-message">⚠️ Error: Could not get response.</div>`;
    }

    document.getElementById("user-input").value = ""; // Clear input
}
