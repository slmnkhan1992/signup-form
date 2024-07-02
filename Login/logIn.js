const LoginBtn = document.querySelector('#Loginbtn')
const form = document.querySelector('form'); // Assuming your form element selector is correct


form.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = "../home/index.html";

})

