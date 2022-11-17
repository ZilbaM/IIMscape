const bgMusic = document.querySelector(".bg-music");

let soundIcon = document.querySelector("#sound-icon")


soundIcon.addEventListener("click", () => {

    if (bgMusic.paused){
        bgMusic.volume = 0.3;
        bgMusic.play();
    } else{
        bgMusic.pause();
    }
    soundIcon.classList.toggle('fa-volume-high')
    soundIcon.classList.toggle('fa-volume-xmark')

});