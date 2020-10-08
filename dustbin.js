class Dust_bin{
    constructor(){
        var optionD = {
            isStatic:true,
            density:1,
        }
         this.body = Bodies.rectangle(1000,550,100,20,optionD);
         this.leftBody = Bodies.rectangle(950,520,100,20,optionD);
         Matter.Body.setAngle(this.leftBody,PI/2);

         this.rightBody = Bodies.rectangle(1050,520,100,20,optionD);
         Matter.Body.setAngle(this.rightBody,-PI/2);

        World.add(world, this.body);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);

       this.image=loadImage("dustbingreen.png");
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 100,20);
        pop();

        push();
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rotate(-PI/2);
        rectMode(CENTER);
        rect(0,0,100,20);
        pop();

        push();
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rotate(PI/2);
        rectMode(CENTER);
        rect(0,0,100,20);
        pop();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y-30, 125, 125);

        }
}