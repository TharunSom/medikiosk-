def analyze_symptoms(symptoms):
    """
    Basic preliminary symptom analysis for MediKiosk.
    This is not a medical diagnosis.
    """

    symptoms = symptoms.lower()

    emergency_keywords = [
        "chest pain",
        "difficulty breathing",
        "severe bleeding",
        "unconscious",
        "seizure"
    ]

    for keyword in emergency_keywords:
        if keyword in symptoms:
            return {
                "risk": "HIGH",
                "message": "Please seek immediate professional medical attention."
            }

    return {
        "risk": "LOW",
        "message": (
            "Your symptoms have been recorded for preliminary guidance. "
            "Please consult a qualified healthcare professional for diagnosis."
        )
    }


if __name__ == "__main__":
    user_symptoms = input("Enter symptoms: ")
    result = analyze_symptoms(user_symptoms)

    print("\nRisk Level:", result["risk"])
    print("Guidance:", result["message"])
