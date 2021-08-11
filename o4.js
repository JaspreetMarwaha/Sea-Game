class o4 {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where obstacle will be created  
      this.ry = height-random(200,400);   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("clownfish",o4Animation);
      this.spt.scale=0.3;
      this.spt.velocityX=-2;
    }
  
}