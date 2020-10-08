class Ground{
    constructor(x,y,w,h){
        var optionG = {
            isStatic:true,
        }

        this.body = Bodies.rectangle(x,y,w,h,optionG);

this.width=w;
this.height=h;

        World.add(world, this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        }
}