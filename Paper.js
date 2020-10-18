class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    }
    display(){
        var ppos = this.body.position
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(ppos.x,ppos.y,this.r,this.r)
    }
}
