document.addEventListener('click', e=>{
    
    const element = e.target;

    if(element.id == 'fazerLogin'){

        e.preventDefault();

        const form = document.querySelector('form');

        const senhalog = form.senha.value;
        const emaillog = form.email.value;

        const login = JSON.parse(localStorage.getItem('login'));
        
        if(login != null){
            for(let i = 0; i < login.length; i++){
                const {email, senha} = login[i];
                if(senhalog == senha && emaillog == email){
                    alert("usuario logado com sucesso");
                    const userlogin = {
                        email: email,
                        senha: senha
                    }
                    localStorage.setItem("usuarioLogado",  JSON.stringify(userlogin));
                    window.location.href =  document.getElementById('fazerLogin').href;
                }
            }
            
        }
    }
})            
            
    
