var owlname;
var number = 0;
var cnumber = 6;
function plus() {
	number++;
	console.log("number= " + number);
}
function check() {
	if (number = cnumber){

		document.getElementById('number').innerHTML = number;
	} 
	else
		document.getElementById('incorrect').innerHTML = number;
}