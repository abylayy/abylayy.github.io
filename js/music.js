document.addEventListener("DOMContentLoaded", function () {

    var audio = new Audio("music/Қазақстан - Әнұран (kazmuz.kz).mp3");

    document.addEventListener("click", function () {
        //play and pause
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

