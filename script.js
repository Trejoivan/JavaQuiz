const quizData = [
  {
    question: 'Define a HEAP',
    a: 'Location within JS v8 engine that will return your code in binary.',
    b: 'A function being called withing a function.',
    c: 'Place within the JS v8 engine that stores objects of the code.',
    d: 'A long list of code that that a function will repeat until certain actions are meet.',
    correct: 'c',
  },
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question: 'Which one of these are examples of Camel-Case ',
    a: '__iamhere__',
    b: 'IAmHere',
    c: 'iamhere',
    d: 'iAmHere',
    correct: 'd',
  },
  {
    question: 'What does the acronym AST mean?',
    a: 'async syntax time',
    b: 'abstract syntax tree',
    c: 'abstract summarized time',
    d: 'none',
    correct: 'b',
  },
  {
    question:
      'a web ____________________ that provides a way for different components of software to interact and exchange data or functionality using common web communication protocols',
    a: 'automated programming interface',
    b: 'application programming interface',
    c: 'apple pay ivan',
    d: 'appliance people intel',
    correct: 'b',
  },
  {
    question: 'Three types of scopes withing JS',
    a: 'inner, outer, remote',
    b: 'local, global, inner',
    c: 'global, function, block',
    d: 'fuction, internal, global',
    correct: 'c',
  },
  {
    question: 'An input of the user always returns a ______',
    a: 'String',
    b: 'Response',
    c: 'Array',
    d: 'Number or String depening on the input',
    correct: 'a',
  },
  {
    question: 'when is .length used?',
    a: 'Booleans',
    b: 'Arrays',
    c: 'Strings',
    d: 'Sets',
    correct: 'a',
  },
  {
    question: 'when should you use .size?',
    a: 'Arrays',
    b: 'Booleans',
    c: 'Sets',
    d: 'Strings',
    correct: 'c',
  },
  {
    question:
      "A new set is named 'newSet'. You have to check if said set has an element named 'Pizza'. Which of the below, are valid ways of checking?",
    a: "console.log(newSet.ifhas('Pizza')",
    b: "console.log(newSet('Pizza')",
    c: "newSet.has('Pizza')",
    d: "console.log(newSet.has('Pizza')",
    correct: 'd',
  },
  {
    question: '3 methods to tell JavaScript what the this. keyword should be',
    a: 'Set, Apply, Append',
    b: 'Set, Apply, Bind',
    c: 'Call, Append, Bind',
    d: 'Call, Apply, Bind',
    correct: 'd',
  },
  {
    question: 'How do you clean an entire set named orderSet',
    a: 'clear(orderSet)',
    b: 'orderSet.del();',
    c: 'delete.clear(orderSet)',
    d: 'orderSet.clear();',
    correct: 'd',
  },
  {
    question:
      'forEach loop v.s for of loop. Whats a benefit of forEach has that for-loop does not?',
    a: 'In a forEach loop ,a Set is automatically created',
    b: 'In a forEach loop you cannot escape the loop until complete.',
    c: 'In a forEach loop it does the same work but in a shroter line of code',
    d: 'In a forEach loop you are able to access each item being looped individually',
    correct: 'd',
  },
  {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2 id= 'results' > You answered ${score} / ${quizData.length} questions correctly </h2>

            <button onclick= "location.reload()">Reload</button>
        `;
    }
  }
});
// Structor for new questions and answers
/*
{
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correct: 'c',
  },
  */
