
// Add box-shadow to header on scroll
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");   
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {            
            header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        } else {            
            header.style.boxShadow = "none";
        }
    });
});


// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.querySelector(".count-down");

    if (!countdownElement) return;

    const targetDate = new Date("2025-05-13T23:59:59").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Time's up!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        const formattedCountdown = `${String(days).padStart(2, '0')}: ${String(hours).padStart(2, '0')}: ${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`;
        countdownElement.textContent = formattedCountdown;    
    }, 1000);
});