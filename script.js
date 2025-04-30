const questions = [
    {
      question: "What is the capital of Bangladesh?",
      options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
      answer: "Dhaka"
    },
    {
      question: "2, 4, 8, 16, ?",
      options: ["18", "32", "24", "20"],
      answer: "32"
    },
    {
      question: "Who wrote the theory of relativity?",
      options: ["Newton", "Einstein", "Tesla", "Bohr"],
      answer: "Einstein"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    if (currentIndex >= questions.length) {
      questionElement.textContent = "Game Over!";
      answersElement.innerHTML = "";
      return;
    }
  
    const q = questions[currentIndex];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      answersElement.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    if (selected === questions[currentIndex].answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    currentIndex++;
    loadQuestion();
  }
  
  loadQuestion();
  