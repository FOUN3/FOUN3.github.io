

const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const message = document.getElementById('message');
const questionDiv = document.querySelector('.question');

yesButton.addEventListener('click', () => {
    // Change the message text
    message.textContent = "Yay! I'm so happy! 💕";
    
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('shy').style.display = 'none';
    
    // Create and display a celebration GIF
    const gif = document.createElement('img');
    gif.src = 'https://media.tenor.com/u8FqYvg4dxIAAAAi/transparent-milk-and-mocha.gif'; // Happy celebration GIF
    gif.style.width = '300px';
    gif.style.marginTop = '20px';
    gif.style.borderRadius = '10px';
    questionDiv.appendChild(gif);
    
    // Create hearts animation
    createHeartsAnimation();
});

noButton.style.transition = 'all 0.3s ease';

// Optional: Make the No button move away when hovered over
noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

function createHeartsAnimation() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '1000';
    document.body.appendChild(heartsContainer);
    
    // Create multiple hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart(heartsContainer);
        }, i * 100);
    }
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.animation = `floatUp ${Math.random() * 3 + 3}s ease-in forwards`;
    heart.style.opacity = '0.8';
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Add CSS animation for hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
