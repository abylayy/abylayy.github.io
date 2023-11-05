//button
document.getElementById("historyButton").addEventListener("click", function () {

    window.location.href = "History.html";
});

document.getElementById("teamButton").addEventListener("click", function () {

    window.location.href = "Team.html";
});

//tab
function showTab(tabId) {

    //hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

//display selected tab
document.getElementById('tab1').addEventListener('click', function () {
    showTab('content1');
});

document.getElementById('tab2').addEventListener('click', function () {
    showTab('content2');
});

showTab('content1');

//animations
const homeHeader = document.querySelector('#home h1');

homeHeader.addEventListener('mouseover', () => {
    homeHeader.style.transform = 'scale(1.1)';
    homeHeader.style.transition = 'transform 0.3s ease-in-out';
});

homeHeader.addEventListener('mouseleave', () => {
    homeHeader.style.transform = 'scale(1)';
    homeHeader.style.transition = 'transform 0.3s ease-in-out';
});

const homeHeader2 = document.querySelector('#home p');

homeHeader2.addEventListener('mouseenter', () => {
    homeHeader2.style.transform = 'scale(1.1)';
    homeHeader2.style.transition = 'transform 0.3s ease-in-out';
});

homeHeader2.addEventListener('mouseleave', () => {
    homeHeader2.style.transform = 'scale(1)';
    homeHeader2.style.transition = 'transform 0.3s ease-in-out';
});

const imgHover = document.querySelector('#kff-logo');

imgHover.addEventListener('mouseover', () => {
    imgHover.setAttribute('title', 'KFF Logo');
});

imgHover.addEventListener('mouseleave', () => {
    imgHover.removeAttribute('title');
});

//rotate
function animateLogo() {
    const logo = document.getElementById('kff-logo');
    logo.style.transition = 'transform 0.5s';
    logo.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        logo.style.transition = 'none';
        logo.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            logo.style.transition = 'transform 0.5s';
        });
    }, 500);
}

window.onload = function () {
    const logo = document.getElementById('kff-logo');

    logo.addEventListener('click', animateLogo);
};

