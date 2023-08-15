document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    password = userPassword.value;

    if(email === 'piash@bank.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user');
    }
})