window.onload = function(){

  xL = 80
        xH = xW = xR = xE = xMY = xMX = xWd = xHd = 0;
        xF = new Array();
        xY = new Array();
        xX = new Array();
        xS = new Array();
        xA = new Array();
        xB = new Array();
        ini = new Array();
  
        // const div = document.createElement('div')
        // div.style.position = 'absolute'
        
        document.write(
          '<div id="sdiv" style="position:absolute;top:0px;left:0px"><div style="position:relative">'
        );
        for (i = 0; i < xL; i++) {
          document.write(
            '<div id="div" style="position:absolute;top:0;left:0;width:5px;height:5px;' +
              'font-size:10px;color:#ffffff">.</div>'
          );
        }
        document.write("</div></div>");
        function Set() {
          for (i = 0; i < xL; i++) {
            transfer(i);
            xF[i] = xW / 14;
          }
        }
        function Assign() {
          sdiv.style.top = document.body.scrollTop;
          for (i = 0; i < xL; i++) {
            xF[i] -= xS[i] * 25;
            if (xF[i] < 4) xF[i] = 3;
            div[i].style.top = xY[i];
            div[i].style.left = xX[i];
            div[i].style.fontSize = xF[i];
          }
        }
        function fly() {
          xMY = window.document.body.clientHeight / 2;
          xMX = window.document.body.clientWidth / 2;
          xWd = Math.round(Math.random() * 40 + 5);
          xHd = Math.round(Math.random() * 30 + 5);
          for (i = 0; i < xL; i++) {
            xY[i] = xA[i] += (xMY - xA[i]) * xS[i];
            xX[i] = xB[i] += (xMX - xB[i]) * xS[i];
            if (
              xX[i] > xMX - xWd &&
              xX[i] < xMX + xWd &&
              xY[i] > xMY - xHd &&
              xY[i] < xMY + xHd
            ) {
              transfer(i);
            }
            if (xX[i] < 0 || xX[i] > xW || xY[i] < 0 || xY[i] > xH) {
              xF[i] = xW / 14;
            }
          }
          Assign();
          setTimeout("fly()", 1);
        }
        function transfer(i) {
          xH = window.document.body.offsetHeight;
          xW = window.document.body.offsetWidth;
          xA[i] = Math.round(Math.random() * xH);
          xB[i] = Math.round(Math.random() * xW);
          xS[i] = Math.random() * 0.05 + 0.05;
          xR = Math.round(Math.random() * 3);
          xE = Math.round(Math.random() * 50 + 50);
          if (xR == 3) xB[i] = -xE;
          if (xR == 2) xB[i] = xW + xE;
          if (xR == 1) xA[i] = -xE;
          if (xR == 0) xA[i] = xH;
        }
        console.log(window)
        Set();
        fly();
        
}

