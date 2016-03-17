// function
//alert("hello js");

//variables 
var color = "green";
var wallet = 1500;
var converted_wallet = 0;
var conversion_rate = [0.88, 111.51, 0.69 ];




//functions 


function print_text(text) {
	$(".value").html(text);
}
function convert_currency(amount, currency) {
	alert("your conversion rate is " + conversion_rate[1]);
	wallet = amount * conversion_rate[1];
	alert("succesfully converted to Yen");
	display_wallet();
	alert("you now have " + wallet+"yen");
	}






function display_wallet() {
	$(".value").html(wallet);
}


$(".item").click(function() {
	var currency = $(this).data("currency");
	convert_currency(conversion_rate[1], converted_wallet);
});



display_wallet();





