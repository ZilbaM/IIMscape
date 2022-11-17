gsap.registerPlugin('TextPlugin');

// const replace = 'Bla bla'
// gsap.to('#code', {
//     duration: 3,
//     text: replace,
//     ease: 'none'
// })

let introBtn = document.getElementById('intro-btn')
const matrixSound = document.querySelector("#matrix-sound");

introBtn.addEventListener('click', () => {
    createTransition()
    if (matrixSound.paused) {
        matrixSound.volume = 1;
        matrixSound.play();

    }
    gsap.to('#intro', {
        opacity: 0,
        duration: 3,
        delay: 1,
    })
    setTimeout(() => {
        matrixSound.paused();
        bgMusic.paused();

        document.getElementById('intro').style.display='none'
    }, 5000)
})

gsap.to('#logointro', {
    opacity: 1,
    y: 0,
    duration: 4
})
gsap.to('#logointro', {
    opacity: 0.7,
    duration: 1,
    delay: 4
})
const key = document.getElementById('key')

key.addEventListener('click', () => {
    document.getElementById('password').classList.toggle('hidden')
})
