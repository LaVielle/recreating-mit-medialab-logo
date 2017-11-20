var rowsAndCols = 10;
var grid = new grid(rowsAndCols, rowsAndCols, 0);
var bodies = [];

// Size of tarbet block of the body objects
var targetSize = 3;

var numBodies = 3;

function setup() {
   createCanvas(400, 400);
   background(100);

   colorMode(HSL);

   for (var i = 0; i < grid.rows; i++) {
      var y = i * (height/grid.rows) + grid.margin/2;
      for (var j = 0; j < grid.columns; j++) {
         var x = j * (width/grid.columns) + grid.margin/2;
         grid.blocks.push(new block(x, y, width/grid.columns - grid.margin, height/grid.rows - grid.margin, "grid-background", i + 1, j + 1));
         console.log('drew @ x:', x + " y:", y);
      }
   }

   // Finding possible blocks to place target body
   grid.calcEdges(targetSize);

   for (var i = 0; i < grid.blocks.length; i++) {
      grid.blocks[i].show();
   }
   // var sq1 = grid.blocks[grid.blocks.length-1];
   // var sq1 = grid.blocks[7];
   // text('sq1', sq1.x, sq1.y);

   for (var i = 0; i < numBodies; i++) {
      var r = floor(random(grid.blocks.length-1));
      var sq1 = grid.blocks[r];
      var r2 = floor(random(grid.availableBlocks.length-1));
      var sq2 = grid.availableBlocks[r2];

      var red = random(255);
      var green = random(255);
      var blue = random(255);

      var h = random(360) + i * (random(50, 360)/numBodies);

      // RGB
      // bodies.push(new body(sq1.x, sq1.y, sq1.w, sq1.h, sq2.x, sq2.y, sq2.w * targetSize + grid.margin, sq2.h * targetSize + grid.margin, red, green, blue));

      // HSL
      bodies.push(new body(sq1.x, sq1.y, sq1.w, sq1.h, sq2.x, sq2.y, sq2.w * targetSize + grid.margin, sq2.h * targetSize + grid.margin, h));

   }

   // console.log(sq1);
   // console.log("-- pool:", grid.availableBlocks.length,"--");
   // for (var i = 0; i < grid.availableBlocks.length; i++) {
   //    console.log(grid.availableBlocks[i].coordinates);
   // }
   // console.log(" -- ");
   // // console.log(grid.availableBlocks);
   //
   // // Delete origin block from pool of available blocks
   // grid.availableBlocks.splice(grid.blocks.indexOf(sq1),1);
   // grid.availableBlocks.splice(r,1);
   //
   // console.log("-- deleted sq1 from pool:", grid.availableBlocks.length,"--");
   // for (var i = 0; i < grid.availableBlocks.length; i++) {
   //    console.log(grid.availableBlocks[i].coordinates);
   // }
   // console.log(" -- ");
   //
   // var noDraw = grid.blocks.filter(function( block ) {
   //    return (
   //       (block.coordinates[0] == sq1.coordinates[0] && block.coordinates[1] == sq1.coordinates[1]-1)
   //       ||
   //       (block.coordinates[0] == sq1.coordinates[0]-1 && block.coordinates[1] == sq1.coordinates[1]-1)
   //       ||
   //       (block.coordinates[0] == sq1.coordinates[0]-1 && block.coordinates[1] == sq1.coordinates[1])
   //    );
   // });
   //
   // console.log("noDraw:");
   // console.log(noDraw);
   // console.log("deleting noDraw from pool:");
   // for (var i = 0; i < noDraw.length; i++) {
   //    grid.availableBlocks.splice(grid.blocks.indexOf(noDraw[i]),1);
   // }
   //
   // console.log(grid.availableBlocks);

   // var sq2 = grid.availableBlocks[floor(random(grid.availableBlocks.length-1))];


   // Display bodies
   for (var i = 0; i < bodies.length; i++) {
      bodies[i].show();
   }

   // Show available blocks
   // for (var i = 0; i < grid.availableBlocks.length; i++) {
   //    fill(50, 50, 70, 0.3);
   //    rect(grid.availableBlocks[i].x, grid.availableBlocks[i].y, 30, 30);
   //    console.log('available');
   // }
}

function draw(){

}
