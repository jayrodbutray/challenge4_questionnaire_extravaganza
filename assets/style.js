var triviaContainer = $("GameMode");
var timerElement = $("Timer");
var resultsContainer = $("BraggingResults");
var finalTalley = $("Final Talley of YOUR Sports Knowledge");
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
function createTriviaQuiz()