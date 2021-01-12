var robot = require("robotjs");
var id = setInterval(showMouseLocation,1000);//this function will reapeat the task mentioned in first parameter after a given interval(mentioned in 2nd parameter 1000milli sec = 1sec)
//robot.moveMouseSmooth(1500,500);//it will move mouse to position x,y
function showMouseLocation(){
    var mouse = robot.getMousePos();//it will give the x,y coordinates of mouse
    console.log(mouse);
    if(mouse.x == 0 && mouse.y ==0){
        clearInterval(id);//it is used to stop the setinterval function ...
    }
}

