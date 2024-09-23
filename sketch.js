function setup(){
    createCanvas(500, 500);
    background(137,96, 145);
}
function draw(){

    rotate
    strokeWeight(5);
    for(var m =0; m < height+1; m++){
        fill(0);
        line(0, m, width, m);
        stroke(m/1.5, 225, 145);
    }
    
    fill(235, 252, 235);
    ellipse(380, 520, 500);
    fill(235, 252, 235);
    

    for(var y = -25; y <= height+30; y += 10){
        for(var x = -500; x <= width; x += 30){
            strokeWeight(1);
            fill(237, 202, 252);
            stroke(245, 227, 252);
            rect(x+y , y, 17- y/20, 17- y/20);

            fill(0);
            
        }
    }


    for(var a = -200; a <= 500; a += 60){
        for(var b = 10; b <= height;  b += 75){
            strokeWeight(2);
            stroke(240, 209, 137);
            fill(240, 193, 84);
            rect(a-(b*1), 500-(b/2), 50-(a/10), 50+(a/10));
        }
    }

    for(var a = 200; a <= 500; a += 60){
        for(var b = -10; b <= width;  b += 75){
            strokeWeight(2);
            stroke(240, 209, 137);
            fill(240, 193, 84);
            rect(a-(b*1.), 0-(b/2), 25-(a/10), 100+(a/10));
        }
    }
}

    