function checkSignup() {
    const isSignedUp = localStorage.getItem('isSignedUp') == 'true';
    if(!isSignedUp) {
        alert("Please sign up before attempting to login");
        // window.location.href = '../Signup form/index.html';
    }
}
window.onload = checkSignup;
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if(username != "" && password != "") {
        alert("Login successfully!")
    }
});