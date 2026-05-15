//abre a aba de login
const botaoLogin = document.querySelector('.login')
botaoLogin.addEventListener('click',()=>{
    const loginForm = document.querySelector('.loginForm')
    //alterna os valores internos
    loginForm.classList.toggle('hide')
})
