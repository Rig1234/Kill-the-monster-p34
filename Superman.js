class Superman{
    constructor(x,y){
      var options = {
          "density": 1.0,
          "frictionAir":0.0005
      }
      this.image = loadImage("images/Superhero-01.png");
      
      this.body = Bodies.rectangle(x,y,options);
      World.add(world,this.body);
    }
    display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width/4, this.height/4);
        this.image.scale = 0.2;
        
        
        pop()
    }
}