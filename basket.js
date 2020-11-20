class basket{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restititution: 1,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }

        display(){
            var pos = this.body.position;

            rectMode(CENTER);
            fill("red");
            stroke("white");
            
            rect(pos.x, pos.y, this.width, this.height);
        }
    
}