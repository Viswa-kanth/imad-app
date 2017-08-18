//counter code
var counter = 0;  //submit name
var submit = document.getElementById('submit-btn');
    submit.onclick = function () {
    var button = document.getElementById('counter');
button.onclick = function (){
    //create a request object
    var request = new XMLHttpRequest();
    //capture response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE){
           //take some action
           if(request.status === 200){
               var names = request.responseText;
               names = JSON.parase(names);
        var list = '';
        for(var i = 0; i<names.length; i++){
        list += '<li>'+ names[i]+ '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
          
           }
        }
        };
        //not done yet
        //make a request
          var nameInput = document.getElementById('name');
    var name = nameInput.value;
        request.open('GET','http://viswakanthreddy06.imad.hasura-app.io/submit-name?name='+name,true);
        request.send(null);
    };    
        //make a request to server and send name
        //capture a list of names and render it as a list
        var names = ['name1','name2','name3','name4'];
        var list = '';
        for(var i = 0; i<names.length; i++){
        list += '<li>'+ names[i]+ '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
    };
     
