// Array to hold the quiz questions
var questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Neptune", "Earth"],
      answer: "Jupiter"
    }
  ];
  
  var currentQuestionIndex = 0;
  var timeLeft = 60;
  var timerInterval;
  var score = 0;
  
  var startButton = document.getElementById("start-btn");
  var questionContainer = document.getElementById("question-container");
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var resultContainer = document.getElementById("result-container");
  var resultElement = document.getElementById("result");
  var timerElement = document.getElementById("timer");
  var scoreElement = document.getElementById("score");
  var initialsElement = document.getElementById("initials");
  var saveButton = document.getElementById("save-btn");
  
  function startQuiz() {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
  }
  
  function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    for (var i = 0; i < question.choices.length; i++) {
      var choice = document.createElement("li");
      choice.textContent = question.choices[i];
      choice.setAttribute("data-index", i);
      choice.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choice);
    }
  }
  
  function checkAnswer(event) {
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.textContent;
    var question = questions[currentQuestionIndex];
  
    if (selectedAnswer === question.answer) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
      timeLeft -= 10;
    }
  
    resultContainer.style.display = "block";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion, 1000);
    } else {
      endQuiz();
    }
  }
  
  function updateTimer() {
    timeLeft--;
    timerElement.textContent = "Time: " + timeLeft;
  
    if (timeLeft <= 0) {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.style.display = "none";
    resultContainer.style.display = "none";
    scoreElement.textContent = "Final Score: " + score;
    initialsElement.addEventListener("input", enableSaveButton);
    saveButton.addEventListener("click", saveScore);
    document.getElementById("initials-container").style.display = "block";
  }
  
  function enableSaveButton() {
    saveButton.disabled = initialsElement.value === "";
  }
  
  function saveScore() {
    var initials = initialsElement.value;
    // Save the score and initials to the desired location or perform any desired action
  }
  
  startButton.addEventListener("click", startQuiz);
  