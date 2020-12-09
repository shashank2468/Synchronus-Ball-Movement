var ball;
var db,reffer,position;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    reffer=db.ref("ball/position")
    reffer.on("value",readPosition)
   // position=ball;
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    reffer.update({
        x:ball.x,
        y:ball.y

    })
}

function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y


}
