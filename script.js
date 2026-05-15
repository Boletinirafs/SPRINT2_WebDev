//funcao para alternar aberturas contrarias
const trocar = (x) =>{
    const troca = document.querySelector(x)
    if (!troca.classList.contains('hide')){
        troca.classList.toggle('hide')
    }
}
//abre a aba de login
const botaoLogin = document.querySelector('.login')
botaoLogin.addEventListener('click',()=>{
    trocar('.cadastroForm')
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

//Aceita ou nao as credenciais
const confirmarL = document.getElementById('confirmarL')
confirmarL.addEventListener('click',()=>{
    const usuario = document.getElementById('usuarioL')
    const senha = document.getElementById('senhaL')
    let encontrou = false
    for(let i = 0 ; i<localStorage.length;i++){
        console.log(localStorage.key(i))
        if (usuario.value == localStorage.key(i)){
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if (senha.value == user.passW){
                alert(`Bem vindo(a) ${user.user}`)
                encontrou = true
                return
            }else{
                alert('Senha incorreta')
                return
            }}}
    if (!encontrou){
        alert('Usuário não encontrado')
    }
    usuario.value=''
    senha.value = ''
})

//Cadastra o usuario e senha
const confirmarC = document.getElementById('confirmarC')
confirmarC.addEventListener('click',()=>{
    //seleciona o id dos campos
    const usuario = document.getElementById('usuarioC')
    const senha = document.getElementById('senhaC')
    //verifica se há usuario existente
    for(let i = 0 ; i<localStorage.length;i++){
        console.log(localStorage.key(i))
        if (usuario.value == localStorage.key(i)){
        alert('Usuário já existe')
        return
        }
    }
    //caso não exista, cria novo usuário
    const novoUsuario = {
        user :usuario.value,
        passW :senha.value
    }
    localStorage.setItem(usuario.value.toString(),JSON.stringify(novoUsuario))
    usuario.value=''
    senha.value = ''
})