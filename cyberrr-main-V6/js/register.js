document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#video-background video');
    const choiceForm = document.getElementById('choice-form');
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');

    video.addEventListener('canplaythrough', function() {
        // Отображаем форму выбора
        choiceForm.style.display = 'block';
    });

    // Обработчик для кнопки "Войти"
    document.getElementById('login-button').addEventListener('click', function() {
        choiceForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Обработчик для кнопки "Зарегистрироваться"
    document.getElementById('register-button').addEventListener('click', function() {
        choiceForm.style.display = 'none';
        registrationForm.style.display = 'block';
    });

    // Обработчик для кнопки "Закрыть"
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function() {
            loginForm.style.display = 'none';
            registrationForm.style.display = 'none';
            choiceForm.style.display = 'block';
        });
    });

    // Обработчик для кнопки "Submit" в форме входа
    document.querySelector('#login-form-submit').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        // Здесь можно добавить логику для обработки данных формы входа
        window.location.href = 'main.html'; // Переход на другую страницу
    });

    // Обработчик для кнопки "Submit" в форме регистрации
    document.querySelector('#registration-form-submit').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        // Здесь можно добавить логику для обработки данных формы регистрации
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Пример отправки данных на сервер через AJAX
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Регистрация прошла успешно!');
                window.location.href = 'main.html'; // Переход на другую страницу
            } else {
                alert('Ошибка регистрации: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при регистрации.');
        });
    });
});
