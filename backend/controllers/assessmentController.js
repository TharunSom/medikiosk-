const submitAssessment = (req, res) => {
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
            name,
            symptoms
        },
        riskLevel: "PENDING",
        disclaimer:
            "This system provides preliminary healthcare guidance only and does not replace professional medical advice."
    });
};

module.exports = {
    submitAssessment
};
