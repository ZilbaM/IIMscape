function counter(){
    const counterBtn = document.querySelector('#btn-counter')
    const counterCount = document.querySelector('#counter-count')

    let i = 0;



    counterBtn.addEventListener('click', (e) => {
        i++
        console.log('cc')
        counterCount.innerHTML = "Compteur : " + i

        if (i == 10){
            i = 0
        }
    })

}

function runExample() {

    let select = document.querySelectorAll('.js-select')

    let i;

    for (i = 0; i < select.length; i++) {
        select[i].addEventListener('change', (self) => {
            let valueVar = select[0].options[select[0].selectedIndex].value;
            let valueClick = select[1].options[select[1].selectedIndex].value;
            let valueIncrement = select[2].options[select[2].selectedIndex].value;
            let valueCondition = select[3].options[select[3].selectedIndex].value;

            console.log(valueVar)
            console.log(valueClick)
            console.log(valueIncrement)
            console.log(valueCondition)

            if (valueVar && valueClick && valueIncrement && valueCondition === "true"){
            }
        });
    }


}
counter()

runExample()

