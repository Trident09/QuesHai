const coursesData = [
    {
        courseName: "B.Tech",
        subjects: [
            "C",
            "C++",
            "SAD",
            "COA",
            "Java"
            
        ]
    },
    {
        courseName: "B.Sc",
        subjects: [
            "Physics",
            "Chemistry",
            "Yoga",
            "Computer",
            "Pathology"
        ]
    },
    {
        courseName: "B.A.L.L.B",
        subjects: [
            "C",
            "C++",
            "SAD",
            "COA",
            "Java"
            
        ]
    },
    {
        courseName: "M.Sc",
        subjects: [
            "Physics",
            "Chemistry",
            "Yoga",
            "Computer",
            "Pathology"
        ]
    },
    {
        courseName: "BCA",
        subjects: [
            "C",
            "C++",
            "SAD",
            "COA",
            "Java"
            
        ]
    },
    {
        courseName: "Phd",
        subjects: [
            "Physics",
            "Chemistry",
            "Yoga",
            "Computer",
            "Pathology"
        ]
    }
];

const courseList = document.getElementById("course-list");

function populateCourses() {
    coursesData.forEach(course => {
        const courseItem = document.createElement("li");
        courseItem.textContent = course.courseName;
        courseItem.addEventListener("click", () => selectCourse(course.subjects));
        courseList.appendChild(courseItem);
    });
}

function selectCourse(subjects) {
    // Save selected subjects to localStorage
    localStorage.setItem('selectedSubjects', JSON.stringify(subjects));
    // Redirect to subject display page
    window.location.href = 'subjects.html';
}

window.addEventListener("load", populateCourses);
function selectCourse(subjects) {
    // Save selected subjects and their corresponding PDF URLs to localStorage
    const subjectsAndPDFs = subjects.map(subject => {
        return { subject, pdfURL: `dummy.pdf` }; // Update with the actual PDF file paths  [`path/to/${subject}.pdf`]
    });
    localStorage.setItem('selectedSubjectsAndPDFs', JSON.stringify(subjectsAndPDFs));
    
    // Redirect to subject display page
    window.location.href = 'subjects.html';
}
