document.addEventListener("click", e=>{
   
    const element = e.target;

    if(element.id == "criarConta"){
        e.preventDefault();
        const form = document.querySelector("form");
        const login = {
            email: form.email.value,
            senha: form.senha.value
        };
        const confirmarSenha = form.confirmarSenha.value;
    
        if(login.email != "" && login.email.length > 10){
            if(login.senha == confirmarSenha){
                localStorage.setItem('login',JSON.stringify([login]))
                window.location.href =  document.getElementById('criarConta').href;
            } 
            else{
                alert("senhas diferente")
            }
        }
        else{
            alert("Email vazio ou muito pequeno")
        }
   
       
    }
   
})