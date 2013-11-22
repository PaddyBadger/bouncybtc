$(document).ready(function(){
   function canvas() {
    window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60);
  };};}

var canvas1;
var canvas2;
var canvas3;
var canvas4;
var canvas5;
var ctx1;
var ctx2;
var ctx3;
var ctx4;
var ctx5;
var btc1 = new Image();
var btc2 = new Image();
var btc3 = new Image();
var btc4 = new Image();
var btc5 = new Image();

function init() {
canvas1 = document.getElementById("canvas1");
ctx1 = canvas1.getContext("2d");
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");
canvas3 = document.getElementById("canvas3");
ctx3 = canvas3.getContext("2d");
canvas4 = document.getElementById("canvas4");
ctx4 = canvas4.getContext("2d");
canvas5 = document.getElementById("canvas5");
ctx5 = canvas5.getContext("2d");
drawAll();
}

function drawAll() {
setTimeout(draw1,500);
setTimeout(draw2,1000);
setTimeout(draw3,1500);
setTimeout(draw4,2000);
setTimeout(draw5,2500);
}

function draw1() {
        btc1.src = '../images/6.png'; 
        var particle_count = 50; 
        var particles = [];
        var particle;
         
        function Particle() {
         
            var W =canvas1.width 
            var H =canvas1.height 
            this.radius = 50;
            this.x = 720;
            this.y = 600;
            this.vx = Math.random() * (-30 - -5) + -5;
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx1.drawImage(btc1,this.x,this.y); 
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas1.width = window.innerWidth;
            var H =canvas1.height = window.innerHeight;
            ctx1.clearRect(0, 0, W, H);
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

function draw2() {
        btc2.src = '../images/9.png'; 
        var particle_count = 50; 
        var particles = [];
        var particle;
         
        function Particle() {
         
            var W =canvas2.width; 
            var H =canvas2.height; 
            this.radius = 50;
            this.x = 860;
            this.y = 600;

            if (this.x > W/2 ){
                this.vx = Math.random() * (-15 - -5) + -5;
            }else{
                this.vx = Math.random() * (15 - 5) + 5;
            }
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx2.drawImage(btc2,this.x,this.y);
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas2.width = window.innerWidth;
            var H =canvas2.height = window.innerHeight;
            ctx2.clearRect(0, 0, W, H);
            particles.forEach(function(particle) {
                particle.vy += 1;
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.y > 1000) {
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

function draw3() {
        btc3.src = "../images/3.png"; 
        var particle_count = 50; 
        var particles = [];
        var particle;
         
        function Particle() {
         
            var W =canvas3.width 
            var H =canvas3.height 
            this.radius = 50;
            this.x = 1000;
            this.y = 600;

            if (this.x > W/2 ){
                this.vx = Math.random() * (-15 - -5) + -5;
            }else{
                this.vx = Math.random() * (15 - 5) + 5;
            }
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx3.drawImage(btc3,this.x,this.y);
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas3.width = window.innerWidth;
            var H =canvas3.height = window.innerHeight;
            ctx3.clearRect(0, 0, W, H);
            particles.forEach(function(particle) {
                particle.vy += 1;
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.y > 800) {
                  particle.vy -= 13;
                }
                particle.draw();
            });
        }   
        for (var i = 0; i < particle_count; i++) {
        particle = new Particle();
        console.log(i);
        particles.push(particle);
        }
        renderFrame();            
}

function draw4() {
        btc4.src = '../images/2.png'; 
        var particle_count = 50; 
        var particles = [];
        var particle;
         
        function Particle() {
         
            var W =canvas4.width 
            var H =canvas4.height 
            this.radius = 50;
            this.x = 1100;
            this.y = 600;
            this.vx = Math.random() * (-30 - -5) + -5;
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx4.drawImage(btc4,this.x,this.y); 
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas4.width = window.innerWidth;
            var H =canvas4.height = window.innerHeight;
            ctx4.clearRect(0, 0, W, H);
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

function draw5() {
        btc5.src = '../images/5.png'; 
        var particle_count = 50; 
        var particles = [];
        var particle;
         
        function Particle() {
         
            var W =canvas5.width 
            var H =canvas5.height 
            this.radius = 50;
            this.x = 1200;
            this.y = 600;
            this.vx = Math.random() * (-30 - -5) + -5;
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx5.drawImage(btc5,this.x,this.y); 
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas5.width = window.innerWidth;
            var H =canvas5.height = window.innerHeight;
            ctx5.clearRect(0, 0, W, H);
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
  
  $.getJSON("https://api.bitcoinaverage.com/ticker/USD", function(json) {
          
           var n = (json['last']);
           var l = String(n);
           var s = String.prototype.split.call(l, "");

              var c=document.getElementById("canvas");
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
                ctx.drawImage(value2,140,0);
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

                ctx.drawImage(value3,280,0);
              }

              function Decimal() {
                var decimal=document.getElementById("decimal");
                ctx.drawImage(decimal,420,120);
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

                ctx.drawImage(value4,460,0);
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

                ctx.drawImage(value5,600,0);
              }

                setTimeout(Value1,500);
                setTimeout(Value2,1000);
                setTimeout(Value3,1500);
                setTimeout(Decimal,500);
                setTimeout(Value4,2000);
                setTimeout(Value5,2500);
                
  });
});
