gsap.registerPlugin('TextPlugin');

const replace = 'Bla bla'
gsap.to('#code', {
    duration: 3,
    text: replace,
    ease: 'none'
})