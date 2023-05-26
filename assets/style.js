var sportsQuestions = [
    {
        question: "Which NFL team won Super Bowl 50: The Golden Super Bowl?",
        answers: ["New England Patriots", "Dallas Cowboys", "Denver Broncos", "Green Bay Packers"],
        correctAnswer: "Denver Broncos"
    },    
    {
        question: "Which NBA team is the only one to win two separate 3-Peats?",
        answers: ["Los Angeles Lakers", "Boston Celtics", "San Antonio Spurs","Chicago Bulls"],
        correctAnswer: "Chicago Bulls"
    },
    {
        question: "Which MLB team starred the pitching threat of John Smoltz, Tom Glavine, and Greg Maddoux?",
        answers: ["New York Yankees", "Atlanta Braves", "Boston Red Sox", "New York Mets"],
        correctAnswer: "Atlanta Braves"
    },
];

let currentQuestion = 0;
let talley = 0;

function showQuestion(){
    var questionEl = document.getElementById("question");
    var answerEl = document.getElementById("answers");
    var buttonEl = document.getElementById("button");
    var finalTalleyEl = document.getElementById("finalresults");

    var currentQuestionObject = questions[currentQuestion];
    questionEl.textContent = currentQuestionObject.question;

    answerEl.innerHTML = "";
    currentQuestionObject.answers.forEach((answers, i) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = answers;
        answerButton.addEventListener("click", function(){
            chosenAnswer(choice, finalTalleyEl);
        });

    answerEl.appendChild(answerButton);
        });
        submitButton.addEventListener("click", function(){
            nextQuestion(finalTalleyEl);
        });
}

function chosenAnswer(answer, finalTalleyEl){
    var currentQuestionObject = questions[currentQuestion];
    if(choice === currentQuestionObject.correctAnswer) {
        finalTalleyEl.textContent = "Correct!";
        talley++;
    } else {
        finalTalleyEl.textContent = "Incorrect!. The correct answer is: " + currentQuestionObject.correctAnswer;
    }
}


function nextQuestion(finalTalleyEl) {
    finalTalleyEl.textContent = "";
    currentQuestion++;

    if(currentQuestion ===questions.length){
        showFinalTalley();
    }else{
        displayQuestion();
    }
}

function showFinalTalley(){
    var quizContainer = document.getElementById("Quiz-box");
    quizContainer.innerHTML = "";

    var finalScoreEl = document.createElement("h1");
    finalScoreEl.textContent = "Quiz is complete. Your Score: " + score + "out of" + questions.length;
    quizContainer.appendChild(finalScoreEl);
}

displayQuestion


for (let i = 0; i < sportsQuestions.length; i++) {
    writeQuestion(questions[i]);
    
}

function writeQuestion(questionObj){
    var question = questionObj.question;
    var answers = questionObj.answers;
    var correctAnswer = questionObj.correctAnswer;
    
    console.log(question);
    for (let i = 0; i < answers.length; i++) {
        console.log((i + 1) + "." + answers[i]);
        
    }

    var choice = prompt("Select the correct choice:");
    var selectedAnswer = answers[choice - 1];

    if (selectedAnswer === correctAnswer) {
        console.log("Correct");
        } else {
            console.log("Incorrect. The correct answer is:", correctAnswer);
        }
    };

var button = document.getElementById("button");

button.addEventListener("click", function() {
    console.log("button clicked!");
});