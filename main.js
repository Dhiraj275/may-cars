	//define
	var c1 = document.getElementById("charactor1");
	var c2 = document.getElementById("charactor2");
	var c3 = document.getElementById("charactor3");
	pos= 0;
	posison=200;
	blocktop =parseInt(window.getComputedStyle(c1).getPropertyValue("top"));
	blockleft =parseInt(window.getComputedStyle(c1).getPropertyValue("left"));
	c2top=parseInt(window.getComputedStyle(c2).getPropertyValue("top"));
	c2left=parseInt(window.getComputedStyle(c2).getPropertyValue("left"));
	c3top=parseInt(window.getComputedStyle(c3).getPropertyValue("top"));
	c3left=parseInt(window.getComputedStyle(c3).getPropertyValue("left"));
	let offsetLeft =Math.abs(blockleft-c2left);
	let offsetTop =Math.abs(blocktop-c2top);
	let offsetLeftc3 =Math.abs(blockleft-c3left);
	let offsetTopc3 =Math.abs(blocktop-c3top);
	score=0;
	//check

	setInterval(()=>{
	blocktop =parseInt(window.getComputedStyle(c1).getPropertyValue("top"));
	blockleft =parseInt(window.getComputedStyle(c1).getPropertyValue("left"));
	c2top=parseInt(window.getComputedStyle(c2).getPropertyValue("top"));
	c2left=parseInt(window.getComputedStyle(c2).getPropertyValue("left"));
	c3top=parseInt(window.getComputedStyle(c3).getPropertyValue("top"));
	c3left=parseInt(window.getComputedStyle(c3).getPropertyValue("left"));
	let offsetLeftc3 =Math.abs(blockleft-c3left);
	let offsetTopc3 =Math.abs(blocktop-c3top);
	let offsetLeft =Math.abs(blockleft-c2left);
	let offsetTop =Math.abs(blocktop-c2top);
	//enemy
	let offsetLeftEnemy =Math.abs(c2left-c3left);
	let offsetTopEnemy =Math.abs(c2top-c3top);

	if(offsetLeftEnemy<100&&  offsetTopEnemy<80){
	c3top =parseInt(window.getComputedStyle(c3).getPropertyValue("top"));
	c3.style.top=c2top+200+'px';

	}



	if(offsetLeftc3<98&&  offsetTopc3<58){
	score=0;
	c1.style.animation="none";
	c2.style.animation="none";
	c3.style.animation="none";
	document.getElementById("game_over").style.display="flex";
	}
	else{
	score++
	}
	document.getElementById("score").innerHTML=score;


	if(offsetLeft<98&&  offsetTop<58){
	score=0;
	c1.style.animation="none";
	c2.style.animation="none";
	c3.style.animation="none";
	document.getElementById("game_over").style.display="flex";
	}
	else{
	score++
	}



	document.getElementById("score").innerHTML=score;
	},10);


	document.getElementById("move").addEventListener('click',()=>{
	let height=parseInt(window.getComputedStyle(c1).getPropertyValue("top"));
	c1.style.top=Math.abs(height-60)  +'px';
	});

	document.getElementById("move_down").addEventListener('click',()=>{
	let height=parseInt(window.getComputedStyle(c1).getPropertyValue("top"));
	c1.style.top=Math.abs(height+60) +'px';
	})

	c2, c3.addEventListener('animationiteration', ()=>{
	randomheight =Math.floor(Math.random() * 60 +10);
	c2.style.top=randomheight +'vh';
	c3height =Math.floor(Math.random() * 60 +10);
	c3.style.top=c3height +'vh';

	});
	setInterval(()=>{
	healthbar=document.querySelector(".health_bar_c");
	barwidth=parseInt(window.getComputedStyle(healthbar).getPropertyValue("width"));
	if(barwidth<5){
	healthbar.style.width= barwidth-2+'%';
	}

	if(barwidth==0){
	c2.style.animation="none";

	}
	if(score==1000){
	c2.style.animation='move 2s linear infinite';
	}


	},10
	);
	c3.addEventListener('click', ()=>{
	console.log(computhight);
	});
	document.addEventListener('click', ()=>{
	var elem = document.documentElement;
	  if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	  } else if (elem.mozRequestFullScreen) { /* Firefox */
	  elem.mozRequestFullScreen();
	  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
	  elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE/Edge */
	  elem.msRequestFullscreen();}
	});
	document.getElementById("restart").addEventListener('click', ()=>{
	c2.style.animation="move 2s linear infinite";
	score=0;
	c3.style.animation="move 4s linear infinite";
	document.getElementById("game_over").style.display="none";
	});