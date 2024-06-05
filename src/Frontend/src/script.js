// Adicione scripts aqui para interatividade
console.log("JavaScript carregado.");

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Login successful');
            // Redirect to home page or another page
            window.location.href = 'home.html';
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
