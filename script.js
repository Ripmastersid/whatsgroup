function showForm() {
    const c1 = document.getElementById('container-1');
    const c2 = document.getElementById('container-2');
    
    if (c1 && c2) {
        // Faz o primeiro card deslizar para a esquerda
        c1.classList.add('slide-out');
        
        setTimeout(() => {
            c1.classList.add('hidden');
            c2.classList.remove('hidden');
        }, 500); // Tempo igual à transição do CSS
    }
}

const form = document.getElementById('lead-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('numero').value;
        const email = document.getElementById('email').value;
        
        const mensagem = `*NOVO LEAD - WHATSGROUP*%0A%0A👤 Nome: ${nome}%0A📱 WhatsApp: ${numero}%0A📧 E-mail: ${email}`;
        const seuNumero = '5521966053200';
        
        // Dispara o envio para o seu WhatsApp em segundo plano
        window.open(`https://wa.me/${seuNumero}?text=${mensagem}`, '_blank');
        
        // Redireciona o botão de ACESSAR diretamente para o link do grupo do WhatsApp
        window.location.href = 'https://chat.whatsapp.com/C5LUDYB2cRH7aYZolunZJi';
    });
}
