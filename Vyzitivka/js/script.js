// Отримуємо елементи кнопок і секцій
const aboutBtn = document.getElementById('about-btn');
const featuresBtn = document.getElementById('features-btn');
const reviewsBtn = document.getElementById('reviews-btn');

const aboutSection = document.getElementById('about');
const featuresSection = document.getElementById('features');
const reviewsSection = document.getElementById('reviews');

// Додаємо обробники подій для кнопок
aboutBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('hidden'); // Показуємо/ховаємо секцію
});

featuresBtn.addEventListener('click', () => {
    featuresSection.classList.toggle('hidden'); // Показуємо/ховаємо секцію
});

reviewsBtn.addEventListener('click', () => {
    reviewsSection.classList.toggle('hidden'); // Показуємо/ховаємо секцію
});

// Для кнопки "Завантажити"
const downloadBtn = document.getElementById('download-btn');
const survivalGoal = document.getElementById('survival-goal');

downloadBtn.addEventListener('click', () => {
    document.body.classList.add('night'); // Змінюємо тему
    survivalGoal.style.display = 'block'; // Показуємо повідомлення
    setTimeout(() => {
        document.body.classList.remove('night'); // Відновлюємо колір
        survivalGoal.style.display = 'none'; // Ховаємо повідомлення через 3 секунди
    }, 3000);
});
