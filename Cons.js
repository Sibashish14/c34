class Cons{
    constructor(bodyA,pointB){
        this.pointB=pointB;
        this.bodyA=bodyA;
        var op={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:250
        }
        this.sling=Matter.Constraint.create(op);
        World.add(world,this.sling);
    }
    display(){
        strokeWeight(2);
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}