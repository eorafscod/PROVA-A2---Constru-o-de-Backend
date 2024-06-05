document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Redireciona para a página principal após o login bem-sucedido
            window.location.href = 'main.html';
        } else {
            const errorData = await response.json();
            alert(errorData.message);
        }
    });
});
