function grid(r, c, m){
   this.rows = r;
   this.columns = c;
   this.margin = m * 2;

   // this.nodes = [];
   this.blocks = [];
   this.availableBlocks = [];
   this.origins = [];
   this.targets = [];

   this.calcEdges = function(ts){
      for (var i = 0; i < this.blocks.length; i++) {
         if (this.blocks[i].coordinates[0] < this.rows - ts + 2 && this.blocks[i].coordinates[1] < this.columns - ts + 2){
            this.availableBlocks.push(this.blocks[i]);
         }
      }
   }

}
