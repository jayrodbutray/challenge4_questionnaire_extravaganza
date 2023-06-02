var sportsQuestions = [
    {
       question : "Which NFL team won Super Bowl 50: The Golden Super Bowl?",
        answers : ["New England Patriots", "Dallas Cowboys", "Denver Broncos", "Green Bay Packers"],
        correctAnswer : "Denver Broncos"
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
console.log(sportsQuestions);
/*When complete a user should be able to load a page and start a quiz with questions and answers and have a score tallied for right and wrong answers.
//I have a quiz for you to take with 3 questions, each of which have 4 answers. Im going to tally your right and wrong answers at the end and give you a score.
//Here is the first question....of these 4 answers, which is correct...i tell you if right or wrong. Next question...of these 4 answers...
//you answered all 3 correctly for 3 right answers and zero wrong answers.
//1)present the game
//2)ask the user to start the game
2.1) give user button to start the game
2.2) when user clicks button we need to take them to the game and hide previous screen

3) give user the first question and the answers
4) wait for user input
4.1) when user clicks a button, check if answer is correct
5) repeat step 3 until questions exhausted
6) tally correct answers and display user score

*/
var beginButton = document.getElementById("button");
beginButton.addEventListener("click", function (){
    beginButton.style.display = "none";
    document.getElementById("introtext").style.display = "none";
    showQuestion();
    startTimer();
}); 
function startTimer(){
    clearTimeout();
    timer = setInterval(function(){
    document.getElementById("timerstart").innerHTML="00:"+ sec;
        sec--;
        if (sec < 0) {
            alert("Time is up!");
            clearInterval(timer);
            endSportsQuiz();
        }
    }, 1000);
}

var currentQuestion = 0;
var talleyRight = 0
var talleyWrong = 0
var score = 0
var sec = 59;
var timer;
function showQuestion(){
    //fetch all the elements from the html that we need for this function
    var questionEl = document.getElementById("question");
    var answerEl = document.getElementById("answers");
    var finalTalleyEl = document.getElementById("finalresults");
//fetch our current question data
    var currentQuestionObject = sportsQuestions[currentQuestion];
    if(currentQuestionObject === undefined){
            clearInterval(timer);
            endSportsQuiz();
            return
        }
    //sending our question to appropriate element in the html
    console.log(currentQuestionObject);
    questionEl.textContent = currentQuestionObject.question;
    //remove everything from our answer element in prep to add new things
    answerEl.innerHTML = "";
    //loop through all answers of our current questions
    for(let i = 0; i< currentQuestionObject.answers.length; i++){
        //create a button for an answer element
        var answerButton = document.createElement("button");
        
        //creating text for current answer
        console.log(currentQuestionObject.answers, i, currentQuestionObject.answers[i]);
        answerButton.textContent = currentQuestionObject.answers[i];
        answerButton.addEventListener("click", function(){
            chosenAnswer(this.textContent, finalTalleyEl);
          
            setTimeout(function(){
                currentQuestion++
                showQuestion();
                finalTalleyEl.textContent = "";
                
            },1000);
            
        });
        
        answerEl.appendChild(answerButton);  
    } 
}

function chosenAnswer(answer, finalTalleyEl){
    console.log(answer);
    var currentQuestionObject = sportsQuestions[currentQuestion];
    if(answer === currentQuestionObject.correctAnswer) {
        finalTalleyEl.textContent = "Correct!";
        talleyRight++;
        
    } else {
        finalTalleyEl.textContent = "Incorrect! The correct answer is: " + currentQuestionObject.correctAnswer;
        talleyWrong--;
    }
    };


function endSportsQuiz(){


localStorage.setItem("correctAnswers" , talleyRight);
localStorage.setItem("incorrectAnswers" , talleyWrong);

console.log("Quiz Ended!");
console.log("Correct answers: " + talleyRight);
console.log("Incorrect answers: " + talleyWrong);

    var quizContainer = document.getElementById("Quiz-box");
    quizContainer.innerHTML = "";
    var finalscoreEl = document.createElement("h1");
    finalscoreEl.textContent = "Quiz is complete. Your Score: " + score;
    score = document.getElementById("finalresults");
    sportsQuestions.length;
    quizContainer.appendChild(finalscoreEl);
}

//var storedTalleyRight = localStorage.getItem("correctAnswers");
//var storedTalleyWrong = localStorage.getItem("incorrectAnswers");



