const savedData = localStorage.getItem("patientData");

if (savedData) {
    const patientData = JSON.parse(savedData);

    document.getElementById("patientName").textContent = patientData.fname + " " + patientData.lname;
    document.getElementById("patientAge").textContent = patientData.age;
    document.getElementById("patientBirthdate").textContent = patientData.birthdate;
    document.getElementById("patientGender").textContent = patientData.gender;
    document.getElementById("patientStatus").textContent = patientData.status;
    document.getElementById("patientContact").textContent = patientData.contact;
    document.getElementById("patientEmail").textContent = patientData.email;

    document.getElementById("patientConditions").textContent = patientData.conditions.join(", ");
    document.getElementById("patientConditionOthers").textContent = patientData.condition_others;
    document.getElementById("patientSymptoms").textContent = patientData.symptoms.join(", ");
    document.getElementById("patientSymptomOthers").textContent = patientData.symptom_others;
}
