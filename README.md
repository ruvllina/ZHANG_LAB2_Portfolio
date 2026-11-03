
-------PROJECT OVERVIEW-------

Target grade: GRADE 3
GitHub Repository: https://github.com/ruvllina/ZHANG_LAB2_Portfolio
Commits: https://github.com/ruvllina/ZHANG_LAB2_Portfolio/commits/main


This project is an extension of my personal portfolio website (LAB 1), developed as part of LAB 2.

The main purpose of this project is to create an interactive and responsive Feedback page form using HTML, CSS and vanilla JavaScript. The page allows users to submit their name, email address, select a topic of interest, write comments and optionally share their website. 

------------------------------

LANGUAGES USED:

- HTML5: Used to structure the website and create the feedback form
- CSS3: Used for styling, responsive design and layout
- JavaScript (Vanilla): Used for form validation, event listeners, DOM manipulation, character counting and form interactions

-------------------------------------------

IMPLEMENTED FEATURES:

1. FEEDBACK FORM
- Full Name (minimum 2 characters)
- Email Address (email format validation)
- Topic of Interest (dropdown menu)
- Comments (minimum 15 characters)
- Website (optional URL field)

2. FORM VALIDATION
- Full Name accepts international letters, spaces, apostrophes and hyphens
- Email addresses are checked for a valid format
- A topic must be selected
- Comments must contain at least 15 characters
- The optional website field is checked if a URL is entered

3. INTERACTIVE FEEDBACK
- Invalid fields display an error message and a red border
- Valid fields display a green border after validation
- A live character counter updates while the user writes comments
- A success message appears when all required fields are completed correctly
- The success message fades out automatically after four seconds
- The form resets after successful submission
- The Clear Form button resets all fields, validation messages and visual states

4. ACCESSIBILITY & RESPONSIVE DESIGN
- Every form field has a connected label
- Error messages are associated with their corresponding fields
- ARIA attributes are used to improve accessibility
- Keyboard navigation and visible focus states are supported
- The layout adapts to different screen sizes, including ipad and mobile devices

-------------------------------------------

PROJECT STRUCTURE:
The project is organised into the following folders and files:

ZHANG_LAB2_Portfolio/
│
├── index.html
├── feedback.html
├── README.md
│
├── Styles/
│   ├── styles.css
│   └── feedback.css
│
├── JS/
│   └── feedback.js
│
└── Assets/
    └── Images/

-------------------------------------------

HOW TO: Run the project:
- Open index.html to view the main portfolio website
- Open feedback.html to access the Newsletter page

!IMPORTANT:
The form uses client-side JavaScript validation only. It does not send, store or email submitted information to a server. The success message is displayed in the browser to demonstrate the form's functionality.

-------END! THANK YOU FOR READING-------