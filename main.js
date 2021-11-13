var id = null;
var a = function(e){
    var p = document.getElementById("scroller");
    var style = p.currentStyle || window.getComputedStyle(p);
    var vertical_pos = parseInt(style.marginTop);
    console.log(vertical_pos);
    var bg = document.getElementById('bg');
    bg.style.backgroundImage=getGradient(vertical_pos);
}

function increment(){
    var p = document.getElementById("scroller");
    var style = p.currentStyle || window.getComputedStyle(p);
    var vertical_pos = parseInt(style.marginTop);
    var pos = vertical_pos;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == vertical_pos+100) {
            clearInterval(id);
        } else {
        pos++;
        p.style.marginTop = pos + 'px';
        var bg = document.getElementById('bg');
        bg.style.backgroundImage=getGradient(pos);
        }
    }
}

function getGradient(pos){
    var r1 = parseInt(0+pos*0.36429);
    var g1 = parseInt(70+pos*0.16429);
    var b1 = parseInt(117+pos*-0.03);
    var r2 = parseInt(165+pos*-0.10714);
    var g2 = parseInt(204+pos*-0.22429);
    var b2 = parseInt(130+pos*-0.00714);
    return `linear-gradient(rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}))`;
}

//document.body.style.height = visualViewport.height + 700 + "px";