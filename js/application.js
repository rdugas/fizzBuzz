$(document).ready(function(){
	alert("let's get buzzed");

	for (var myNumber = 1; myNumber <= 100; myNumber++) {

		if (dividedByEvenly(myNumber, 3) && dividedByEvenly(myNumber, 5)) {
			$("body").append("fizz buzz");
		}
		else if (dividedByEvenly(myNumber, 3)){
			$("body").append("fizz");
		}
		else if (dividedByEvenly(myNumber, 5)){
			$("body").append("buzz");
		}
		else {
			$("body").append(myNumber);
		}
	}

	function dividedByEvenly(numerator, denominator){
		if (numerator % denominator == 0)
			{return true};
	}

});