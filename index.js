// markOne How well do you know Sameer

var readlineSync = require('readline-sync');


//object highscore: to check if the new highscore is made or not;
var highscore = {
  name: "sameer",
  hiscore: 0,
  scoreProcess() {
    if (score >= highscore.hiscore) {
      console.log("CONGRATULATIONS!!!\nyou have set a new highscore");
      console.log("Please send a screenshot of this score\nso we can update the leaderboards.")
    }
  }
}

// global variable score
var score = 0;

//array of qbject
var questionAnswer = [{
  question: "what is sameer's lasts name:",
  answer: "shaikh"
},
{
  question: "what is sameer's fathers name:",
  answer: "amin"
},
{
  question: "where does sameer lives:",
  answer: "latur"
},
{
  question: "how old is sameer:",
  answer: 25
},
{
  question: "name the fruit that sameer likes:",
  answer: "grapes"
},
]

//opration funtion :check if the answer is correct or not;
function operation(ans, ques) {
  if (ans == questionAnswer[ques].answer) {
    console.log("your answer is correct!");
    score++;
  } else {
    console.log("your answer is wrong!");
  }
}

//welcome function: welcome and get the username;
function welcome() {
  console.log("Do you Know Me??");
  var userName = readlineSync.question("What is your name: ");
  console.log("welcome to sameer's quiz " + userName,);
}

//function quiz: ask question and take answers from the player
function quiz() {
  for (var i = 0; i < questionAnswer.length; i++) {
    var answer = readlineSync.question(questionAnswer[i].question);
    operation(answer, i);
  }
  console.log("your final score is:", +score);
  highscore.scoreProcess();
}


// initailaizing welcome function
welcome();

// initailizing quiz function
quiz();
