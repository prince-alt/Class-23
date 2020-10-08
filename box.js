class box{

constructor(x,y,width,height){

var bounce = {

restitution : 1,
density : 1,
friction : 0.3

}

this.body = bodies.rectangle(x,y,width,height,bounce);
this.width = width;
this.height = height;
worldc.add(world,this.body);

}
display(){

var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}
}