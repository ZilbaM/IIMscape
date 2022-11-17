'use strict';
gsap.registerPlugin('TextPlugin');
gsap.registerPlugin('CustomEase');


const COLUMNS    = 100;
const CHARACTERS = 50;

function getCharCode() {
    let code = Math.floor(Math.random() * 94 + 33);
    return (code === 64) ? 47 : code;
}

function getCharCodes() {
    return Array.from(
        new Array(CHARACTERS), () => {
            return String.fromCharCode(getCharCode());
        }
    );
}

function createCharCodes(drop) {
    let codes = getCharCodes(),
        size  = Math.floor(Math.random() * 13);

    if (size < 10) size = 25;
    else if (size < 12) size = 12;
    else size = 60;

    setCharCodes(drop, codes, size);
    return size;
}

function setCharCodes(column, codes, size) {
    codes.forEach((code, index) => {
        let char = document.createElement('span');
        char.className = `char-${index} code-size-${size}`;
        char.textContent = code;

        column.appendChild(char);
    });
}

function createRain(container) {
    for (let i = 0; i < COLUMNS; i++) {
        let column = document.createElement('p'),
            size   = createCharCodes(column);

        column.className = `code-column column-size-${size} code-${i}`;
        container.appendChild(column);
        
    }
}

function fadeOut(){
    gsap.to('#matrix-code', {
        opacity: 0,
        duration: 2,
        
    })
}


function createTransition () {
    let container = document.getElementById('matrix-code')
    let wrapper = container.parentElement
    wrapper.style.display = 'block'



    createRain(container);
    setTimeout(() => {
        fadeOut()
        setTimeout(() => {
            container.innerHTML = ''
        }, 2000)
        setTimeout(() => {
            wrapper.style.display = 'none'
            document.getElementById('message').style.display = 'flex'
            loadText()
            //window.location.href = 'exo-html.html'
        }, 1500)
    }, 3000
    )
    
}

const loadText = () => {
    // const replace = 'Bla bla'
// gsap.to('#code', {
//     duration: 3,
//     text: replace,
//     ease: 'none'
// })
    const tl = gsap.timeline({
        onComplete: () => {
            document.querySelector('#message .neon-btn').style.display = 'inline-block'
        },
        delay: 1
    })

    const title = "Ordre de misssion (nom de code : IIMscape)"
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    tl.to('.code-title', {
        text: title,
        duration: 2
    }).to('.code-text', {
        text: {
            value: text,
        },
        duration: Math.floor(text.length/25),
        ease: CustomEase.create("custom", "M0,0,C0.047,0.093,0.206,0.398,0.305,0.519,0.305,0.519,0.34,0.466,0.34,0.466,0.34,0.466,0.412,0.656,0.412,0.656,0.658,0.946,0.865,1,1,1")
    }, '>')

}



