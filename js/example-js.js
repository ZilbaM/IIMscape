function counter(){
    const counterBtn = document.querySelector('#btn-counter')
    const counterCount = document.querySelector('#counter-count')

    let i = 0;

    counterBtn.addEventListener('click', (e) => {
        i++
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
                counter()
            }
        });
    }


}

runExample()


function valideJS() {

    const jsVar = document.querySelector('#var-name')
    const jsClick = document.querySelector('#click-name')
    const jsIncrement = document.querySelector('#increment-name')
    const jsCondition = document.querySelector('#condition-name')

    let js1 = jsVar.value;
    let js2 = jsClick.value;
    let js3 = jsIncrement.value;
    let js4 = jsCondition.value;

    console.log(js1)
    console.log(js2)
    console.log(js3)
    console.log(js4)


    if (js1 == "true" && js2 == "true" && js3 == "true" && js4 == "true"){
        window.location.href = 'index.html'
    }else{
        window.alert('Un ou plusieurs champs sont erronés !')
    }
}

let redirectEnd = document.querySelector('#redirect-end')

redirectEnd.addEventListener('click', (e) => {
    valideJS()
})

