var num_O = 0; // 맞은 갯수
var num_X = 0; // 틀린 갯수

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

function func_make() {
	
	i = 0
	
	while(document.getElementById("Q_"+i)) {
		
		rnd_value = Math.floor(Math.random()*100);
		mySpan = document.getElementById("Q_"+i);

		if (rnd_value <= 30) {
			mySpan.className = "Q_box";
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
