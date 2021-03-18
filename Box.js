class Box{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var o={
            friction:4,
            density:0.3,
            restitution:0.02
        }
        this.body=Bodies.rectangle(x,y,width,height,o);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        stroke("green");
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}