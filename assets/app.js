var questions = [
  {
    question: "Question 1: What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answerIndex: 2
  },
  {
    question: "Question 2: Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "India", "Thailand"],
    answerIndex: 1
  },
  {
    question: "Question 3: What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answerIndex: 3
  },
  {
    question: "Question 4: Which African country is known as the 'Pearl of Africa'?",
    options: ["Egypt", "Kenya", "Uganda", "South Africa"],
    answerIndex: 2
  },
  {
    question: "Question 5: Which mountain range is the longest in the world?",
    options: ["Rocky Mountains", "Himalayas", "Andes", "Alps"],
    answerIndex: 1
  },
];

  
  
  var currentQuestionIndex = 0;
  var score = 0;
  var timeLeft = 60;
  var timerId;
  
  var startBtn = document.getElementById("start-btn");
  var questionNumberSpan = document.getElementById("question-number");
  var questionText = document.getElementById("question-text");
  var optionsContainer = document.getElementById("options-container");
  var feedbackText = document.getElementById("feedback");
  var endContainer = document.getElementById("end-container");
  var scoreSpan = document.getElementById("score");
  var initialsInput = document.getElementById("initials");
  var saveBtn = document.getElementById("save-btn");
  
  function startQuiz() {
    var startContainer = document.getElementById("start-container");
    startContainer.classList.add("hide");
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.classList.remove("hide");
    startTimer();
    displayQuestion();
  }

  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionNumberSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach(function(option, index) {
      var optionBtn = document.createElement("button");
      optionBtn.classList.add("option-btn");
      optionBtn.textContent = option;
      optionBtn.addEventListener("click", function() {
        checkAnswer(index);
      });
      optionsContainer.appendChild(optionBtn);
    });
    document.getElementById("timer").textContent = timeLeft;
  }
  
  
  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionNumberSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach(function(option, index) {
      var optionBtn = document.createElement("button");
      optionBtn.classList.add("option-btn");
      optionBtn.textContent = option;
      optionBtn.addEventListener("click", function() {
        checkAnswer(index);
      });
      optionsContainer.appendChild(optionBtn);
    });
  }
  
  function checkAnswer(selectedIndex) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answerIndex) {
      score += 10;
      feedbackText.textContent = "Correct!";
    } else {
      score -= 10;
      timeLeft -= 10;
      feedbackText.textContent = "Wrong!";
    }
  
    feedbackText.classList.remove("hide");
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(displayQuestion, 1000);
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timerId);
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.classList.add("hide");
    endContainer.classList.remove("hide");
    scoreSpan.textContent = score;
  }
  
  function startTimer() {
    timerId = setInterval(function() {
      timeLeft--;
      if (timeLeft >= 0) {
        document.getElementById("timer").textContent = timeLeft;
      } else {
        endQuiz();
      }
    }, 1000);
  }
  
  startBtn.addEventListener("click", startQuiz);
  
  saveBtn.addEventListener("click", function() {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
      alert("Score saved!");
    }
  });  