function titleRed() {

    let titleSelect = document.getElementById("test");

    const title = document.querySelector(".title");

    titleSelect.addEventListener('change', (event) => {
        let value = titleSelect.value;
        let text = titleSelect.options[titleSelect.selectedIndex].text;
        console.log("test");

        console.log(value);
        console.log(text);

        if (value === "true"){

            title.style.color = "red";

        } else{
            title.style.color = "black";

        }
    });










}

titleRed()