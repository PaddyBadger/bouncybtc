$(document).ready(function(){
   function canvas() {
    window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60);
  };};}

var canvas1;
var canvas2;
var canvas3;
var canvas4;
var canvas5;
var canvas6;

var btc1 = new Image();
var btc2 = new Image();
var btc3 = new Image();
var btc4 = new Image();
var btc5 = new Image();
var btc6 = new Image();


btc1.src = '../images/6.png'; 
btc2.src = '../images/9.png';
btc3.src = "../images/3.png";  
btc4.src = '../images/2.png'; 
btc5.src = '../images/5.png'; 
btc6.src = '../images/8.png';

function init() {
drawAll();
}

function drawAll() {
setTimeout(function() {draw({src:btc1,x:720,canvas:"canvas1"})},500);
setTimeout(function() {draw({src:btc2,x:860,canvas:"canvas2"})},1000);
setTimeout(function() {draw({src:btc3,x:1000,canvas:"canvas3"})},1500);
setTimeout(function() {draw({src:btc4,x:1100,canvas:"canvas4"})},2000);
setTimeout(function() {draw({src:btc5,x:1200,canvas:"canvas5"})},2500);
setTimeout(function() {draw({src:btc6,x:1300,canvas:"canvas6"})},3000);
}

function draw(animation) {
       var color = animation.src;
       var x = animation.x;
       var canvas = document.getElementById(animation.canvas);
       var ctx = canvas.getContext("2d");
       var particle_count = Math.random() * (75 - 50) +70; 
       var particles = [];
       var particle;
         
        function Particle() {
         
            var W = canvas.width 
            var H = canvas.height 
            this.radius = Math.random() * (75 - 50) +5;
            this.x = x;
            this.y = 600;
            this.vx = Math.random() * (-30 - -5) + -5;
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx.drawImage(color,this.x,this.y); 
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas.width = window.innerWidth;
            var H =canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, W, H);
            particles.forEach(function(particle) {
                particle.vy += 1;
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.y > 600) {
                  particle.vy -= 13;
                }
                particle.draw();
            });
        }   
        for (var i = 0; i < particle_count; i++) {
        particle = new Particle();
        particles.push(particle);
        }
        renderFrame();            
}
init();

$(document).ready(function currency() {
  $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
  $('#canvasusd').removeClass('noshow');
  $('.gbp').click(function() {
    $(this).addClass('current');
    $('.usd, .eur, .cny').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvasgbp').removeClass('noshow');
  });
  $('.eur').click(function() {
    $(this).addClass('current');
    $('.usd, .gbp, .cny').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvaseur').removeClass('noshow');
  });
  $('.cny').click(function() {
    $(this).addClass('current');
    $('.usd, .gbp, .eur').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvascny').removeClass('noshow');
  });
  $('.usd').click(function() {
    $(this).addClass('current');
    $('.cny, .gbp, .eur').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvasusd').removeClass('noshow');
  });
});

$.getJSON("https://api.bitcoinaverage.com/ticker/USD", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");
           console.log(s);

              var c=document.getElementById("canvasusd");
              var ctx=c.getContext("2d");

              function Value(num, a, b) {
                var one = num;
                var value;

                switch (one) {
                  case ".":
                    value=document.getElementById("decimal");
                  break;
                  case "0":
                   value=document.getElementById("zero");
                  break;
                  case "1":
                   value=document.getElementById("one");
                  break;
                  case "2":
                   value=document.getElementById("two");
                  break;
                  case "3":
                   value=document.getElementById("three");
                  break;
                  case "4":
                   value=document.getElementById("four");
                  break;
                  case "5":
                    value=document.getElementById("five");
                  break;
                  case "6":
                   value=document.getElementById("six");
                  break;
                  case "7":
                   value=document.getElementById("seven");
                  break;
                  case "8":
                   value=document.getElementById("eight");
                  break;
                  case "9":
                   value=document.getElementById("nine");
                  break;
                }
                ctx.drawImage(value,a,b);
              }

              function Value1() {
                Value(s[0],0,0);
              };
              function Value2() {
                Value(s[1],140,0);
              };
              function Value3() {
                Value(s[2],280,0);
              };
              function Value4() {
                Value(s[3],420,0);
              };
              function Value5() {
                Value(s[4],560,0);
              };
              function Value6() {
                Value(s[5],700,0);
              };
              function Value7() {
                Value(s[6],840,0);
              };

                setTimeout(Value1,500);
                setTimeout(Value2,1000);
                setTimeout(Value3,1500);
                setTimeout(Value4,2000);
                setTimeout(Value5,2500);
                setTimeout(Value6,3000);
                setTimeout(Value7,3500);
                
  });

$.getJSON("https://api.bitcoinaverage.com/ticker/GBP", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");

              var c=document.getElementById("canvasgbp");
              var ctx=c.getContext("2d");

              function Value(num, a, b) {
                var one = num;
                var value;

                switch (one) {
                  case ".":
                    value=document.getElementById("decimal");
                  break;
                  case "0":
                   value=document.getElementById("zero");
                  break;
                  case "1":
                   value=document.getElementById("one");
                  break;
                  case "2":
                   value=document.getElementById("two");
                  break;
                  case "3":
                   value=document.getElementById("three");
                  break;
                  case "4":
                   value=document.getElementById("four");
                  break;
                  case "5":
                    value=document.getElementById("five");
                  break;
                  case "6":
                   value=document.getElementById("six");
                  break;
                  case "7":
                   value=document.getElementById("seven");
                  break;
                  case "8":
                   value=document.getElementById("eight");
                  break;
                  case "9":
                   value=document.getElementById("nine");
                  break;
                }
                ctx.drawImage(value,a,b);
              }

              function Value1() {
                Value(s[0],0,0);
              };
              function Value2() {
                Value(s[1],140,0);
              };
              function Value3() {
                Value(s[2],280,0);
              };
              function Value4() {
                Value(s[3],420,0);
              };
              function Value5() {
                Value(s[4],560,0);
              };
              function Value6() {
                Value(s[5],700,0);
              };
              

                setTimeout(Value1,500);
                setTimeout(Value2,1000);
                setTimeout(Value3,1500);
                setTimeout(Value4,2000);
                setTimeout(Value5,2500);
                setTimeout(Value6,3000);
                
                
  });

$.getJSON("https://api.bitcoinaverage.com/ticker/EUR", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");

              var c=document.getElementById("canvaseur");
              var ctx=c.getContext("2d");

              function Value(num, a, b) {
                var one = num;
                var value;

                switch (one) {
                  case ".":
                    value=document.getElementById("decimal");
                  break;
                  case "0":
                   value=document.getElementById("zero");
                  break;
                  case "1":
                   value=document.getElementById("one");
                  break;
                  case "2":
                   value=document.getElementById("two");
                  break;
                  case "3":
                   value=document.getElementById("three");
                  break;
                  case "4":
                   value=document.getElementById("four");
                  break;
                  case "5":
                    value=document.getElementById("five");
                  break;
                  case "6":
                   value=document.getElementById("six");
                  break;
                  case "7":
                   value=document.getElementById("seven");
                  break;
                  case "8":
                   value=document.getElementById("eight");
                  break;
                  case "9":
                   value=document.getElementById("nine");
                  break;
                }
                ctx.drawImage(value,a,b);
              }

              function Value1() {
                Value(s[0],0,0);
              };
              function Value2() {
                Value(s[1],140,0);
              };
              function Value3() {
                Value(s[2],280,0);
              };
              function Value4() {
                Value(s[3],420,0);
              };
              function Value5() {
                Value(s[4],560,0);
              };
              function Value6() {
                Value(s[5],700,0);
              };
              

                setTimeout(Value1,500);
                setTimeout(Value2,1000);
                setTimeout(Value3,1500);
                setTimeout(Value4,2000);
                setTimeout(Value5,2500);
                setTimeout(Value6,3000);
                
  });

$.getJSON("https://api.bitcoinaverage.com/ticker/CNY", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");
           console.log(s);

              var c=document.getElementById("canvascny");
              var ctx=c.getContext("2d");

              function Value(num, a, b) {
                var one = num;
                var value;

                switch (one) {
                  case ".":
                    value=document.getElementById("decimal");
                  break;
                  case "0":
                   value=document.getElementById("zero");
                  break;
                  case "1":
                   value=document.getElementById("one");
                  break;
                  case "2":
                   value=document.getElementById("two");
                  break;
                  case "3":
                   value=document.getElementById("three");
                  break;
                  case "4":
                   value=document.getElementById("four");
                  break;
                  case "5":
                    value=document.getElementById("five");
                  break;
                  case "6":
                   value=document.getElementById("six");
                  break;
                  case "7":
                   value=document.getElementById("seven");
                  break;
                  case "8":
                   value=document.getElementById("eight");
                  break;
                  case "9":
                   value=document.getElementById("nine");
                  break;
                }
                ctx.drawImage(value,a,b);
              }

              function Value1() {
                Value(s[0],0,0);
              };
              function Value2() {
                Value(s[1],140,0);
              };
              function Value3() {
                Value(s[2],280,0);
              };
              function Value4() {
                Value(s[3],420,0);
              };
              function Value5() {
                Value(s[4],560,0);
              };
              function Value6() {
                Value(s[5],700,0);
              };
              function Value7() {
                Value(s[6],840,0);
              };

                setTimeout(Value1,500);
                setTimeout(Value2,1000);
                setTimeout(Value3,1500);
                setTimeout(Value4,2000);
                setTimeout(Value5,2500);
                setTimeout(Value6,3000);
                setTimeout(Value7,3500);

                
  });
});