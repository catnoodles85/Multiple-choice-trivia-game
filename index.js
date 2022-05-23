

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");



//clues array:
let questions = [
    {
        question:"Is Coding Ninjas the best online learning platform?",
        answers:[
            {option: "For sure!", answer: true},
            {option: "No, not at all.", answer: false},
        ]
    },
    {
        question:"What is better if you wish to achieve success?", 
        answers:[
            {option: "Hard Work", answer: false},
            {option: "Smart Work", answer: true},
        ]
    },
    {
        question:"Complete the phrase: Time and ____ wait for none.", 
        answers:[
            {option: "Batman", answer: false},
            {option: "Tide", answer: true},
        ]
    }

];

//counters
let currentQuestion = 0;
let score = 0;

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 beginQuiz();









//restart function
function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

restartBtn.addEventListener("click", restart);
//next function

function next() {
    currentQuestion++;
    if(currentQuestion >= 2){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2){
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2){
            next();
        }
    }
    prevBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", next);

//prev function

function prev(){
    currentQuestion--;
    if(currentQuestion <= 0){
        nextBtn.classlist.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2){
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 3){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2){
            next();
        }
    }
    nextBtn.classList.remove("hide");
}

prevBtn.addEventListener("click", prev);

//submit function

function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz!!!"
}

submitBtn.addEventListener("click", submit);