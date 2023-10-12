// Retrieve selected subjects and corresponding PDF URLs from localStorage
const selectedSubjectsAndPDFs = JSON.parse(localStorage.getItem('selectedSubjectsAndPDFs'));

const subjectList = document.getElementById("subject-list");

function displaySubjects() {
    if (selectedSubjectsAndPDFs) {
        selectedSubjectsAndPDFs.forEach(item => {
            const subject = item.subject;
            const pdfURL = item.pdfURL;
            const subjectItem = document.createElement("li");
            subjectItem.textContent = subject;
            subjectItem.addEventListener("click", () => downloadPDF(pdfURL));
            subjectList.appendChild(subjectItem);
        });
    } else {
        // Handle the case where no subjects are selected
        subjectList.textContent = "No subjects selected.";
    }
}

function downloadPDF(pdfURL) {
    window.open(pdfURL, "_blank");
}

window.addEventListener("load", displaySubjects);
