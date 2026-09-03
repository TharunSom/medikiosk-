const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "MediKiosk Backend is running successfully!"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy",
        project: "MediKiosk"
    });
});

app.post("/api/assessment", (req, res) => {
    const { name, symptoms } = req.body;

    if (!name || !symptoms) {
        return res.status(400).json({
            message: "Name and symptoms are required."
        });
    }

    res.json({
        message: "Assessment received successfully.",
        patient: name,
        symptoms: symptoms,
        note: "This is preliminary guidance and not a medical diagnosis."
    });
});

app.listen(PORT, () => {
    console.log(`MediKiosk server running on port ${PORT}`);
});
