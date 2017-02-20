(function() {
  var cn = document.createElement("canvas");
  cn.style = 'width:650;height:450;border:1px solid #000;';
  document.body.appendChild(cn);
  var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	var size = SIZE = 50;
	var cnv = document.querySelector("canvas");
	var ctx = cnv.getContext('2d');
	var posX = 50;
	var posY = 50;
	var objColor = "#00f";
  
  var blockX = cnv.width/2 - 25;
	var blockY = cnv.height/2 - 25;
			
	var mvLeft = mvUp = mvRight = mvDown = false;
			
	function updateBlock(){
		if(mvLeft){
			posX--;
		}
		if(mvRight){
			posX++;
		}
		if(mvUp){
			posY--;
		}
		if(mvDown){
			posY++;
		}
	}
	
	function colide(){
		if(posX + SIZE > blockX
		&& posX < blockX + size
		&& posY + SIZE > blockY
		&& posY < blockY + size){
			objColor = "#fa0";
		} else {
			objColor = "#00f";
		}
				
		/*
		*
		*
		*limite de mapa*
		*
		*
		*/
		if(posX < 0){
			posX = 0;
		}
		if(posX + SIZE > cnv.width){
			posX = cnv.width - SIZE;
		}
		if(posY < 0){
			posY = 0;
		}
		if(posY + SIZE > cnv.height){
			posY = cnv.height - SIZE;
		}
		
	}
			
	window.addEventListener("keydown",keydownHandler, false);
			
	function keydownHandler(e){
		var key = e.keyCode;
		switch(key){
			case UP:
				mvUp = true;
				break;
			case DOWN:
				mvDown = true;
				break;
			case LEFT:
				mvLeft = true;
				break;
			case RIGHT:
				mvRight = true;
				break;
		}
	}
			
	window.addEventListener("keyup",keyupHandler, false);
			
	function keyupHandler(e){
		var key = e.keyCode;
		switch(key){
			case UP:
				mvUp = false;
				break;
			case DOWN:
				mvDown = false;
				break;
			case LEFT:
				mvLeft = false;
				break;
			case RIGHT:
				mvRight = false;
				break;
		}
	}
			
			
	function update(){
		updateBlock();
		colide();
		draw();
	}
			
	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.fillStyle = "#000";
		ctx.fillRect(blockX,blockY,size,size);
		ctx.fillStyle = objColor;
		ctx.fillRect(posX,posY,SIZE,SIZE);
	}
			
	function loop(){
		window.requestAnimationFrame(loop, cnv);
		update();
	}
			
	loop();
};)
