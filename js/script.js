const aboutBtn = document.getElementById('about-btn');
const featuresBtn = document.getElementById('features-btn');
const reviewsBtn = document.getElementById('reviews-btn');

const aboutSection = document.getElementById('about');
const featuresSection = document.getElementById('features');
const reviewsSection = document.getElementById('reviews');

aboutBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('hidden');
});

featuresBtn.addEventListener('click', () => {
    featuresSection.classList.toggle('hidden');
});

reviewsBtn.addEventListener('click', () => {
    reviewsSection.classList.toggle('hidden');
});

const downloadBtn = document.getElementById('download-btn');
const survivalGoal = document.getElementById('survival-goal');

downloadBtn.addEventListener('click', () => {
    document.body.classList.add('night');
    survivalGoal.style.display = 'block';
    setTimeout(() => {
        document.body.classList.remove('night');
        survivalGoal.style.display = 'none';
    }, 3000);
});

const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
