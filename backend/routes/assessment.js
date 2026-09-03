const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    const { name, symptoms } = req.body;

    if (!name || !symptoms) {
        return res.status(400).json({
            success: false,
            message: "Patient name and symptoms are required."
        });
    }

    res.json({
        success: true,
        message: "Health assessment submitted successfully.",
        patient: {
            name: name,
            symptoms: symptoms
        },
        disclaimer:
            "This assessment provides preliminary guidance only and is not a medical diagnosis."
    });
});

module.exports = router;
