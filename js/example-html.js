function valideHTML() {

    let htmlDoctype = document.querySelector('#doctype-name')
    let htmlId = document.querySelector('#id-name')
    let htmlClass = document.querySelector('#class-name')
    let htmlHref = document.querySelector('#href-name')

    let html1 = htmlDoctype.value;
    let html2 = htmlId.value;
    let html3 = htmlClass.value;
    let html4 = htmlHref.value;

    console.log(html1)
    console.log(html2)
    console.log(html3)
    console.log(html4)


    if (html1 == "true" && html2 == "true" && html3 == "true" && html4 == "true"){
        window.location.href = 'exo-css.html'
    }else{
        window.alert('Un ou plusieurs champs sont erronés !')
    }
}

let redirectCss = document.querySelector('#redirect-css')

redirectCss.addEventListener('click', (e) => {
    valideHTML()
})

