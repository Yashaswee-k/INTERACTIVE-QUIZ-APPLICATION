const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyperloop Machine Language",
    c: "Helicopters Terminals Motorboats Lamborghinis",
    d: "None of the above",
    correct: "a"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
  const currentData = quizData[currentQuiz];
  questionEl.textContent = currentData.question;
  a_text.textContent = currentData.a;
  b_text.textContent = currentData.b;
  c_text.textContent = currentData.c;
  d_text.textContent = currentData.d;
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
}

function selectAnswer(answer) {
  const correct = quizData[currentQuiz].correct;
  if (answer === correct) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `❌ Incorrect. Correct answer is: "${quizData[currentQuiz][correct]}"`;
    feedbackEl.style.color = "red";
  }
  nextBtn.style.display = "inline-block";
}

function loadNextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("quiz").innerHTML = `
    <h2>Your Score: ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Play Again</button>
  `;
}

loadQuiz();
