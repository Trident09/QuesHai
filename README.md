# NFSU Previous Year Question Papers | Comprehensive Resource for Past Exams

## [Repository](https://github.com/Saty70/QuesHai)

## Objective:

> The NFSU Previous Year Question Papers project aims to provide students with a comprehensive and easily accessible resource for all past exam papers from the National Forensic Sciences University. This unofficial site is created by students for students, to help them better prepare for their exams.

> Streamline access to previous year question papers for NFSU students. The system should offer a user-friendly interface, easy navigation through various courses and subjects, and a contribution feature for users to upload missing question papers.

<!-- ![NFSU Previous Year Question Papers Logo](https://i.imgur.com/LXNyYzq.jpeg) -->

NFSU Previous Year Question Papers is an inclusive platform designed to collect and share past exam papers from various courses at the National Forensic Sciences University. Our goal is to create a valuable resource for students to enhance their exam preparations.

## Features

1. **Extensive Database:**
   Access a wide range of previous year question papers across different courses and subjects offered at NFSU.

2. **User-Friendly Interface:**
   The platform features an intuitive and easy-to-navigate interface, ensuring that users can quickly find and download the papers they need.

3. **Search and Filter:**
   Use advanced search and filter options to find specific question papers based on course, subject, and year.

4. **Contribution System:**
   Users can contribute by uploading missing question papers, helping to grow the repository and assist fellow students.

5. **Downloadable Content:**
   All question papers are available for download in PDF format, ensuring easy access and offline study.

## Tech Stack

-   React
-   Material-UI
-   TailWind CSS
-   Firebase

## Quick Links

-   [Live Website](https://ques-hai.vercel.app/)
-   [Main GitHub Repository](https://github.com/Saty70/QuesHai)

## Usage

Clone the repository:

```shell
git clone https://github.com/Saty70/QuesHai.git
cd QuesHai
```

- Ensure you have all dependencies installed:

```bash
npm install
```

### Firebase Setup

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Register your app with Firebase.
3. Install Firebase:

```bash
npm install firebase
```

4. Create a `.env` file in the root of your project and add your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Initialize Firebase in your project:

```javascript
// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
```

### Running the Application

- Start the application:

```bash
npm start
```

### Searching for Question Papers

1. Navigate to the Search section.
2. Use the filters to select the course, subject, and year.
3. Browse through the available question papers and download the desired ones.

### Contributing Question Papers

1. Go to the Contribution section.
2. Upload the missing question papers along with the necessary details.
3. Submit the form to contribute to the repository.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or create an issue if you have suggestions for improvements or want to upload additional question papers.

## Team

| <img src="https://avatars.githubusercontent.com/u/98939183?v=4" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/88451512?v=4" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/100141945?v=4" width="100" height="100"> |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                        [Rupam](https://github.com/Trident09)                        |                        [Kushagra](https://github.com/kushagra-singhh)                        |                       [Satyam](https://github.com/Saty70)                       |

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Saty70/QuesHai/blob/main/LICENSE) file for details.

---