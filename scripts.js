document.addEventListener("DOMContentLoaded", function () {
    // Set the background change after 2 seconds
    setTimeout(function () {
        document.getElementById('body').style.background = "url('image1.png') no-repeat center center/cover";
    }, 5000); // 2 seconds delay for background change

    // Home content animation (fade-in) after 2 seconds
    setTimeout(function () {
        const homeSection = document.getElementById('home');
        homeSection.style.opacity = 1;
        homeSection.style.transform = "translateY(0)";
    }, 3000); // Animation delay

    // Countdown logic for registration deadline
    const deadline = new Date("2025-01-05T23:59:59").getTime();
    const countdownElem = document.getElementById("countdown");
    const countdownElem2 = document.getElementById("countdown2");
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");

    if (!form || !message || !countdownElem) {
        console.error("Required elements (form, message, countdown) not found!");
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); 
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElem.textContent = `Registration closes in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElem.textContent = "Registration has closed!";
            form.style.display = "none";
        }
    }
    setInterval(updateCountdown, 1000);


    function updateCountdown2() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60)) / 1000);
            const seconds = Math.floor((timeLeft % (1000)) / 1000);

            countdownElem2.textContent = `Registration closes in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElem2.textContent = "Registration has closed!";
            form.style.display = "none";
        }
    }



    setInterval(updateCountdown2, 1000);





  
});
// Simulating the team count increasing over time
let teamCount = document.getElementById('counter');

function updateTeamCount() {
    // Increase the team count (for demo, you can fetch real data from a server here)
    if (teamCount < 3) { // Let's assume there are 50 teams maximum for the demo
        teamCount++;
        document.getElementById('team-count').textContent = teamCount;
    }
}

// Function to animate the team count
function animateTeamCount() {
    let countElement = document.getElementById('team-count');
    let currentCount = parseInt(countElement.textContent);
    let targetCount = teamCount;

    if (currentCount < targetCount) {
        let interval = setInterval(() => {
            if (currentCount < targetCount) {
                currentCount++;
                countElement.textContent = currentCount;
            } else {
                clearInterval(interval);
            }
        }, 3000); // Adjust speed of the count increase
    }
}

// For demonstration, we simulate team registrations
setInterval(() => {
    updateTeamCount();
    animateTeamCount();
}, 480); // Increase count every 2 seconds for demo purposes
