/* 
 * 
 * arreglado bug de funcion seno
 * 
 * -corregido el cambio de escalas
 * -agregado funcion coseno
 * -agregado funcion cuadratica
 * 
 * --unificado codigo redundante
 *      --funcion setValores()
 *      --funcion resetearCanvas()
 * --corregido ecuacion polinomica
 * 
 * ---agregado desplazamiento en y para seno y coseno (listo)
 * ---unificado todo en una sola pagina
 * pendiente
 * ---ver polinomica
 * 
 * ---hacer tangente y hiperbole? 
 * 
 */

var escala = 20; //get del elemento e?
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var xf = c.getAttribute("width");
var yf = c.getAttribute("height");
var m;
var a;
var b;
var c;
var xS;
var yS;
var yA;

//refactorizando

graficarEje();

function seleccionarEQ() {
    o = document.getElementById("opcion").value;

    if (o === "1") {
        document.getElementById("cn").hidden = true;
        document.getElementById("c").hidden = true;
    } else {
        document.getElementById("c").hidden = false;
        document.getElementById("cn").hidden = false;
    }

    if (o !== "3" && o !== "4") {
        document.getElementById("d").hidden = true;
        document.getElementById("dn").hidden = true;
    } else {
        document.getElementById("d").hidden = false;
        document.getElementById("dn").hidden = false;
    }

    //agregarPolinomica
    mostrarEQ(o);


    //alert(o);
}

function mostrarEQ(o) {

    o = Number(o);
    switch (o) {
        case 1:
            document.getElementById("eq").innerHTML = "<span id=\"t1\" style=\"text-align: right\" >1</span>x+<span id=\"t2\">1</span>";
            document.getElementById("an").innerHTML = "Pendiente";
            document.getElementById("ab").innerHTML = "Desplazamiento Y";
            break;
        case 2:
            document.getElementById("eq").innerHTML = '<span id="t1" >1</span>x<sup>2</sup>+<span id="t2">1</span>x+<span id="t3">0</span>';
            document.getElementById("an").innerHTML = "Ancho";
            document.getElementById("bn").innerHTML = "Desplazamiento X";
            document.getElementById("cn").innerHTML = "Desplazamiento Y";
            break;
        case 3:
            document.getElementById("eq").innerHTML = '<span id="t1" >4</span>Sen(<span id="t2">1</span>x+<span id="t3">0</span>) + <span id="t4">0</span>';
            document.getElementById("an").innerHTML = "Amplitud";
            document.getElementById("bn").innerHTML = "Frecuencia";
            document.getElementById("cn").innerHTML = "Desplazamiento X (Fase)";
            break;
        case 4:
            document.getElementById("eq").innerHTML = '<span id="t1" >4</span>Cos(<span id="t2">1</span>x+<span id="t3">0</span>) + <span id="t4">0</span>';
            document.getElementById("an").innerHTML = "Amplitud";
            document.getElementById("bn").innerHTML = "Frecuencia";
            document.getElementById("cn").innerHTML = "Desplazamiento X (Fase)";
            break;
        case 5:
            alert("ver que onda");
            break;


    }
    /*
     if (o === "Lineal") {
     
     }
     
     if (o === "Cuadratica") {
     }
     
     if (o === "Seno") {
     }
     
     if (o === "Coseno") {
     }
     
     if (o === "Polinomica") {
     
     } */
}

function graficarEje() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    ctx.moveTo(0, yf / 2);
    ctx.lineTo(xf, yf / 2);

    ctx.moveTo(xf / 2, 0);
    ctx.lineTo(xf / 2, yf);
    ctx.stroke();

    for (var i = 1; i < xf / escala * 2; i++) {
        ctx.beginPath();
        ctx.moveTo(xf / 2 + i * escala, yf / 2 + 10);
        ctx.lineTo(xf / 2 + i * escala, yf / 2 - 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xf / 2 - i * escala, yf / 2 + 10);
        ctx.lineTo(xf / 2 - i * escala, yf / 2 - 10);
        ctx.stroke();

        if (i * escala < yf / 2) {
            ctx.beginPath();
            ctx.moveTo(xf / 2 - 10, yf / 2 + i * escala);
            ctx.lineTo(xf / 2 + 10, yf / 2 + i * escala);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(xf / 2 - 10, yf / 2 - i * escala);
            ctx.lineTo(xf / 2 + 10, yf / 2 - i * escala);
            ctx.stroke();

        }

    }
}

function resetearCanvas() {
    ctx.fillStyle = "coral";
    ctx.fillRect(0, 0, 800, 600);
    graficarEje();
    ctx.strokeStyle = "blue";


    yA = yf / 2;

}


function setValores(e, a1, a2, a3, a4, o) {
    escala = Number(e);
    m = Number(a1);
    a = Number(a2);
    o = Number(o);

    document.getElementById("t1").innerHTML = a1;
    document.getElementById("t2").innerHTML = a2;

    if (o !== 1) {
        b = Number(a3);
        document.getElementById("t3").innerHTML = a3;
    }
    
    if (o===3 || o===4) {
        c = Number(a4);
        document.getElementById("t4").innerHTML = a4;
    }
    //alert(o);
    switch (o) {
        case 1:
           //alert("entro case 1");
            graficarFuncionLi();
            break;

        case 2:
      //      alert("entro case 2");
            graficarFuncionCu();
            break;
        case 3:
      //      alert("entro case 3");
            graficarFuncionSe();
            break;
        case 4:
      //      alert("entro case 4");
            graficarFuncionCo();
            break;

    }

}


function graficarFuncionLi() {
    resetearCanvas();
    xS = xf / 2;
    yS = yf / 2 - a * escala;
    do {
        xS -= escala;
        yS -= -(m * escala);

    } while (xS > 0 && xS < xf && yS > 0 && yS < yf)

    ctx.beginPath();
    ctx.moveTo(xS, yS);
    do {
        xS += escala;
        yS += -(m * escala);
    } while (xS > 0 && xS < xf && yS > 0 && yS < yf)

    ctx.lineTo(xS, yS);
    ctx.stroke();
}

function graficarFuncionSe() {

    resetearCanvas();
    for (xS = 0; xS < xf; xS += escala / 5) {

        yS = (yf / 2 - m * escala * Math.sin(b + a * ((xS / escala)
                - (xf / (escala * 2))
                )) + c * escala );

        ctx.beginPath();
        ctx.moveTo(xS - escala / 5, yA);
        ctx.lineTo(xS, yS);
        ctx.stroke();
        yA = yS;

    }
}

function graficarFuncionCo() {

    resetearCanvas();

    for (xS = 0; xS < xf; xS += escala / 5) {

        yS = yf / 2 - m * escala * Math.cos(b + a * ((xS / escala)
                - (xf / (escala * 2))
                )) + c * escala;

        ctx.beginPath();
        ctx.moveTo(xS - escala / 5, yA);
        ctx.lineTo(xS, yS);
        ctx.stroke();
        yA = yS;

    }
}

function graficarFuncionCu() {

    resetearCanvas();

    for (xS = 0; xS < xf; xS += escala / 5) {

        var x = xS / escala - xf / (escala * 2);
        yS = yf / 2 - escala * (m * x * x + a * x + b);
        ctx.beginPath();
        ctx.moveTo(xS - escala / 5, yA);
        ctx.lineTo(xS, yS);
        ctx.stroke();
        yA = yS;

    }
}


function setTerminosPo(n) {
    document.getElementById("eq").innerHTML = "";
    document.getElementById("val").innerHTML = "";
    for (var i = n; i >= 1; i--) {

        var eq = "<span id=\"i" + i + "\" >1</span>x<sup> " + i + "</sup>+";
        var val = "termino " + i + "<input type=\"number\" id=\"a" + i + "\" \n\
oninput=\"setValoresPo(e.value, n.value)\"  value=\"1\" step=\"0.05\" >  <br> <br>";

        document.getElementById("eq").innerHTML += eq;
        document.getElementById("val").innerHTML += val;

    }

    var eq = "<span id=\"i0\">1</span>";
    var val = "termino 0 <input type=\"number\" id=\"a0\" \n\
oninput=\"setValoresPo(e.value, n.value)\"  value=\"1\" step=\"0.05\" >  <br> <br>";

    document.getElementById("eq").innerHTML += eq;
    document.getElementById("val").innerHTML += val;

}

function setValoresPo(e, n) {
    escala = Number(e);

    for (var i = 0; i <= n; i++) {
        document.getElementById("i" + i).innerHTML = document.getElementById("a" + i).value;
    }

    graficarFuncionPo(n);
}

function graficarFuncionPo(n) {

    resetearCanvas();

    for (xS = 0; xS < xf; xS += escala / 5) {

        yS = yf / 2;
        var x = xS / escala - xf / (escala * 2);

        for (var i = 0; i <= n; i++) {
            var a = document.getElementById("a" + i).value;
            yS -= escala * a * Math.pow(x, i);
        }

        ctx.beginPath();
        ctx.moveTo(xS - escala / 5, yA);
        ctx.lineTo(xS, yS);
        ctx.stroke();

        yA = yS;

    }
}




function mostrarmensaje(s) {
    document.getElementById("msg").innerHTML += s + "<br>";
}
/*
 function setValoresLi(e, p, b) {
 
 escala = Number(e);
 m = Number(p);
 a = Number(b);
 
 document.getElementById("pend1").innerHTML = p;
 document.getElementById("alt1").innerHTML = b;
 graficarFuncionLi();
 
 }
 
 function setValoresSe(e, fr, am, fa) {
 escala = Number(e);
 m = Number(fr);
 a = Number(am);
 b = Number(fa);
 document.getElementById("fr1").innerHTML = fr;
 document.getElementById("a1").innerHTML = am;
 document.getElementById("fa1").innerHTML = fa;
 graficarFuncionSe();
 
 }
 
 function setValoresCo(e, fr, am, fa) {
 escala = Number(e);
 m = Number(fr);
 a = Number(am);
 b = Number(fa);
 document.getElementById("fr1").innerHTML = fr;
 document.getElementById("a1").innerHTML = am;
 document.getElementById("fa1").innerHTML = fa;
 graficarFuncionCo();
 
 }
 
 
 function setValoresCu(e, fr, am, fa) {
 escala = Number(e);
 m = Number(fr);
 a = Number(am);
 b = Number(fa);
 document.getElementById("a1").innerHTML = fr;
 document.getElementById("b1").innerHTML = am;
 document.getElementById("c1").innerHTML = fa;
 graficarFuncionCu();
 
 }
 
 
 */