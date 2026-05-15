//abre a aba de login
const botaoLogin = document.querySelector('.login')
botaoLogin.addEventListener('click',()=>{
    const loginForm = document.querySelector('.loginForm')
    //alterna os valores internos
    loginForm.classList.toggle('hide')
})

//funcao para abrir e fechar o cadastro
const botaoCadastro = document.querySelector('.cadastro')
botaoCadastro.addEventListener('click',()=>{
    trocar('.loginForm')
    const cadastroForm = document.querySelector('.cadastroForm')
    //alterna os valores internos
    cadastroForm.classList.toggle('hide')
})