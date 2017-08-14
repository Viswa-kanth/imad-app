console.log('Loaded!');
//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
//move the image
var img = document.getElementById('image');
function moveRight (){
    var marginLeft=0;
    marginLeft = marginLeft +'px';
    img.style.marginLeft =marginLeft +'px';
}
img.onclick = function (){
    var interval = setInterval(moveRight,100);
};

