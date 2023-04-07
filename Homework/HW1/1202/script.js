const myQuestions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "d",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "c",
  },
];

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const submitBtn = document.querySelector("#submit");

function showCards() {
  let quizHeader = document.getElementById("quiz-header");
  const cardEls = [];
  myQuestions.map((data, index) => {
    const card = [];
    if (data.multi == true) {
    }
    for (key in data.answers) {
      let listAnswer = `<li>
                                <input type='radio' name='question${index}' value='${key}' id='${data.answers[key]}' class="answer" /> 
                                <label for='${data.answers[key]}'> ${key}: ${data.answers[key]}</label>
                              </li>`;
      card.push(listAnswer);
    }
    let listCards = `<div class='quiz'>
                            <h4 class="question">${index + 1}. ${
      data.question
    } </h4>
                            <ul class="answers"> ${card.join("")} </ul>
                        </div>`;
    cardEls.push(listCards);
    quizHeader.innerHTML = cardEls.join("");
  });
}
showCards();

let quiz = document.querySelectorAll(".quiz");
let currentQuiz = 0;
function checkDisplay(index) {
  currentQuiz = index;
  if (currentQuiz === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }
  if (currentQuiz === quiz.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}
function loadQuestion(index) {
  quiz[currentQuiz].classList.remove("active-card");
  quiz[index].classList.add("active-card");

  checkDisplay(index);
}

loadQuestion(currentQuiz);

prevBtn.addEventListener("click", function () {
  loadQuestion(currentQuiz - 1);
});
nextBtn.addEventListener("click", function () {
  loadQuestion(currentQuiz + 1);
});

submitBtn.addEventListener("click", function () {
  let correctTotal = 0;
  const answers = document.querySelectorAll(".answers");
  const result = document.querySelector("#resultScore");

  myQuestions.forEach((data, index) => {
    let answer = answers[index];
    let b = "";
    let checkAnswer = answer.querySelector(
      `input[name=question${index}]:checked`
    );
    let checkAnswer1 = answer.querySelectorAll(
      `input[name=question${index}]:checked`
    );
    console.log(checkAnswer1);

    for (var j = 0; j < checkAnswer1.length; j++) {
      console.log(checkAnswer1[j].value);
      b += checkAnswer1[j].value;
    }
    console.log(b);
    if (b == myQuestions[index].correctAnswer) {
      correctTotal++;
    }
  });
  result.innerHTML = `${correctTotal} out of ${myQuestions.length}`;
  submitBtn.disabled = "true";
  setTimeout(function () {
    submitBtn.style.display = "none";
  }, 2000);
  submitBtn.disabled = "true";
});
