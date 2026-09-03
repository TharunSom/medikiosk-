const express = require("express");

const router = express.Router();

// Demo login endpoint
router.post("/login", (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Email, password and role are required."
        });
    }

    // Demo authentication
    res.json({
        success: true,
        message: `${role} login successful.`,
        user: {
            email: email,
            role: role
        }
    });
});

module.exports = router;
