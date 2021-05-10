class slingShot{

    constructor(stone,pointB){ //pointB = {x: 23, y: 45}
  
        var options = {
            length : 13, 
            stiffness : 0.03, 
            bodyA : stone , 
            pointB: pointB
        }
        this.rope = Matter.Constraint.create(options)
        this.pB = pointB //this.pB.x = 23
        World.add(world,this.rope)

    }
     display(){
        if(this.rope.bodyA){
        var bA = this.rope.bodyA.position
        stroke("brown")
        strokeWeight(6)
        line(bA.x,bA.y,this.pB.x,this.pB.y)
        }
        
    } 
       
    fly(){

        this.rope.bodyA = null
    }

    retry(s){ //s <-- stone's body
    this.rope.bodyA = s

    }
}