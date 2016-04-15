clicks=0;
shares=0;

$(".word").click(function() {
  var lwidth = $(this).data('width') * 2;
  console.log($(this).data('width'));
  $(this).data('width',lwidth);
  var newWidth = lwidth + "px";
  $(this).find($(".width")).css("width",newWidth);
if ($(this).data('width') > 1500) {
  	document.location.href = "../lab-letter-site/index.html";
  	console.log("go somewhere");
 }

var random_num = Math.ceil(Math.random() * 100000);
var random_multiplier = Math.random() * 1;

shares += Math.ceil(random_multiplier * random_num);

$('.count').html(shares);

});
$(".word").click(function() {
  var lheight = $(this).data('height') * 2;
  console.log($(this).data('height'));
  $(this).data('height',lheight);
  var newHeight = lheight + "px";
  $(this).find($(".height")).css("height",newHeight);
  });
