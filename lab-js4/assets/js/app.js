var objects = ['I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I'
               
               ];
var objects1 = [' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',' love',
               ];


var objects3 = [
' your', ' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',

 
 
                
               
               ];

var objects4 = [' company',
' radio',
' action',
' capital',
' factory', 
' truck', 
' chance', 
' level',
' triangle',
' molecule', 
' church', 
' sister', 
' solution', 
' shop', 
' suffix', 
' shoe', 
' nose', 
' sugar', 
' fig',
' gun', 
' death', 
' experience',
' rose',
' woman', 
' hoe', 
' rope',
' cotton',
' apple', 
' substance', 
' condition',
' cow', 
' seat',
' division',
' effect', 
' underline',
' view' 


               
               
               ];

var colors  = ['red', 'blue', 'yellow'];

$('.button').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      object_to_use        = objects[random_object_number],
      object1_to_use       = objects1[random_object_number],
      
      object3_to_use       = objects3[random_object_number],
      object4_to_use       = objects4[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number < 36) {
    result = '<span class="objects ' + color_to_use + '">' + object_to_use +  object1_to_use +  object3_to_use + object4_to_use +  '</span>'
             ;
}

  $('.content').prepend(result);
});