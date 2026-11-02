
//DOM SELECTIONS (find html elements and store them)

// FORM
const feedbackForm = document.getElementById("feedbackForm");

// INPUT FIELDS
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("comments");
const website = document.getElementById("website");

// ERROR MESSAGES
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const topicError = document.getElementById("topicError");
const commentsError = document.getElementById("commentsError");
const websiteError = document.getElementById("websiteError");

// OTHER ELEMENTS
const counter = document.getElementById("counter");
const formStatus = document.getElementById("formStatus");

console.log("Feedback JavaScript is connected!");

//----------------------------------------------------


//FORM SUBMISSION and EVENT LISTENER
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault(); //prevents page from refreshing automatically
    console.log("The form was submitted!");
});
