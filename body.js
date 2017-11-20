// function body(oX, oY, oW, oH, tX, tY, tW, tH, r, g, b){
function body(oX, oY, oW, oH, tX, tY, tW, tH, h){
   this.origin = new block(oX, oY, oW, oH, "origin");
   this.target = new block(tX, tY, tW, tH, "target");
   // this.r = r;
   // this.g = g;
   // this.b = b;
   this.h = h;


   // Not in use yet...
   this.place = function(gridArray){
      var oBlock = gridArray.blocks[floor(random(gridArray.blocks.length-1))];
      this.origin = new block(oBlock.x, oBlock.y, oBlock.w, oBlock.h, 'origin');

      var tBlock = gridArray.blocks[floor(random(gridArray.blocks.length-1))];
      this.target = new block(tBlock.x, tBlock.y, tBlock.w, tBlock.h, 'target');
      var distance = dist(this.origin.x, this.origin.y, this.target.x, this.target.y);
      while (distance < this.target.h){

      }
   }

   this.show = function(){
      noStroke();

      // RGB
      // fill(this.r,this.g, this.b, 150);

      // HSL
      fill(this.h, 100, 50, .5);

      // for early testing only
      // rect(this.target.x, this.target.y, this.target.w, this.target.h);

      // Drawing target block

      // 1st case:
      if (tX < oX && tY < oY) {
         // stroke(255, 0, 0);
         // line(oX + oW, oY, tX + tW, tY);
         // line(oX, oY + oH, tX, tY + tH);

         beginShape();
            // point a
            vertex(this.target.nw.x, this.target.nw.y);
            // point b
            vertex(this.target.ne.x, this.target.ne.y);
            // point c
            vertex(this.origin.ne.x, this.origin.ne.y);
            // point d
            vertex(this.origin.se.x, this.origin.se.y);
            // point e
            vertex(this.origin.sw.x, this.origin.sw.y);
            // point f
            vertex(this.target.sw.x, this.target.sw.y);
         endShape(CLOSE);
      }
      // 2nd case:
      else if (tX >= oX && tY < oY){
         // stroke(0, 255, 0);
         // line(oX, oY, tX, tY);
         // line(oX + oW, oY + oH, tX + tW, tY + tH);

         beginShape();
            // point a
            vertex(this.target.nw.x, this.target.nw.y);
            // point b
            vertex(this.target.ne.x, this.target.ne.y);
            // point c
            vertex(this.target.se.x, this.target.se.y);
            // point d
            vertex(this.origin.se.x, this.origin.se.y);
            // point e
            vertex(this.origin.sw.x, this.origin.sw.y);
            // point f
            vertex(this.origin.nw.x, this.origin.nw.y);
         endShape(CLOSE);

      }
      // 3rd case:
      else if (tX >= oX && tY >= oY) {
         // stroke(0, 0, 255);
         // line(oX + oW, oY, tX + tW, tY);
         // line(oX, oY + oH, tX, tY + tH);

         beginShape();
            // point a
            vertex(this.origin.nw.x, this.origin.nw.y);
            // point b
            vertex(this.origin.ne.x, this.origin.ne.y);
            // point c
            vertex(this.target.ne.x, this.target.ne.y);
            // point d
            vertex(this.target.se.x, this.target.se.y);
            // point e
            vertex(this.target.sw.x, this.target.sw.y);
            // point f
            vertex(this.origin.sw.x, this.origin.sw.y);
         endShape(CLOSE);
      }
      // 4th case:
      else {
         // stroke(0, 255, 255);
         // line(oX, oY, tX, tY);
         // line(oX + oW, oY + oH, tX + tW, tY + tH);

         beginShape();
         // point a
         vertex(this.target.nw.x, this.target.nw.y);
         // point b
         vertex(this.origin.nw.x, this.origin.nw.y);
         // point c
         vertex(this.origin.ne.x, this.origin.ne.y);
         // point d
         vertex(this.origin.se.x, this.origin.se.y);
         // point e
         vertex(this.target.se.x, this.target.se.y);
         // point f
         vertex(this.target.sw.x, this.target.sw.y);
         endShape(CLOSE);
      }

      // Drawing origin block
      fill(25, 50, 10);
      rect(this.origin.x, this.origin.y, this.origin.w, this.origin.h);


   }
}
