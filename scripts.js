var num_O = 0; // 맞은 갯수
var num_X = 0; // 틀린 갯수

function Moving() {
	location.href = "./index.html"
}

function func_toggle(myID) {
	
	mySpan = document.getElementById(myID);

	if (mySpan.className == "Q_box") {
		mySpan.className = "O_box";
		num_O = num_O + 1;
	}
	else if (mySpan.className == "O_box") {
		mySpan.className = "X_box";
		num_O = num_O - 1;
		num_X = num_X + 1;
	}
	else if (mySpan.className == "X_box") {
		mySpan.className = "O_box";
		num_O = num_O + 1;
		num_X = num_X - 1;
	}
}

function func_make(difficulty) {
	
	accum = 0;
	rnd_value = Math.floor(Math.random()*100);
	mySpan = document.getElementById("Q_0");
	if (rnd_value <= difficulty) {
		mySpan.className = "Q_box";
		accum = accum +1;
	}
	else {
		accum = 0;
	}

	i = 1;

	while(document.getElementById("Q_"+i)) {
		
		rnd_value = Math.floor(Math.random()*100);		
		mySpan = document.getElementById("Q_"+i);

		if (accum >= Math.round(difficulty/15)) {
			accum = 0;
		}
		else if (rnd_value <= difficulty) {
			mySpan.className = "Q_box";
			accum = accum +1;
		}
		else {
			accum = 0;
		}

		i = i + 1;

	}
}

function func_score() {

	var score = 100 * num_O / (num_O + num_X);
	alert('당신의 점수는 ' + score + '점입니다.');
	//document.body.innerHTML += score;
	//document.body.innerHTML += '점입니다.</p>';
}
