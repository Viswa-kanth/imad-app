//submit username/password to login
var submit = document.getElementById('submit-btn');
submit.onclick = function () {
    //create a new request
    var request = new XMLHttpRequest();
    //capture the response and store it ina variable
    request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequestDONE) {
    //take some action
    if (request.status === 200) {
    alert('logged in successfully');
    } else if (request.status === 403) {
        alert('Username/password is incorrect');
    } else if (request.status === 500) {
    alert('Something went wrong on the server');
    }
    }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('post','http://viswakanthreddy06.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username,password: password}));
    };    

     
