class Chain {
    constructor(bodyA, bodyB) {
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness:0.05,
          length:400
      }
      this.Chain = Constraint.create(options);
      World.add(world,this.Chain);

    }
    display(){
      var PointA = this.Chain.bodyA.position;
      var PointB = this.Chain.bodyB.position;
      strokeWeight(3);
      line(PointA.x,PointA.y,PointB.x,PointB.y);
    }
  };