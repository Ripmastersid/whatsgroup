function showForm() {
    const c1 = document.getElementById('container-1');
    const c2 = document.getElementById('container-2');
    if (c1 && c2) {
        c1.classList.add('hidden');
        c2.classList.remove('hidden');
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
        
        // Abre o WhatsApp com os dados preenchidos
        window.open(`https://wa.me/${seuNumero}?text=${mensagem}`, '_blank');
        
        // Redireciona para o grupo do WhatsApp após 1 segundo
        setTimeout(() => {
            window.location.href = 'https://chat.whatsapp.com/C5LUDYB2cRH7aYZolunZJi';
        }, 1000);
    });
}
