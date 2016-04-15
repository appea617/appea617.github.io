
$(".letter").click(function() {
  var lwidth = $(this).data('width') * 2;
  console.log($(this).data('width'));
  $(this).data('width',lwidth);
  var newWidth = lwidth + "px";
  $(this).find($(".width")).css("width",newWidth);
});