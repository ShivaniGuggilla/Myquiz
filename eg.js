let timeLeft = 10; // Time for each question
let timer;
let score = localStorage.getItem("quizScore") ? parseInt(localStorage.getItem("quizScore")) : 0;

// Function to start the timer
function startTimer(nextPage) {
    timeLeft = 10;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft} seconds`;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! Moving to the next question.");
            window.location.href = nextPage;
        }
    }, 1000);
}

// Function to validate answer and go to the next question
function validateAnswer(correctValue, nextPage) {
    clearInterval(timer); // Stop timer when answer is submitted

    let selected = document.querySelector('input[name="r"]:checked');

    if (selected) {
        if (selected.value === correctValue) {
            score++; // Increase score if correct answer
        }
    }

    localStorage.setItem("quizScore", score); // Store updated score
    window.location.href = nextPage;
}

// Functions for each question page
function ctwo() { validateAnswer("country1", "c2.html"); }
function cthree() { validateAnswer("country2", "c3.html"); }
function cfour() { validateAnswer("country3", "c4.html"); }
function cfive() { validateAnswer("country4", "c5.html"); }
function csix() { validateAnswer("country5", "c6.html"); }
function cseven() { validateAnswer("country6", "c7.html"); }
function result() { validateAnswer("country7", "result.html"); }


// Function to start the quiz
function c1() {
    localStorage.setItem("quizScore", 0); // Reset score at start
    window.location.href = "c1.html";
}

// Ensure timer starts on each question page
window.onload = function () {
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage.startsWith("c") && currentPage !== "result.html") {
        let nextPage = "c" + (parseInt(currentPage[1]) + 1) + ".html";
        if (currentPage === "c5.html") nextPage = "result.html"; // Last question leads to results
        startTimer(nextPage);
    }
};
