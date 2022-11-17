function accessAdmin(){

    let login = document.getElementById('login')
    let password = document.getElementById('password')
    let redirectAdmin = document.getElementById('redirect-admin')
    let adminDenied = document.querySelector('.admin__denied')


    redirectAdmin.addEventListener('click', (e) => {
        let valueLogin = login.value;
        let valuePassword = password.value;
        console.log(valueLogin)
        console.log(valuePassword)

        if (valueLogin == "admin" && valuePassword == "mdp"){
            window.location.href = 'result.html'
        }else{
            adminDenied.style.display = "flex"
            setTimeout(() => {
                adminDenied.style.display = "none"
            }, "2000")
        }

    })

}

accessAdmin()