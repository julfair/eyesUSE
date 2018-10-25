var vids = [];
var choice = 0;
var playing = true;
var randomChoice;


function preload() {
	vids[0] = createVideo('eyesclosed.mov');
  vids[0].volume(0);
  vids[0].hide();
  vids[1] = createVideo('eyesopen.mov');
  vids[1].volume(0);
  vids[1].hide();
 
}

function setup() {

}




function mousePressed(){ 
  randomChoice = int(random(vids.length));
  vids[1].show();
 	vids[1].loop();
   vids[0].hide();
}

function mouseReleased(){  
  vids[1].hide();
  vids[0].show();
 	vids[0].loop();
}