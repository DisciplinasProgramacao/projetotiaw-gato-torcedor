document.addEventListener("click", e=>{
   
    const element = e.target;

    if(element.id == "criarConta"){
        e.preventDefault();
        if(localStorage.getItem('login') == null){
            localStorage.setItem('login',JSON.stringify([]));
        }
        const local = JSON.parse(localStorage.getItem("login"));
        const form = document.querySelector("form");
        const login = {
            email: form.email.value,
            senha: form.senha.value
        };

        const emailValidation = document.getElementById('emailValidation');

        const confirmarSenha = form.confirmarSenha.value;
    
        if(login.email != "" && login.email.length > 10 && login.senha == confirmarSenha && login.senha != ""){
            local.push(login);
            localStorage.setItem('login', JSON.stringify(local))
            console.log(localStorage.getItem("login"));
            window.location.href =  document.getElementById('criarConta').href;
        }
        else{
            emailValidation.style.color = 'red';
            emailValidation.style.fontSize = '.8rem';
            emailValidation.removeAttribute("hidden");
            if(login.email == ""){
                emailValidation.innerHTML = "Email não pode ser vazio."
            }
            else if(login.email.length < 10){
                emailValidation.innerHTML = "Email deve ser maior que 10 caracteres."
            }

            if(!emailValidation.hasAttribute("hidden") && emailValidation.getAttribute("hidden") != null){
                emailValidation.setAttribute("hidden");
            }

            const psValidation = document.getElementById("passwordValidation");

            psValidation.style.color = "red";
            psValidation.style.fontSize = ".8rem";

            if(login.senha == "" || confirmarSenha == ""){
                psValidation.innerHTML = 'Senha ou confirmar senha estão vazios.';
            }
            else{
                psValidation.innerHTML = 'Senha esta diferente de confirmar senha.';
            }
        }
   
       
    }
   
})