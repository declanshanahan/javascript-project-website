const questions = [
    {
        question: "Which player holds the record for most goals scored for Arsenal?",
        options: ["Thierry Henry", "Ian Wright", "Dennis Bergkamp", "Robin van Persie"],
        answer: "Thierry Henry"
    },
    {
        question: "In which year did Arsenal move to the Emirates Stadium?",
        options: ["2004", "2006", "2008", "2010"],
        answer: "2006"
    },
    // Add more questions here
];

// Quiz Container Elements
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submitBtn');
const resultContainer = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

// Function to display current question
function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionContainer.textContent = currentQ.question;
    
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'option';
        radioBtn.value = option;
        optionsContainer.appendChild(radioBtn);
        optionsContainer.appendChild(label);
    });
}

// Function to check user's answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const answer = selectedOption.value;
    if (answer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Function to display quiz result
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
}

// Event listener for submit button
submitButton.addEventListener('click', checkAnswer);

// Display first question
displayQuestion();