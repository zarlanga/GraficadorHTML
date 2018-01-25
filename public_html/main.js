/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            var escala = 20;
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var xf = c.getAttribute("width");
            var yf = c.getAttribute("height");
            var m;
            var a;

            graficarEje();

            function graficarEje() {
                //alert("entro a la funcion");

                //alert(xf +"   " + y);
                ctx.beginPath();
                ctx.lineWidth=1;
                ctx.strokeStyle="black";
                        
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

                function setValores(p, b) {
                    //alert("entro a la funcion");
                    //alert(p+ "   " + b);
                    // document.getElementsByClassName("pendiente").innerHTML = p;
                    // document.getElementsByClassName("altura").innerHTML = b;
                    m = p;
                    a = b;
                    //document.getElementById("pend").innerHTML = p;
                    //document.getElementById("alt").innerHTML = b;
                    document.getElementById("pend1").innerHTML = p;
                    document.getElementById("alt1").innerHTML = b;
                    graficarFuncion();

                }

                function graficarFuncion() {
                    //ctx.restore();
                    ctx.fillStyle="orange";
                    ctx.fillRect(0,0,800,600);
                    graficarEje();
                    var xC = xf / 2;
                    var yC = yf / 2 - a*escala;
                    while (xC - escala > 0 && xC - escala <xf && yC + escala > 0 && yC + escala <yf) {
                        xC -= escala;
                        yC -= -(m * escala);
                        
                    }
                    //mostrarmensaje("punto 1: x " + xC + "  y" +  yC);
                    ctx.lineWidth=3;
                    ctx.beginPath();
                    ctx.moveTo(xC, yC);
                    do {
                        xC += escala;
                        yC += -(m * escala);
                        //mostrarmensaje("x " + xC + "  y" +  yC);
                    } while (xC + escala > 0 && xC + escala <xf && yC -(m * escala) >= 0 && yC -(m * escala) <= yf)
                    //mostrarmensaje("punto 2: x " + xC + "  y" +  yC);
                    ctx.lineTo(xC, yC);
                    ctx.strokeStyle = "blue";
                    ctx.stroke();
                    
                }





            

            function mostrarmensaje(s) {
                document.getElementById("msg").innerHTML += s + "<br>";
            }
            // for (var i=0; i<30; i++) {
            //    document.getElementById("test").innerHTML += i +"<br>" ;
            // }    

