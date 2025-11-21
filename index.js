function showGrades() {
    const civil = document.getElementById("civil").value.trim();
    const status = document.getElementById("status");
    const studentName = document.getElementById("studentName");
    const gradesList = document.getElementById("gradesList");

    status.innerHTML = "";
    studentName.innerHTML = "";
    gradesList.innerHTML = "";

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
                let html = "<ul>";
                for (const key in student) {
                    if (key !== "civil" && key !== "name") {
                        html += `<li>${key}: ${student[key]}</li>`;
                    }
                }
                html += "</ul>";
                gradesList.innerHTML = html;
            } else {
                status.innerHTML = "لم يتم العثور على الرقم المدني";
            }
        })
        .catch(err => {
            status.innerHTML = "خطأ في تحميل الدرجات";
            console.error(err);
        });
}
