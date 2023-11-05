//Set the target time
const countDownDate = new Date("November 17, 2023 21:00:00").getTime();

const x = setInterval(function () {
    // Get the current date
    const now = new Date().getTime();

    // Calculate time until match
    const distance = countDownDate - now;

    // Calculate the remaining time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("timer").innerHTML =
        `<div class="countdown-element">${days} D</div>` +
        `<div class="countdown-element">${hours} H</div>` +
        `<div class="countdown-element">${minutes} M</div>` +
        `<div class="countdown-element">${seconds} S</div>`;

    // Check if the countdown has expired
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

