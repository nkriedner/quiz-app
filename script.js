// VARIABLES FOR DOM MANIPULATION
const questionDisplay = document.querySelector(".quiz-card h2");
const answer1Display = document.querySelector(".answer-1");
const answer2Display = document.querySelector(".answer-2");
const answer3Display = document.querySelector(".answer-3");
const answer4Display = document.querySelector(".answer-4");
const nextBtn = document.querySelector(".btn-next");
const showAnswerBtn = document.querySelector(".btn-show-answer");
const answerDisplays = document.querySelectorAll(".answer");
const scoreMinus = document.querySelector(".score-minus");
const scorePlus = document.querySelector(".score-plus");

// PROGRAM VARIABLES
let randomQuizCard;
let solution;
let openForAnswers = true;
let correctGuesses = 0;
let falseGuesses = 0;

// EVENT LISTENERS
nextBtn.addEventListener("click", () => {
    removeHelperClasses();
    randomQuizCard = getRandomQuizCard();
    solution = randomQuizCard.solution;
    displayRandomQuizCard();
    openForAnswers = true;
});
showAnswerBtn.addEventListener("click", () => {
    answerDisplays.forEach((answer) => {
        if (answer.textContent === solution) {
            console.log("Correct answer is:", solution);
            answer.classList.add("correct-answer");
        }
    });
    openForAnswers = false;
});
answerDisplays.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        if (openForAnswers) {
            if (e.target.textContent === solution) {
                e.target.classList.add("correct-answer");
                correctGuesses++;
                scorePlus.textContent = "Correct: " + correctGuesses;
            } else {
                e.target.classList.add("false-answer");
                falseGuesses++;
                scoreMinus.textContent = "False: " + falseGuesses;
            }
            openForAnswers = false;
        }
    });
});

// FUNCTIONS
function getRandomQuizCard() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    return quizData[randomIndex];
}
function displayRandomQuizCard() {
    questionDisplay.textContent = randomQuizCard.question;
    answer1Display.textContent = randomQuizCard.answer1;
    answer2Display.textContent = randomQuizCard.answer2;
    answer3Display.textContent = randomQuizCard.answer3;
    answer4Display.textContent = randomQuizCard.answer4;
}
function removeHelperClasses() {
    answerDisplays.forEach((answer) => {
        if (answer.classList.contains("correct-answer")) {
            answer.classList.remove("correct-answer");
        }
        if (answer.classList.contains("false-answer")) {
            answer.classList.remove("false-answer");
        }
    });
}

// GETTING THE FIRST QUIZCARD FOR THE START
nextBtn.click();
