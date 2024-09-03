// script.js
document.getElementById("send-btn").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        generateYogaResponse(userInput);
        document.getElementById("user-input").value = ""; // Clear input field
    }
});

function addUserMessage(message) {
    var chatLog = document.getElementById("chat-log");
    var userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.textContent = message;
    chatLog.appendChild(userMessage);
}

function generateYogaResponse(userInput) {
    var chatLog = document.getElementById("chat-log");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";

    // Yoga-specific responses logic
    if (userInput.toLowerCase() === "hello" || userInput.toLowerCase() === "hi") {
        botMessage.textContent = "Namaste! How can I assist you with yoga or health today?";
    } else if (userInput.toLowerCase().includes("beginner yoga poses")) {
        botMessage.textContent = "Great question! Some beginner yoga poses are:\n1. Mountain Pose (Tadasana)\n2. Downward-Facing Dog (Adho Mukha Svanasana)\n3. Child's Pose (Balasana)\n4. Cat-Cow Pose (Marjaryasana to Bitilasana)";
    } else if (userInput.toLowerCase().includes("benefits of yoga")) {
        botMessage.textContent = "Yoga has numerous benefits, including improving flexibility, building strength, reducing stress, enhancing mental clarity, and promoting relaxation.";
    } else if (userInput.toLowerCase().includes("breathing techniques")) {
        botMessage.textContent = "One common yoga breathing technique is Pranayama. Try the '4-7-8' technique: Inhale for 4 seconds, hold for 7 seconds, and exhale for 8 seconds.";
    } else if (userInput.toLowerCase().includes("meditation tips")) {
        botMessage.textContent = "Start with a comfortable seated position. Focus on your breath, inhale and exhale slowly. If your mind wanders, gently bring your attention back to your breath.";
    } else if (userInput.toLowerCase().includes("yoga for stress relief")) {
        botMessage.textContent = "Yoga can be great for stress relief. Try poses like Child's Pose, Legs-Up-the-Wall, and Corpse Pose for relaxation.";
    } 
    // New section: Disease-specific responses
    else if (userInput.toLowerCase().includes("back pain")) {
        botMessage.textContent = "For back pain, try gentle yoga poses like Cat-Cow Pose, Child's Pose, and Cobra Pose. These can help stretch and strengthen your back muscles.";
    } else if (userInput.toLowerCase().includes("anxiety")) {
        botMessage.textContent = "Yoga can help manage anxiety. Practice deep breathing (Pranayama), and try poses like Corpse Pose (Savasana), Legs-Up-the-Wall, and Child's Pose.";
    } else if (userInput.toLowerCase().includes("diabetes")) {
        botMessage.textContent = "Yoga can be beneficial for managing diabetes. Poses like the Seated Forward Bend (Paschimottanasana) and Bridge Pose (Setu Bandhasana) can help improve circulation and lower blood sugar levels.";
    } else if (userInput.toLowerCase().includes("high blood pressure")) {
        botMessage.textContent = "For high blood pressure, focus on relaxation and deep breathing. Gentle poses like the Corpse Pose (Savasana), Legs-Up-the-Wall Pose, and Cat-Cow Pose can be beneficial.";
    } else if (userInput.toLowerCase().includes("arthritis")) {
        botMessage.textContent = "Gentle yoga can help with arthritis pain. Try slow, gentle movements and poses like Cat-Cow Pose, Tree Pose (Vrksasana), and Warrior II Pose (Virabhadrasana II).";
    } else if (userInput.toLowerCase().includes("insomnia")) {
        botMessage.textContent = "For insomnia, practice relaxing yoga poses like Legs-Up-the-Wall, Child's Pose, and deep breathing exercises before bed.";
    } else {
        botMessage.textContent = "I'm here to help with yoga! You can ask me about yoga poses, breathing techniques, how yoga can help with certain diseases, meditation tips, or general benefits of yoga.";
    }

    chatLog.appendChild(botMessage);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto scroll to the latest message
}
