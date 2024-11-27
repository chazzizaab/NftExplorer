document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('user-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const video = document.querySelector('#video-background video');

    console.log(userIcon, dropdownMenu); // Проверим, нашли ли мы элементы

    userIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное действие ссылки
        dropdownMenu.classList.toggle('show'); // Переключаем класс для отображения меню
    });

    // Закрытие меню при клике вне его
    window.addEventListener('click', (event) => {
        if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
    video.addEventListener('canplaythrough', function() {
        // Отображаем форму выбора
        choiceForm.style.display = 'block';
    });


});
