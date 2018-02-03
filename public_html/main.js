/* 
 * 
 * arreglado bug de funcion seno
 * 
 */

var escala = 20;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var xf = c.getAttribute("width");
var yf = c.getAttribute("height");
var m;
var a;
var b;


graficarEje();

function graficarEje() {
    //alert("entro a la funcion");

    //alert(xf +"   " + y);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    ctx.moveTo(0, yf / 2);
    ctx.lineTo(xf, yf / 2);

    ctx.moveTo(xf / 2, 0);
    ctx.lineTo(xf / 2, yf);
    ctx.stroke();

    for (var i = 1; i < xf / escala; i++) {
        //mostrarmensaje(i*escala);
        //alert(i * escalaX);
        //alert(y + 5);
        //alert(escala);
        //no le estaria gustando, si comento lo de abajo recorre todo el loop
        //si no solo tira un alert y no hace nada mas
        //si se puedeeeeee!!!!
        ctx.beginPath();
        ctx.moveTo(i * escala, yf / 2 + 10);
        ctx.lineTo(i * escala, yf / 2 - 10);
        ctx.stroke();

        if (i * escala < yf) {
            ctx.beginPath();
            ctx.moveTo(xf / 2 - 10, i * escala);
            ctx.lineTo(xf / 2 + 10, i * escala);
            ctx.stroke();
            //ctx.save();
        }

    }
}

function setValoresSe(e, fr, am, fa) {
    escala=Number(e);
    m = Number(fr);
    a = Number(am);
    b = Number(fa);
    document.getElementById("fr1").innerHTML = fr;
    document.getElementById("a1").innerHTML = am;
    document.getElementById("fa1").innerHTML = fa;
    graficarFuncionSe();

}

function graficarFuncionSe() {
    //mostrarmensaje("entro a la funcion");
    var xS = 1;
    var yS = yf / 2;
    var yA = yf / 2;



    ctx.fillStyle = "coral";
    ctx.fillRect(0, 0, 800, 600);
    graficarEje();
    //setInterval(function () {
    //    trazarLineaSeno()
    //}, 300);
    ctx.strokeStyle = "blue";
    for (xS = 0; xS < xf; xS += escala / 5) {
        
        // alert(yS);
        yS = (yf / 2 - a * escala * Math.sin(b + m * ((xS / escala) 
                 - ( xf / (escala * 2))
                ) ));
        //  alert(yS);
       // mostrarmensaje(xS + " " + (b + m * ((xS / escala) 
       //          - ( xf / (escala * 2))
       //         )) );
        ctx.beginPath();
        ctx.moveTo(xS - escala / 5, yA);
        ctx.lineTo(xS , yS);
        ctx.stroke();
        yA = yS;

    }
}

//function trazarLineaSeno() {
//    yS = (yf / 2 - a * Math.sin(b + m * ((xS) - (xS / 2))) * escala);
//    ctx.beginPath();
//    mostrarmensaje("lala");
//    //alert("kk");
//    ctx.moveTo(xS, yA);
//    ctx.lineTo(xS + escala, yS);
//    ctx.stroke();
//    yA = yS;
//    xS += escala;
//}
function setValoresLi(e, p, b) {
    //alert("entro a la funcion");
    //alert(p+ "   " + b);
    // document.getElementsByClassName("pendiente").innerHTML = p;
    // document.getElementsByClassName("altura").innerHTML = b;
    escala=Number(e);
    m = Number(p);
    a = Number(b);
    
    //document.getElementById("pend").innerHTML = p;
    //document.getElementById("alt").innerHTML = b;
    document.getElementById("pend1").innerHTML = p;
    document.getElementById("alt1").innerHTML = b;
    graficarFuncionLi();

}

function graficarFuncionLi() {
    //ctx.restore();
    ctx.fillStyle = "coral";
    ctx.fillRect(0, 0, 800, 600);
    graficarEje();
    var xC = xf / 2;
    var yC = yf / 2 - a * escala;
    ctx.lineWidth = 3;
    do {
        xC -= escala;
        yC -= -(m * escala);

    } while (xC > 0 && xC < xf && yC > 0 && yC < yf)
    //} while (xC - escala > 0 && xC - escala <xf && yC + escala > 0 && yC + escala <yf) 
    //mostrarmensaje("punto 1: x " + xC + "  y" +  yC);
    //mostrarmensaje(xC + "  " + yC);
    ctx.beginPath();
    ctx.moveTo(xC, yC);
    do {
        xC += escala;
        yC += -(m * escala);
        //mostrarmensaje("x " + xC + "  y" +  yC);
    } while (xC > 0 && xC < xf && yC > 0 && yC < yf)
    
//} while (xC + escala > 0 && xC + escala <xf && yC -(m * escala) >= 0 && yC -(m * escala) <= yf)
    //mostrarmensaje("punto 2: x " + xC + "  y" +  yC);
    ctx.lineTo(xC, yC);
    ctx.strokeStyle = "blue";
    ctx.stroke();
 //mostrarmensaje(xC + "  " + yC);
}







function mostrarmensaje(s) {
    document.getElementById("msg").innerHTML += s + "<br>";
}
// for (var i=0; i<30; i++) {
//    document.getElementById("test").innerHTML += i +"<br>" ;
// }    

