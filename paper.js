 class paper{
     constructor(x, y, radius){
         var options = {
             'isStatic': false,
             'friction': 0.7,
             'restitution': 0.5,
             'density': 1.2     
         }
         this.body = Bodies.circle(x, y, radius ,options);
         World.add(world, this.body);  
         this.radius = radius  
     }

     display(){
         var pos = this.body.position;

        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("lightgreen")
        ellipse(0,0,20,20);
        pop();

     }   
 }


// class paper {
//     constructor(){
//         var options = {
//             'isStatic':false,
//             'restitution':0.3,
//             'friction':0.5,
//             'density':1.2
//         }
//         this.body = Bodies.circle(100,200,20,options);
//         World.add(world,this.body)
//     }
//     display(){
//         push();
//         translate(this.body.position.x,this.body.position.y);
//         rotate(this.body.angle);
//         ellipseMode(RADIUS);
//         fill("lightgreen")
//         ellipse(0,0,17,17);
//         pop();
//     }
// }