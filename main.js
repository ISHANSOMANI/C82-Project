var mouseEvemt = "empty";
var last_position_x, last_position_y 

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 3 ;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvemt = "mousedown";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvemt = "mouseup";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvemt = "mouseleave";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvemt == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI)
        ctx.lineWidth = width_of_line ;

        console.log("Last position of x and y coordinates = ");
        console.log("x = "+ last_position_x + "y =" + last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = "+ current_position_of_x + "y =" + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

    }
    last_position_x = current_position_of_x;
    last_position_y = current_position_of_y;
}

