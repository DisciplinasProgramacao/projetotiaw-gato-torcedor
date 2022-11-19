

document.addEventListener("click", e=>{
    e.preventDefault();
    const element = e.target;

    if(element.id == "criarConta"){
        const form = document.querySelector("form");
        const email = form.email.value;
        const senha = form.senha.value;
        const confirmarSenha = form.confirmarSenha.value;
    
    if(senha == confirmarSenha)
        localStorage.setItem('senha', senha);
        localStorage.setItem('email', email)
    }
    else{
        alert("senhas diferente")
    }
})
