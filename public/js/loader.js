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
    const text = "Bienvenue ?? toi jeune hackeur. Alors comme ??a tu as rat?? les inscriptions de l???IIM ? C???est bien" +
        " dommage. Mais rassures-toi tout n???est pas perdu ! Nous allons te donner un petit coup de main. Qui" +
        " sommes-nous te demandes-tu ? Consid??re-nous comme une team d'hackeurs pr??te ?? t???aider ;) <br><br> Si tu veux" +
        " une chance de pouvoir int??grer l???IIM il va falloir que tu t???infiltres dans le b??timent et atteindre" +
        " une certaine salle. Dans cette salle se trouve une bo??te contenant les dossiers de tous les futurs" +
        " ??tudiants. Une fois infiltr??, il suffira que tu ajoutes le tien ?? la pile de dossiers. Tu dois s??rement te demander" +
        " comment infiltrer le campus. Pas de panique, dans la bo??te dont tu as scann?? le QR code se trouve un pass" +
        " d???acc??s au batiment, tu pourras ainsi t???infiltrer sans soucis. <br><br> Cependant, nous n???allons pas te donner toutes" +
        " ces informations comme ??a, il va falloir faire tes preuves. R??ussis nos ??preuves et nous te donnerons" +
        " peut-??tre les informations que tu recherches ;D. Montres toi digne de nous rejoindre ! "
    tl.to('.code-title', {
        text: title,
        duration: 2
    }).to('.code-text', {
        text: {
            value: text,
        },
        duration: Math.floor(text.length/30),
        ease: CustomEase.create("custom", "M0,0,C0.047,0.093,0.206,0.398,0.305,0.519,0.305,0.519,0.34,0.466,0.34,0.466,0.34,0.466,0.412,0.656,0.412,0.656,0.658,0.946,0.865,1,1,1")
    }, '>')

}