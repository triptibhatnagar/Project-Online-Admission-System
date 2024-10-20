document.getElementById('loginForm').addEventListener('submit', function(e){
    //Prevent the form from submitting
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    //Check for empty fields and alert the user
    if(username == "" || password == "") {
        alert("Fill out both fields")
    }
    if(username != "" && password != "") {
        alert("Login successfully!")
    }
});