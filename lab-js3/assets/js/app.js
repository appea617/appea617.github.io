var objects = ['I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I'
               
               ];
var objects1 = [' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will',' will'
               ];
var objects2 = [' be',' have',
' do',
' get',
' make',
' know',
' think',
' take',
' see',
' use',
' find',
' tell',
' call',
' ask',
' feel',
' become',
' leave',
' keep',
' show',
' move',
' kill',
' include',
' grow',
' create',
' open',
' teach',
' consider',
' buy',
' serve',
' build',
' cut',
' raise',
' sell',
' return',
' break'

               
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
      object2_to_use       = objects2[random_object_number],
      object3_to_use       = objects3[random_object_number],
      object4_to_use       = objects4[random_object_number],
      object5_to_use       = objects5[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number < 36) {
    result =  '<span class="objects ' + color_to_use + '">' + object_to_use +  object1_to_use + object2_to_use + object3_to_use + object4_to_use +  '</span>'
             ;
}

  $('.content').prepend(result);

  shares += Math.ceil(random_multiplier * random_num);

var random_num = Math.ceil(Math.random() * 10);
var random_multiplier = Math.random() * 1;  

$('.count').html(shares);
});