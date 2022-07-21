var canvas= document.getElementById("my_canvas");
var ctx=canvas.getContext("2d"); 
var color = "blue"; 

ctx.beginPath();
ctx.strokeStyle= color; 
ctx.lineWidth= 2; 
ctx.arc(20,20,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown" , my_mousedown);
 
function my_mousedown(e){

    console.log(color); 
    mouse_x= e.clientX-canvas.offsetLeft; 
    mouse_y= e.clientY-canvas.offsetTop; 
    console.log("X = " + mouse_x + ", Y = " + mouse_y); 

    rings(mouse_x, mouse_y);
}
   

function rings(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth= 6; 
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke(); 
    color="black"; 
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth= 6; 
    ctx.arc(mouse_x+100,mouse_y,40,0,2*Math.PI);
    ctx.stroke(); 
    color="red"; 
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth= 6; 
    ctx.arc(mouse_x+200,mouse_y,40,0,2*Math.PI);
    ctx.stroke(); 
    color="yellow"; 
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth= 6; 
    ctx.arc(mouse_x+50,mouse_y+50,40,0,2*Math.PI);
    ctx.stroke(); 
    color="green"; 
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth= 6; 
    ctx.arc(mouse_x+150,mouse_y+50,40,0,2*Math.PI);
    ctx.stroke(); 
    color="blue"; 

}
function Clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    console.log(canvas.width, " ", canvas.height)
}