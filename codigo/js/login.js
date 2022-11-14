document.addEventListener('click', e=>{
    e.preventDefault();
    const element = e.target;

    if(element == 'fazerLogin'){
        const form = document.querySelector('form');

        const senha = form.senha;
        const email = form.email;

        const lsenha = localStorage.getItem('senha');
        const lemail = localStorage.getItem('email');

        if(lsenha == senha && lemail == email){
            const url = w
            window.location.assign(window.location.href)
        }
    }
})