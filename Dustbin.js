class dustbin{
    constructor(x,y,width,height){
        this.x
        this.y
        this.width
        this.height
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}