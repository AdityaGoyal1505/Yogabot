const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

// Mocked function to simulate API call (replace with real API)
const fetchDiseaseInfo = async (disease) => {
    const diseaseCureDB = {
        "flu": "Rest, hydration, and over-the-counter medications like ibuprofen.",
        "covid-19": "Isolate, hydrate, take fever reducers, and seek medical advice.",
        "malaria": "Antimalarial medications like chloroquine.",
        "diabetes": "Management includes insulin injections, a healthy diet, and regular exercise.",
        "asthma": "Inhalers, avoiding allergens, and consulting a doctor."
    };
    return diseaseCureDB[disease.toLowerCase()] || "Consult a healthcare provider.";
};

// Route to handle the chatbot response
app.post('/getCure', async (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    const disease = userMessage.match(/\b(flu|covid-19|malaria|diabetes|asthma)\b/); // Simple regex matching

    if (disease) {
        const cure = await fetchDiseaseInfo(disease[0]); // Fetch cure dynamically from DB or API
        res.json({ message: cure });
    } else {
        res.json({ message: "Sorry, I don't have information on that disease. Please consult a healthcare professional." });
    }
});

// Serve the frontend HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Chatbot API running at http://localhost:${port}`);
});
