
const displayOnPage = document.querySelector("main");
const categoryDisplay = document.querySelector('#category')
const questionDisplay = document.querySelector('#question')
let winHeading = document.createElement('h2');
winHeading.innerText = `Congratulations You've Won the Game!`
let title = document.querySelector("heading")
const startGameButton = document.createElement('button');
const startNewGameButton = document.createElement('button')
let result = document.createElement('h3')
startGameButton.innerText = 'Start Game'
startNewGameButton.innerText = 'Start New Game'
displayOnPage.append(startGameButton);
displayOnPage.append(categoryDisplay);
displayOnPage.append(questionDisplay);
let form = document.getElementById("user-input")
let rules = document.getElementById("rules")
let counter
let scoreNumber = document.getElementById("scoreNumber")
let categoryElement = document.getElementById("category")
let questionElement = document.getElementById("question")

let randomNum
let randomClue;
function randomNumber(){
  return  randomNum = Math.floor(Math.random() * 100)
}
let index
let Category 
let Questions 
let Answers
let titleCategory
let gameArray


function renderGame(){
    fetch(`https://jservice.kenzie.academy/api/clues/?category=${randomNumber()}`)
    .then(response => response.json())
    .then(data => {
        index = 0
        Questions = []
        counter = 0
        displayOnPage.append(scoreNumber)
        scoreNumber.innerHTML = `Players Score : ${counter}`
        console.log(data)
        Questions.push(data.clues[index].question);
        titleCategory = data.clues[index].category.title;
        Category = data.clues[index].category.id
        Answers = data.clues[index].answer;
        gameArray = {Question: Questions, Category, Answers, titleCategory}
        console.log(gameArray.Answers)
        categoryDisplay.innerText = `Category: ${gameArray.titleCategory}`
        questionDisplay.innerText = `Question: 
        ${Questions[index]}`
        
        displayOnPage.append(form)
        displayOnPage.append(categoryDisplay);
        displayOnPage.append(questionDisplay);
        startGameButton.remove()
        startNewGameButton.remove()
        winHeading.remove()
        result.remove()
        rules.remove()
    })
}

function renderContinueGame(){
    fetch(`https://jservice.kenzie.academy/api/clues/?category=${randomNumber()}`)
    .then(response => response.json())
    .then(data => {
        index = 0;
        Questions = [];
        scoreNumber.innerHTML = `Players Score : ${counter}`
        console.log(data)
        Questions.push(data.clues[index].question);
        titleCategory = data.clues[index].category.title;
        Category = data.clues[index].category.id
        Answers = data.clues[index].answer;
        gameArray = {Question: Questions, Category, Answers, titleCategory}
        console.log(gameArray.Answers)
        categoryDisplay.innerText = `Category: ${gameArray.titleCategory}`
        questionDisplay.innerText = `Question: 
        ${Questions[index]}`
        })
}





function stayIncat(){
    fetch(`https://jservice.kenzie.academy/api/clues/?category=${Category}`)
    .then(response => response.json())
    .then(data => {
        index ++
        titleCategory = data.clues[0].category.title;
        Questions.push(data.clues[index].question);
        Answers = data.clues[index].answer;
        gameArray = {Question: Questions,Answers, titleCategory}
        console.log(data)
        console.log(Answers)
        categoryDisplay.innerText = `Category: ${gameArray.titleCategory}`
        questionDisplay.innerText = `Question: 
        ${Questions[index]}`
    })
    

}

const input = document.querySelector("#user-input")
input.addEventListener("submit", event =>{
    event.preventDefault()
    const form = event.target
    const userGuess = form.elements.guess.value.toLowerCase().toString()
    const correctGuess = userGuess === gameArray.Answers.toLowerCase().toString()
    
    //if condition for the length in the correct answer stretch goal
    if (correctGuess) {
        displayOnPage.append(result);
        result.innerText = "Correct!"
        counter += 1;
        scoreNumber.innerHTML = `Players Score: ${counter}`
        form.reset();
        stayIncat();
    }else{
    displayOnPage.append(result);
    result.innerText = "Incorrect! Game Over!"
    counter = 0;
    setTimeout(() => {
        location.reload()}, 3000)
    }
    for(let i = 0; Questions.length > i; i+=1) {
        if(Questions.length >= 2){
          renderContinueGame()
        }
    }
    
    if(counter === 10){
        return renderNewPage()
    }
}
) 
startGameButton.addEventListener('click', renderGame)




function renderNewPage(){

displayOnPage.append(winHeading);
scoreNumber.remove()
categoryElement.remove()
questionElement.remove()
form.remove()

console.log("Its working")
displayOnPage.append(startNewGameButton)
}

startNewGameButton.addEventListener('click',
renderGame)

