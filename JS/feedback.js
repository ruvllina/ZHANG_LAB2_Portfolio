
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

//VALIDATION OF FULL NAME
function validateFullName() {

    // .value receives the name entered by the user
    // .trim removes unnecessary spaces
    const name = fullName.value.trim();

    // Check if the name is empty or too short
    if (name.length < 2) {
        showFieldError(fullName, fullNameError,
            "Please enter at least 2 characters!");
        return false; //when name is invalid
    }

    // Check which characters are allowed
    const namePattern = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;
    if (!namePattern.test(name)) { //if it follows pattern
        showFieldError(fullName, fullNameError,
            "Please use letters, spaces, apostrophes or hyphens only!");
        return false;
    }

    // If all checks pass
    clearFieldError(fullName, fullNameError);
    fullName.classList.add("input-valid");

    return true;
}


//----------------------------------------------------

//VALIDATION OF EMAIL
function validateEmail() {
    // Get the email entered by the user
    const emailValue = email.value.trim();
    // Check if the email is empty
    if (emailValue === "") {
        showFieldError(email, emailError,
            "Please enter your email address");
        return false;
    }

    // Check the email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(emailValue)) {
        showFieldError(email, emailError,
            "Please enter a valid email address!");
        return false;
    }

    // If the email is valid
    clearFieldError(email, emailError);
    email.classList.add("input-valid");
    return true;
}

//----------------------------------------------------

//VALIDATION OF TOPIC
function validateTopic() {
    // Get the selected topic
    const selectedTopic = topic.value; 
    //value retrieves the value of the selected option
    
    // Check if the user selected a topic
    if (selectedTopic === "") {
        showFieldError(topic, topicError,
            "Please select a topic");
        return false;
    }

    // If a topic is selected
    clearFieldError(topic, topicError);
    topic.classList.add("input-valid");
    return true;
}














//----------------------------------------------------

//reusable error display code functions

function showFieldError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("input-error");
    input.classList.remove("input-valid");
    input.setAttribute("aria-invalid", "true");
}

function clearFieldError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("input-error");
    input.setAttribute("aria-invalid", "false");
}


//----------------------------------------------------

//FORM SUBMISSION and EVENT LISTENER

feedbackForm.addEventListener("submit", function(event) {   
    event.preventDefault(); //prevents page from refreshing automatically

    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isTopicValid = validateTopic();

    console.log("Is the name valid?", isNameValid); 
    console.log("Is the email valid?", isEmailValid);
    console.log("Is the topic valid?", isTopicValid);

});


