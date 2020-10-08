class Paper{
    constructor(x,y,r){
        var optionP = {
            restitution:0.2,
            friction:1.8,
            density:1.2,
            isStatic:false,
        }

        this.body=Bodies.circle(x,y,r,optionP);
        this.image=loadImage("paper.png");

this.radius=r;

        World.add(world, this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius)
        pop();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 80,80);
    }
}