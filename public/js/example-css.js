let titleSelect = document.getElementById("color-name");
let subtitleSelect = document.getElementById("size-name");
let divSelect = document.getElementById("background-name");
let divBorder = document.getElementById("border-name");


function titleRed() {


    const title = document.querySelector(".title");

    titleSelect.addEventListener('change', (event) => {
        let value = titleSelect.value;

        if (value === "true"){

            title.style.color = "red";

        } else{
            title.style.color = "black";

        }
    });
}

function subtitleSize() {


    const subtitle = document.querySelector(".subtitle");

    subtitleSelect.addEventListener('change', (event) => {
        let value = subtitleSelect.value;

        if (value === "true"){

            subtitle.style.fontSize = "40px";

        } else{
            subtitle.style.fontSize = "24px";

        }
    });
}

function bgDiv() {

    
    const div = document.querySelector(".box");

    divSelect.addEventListener('change', (event) => {
        let value = divSelect.value;

        if (value === "true"){

            div.style.backgroundColor = "green";

        } else{
            div.style.fontSize = "transparent";

        }
    });

    divBorder.addEventListener('change', (event) => {
        let value = divBorder.value;
        console.log(value)

        if (value === "true"){

            div.style.border = "4px solid black";

        } else{
            div.style.border = "0";

        }
    });
}

titleRed()
subtitleSize()
bgDiv()

function valideCSS() {

    let css1 = titleSelect.value;
    let css2 = subtitleSelect.value;
    let css3 = divSelect.value;
    let css4 = divBorder.value;

    console.log(css1)
    console.log(css2)
    console.log(css3)
    console.log(css4)


    if (css1 == "true" && css2 == "true" && css3 == "true" && css4 == "true"){
        window.location.href = 'exo-js.html'
    }else{
        window.alert('Un ou plusieurs champs sont erronés !')
    }
}

let redirectJs = document.querySelector('#redirect-js')

redirectJs.addEventListener('click', (e) => {
    valideCSS()
})

