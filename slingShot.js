class SlingShot{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bird.body,
            bodyB:log6.body,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
        
    
    }display  (){
        var pointa=this.sling.bodyA.position
        var pointb=this.sling.bodyB.position
        strokeWeight(4)
        line (pointa.x,pointa.y,pointb.x,pointb.y)
    }
}