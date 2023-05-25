var sportsQuestions = [
    {
        question: "Which NFL team won Super Bowl 50: The Golden Super Bowl?",
        answers: {
            a: "New England Patriots",
            b: "Dallas Cowboys",
            c: "Denver Broncos",
            d: "Green Bay Packers"
        },
        correctAnswer: "c"
    },
    {
        question: "Which NBA team is the only one to win two separate 3-Peats?",
        answers: {
            a: "Los Angeles Lakers",
            b: "Boston Celtics",
            c: "San Antonio Spurs",
            d: "Chicago Bulls"
        },
        correctAnswer: "d"
    },
    {
        question: "Which MLB team starred the pitching threat of John Smoltz, Tom Glavine, and Greg Maddoux?",
        answers: {
            a: "New York Yankees",
            b: "Atlanta Braves",
            c: "Boston Red Sox",
            d: "New York Mets"
        },
        correctAnswer: "b"
    },
]

generateTriviaQuestions(sportsQuestions, triviaContainer, resultsContainer, startButton);

function generateTriviaQuestions(questions, triviaContainer, resultsContainer, startButton){
    function showQuestions (questions, triviaContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];

            for(letter in questions[i].answers){
                
    }
}


var triviaContainer = $("GameMode");
var resultsContainer = $("BraggingResults");
var startButton = $("startsportstrivia");







var gameStarted = false;
var timerElement = $("Timer");
var generateTriviaQuestions
var answers;

var finalTalley = $("Final Talley of YOUR Sports Knowledge");



startButton.on("click", function(){
    triviaContainer.style.display = "block";
    gameStarted = true;

    renderGuessToBrowser();
    renderTimerToBrowser();
    var interval = setInterval(function(){
        if (gameStarted){
            return;
        }
        timerElement --;
        if (timerElement <= 0){
            clearInterval(interval);
        }
        renderTimerToBrowser();
    }, 1000);

});

function renderGuessToBrowser(){
    triviaContainer.textContent = guess;
}

function renderTimerToBrowser(){
    timerHolder.textContent = "Timer left" + timerElement;
}
var sportsQuestions = [
    {
        question: "Which NFL team won Super Bowl 50: The Golden Super Bowl?",
        answers: {
            a: "New England Patriots",
            b: "Dallas Cowboys",
            c: "Denver Broncos",
            d: "Green Bay Packers"
        },
        correctAnswer: "c"
    },
    {
        question: "Which NBA team is the only one to win two separate 3-Peats?",
        answers: {
            a: "Los Angeles Lakers",
            b: "Boston Celtics",
            c: "San Antonio Spurs",
            d: "Chicago Bulls"
        },
        correctAnswer: "d"
    },
    {
        question: "Which MLB team starred the pitching threat of John Smoltz, Tom Glavine, and Greg Maddoux?",
        answers: {
            a: "New York Yankees",
            b: "Atlanta Braves",
            c: "Boston Red Sox",
            d: "New York Mets"
        },
        correctAnswer: "b"
    }