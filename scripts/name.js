var name_rotation = false;
var name_angle = 0;

function Name(){
    //name rotation
    push();
    translate(width/2, height/2);
    rotate(name_angle);
    image(name_, 0, 0, width/3, height/5);
    if(name_rotation === false){
        name_angle = 0;
    }else if(name_rotation === true){
        if(name_angle < 361){
            name_angle += 10;
        }else {
            name_rotation = false;
        }
    }
    pop();
};