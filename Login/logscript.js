document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    document.getElementById('message').innerText = 'Registration successful! You can now login.';
    document.getElementById('registerForm').reset();
    setTimeout(() => {
        document.getElementById('registerContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    }, 1000);
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
        document.getElementById('securePage').style.display = 'block';
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('message').innerText = '';
    } else {
        document.getElementById('message').innerText = 'Invalid credentials! Please try again.';
    }
});

document.getElementById('logoutButton').addEventListener('click', function () {
    document.getElementById('securePage').style.display = 'none';
    document.getElementById('message').innerText = 'You have logged out.';
    document.getElementById('registerContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
});

document.getElementById('showLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('showRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
});
