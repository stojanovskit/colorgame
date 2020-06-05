var squares = document.querySelectorAll(".square");
var reset=document.querySelector("#reset");
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255,255)",
    "rgb(0, 0, 255)",
    
]

var pickedColor=pickColor();
function pickColor(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];
}
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent= pickedColor;
function changecolor(color){
for(var i = 0; i < squares.length; i++){
squares[i].style.backgroundColor=color;
}
}
for(var i = 0; i < squares.length; i++){
   squares[i].style.backgroundColor=colors[i];
   squares[i].addEventListener("click", function() {
       var clickedcolor= this.style.backgroundColor;
       if (clickedcolor === pickedColor){
           alert("great");
           changecolor(pickedColor);
       }
       else{
           this.style.backgroundColor="rgb(23, 23, 23)";
           
       }
   })
}
reset.addEventListener("click", function(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor=colors[i];}
        pickedColor=pickColor();
        colordisplay.textContent= pickedColor;
});