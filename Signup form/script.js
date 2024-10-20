function checkSignup() {
    const isSignedUp = localStorage.getItem('isSignedUp') == 'true';
    if(!isSignedUp) {
        alert("Please sign up before attempting to login");
        window.location.href = '../Login form/index.html';
    }
}
window.onload = checkSignup;