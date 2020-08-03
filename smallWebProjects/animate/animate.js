var pos = Math.random()*100;
var box = document.getElementById("box");
var t = setInterval(move,10);

function move(){

    if(pos>=390)
    {
        clearInterval(t);
    }
    else
    {
            pos = pos + 1;
            box.style.left = pos + "px";
                
    }
}