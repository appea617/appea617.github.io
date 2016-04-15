lwidth = 1;
$(".letter").click(function() {
  lwidth = lwidth + 2;
  var newWidth = lwidth + "px";
  $(this).css("width",newWidth);
});