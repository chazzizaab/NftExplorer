const questions = [
    "Слышали ли вы о NFT раньше?",
    "Скажите, умеете ли вы рисовать?",
    "Знаете ли вы что такое криптовалюта?",
    "Есть ли у вас опыт в продаже NFT?",
    "Нравится ли вам дизайн нашего сайта?"
];

let currentQuestionIndex = 0;
let answers = { yes: 0, no: 0, dont_know: 0 };

// Инициализация первого вопроса
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-text").innerText = questions[currentQuestionIndex];
    } else {
        showResults();
    }
}

// Обработка ответа
function handleAnswer(answer) {
    // Обновляем счетчик ответов
    answers[answer]++;

    // Загружаем следующий вопрос
    currentQuestionIndex++;
    loadQuestion();
}

// Отображение результатов
function showResults() {
    document.getElementById("question-container").style.display = "none";
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    document.getElementById("yes-count").innerText = answers.yes;
    document.getElementById("no-count").innerText = answers.no;
    document.getElementById("dont-know-count").innerText = answers.dont_know;
}

// Привязываем обработчики событий
document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", (e) => {
        const answer = e.target.getAttribute("data-value");
        handleAnswer(answer);
    });
});

// Обработчик для кнопки "Пройти заново"
document.getElementById('restart-button').addEventListener('click', () => {
    location.reload(); // Перезагружаем страницу
});

// Стартуем
loadQuestion();
