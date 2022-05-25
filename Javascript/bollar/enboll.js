var canvas =document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var h=window.innerHeight;

var w=window.innerWidth

canvas.width=w;

canvas.height=h;

var x=100;
var y=100;
var xSpeed=1;
var ySpeed=2;
var g =2;

var antalbollar=100;
var bollar=[];


for (var i = 0; i < antalbollar; i++){

bollar.push({

  x:Math.floor(Math.random()*w),
  y:Math.floor(Math.random()*h),
  r:Math.random()*50,
  c1:Math.random()*255,
  c2:Math.random()*255,
  c3:Math.random()*255,
  xv:Math.random()*10,
  yv:Math.random()*10,


});

}

function update(){

  bollar.forEach((boll, bollar) => {
    //ySpeed= ySpeed+g;
    boll.x=boll.x+boll.xv;
    boll.y=boll.y+boll.yv;


  });



}

function paint(){

ctx.clearRect(0,0,w,h);
bollar.forEach((boll, bollar) => {

ctx.beginPath();
ctx.arc(boll.x, boll.y, boll.r, 0, 2 * Math.PI);
ctx.lineWidth=10;
ctx.strokeStyle="rgb(255,255,255, 255)";
ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
ctx.stroke();
ctx.fill();



});










update();
}


setInterval(paint,20);
