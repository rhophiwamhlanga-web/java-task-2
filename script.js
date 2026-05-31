const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const studentList = document.getElementById("studentList");

submitBtn.addEventListener("click", function () {

    const name = studentName.value.trim();
    const mark = parseInt(studentMark.value);

    // Validation
    if (name === "") {
        result.textContent = "Please enter a student name.";
        return;
    }

    if (isNaN(mark) || mark < 0 || mark > 100) {
        result.textContent = "Please enter a valid mark between 0 and 100.";
        return;
    }

    let grade = "";
    let status = "";

    if (mark >= 80) {
        status = "PASS";
        grade = "Distinction";
    }
    else if (mark >= 65) {
        status = "PASS";
        grade = "Merit";
    }
    else if (mark >= 50) {
        status = "PASS";
        grade = "Pass";
    }
    else {
        status = "FAIL";
        grade = "Fail";
    }

    result.textContent =
        `${name} scored ${mark}% - ${status} (${grade})`;

    const listItem = document.createElement("li");
    listItem.textContent =
        `${name} - ${mark}% - ${status} (${grade})`;

    studentList.appendChild(listItem);

    studentName.value = "";
    studentMark.value = "";
});