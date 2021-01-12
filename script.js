var robot = require("robotjs");
var fs = require("fs");//to read files
// robot.typeStringDelayed(handlePaintApp,1000);
// robot.setMouseDelay(10);
setTimeout(handlePaintApp,1000);
function handlePaintApp(){
    robot.moveMouse(103,844);
    robot.mouseClick();
    robot.typeString("paint");
    robot.keyTap("enter");
    setTimeout(writeHi,2000);
}
function writeHi(){
    robot.moveMouseSmooth(400,250);
    mobot.mouseToggle("down","left");
    // robot.mouseClick();
    robot.dragMouse(400,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(400,350);
    mobot.mouseToggle("down","left");
    robot.dragMouse(600,350);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(600,250);
    mobot.mouseToggle("down","left");
    robot.dragMouse(600,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,250);
    mobot.mouseToggle("down","left");
    robot.dragMouse(900,250);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(800,250);
    mobot.mouseToggle("down","left");
    robot.dragMouse(800,250);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(700,450);
    mobot.mouseToggle("down","left");
    robot.dragMouse(900,450);
    robot.mouseToggle("up","left");

    robot.moveMouseSmooth(1179,19);
    robot.mouseClick();
    setTimeout(handleSlackApp,2000);
}
function handleSlackApp(){
    robot.moveMouse(103,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString("slack");
        robot.keyTap("enter");

        robot.moveMouseSmooth(427,47);
        robot.mouseClick();
        robot.typeStringDelayed("hello i'm madhu ,how are you !");
        // robot.keyTap("enter");
        robot.typeString("hiii");
        robot.mouseClick();
        setTimeout(openChrome,2000);
    },2000);  
}
function openChrome(){
    robot.moveMouseSmooth(103,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString("chrome");
        robot.keyTap("enter");
        robot.moveMouseSmooth(500,500);
        setTimeout(opentabs,2000);
    },2000);
}
function opentabs(){
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(var i = 0;i<tabs.length ;i++){
        for(var j = 0;j<tabs[i].length;j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j< tabs[i].length - 1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
            }
        }
    }
    robot.moveMouseSmooth(500,500);
    setTimeout(openNotepad,2000);
}
function openNotepad(){
    robot.moveMouseSmooth(103,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeString("notepad");
        robot.keyTap("enter");

        robot.moveMouseSmooth(500,500);
        setTimeout(writeOnNotepad,2000);
    },2000);
}
function writeOnNotepad(){
    robot.typeString("system is ready to use");
}