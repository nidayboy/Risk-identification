function startProcess() {
    window.location.href = "questions.html";
}

function submitAnswers() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
        q6: document.querySelector('input[name="q6"]:checked').value,
        q7: document.querySelector('input[name="q7"]:checked').value,
        q8: document.querySelector('input[name="q8"]:checked').value,
        q9: document.querySelector('input[name="q9"]:checked').value,
        q10: document.querySelector('input[name="q10"]:checked').value,
        q11: document.querySelector('input[name="q11"]:checked').value,
        q12: document.querySelector('input[name="q12"]:checked').value,
        q13: document.querySelector('input[name="q13"]:checked').value,
        q14: document.querySelector('input[name="q14"]:checked').value, // New natural disaster question
    };

    localStorage.setItem('answers', JSON.stringify(answers));
    window.location.href = "results.html";
}

window.onload = function() {
    const resultsDiv = document.getElementById('results');
    const answers = JSON.parse(localStorage.getItem('answers'));

    const risks = [];

    if (answers.q1 === "no") risks.push("Tizim audintifikatsiyasi mavjud emas.");
    if (answers.q2 === "no") risks.push("Hujjat ustivorligini belgilash mavjud emas.");
    if (answers.q3 === "no") risks.push("ERI qo'llanilmaydi.");
    if (answers.q4 === "no") risks.push("Shifrlash algoritmi mavjud emas.");
    if (answers.q5 === "no") risks.push("ERI sertifikatini tekshirish imkoniyati yo'q.");
    if (answers.q6 === "no") risks.push("ERI egasini tekshirish imkoniyati yo'q.");
    if (answers.q7 === "no") risks.push("Hujjatlar ma'lumotlar bazasida saqlanmaydi.");
    if (answers.q8 === "no") risks.push("Hujjatlarga kirish huquqi boshqarilmaydi.");
    if (answers.q9 === "no") risks.push("EHAT AX siyosati mavjud emas.");
    if (answers.q10 === "no") risks.push("Dasturiy ta'minot xavfsizligi ta'minlanmagan.");
    if (answers.q11 === "no") risks.push("Ma'lumotlar bazasi xavfsizligi ta'minlanmagan.");
    if (answers.q12 === "no") risks.push("Tarmoq va server xavfsizligi ta'minlanmagan.");
    if (answers.q13 === "no") risks.push("Server xonasi xavfsizligi ta'minlanmagan.");
    if (answers.q14 === "no") risks.push("Tabiiy ofatlarga bardoshli emas."); // Natural disaster risk

    if (risks.length > 0) {
        resultsDiv.innerHTML = "<h3>Risklar mavjud:</h3><ul><li>" + risks.join("</li><li>") + "</li></ul>";
    } else {
        resultsDiv.innerHTML = "<h3>Hech qanday risk mavjud emas.</h3>";
    }
}
