
$("#factButton").on("click", function() {
	//random number one to five (uses length of array)
	var number = Math.floor((Math.random() * booFacts.length));
	
	$("#factText").text(booFacts[number])
})

var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ] //this was a single string not an array

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink") //missing quotations arround pink
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() { //missing quotes around click
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})