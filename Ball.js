class Ball{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=50;
        var option={
            friction:0.3,
            restitution:0.5,
            density:2
        }
        this.body=Bodies.circle(x,y,50,option);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        ellipseMode(RADIUS);
        ellipse(0,0,50,50);
        pop();
    }
}