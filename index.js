function showGrades() {
    const civil = document.getElementById("civil").value.trim();
    const status = document.getElementById("status");
    const studentName = document.getElementById("studentName");
    const gradesList = document.getElementById("gradesList");
    const encouragement = document.getElementById("encouragement");

    status.innerHTML = "";
    studentName.innerHTML = "";
    gradesList.innerHTML = "";
    encouragement.innerHTML = "";

    if (!civil) {
        status.innerHTML = "الرجاء إدخال الرقم المدني";
        return;
    }

    fetch("grades.json?time=" + Date.now())
        .then(res => res.json())
        .then(data => {
            const student = data.find(s => s.civil == civil);
            if (student) {
                studentName.innerHTML = `الطالب: ${student.name}`;

                let html = "<table>";
                html += "<tr><th>المادة</th><th>الدرجة</th></tr>";
                for (const key in student) {
                    if (key !== "civil" && key !== "name") {
                        html += `<tr><td>${key}</td><td>${student[key]}</td></tr>`;
                    }
                }
                html += "</table>";
                gradesList.innerHTML = html;

                encouragement.innerHTML = "نتمنى لك التوفيق والنجاح! 🌟 حافظ على الاجتهاد وحقق أعلى النتائج!";
            } else {
                status.innerHTML = "لم يتم العثور على الرقم المدني";
            }
        })
        .catch(err => {
            status.innerHTML = "خطأ في تحميل الدرجات";
            console.error(err);
        });
}
