const form = document.querySelector(".main-container");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const age = document.getElementById("age").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const genderInput = document.querySelector("input[name='gender']:checked");
    const status = document.getElementById("status").value;
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();


    if (!fname || !lname) { alert("Please enter your full name"); return; }
    if (isNaN(age) || age <= 0) { alert("Please enter a valid age"); return; }
    if (!birthdate) { alert("Please select your birthdate"); return; }
    if (!genderInput) { alert("Please select your gender"); return; }
    if (!/^\d{10,11}$/.test(contact)) { alert("Please enter a real contact number"); return; }
    if (!email.includes("@")) { alert("Please enter a valid email address."); return; }

    const conditions = Array.from(document.querySelectorAll("input[name='conditions']:checked")).map(c => c.value);
    const conditionOthers = document.getElementById("condition-others").value.trim();

    const symptoms = Array.from(document.querySelectorAll("input[name='symptoms']:checked")).map(s => s.value);
    const symptomOthers = document.getElementById("symptom-others").value.trim();

    const newPatientData = {
        fname, lname, age, birthdate,
        gender: genderInput.value,
        status, contact, email,
        conditions, condition_others: conditionOthers,
        symptoms, symptom_others: symptomOthers
    };


    localStorage.setItem("patientData", JSON.stringify(newPatientData));
    console.log("Saved:", newPatientData);

    alert("Medical history form submitted");
    window.location.href = "home.html";
});
