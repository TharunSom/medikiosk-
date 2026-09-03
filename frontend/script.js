function startAssessment() {
    const assessment = document.getElementById("assessment");

    assessment.style.display = "block";
    assessment.scrollIntoView({
        behavior: "smooth"
    });
}

function analyzeSymptoms() {
    const name = document.getElementById("name").value.trim();
    const symptoms = document.getElementById("symptoms").value.trim();
    const result = document.getElementById("result");

    if (!name || !symptoms) {
        result.innerHTML = "Please enter your name and symptoms.";
        return;
    }

    result.innerHTML = `
        <h3>Hello, ${name} 👋</h3>
        <p>
            Your symptoms have been recorded for preliminary assessment.
        </p>
        <p>
            <strong>Symptoms:</strong> ${symptoms}
        </p>
        <p>
            Please consult a qualified healthcare professional
            for proper diagnosis and treatment.
        </p>
    `;
}
