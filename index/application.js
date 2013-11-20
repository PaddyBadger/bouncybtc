$(document).ready(function(){
   function canvas() {
    window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60);
  };};}
  
  $.getJSON("https://api.bitcoinaverage.com/ticker/USD", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");

              var c=document.querySelector("canvas");
              var ctx=c.getContext("2d");

              function Value1() {
                
                var one = (s[0]);
                var value1;

                switch (one) {
                  case "0":
                   value1=document.getElementById("zero");
                  break;

                  case "1":
                   value1=document.getElementById("one");
                  break;

                  case "2":
                   value1=document.getElementById("two");
                  break;

                   case "3":
                   value1=document.getElementById("three");
                  break;

                   case "4":
                   value1=document.getElementById("four");
                  break;


                  case "5":
                    value1=document.getElementById("five");
                  break;

                   case "6":
                   value1=document.getElementById("six");
                  break;

                   case "7":
                   value1=document.getElementById("seven");
                  break;

                   case "8":
                   value1=document.getElementById("eight");
                  break;

                   case "9":
                   value1=document.getElementById("nine");
                  break;

                  default:
                    value1=document.getElementById("zero");
                }

                ctx.drawImage(value1,0,0);
              }

              function Value2() {
                var two = (s[1]);
                var value2;

                switch (two) {
                  case "0":
                   value2=document.getElementById("zero");
                  break;

                  case "1":
                   value2=document.getElementById("one");
                  break;

                  case "2":
                   value2=document.getElementById("two");
                  break;

                   case "3":
                   value2=document.getElementById("three");
                  break;

                   case "4":
                   value2=document.getElementById("four");
                  break;


                  case "5":
                    value2=document.getElementById("five");
                  break;

                   case "6":
                   value2=document.getElementById("six");
                  break;

                   case "7":
                   value2=document.getElementById("seven");
                  break;

                   case "8":
                   value2=document.getElementById("eight");
                  break;

                   case "9":
                   value2=document.getElementById("nine");
                  break;

                  default:
                    value2=document.getElementById("zero");
                }
                ctx.drawImage(value2,130,0);
              }

              function Value3() {
                var three = (s[2]);
                var value3;

                switch (three) {
                  case "0":
                   value3=document.getElementById("zero");
                  break;

                  case "1":
                   value3=document.getElementById("one");
                  break;

                  case "2":
                   value3=document.getElementById("two");
                  break;

                  case "3":
                   value3=document.getElementById("three");
                  break;

                  case "4":
                   value3=document.getElementById("four");
                  break;

                  case "5":
                    value3=document.getElementById("five");
                  break;

                  case "6":
                   value3=document.getElementById("six");
                  break;

                  case "7":
                   value3=document.getElementById("seven");
                  break;

                  case "8":
                   value3=document.getElementById("eight");
                  break;

                  case "9":
                   value3=document.getElementById("nine");
                  break;

                  default:
                    value3=document.getElementById("zero");
                }

                ctx.drawImage(value3,260,0);
              }

              function Decimal() {
                var decimal=document.getElementById("decimal");
                ctx.drawImage(decimal,390,120);
              }

              function Value4() {
                var four = (s[3]);
                var value4;

                switch (four) {
                  case "0":
                   value4=document.getElementById("zero");
                  break;

                  case "1":
                   value4=document.getElementById("one");
                  break;

                  case "2":
                   value4=document.getElementById("two");
                  break;

                  case "3":
                   value4=document.getElementById("three");
                  break;

                  case "4":
                   value4=document.getElementById("four");
                  break;

                  case "5":
                    value4=document.getElementById("five");
                  break;

                  case "6":
                   value4=document.getElementById("six");
                  break;

                  case "7":
                   value4=document.getElementById("seven");
                  break;

                  case "8":
                   value4=document.getElementById("eight");
                  break;

                  case "9":
                   value4=document.getElementById("nine");
                  break;

                  default:
                    value4=document.getElementById("zero");
                }

                ctx.drawImage(value4,420,0);
              }

              function Value5() {
                var five = (s[4]);
                var value5;

                switch (five) {
                  case "0":
                   value5=document.getElementById("zero");
                  break;

                  case "1":
                   value5=document.getElementById("one");
                  break;

                  case "2":
                   value5=document.getElementById("two");
                  break;

                  case "3":
                   value5=document.getElementById("three");
                  break;

                  case "4":
                   value5=document.getElementById("four");
                  break;

                  case "5":
                    value5=document.getElementById("five");
                  break;

                  case "6":
                   value5=document.getElementById("six");
                  break;

                  case "7":
                   value5=document.getElementById("seven");
                  break;

                  case "8":
                   value5=document.getElementById("eight");
                  break;

                  case "9":
                   value5=document.getElementById("nine");
                  break;

                  default:
                    value5=document.getElementById("zero");
                }

                ctx.drawImage(value5,550,0);
              }

                Value1();
                Value2();
                Value3();
                Decimal();
                Value4();
                Value5();
                
  });
});

                  