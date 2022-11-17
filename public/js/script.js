gsap.registerPlugin('TextPlugin');

// const replace = 'Bla bla'
// gsap.to('#code', {
//     duration: 3,
//     text: replace,
//     ease: 'none'
// })

let introBtn = document.getElementById('intro-btn')

introBtn.addEventListener('click', () => {
    createTransition()
    gsap.to('#intro', {
        opacity: 0,
        duration: 3,
        delay: 1,
    })
    setTimeout(() => {
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
