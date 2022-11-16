function titleRed() {

    let titleSelect = document.getElementById("color-name");

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

    let subtitleSelect = document.getElementById("size-name");

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

    let divSelect = document.getElementById("background-name");
    let divBorder = document.getElementById("border-name");

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