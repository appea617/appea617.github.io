
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
});
$(".word").click(function() {
  var lheight = $(this).data('height') * 2;
  console.log($(this).data('height'));
  $(this).data('height',lheight);
  var newHeight = lheight + "px";
  $(this).find($(".height")).css("height",newHeight);
  });




