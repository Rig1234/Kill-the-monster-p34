class Block {
    constructor(x,y,w,h){
        var options = {
            "friction":1.0,
            "restitution":0.5,
            "density": 0.05
        }
        
        this.width = w;
        this.height = h;
this.body = Matter.Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);



    }
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill("orange");
    strokeWeight(5);
    stroke("black");
    rect(0,0,this.width,this.height);
   
    pop();
    

}
}