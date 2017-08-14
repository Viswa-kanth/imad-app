console.log('Loaded!');
//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('img');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft+'px';
    }
    img.onclick = function (){
        var interval = setInterval(moveRight,100);
        };

