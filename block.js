function block(x, y, w, h, t, rC, cC){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.type = t;
   this.coordinates = [rC, cC];
   this.nw = createVector(this.x, this.y);
   this.ne = createVector(this.x + this.w, this.y);
   this.sw = createVector(this.x, this.y + this.h);
   this.se = createVector(this.x + this.w, this.y + this.h);

   var isOnEdge;

   this.show = function(){

      // noStroke();
      // fill(200, 50, 50);
      stroke(255,0,70);
      // strokeWeight(1);
      rect(this.x, this.y, this.w, this.h);

      // fill(0);
      // text(this.coordinates, this.x, this.y + 10);
   }
}
