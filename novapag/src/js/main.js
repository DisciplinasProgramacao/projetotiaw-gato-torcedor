(function(){
    const userlogado = localStorage.getItem("logado")
    if(localStorage.getItem("logado") != ""){
        const perfil = JSON.parse(localStorage.getItem('perfil'));
        if(perfil != null){
            for(let i = 0; i < perfil.length; i++){
                const {email, logradouro, uf, localidade, cep, nome, sobrenome, idade, telefone, tipo} = perfil[i];
                if(email == userlogado){
                    const form = document.getElementById("form-perfil");

                    form.nome.value  = nome;
                    form.sobreNome.value  = sobrenome;
                    form.telefone.value  = telefone
                    form.idade.value = idade;
                    form.cep.value = cep;
                    form.Endereço.value = logradouro;
                    form.Estado.value = uf;
                    form.Cidade.value = localidade;

                    if(tipo == "comprador"){
                        form.comprador.checked = true;
                    }
                    else if(tipo == "vendedor"){
                        form.vendedor.checked = true;
                    }
                }
            }
        }
        else{
            localStorage.setItem('perfil',JSON.stringify([]));
        }
        const jogosEl = document.getElementById("jogosComprados");

        const jogos = JSON.parse(localStorage.getItem("jogos"));

        if(jogos != null){
            for(let i= 0; i < jogos.length; i++){
                const {email, jogo} = jogos[i];
                if(jogo != ""){
                    jogosEl.innerHTML += `<h1>${jogo}</h1>`;
                }
            }
        }
    }
})();

document.getElementById('cep').addEventListener('blur', (e) => { 
    const form = document.getElementById("form-perfil");
    let cep = form.cep.value;
    cep = cep.replace("-","")
    if(cep.length = 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resp => resp.json()).then(data=>{

            const { logradouro, localidade, uf} = data;

            form.Endereço.value = logradouro;
            form.Estado.value = uf;
            form.Cidade.value = localidade;
        })
        .catch(ex => console.log(ex));
    }
});


document.addEventListener("click", e=>{
    const element = e.target;

    if(element.id == "salvarPerfil"){
        e.preventDefault();
        const form = document.getElementById("form-perfil");

        if(form.nome.value != "" && form.sobreNome.value != "" && form.telefone.value != "" && form.idade.value != "" && form.cep.value != "" && form.Endereço.value != "" && form.Estado.value != "" && form.Cidade.value != ""){
            if(localStorage.getItem('perfil') == null){
                localStorage.setItem('perfil',JSON.stringify([]));
            }
    
            const perfil = JSON.parse(localStorage.getItem("perfil"));
            const userlogado = localStorage.getItem("logado")
            
    
            let tipo = "";
    
            if(form.comprador.checked == true){
                tipo = "comprador"
            }
            else if(form.vendedor.checked == true){
                tipo = "vendedor"
            }
    
            const Sperfil = {
                nome: form.nome.value,
                sobrenome: form.sobreNome.value,
                telefone: form.telefone.value,
                idade: form.idade.value,
                cep: form.cep.value,
                logradouro: form.Endereço.value,
                uf: form.Estado.value,
                localidade: form.Cidade.value,
                email: userlogado
            };
    
            perfil.push(Sperfil);
            localStorage.setItem('perfil',JSON.stringify(perfil));
    
            alert("cadastro realizado com sucesso");
            
            window.location.href =  element.href;
        }
    }
})
  

 function comprarJogo(value){
    
    const userlogado = localStorage.getItem("logado");
    if(localStorage.getItem("jogos") == null){
        localStorage.setItem("jogos",JSON.stringify([]));
    }
    const jogos = JSON.parse(localStorage.getItem("jogos"));
    const obj ={
        email: userlogado,
        jogo: value
    }
    jogos.push(obj);
    localStorage.setItem("jogos", JSON.stringify(jogos))
 }