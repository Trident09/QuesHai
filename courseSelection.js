const coursesData = [
    {
        courseName: "B.Tech",
        subjects: [
            "Engineering_Physics",
            "Engineering_Mathematics_1",
            "Basics_of_Electrical_Engineering",
            "Fundamentals_in_Computer_Programming_with_C",
            "Engineering_Graphics",
            "Communication_Skills",
            "Engineering Chemistry",
            "Engineering_Mathematics_2",
            "Object_Oriented_Programming_with_C++",
            "Digital_Logic_Design",
            "Professional_Ethics",
            "Fundamentals_of_Forensic_Science_&_Laws",
            "Environment_Science",
            "Engineering_Mathematics_3",
            "Data_Structures",
            "Database_Management_Systems",
            "Java_Programming",
            "Computer_Organization_&_Architecture",
            "System_Analysis_Design_and_Unified_Modelling_Language",
            "Engineering_Mathematics_4",
            "Computer_Networks",
            "Microprocessor_and_Microcontroller",
            "Operating_System",
            "Cryptography",
            "dotNet_Programming",
            "Advance_Computer_Networks",
            "Web_Development_Technology",
            "Computer_Programming_with_Python",
            "Theory_of_Computation",
            "Wireless_Communication_and_Mobile_Computing",
            "Big_Data",
            "Cloud_Computing",
            "Modern_Software_Engineering",
            "Essentials_of_Cyber_Security",
            "Compiler_Design",
            "Vocational_Skills_and_Personality_Development",
            "Advance_Java_Programming",
            "Computer_Graphics",
            "Advance_Web_Development_Technology",
            "Vulnerability_Analysis_&_Web_Application_Security",
            "Cyber_Law_policies_and_compliance",
            "Artificial_Intelligence",
            "Information_and_Network_Security",
            "Mobile_Phone_Security",
            "Malware_Analysis",
            "Incident_Response_Management_and_Threat_Hunting",
            "Blockchain_Technology_and_Security"
        ]
    },
    {
        courseName: "DFIS",
        subjects: [
            "Computer_Forensics",
            "Cyber_Security_Audit_and_Compliance",
            "Incident_Response_Management",
            "Python_&_Scripting",
            "Introduction_to_Forensic_Science_and_Cyber_Law",
            "Mobile_Forensics",
            "Web_Application_Security",
            "Malware_Analysis_&_Forensics",
            "Artificial_Intelligence",
            "Minor_Project",
            "Network_Security_&_Forensics",
            "IoT_Security_&_Forensics",
            "Blockchain_&_Cryptocurrency",
            "Program_Elective_1",
            "Program_Elective_2",
        ]
    },
    {
        courseName: "B.Sc",
        subjects: [
            "Introduction_to_Forensic_Science",
            "Crime_Scene_Management_&_Criminal_Profiling",
            "Crime_and_Society",
            "General_Physics_I",
            "General_Chemistry_I",
            "General_Biology_I",
            "Communication_Skill",
            "Criminal_and_Evidence_Law",
            "Fingerprint_Science",
            "Questioned_Document",
            "General_Physics_II",
            "General_Chemistry_II",
            "General_Biology_II",
            "English",
            "Forensic_Psychology",
            "Forensic_Chemistry_I",
            "Forensic_Physics_I",
            "Basics_of_Computer_&_Biometrics",
            "Core_Elective_–_I_(From_Elective_Group_A)",
            "Skill_Based_Elective_III",
            "Forensic_Medicine",
            "Fundamentals_of_Forensic_Toxicology",
            "Forensic_Ballistics",
            "Forensic_Biology_and_Wildlife_Forensics",
            "Core_Elective_II_(From_Elective_Group_A)",
            "Skill_Based_Elective_IV",
            "Forensic_Anthropology",
            "Digital_Forensics_and_Cyber_Law",
            "Forensic_Chemistry_II",
            "Instrumental_Techniques_I",
            "Core_Elective_III_(From_Elective_Group_A)",
            "Forensic_Physics_II",
            "Information_Security_Audit_and_Compliance",
            "Basics_of_Immunology_and_Forensic_Serology",
            "Instrumental_Techniques_II",
            "Core_Elective_IV_(From_Elective_Group_B)",


        ]
    },
    {
        courseName: "M.Sc FS",
        subjects: [
            "Introduction_to_Forensics_Psychology_Law_and_Statistics",
            "Instrumental_Techniques",
            "Crime_Scene_Management_and_Forensic_Evidences",
            "Fingerprints_and_Questioned_Documents",
            "Forensic_Biology_and_Anthropology",
            "Quality_Management_Narcotic_Drugs_Explosives_and_Forensic_Chem",
            "Forensic_Serology_and_DNA_Profiling",
            "Forensic_Medicine_and_Toxicology",
            "Forensic_Ballistics",
            "Basic_Concepts_of_Digital_Forensics",
            "Vulnerability_Assessment_and_Penetration_Testing",
            "Basics_of_Crime_Evidence_and_Law",
            "Concepts_of_Crime_Scene_Management",
            "Advanced_techniques_in_Crime_Scene_Management",
            "Forensic_Pharmacology_and_Pharmaceutical_Drug_Analysis",
            "Advanced_Forensic_Toxicology)",
            "Modern_and_Applied_Analytical_Forensic_Chemistry",
            "Forensic_Genomics_and_Biocomputing",
            "Molecular_Biology_and_rDNA_Technology",
            "Immunological_Techniques_and_Forensic_Proteomics",
            "Advances_in_Physical_Techniques",
            "Advances_in_Forensic_Ballistics_&_Armour_Materials",
            "Audio_Recognition_&_Video_Analysis",
            "Modern_Trends_in_Fingerprint_Sciences",
            "Questioned_Documents_&_Forensic_Accounting",
            "Forensic_Photography_&_Biometrics",
            "Cyber_Law,_Risk_and_Compliance",
            "Incident_Response_and_Digital_Forensics"

        ]
    },
    {
        courseName: "BBA LLB",
        subjects: [
            "Legal_Methods",
            "Law_of_Tort_and_Consumer_Protection_Laws",
            "Law_and_Literature",
            "Economics",
            "Business_Statistics",
            "Principles_of_Management"
        ]
    },
    {
        courseName: "LLM",
        subjects: [
            "Comparative_Public_Law",
            "Research_Methods_and_Legal_Writing",
            "Law_and_Justice_in_Globalizing_World",
            "Criminal_Justice_System",
            "Theories_and_Principles_of_Criminal_Law",
            "Forensic_Justice",
            "Criminal_Justice_System_&_Human_Rights",
            "Victimology_and_Restorative_Justice",
            "Elective_Course:Financial_Crimes",
            "Elective_Course:Transnational_Crimes"
        ]
    },
    {
        courseName: "M.Sc HS",
        subjects: [
            "MSHS_SUB_1",
            "Geo-Political_Studies_&Internal_Security",
            "Civil&Criminal_Laws",
            "Organizational_Behaviour&Human_Resource_Management",
            "Forensic_Science&its_application_in_Major_Crimes",
            "Contemporary_Security_Technologies",
            "Risk&Vulnerability_Analysis",
            "WMD_Protection&Environment_Security",
            "Cyber_Security",
            "Border&Maritime_Security",
            "Intelligence_and_Counterintelligence",
            "Financial_Accounting&Major_Financial_Crimes",
            "Disaster_Management",
            "Advanced_Security_Technologies",
            "Economic_Security_and_Countering_Terror_Funding",
            "Critical_Infrastructure_Protection&Industrial_Security",
            "Criminology&_Forensic_Psychology",
            "Research_Methodology"
        ]
    },
    {
        courseName: "B.Sc C/FS",
        subjects: [
            "Subjects????"
        ]
    },
    {
        courseName: "M.Phil CP",
        subjects: [
            "Psychosocial_Foundations_of_Behaviour_and_Psychopathology",
            "Statistics_and_Research_Methodology",
            "Psychiatry",
            "Psychological_Assessment_and_Viva-Voce",
            "Psychodiagnostic_Reports",
            "Biological_Foundations_of_Behaviour",
            "Psychotherapy_and_Counseling",
            "Behavioural_Medicine",
            "Psychological_therapy_and_Viva-Voce",
            "Psychotherapy_Reports"
        ]
    },
    {
        courseName: "M.Sc CP",
        subjects: [
            "Subjects???"
        ]
    },
    {
        courseName: "M.A Crim",
        subjects: [
            "Introduction_to_Forensic_Science_and_Law",
            "Fundamentals_of_Criminology",
            "Causation_of_Crime",
            "Introduction_to_Criminal_Psychology",
            "Criminal_Justice_System:_Institutions_and_Processes",
            "Crime_Prevention",
            "Vistimology_and_Victims_Assistance",
            "Peonology_and_Correctional_Systems",
            "Research_Methodology_and_Statistics",
            "Criminal_Law_and_Procedure",
            "Psychopathology",
            "Forensic_Psychological_Investigative_Techniques",
            "Psychological_Assessments_in_Forensic_Setting",
            "Violence_Against_Children_and_Women",
            "E1_Terrorism,_Disaster_and_Security_Management",
            "E2_Crime_Scene_Analysis_and_Crime_Mapping",
            "E3_Cybercrime_and_Information_Security",
            "E4_Juvenile_Justice_and_Child_Protection"
        ]
    },
    {
        courseName: "BBA",
        subjects: [
            "Management_Concepts_and_Practices",
            "Forms_of_Business_Organizations",
            "Micro_Economics",
            "Financial_Accounting_I",
            "Business_Mathematics",
            "Business_Communication_and_Corporate_Writing",
            "Business_Environment",
            "Organization_Behavior",
            "Macro_Economics",
            "Financial_Accounting_II",
            "Basics_of_Management_Information_System",
            "Computer_Application_in_Business"
        ]
    },
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
        return { subject, pdfURL: `assets/${subject}.pdf` }; // Update with the actual PDF file paths  [`path/to/${subject}.pdf`]
    });
    localStorage.setItem('selectedSubjectsAndPDFs', JSON.stringify(subjectsAndPDFs));

    // Redirect to subject display page
    window.location.href = 'subjects.html';
}
