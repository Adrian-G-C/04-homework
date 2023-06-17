var quizQuestions = [
    {
      question: "Question 1: What is the capital of France?",
      choices: ["Paris", "Madrid", "Rome", "London"],
      correctAnswer: "Paris"
    },
    {
      question: "Question 2: What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Neptune", "Mars"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Question 3: What is the symbol for the chemical element oxygen?",
      choices: ["O", "C", "H", "N"],
      correctAnswer: "O"
    },
    {
      question: "Question 4: Who is the author of the Harry Potter book series?",
      choices: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
      correctAnswer: "J.K. Rowling"
    },
    {
      question: "Question 5: Which country won the FIFA World Cup in 2018?",
      choices: ["France", "Brazil", "Germany", "Argentina"],
      correctAnswer: "France"
    }
  ];
  
  
  var startBtn = document.getElementById("start-btn");
  var quizScreen = document.getElementById("quiz-screen");
  var questionText = document.getElementById("question-text");
  var choicesContainer = document.getElementById("choices");
  var message = document.getElementById("message");
  var nextBtn = document.getElementById("next-btn");
  var gameOverScreen = document.getElementById("game-over-screen");
  var finalScore = document.getElementById("final-score");
  var initialsForm = document.getElementById("initials-form");
  var initialsInput = document.getElementById("initials");
  
  var currentQuestionIndex = 0;
  var timer;
  var timeLeft;
  var score = 0;
  
  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", showNextQuestion);
  initialsForm.addEventListener("submit", saveScore);
  
  function startQuiz() {
    startBtn.style.display = "none";
    quizScreen.style.display = "block";
    timeLeft = 60;
    score = 0;
    displayQuestion();
    startTimer();
  }
  
  function displayQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", function() {
        checkAnswer(choice);
      });
      choicesContainer.appendChild(choiceButton);
    }
  }
  
  function checkAnswer(selectedChoice) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
      score++;
      message.textContent = "Correct!";
    } else {
      timeLeft -= 10; 
      message.textContent = "Incorrect!";
    }
  
    if (currentQuestionIndex === quizQuestions.length - 1) {
      endQuiz();
    } else {
      currentQuestionIndex++;
      nextBtn.style.display = "block";
    }
  }
  
  function showNextQuestion() {
    nextBtn.style.display = "none";
    message.textContent = "";
    displayQuestion();
  }
  
  function startTimer() {
    timer = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(timer);
    quizScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    finalScore.textContent = score;
  }
  
  function saveScore(event) {
    event.preventDefault();
    var initials = initialsInput.value;
  }
  