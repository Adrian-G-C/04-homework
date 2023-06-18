var questions = [
    {
      question: "Question 1: Who is Arsenal's all-time leading goal scorer?",
      options: ["Dennis Bergkamp", "Ian Wright", "Thierry Henry", "Robin van Persie"],
      answerIndex: 2
    },
    {
      question: "Question 2: Which manager led Arsenal to their famous 'Invincibles' season?",
      options: ["Arsène Wenger", "George Graham", "Herbert Chapman", "Bertie Mee"],
      answerIndex: 0
    },
    {
      question: "Question 3: Who is the current captain of Arsenal FC?",
      options: ["Pierre-Emerick Aubameyang", "Bukayo Saka", "Héctor Bellerín", "Granit Xhaka"],
      answerIndex: 3
    },
    {
      question: "Question 4: Which stadium is the home ground of Arsenal FC?",
      options: ["Old Trafford", "Anfield", "Emirates Stadium", "Stamford Bridge"],
      answerIndex: 2
    },
    {
      question: "Question 5: Who is Arsenal's most expensive signing in terms of transfer fee?",
      options: ["Mesut Özil", "Nicolas Pépé", "Alexandre Lacazette", "Pierre-Emerick Aubameyang"],
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