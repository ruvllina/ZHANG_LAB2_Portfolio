
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
const clearButton = document.querySelector('button[type="reset"]');
//querySelector searches for element that matches the CSS selector

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

//VALIDATION OF COMMENTS

function validateComments() {
    // Get the text entered by the user
    const commentText = comments.value.trim();
    // Check if the comment has at least 15 characters
    if (commentText.length < 15) {
        showFieldError(comments, commentsError,
            "Please enter at least 15 characters!");
        return false;
    }
    // If the comment is valid
    clearFieldError(comments, commentsError);
    comments.classList.add("input-valid");
    return true;
}

//----------------------------------------------------

//LIVE CHARACTER COUNTER FOR COMMENTS

comments.addEventListener("input", function() {

    // Count the characters typed by the user
    const currentLength = comments.value.length;
    // Update the counter
    counter.textContent = `Minimum 15 characters ${currentLength}/15`;
    // Change the counter colour
    if (currentLength < 15) {
        counter.classList.remove("counter-valid");
        counter.classList.add("counter-error");
    } else {
        counter.classList.remove("counter-error");
        counter.classList.add("counter-valid");
    }
});

//----------------------------------------------------

//RESET AFTER SUCCESSFUL SUBMISSION

function resetForm() {

    // Reset all form fields to their original values (empty)
    feedbackForm.reset();
    // Clear all error messages and validation styles
    clearFieldError(fullName, fullNameError);
    clearFieldError(email, emailError);
    clearFieldError(topic, topicError);
    clearFieldError(comments, commentsError);
    clearFieldError(website, websiteError);
    // Reset the character counter
    counter.textContent = "Minimum 15 characters - 0/15";
    counter.classList.remove("counter-error", "counter-valid");
}


//RESET CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener("click", function(event) {
    // Stop the browser's default reset action
    event.preventDefault();
    // Reset all form fields and validation styles
    resetForm();
    // Clear the success message
    formStatus.textContent = "";
    formStatus.classList.remove("hidden");
});








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
    input.classList.remove("input-valid");

    input.setAttribute("aria-invalid", "false");
}


//----------------------------------------------------

//FORM SUBMISSION and EVENT LISTENER

feedbackForm.addEventListener("submit", function(event) {   
    
    //prevents page from refreshing automatically
    event.preventDefault();
    //clear any previous success message
    formStatus.textContent = "";

    // Run all validation functions
    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isTopicValid = validateTopic();
    const areCommentsValid = validateComments();

    // Check the results
    console.log("Is the name valid?", isNameValid); 
    console.log("Is the email valid?", isEmailValid);
    console.log("Is the topic valid?", isTopicValid);
    console.log("Are the comments valid?", areCommentsValid);

    // Check if any field is invalid
    if (!isNameValid || !isEmailValid || !isTopicValid || !areCommentsValid) {
    return;
}


//----------SUBMIT EVENT LISTENER-------------------------------


// Display a success message
formStatus.textContent = `THANK YOU for your precious feedback, ${fullName.value.trim()}!`;

// Reset the form
resetForm();

// Remove success message after 4 seconds
setTimeout(function() {

    // Start fading out the message
    formStatus.classList.add("hidden");

    // Remove the text after the fade-out finishes
    setTimeout(function() {
        formStatus.textContent = "";
        formStatus.classList.remove("hidden");
    }, 1000);

}, 4000); //fade out after 4 seconds

});
