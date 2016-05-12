
clicks=0;
shares=0;




var objects = ['I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I'
               
               ];
var objects1 = [' loathe',' hate',' am repusled by',' am repulsed by',' am disgusted by',' cringe at the thought of',' absolutely hate',' loathe',' hate',' am repusled by',' am repulsed by',' am disgusted by',' cringe at the thought of','absolutely hate',' loathe',' hate',' am repusled by',' am repulsed by',' am disgusted by',' cringe at the thought of','absolutely hate',' loathe',' hate',' am repusled by',' am repulsed by',' am disgusted by',' cringe at the thought of','absolutely hate',' loathe',' hate',' am repusled by',' am repulsed by',' am disgusted by',' cringe at the thought of',
               ];
var objects2 = [' your', ' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',

               
               ];

var objects3 = [' ugly hair',
' ugly face',
' stupidity',
' dumb opinions',
' pointless posts', 
' small popularity', 
' small mounts of likes', 
' fat body',
' out of shape body',
' ignorance', 
' narcissism', 
' need to share everything',
' ugly hair',
' ugly face',
' stupidity',
' dumb opinions',
' pointless posts', 
' small popularity', 
' small mounts of likes', 
' fat body',
' out of shape body',
' ignorance', 
' narcissism', 
' need to share everything',
' ugly hair',
' ugly face',
' stupidity',
' dumb opinions',
' pointless posts', 
' small popularity', 
' small mounts of likes', 
' fat body',
' out of shape body',
' ignorance', 
' narcissism', 
' need to share everything', 


 
 
                
               
               ];

var objects4 = [' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , ewwww',
' ugh',
' lol',
' haha', 
' omg', 
' , like totally',
' omg', 
' , like totally' 


               
               
               ];
var objects5 = ['I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I','I'
               
               ];
var objects6 = [' adore',' admire',' worship',' absolutely love',' am obsessed with',' would die for',' want to see more of',' can not get enough of',' adore',' admire',' worship',' absolutely love',' am obsessed with',' would die for',' want to see more of',' can not get enough of',' adore',' admire',' worship',' absolutely love',' am obsessed with',' would die for',' want to see more of',' can not get enough of',' adore',' admire',' worship',' absolutely love',' am obsessed with',' would die for',' want to see more of',' can not get enough of',' adore',' admire',' worship',' absolutely love',' am obsessed with',' would die for',' want to see more of',' can not get enough of'
               
               ];
var objects7 = [' your', ' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your',' your'
               
               ];
var objects8 = [' pretty face',' intelligence',' eloquence',' opinion',' thoughts',' words',' loveliness',' style',' class',' beauty',' pretty face',' intelligence',' eloquence',' opinion',' thoughts',' words',' loveliness',' style',' class',' beauty',' pretty face',' intelligence',' eloquence',' opinion',' thoughts',' words',' loveliness',' style',' class',' beauty',' pretty face',' intelligence',' eloquence',' opinion',' thoughts',' words',' loveliness',' style',' class',' beauty'
               
               ];

var objects9 = [' !!!',
' , yaaaas',
' ugh',
' woah',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , yaaas',
' woah',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , yaaaas',
' woah',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , yaaaas',
' woah',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , yaaaas',
' woah',
' lol',
' haha', 
' omg', 
' , like totally', 
' !!!',
' , yaaas',
' woah',
' lol',
' haha', 
' omg', 
' , like totally',
' omg', 
' , like totally' 
               
               ];

var colors  = ['red', 'blue', 'yellow'];
var counter=0;




$('.start').click(function() {
	var status = $('.status').val();
	var name = $('.name').val();
	var divslay=['.slay','.slay2'];
	var random1 = divslay[Math.floor(Math.random() * divslay.length)];

	
	$(random1).removeClass('hide');
	console.log(random1);

	$('.bar').prepend(status);
	$('.namestat').prepend(name);


});
$('.button1').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      object_to_use        = objects[random_object_number],
      object1_to_use       = objects1[random_object_number],
      object2_to_use       = objects2[random_object_number],
      object3_to_use       = objects3[random_object_number],
      object4_to_use       = objects4[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number < 36) {
    result = '<span class="objects ' + color_to_use + '">' + object_to_use +  object1_to_use + object2_to_use + object3_to_use + object4_to_use +  '</span>'

    
}
   var now = new Date();

  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];


  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];


  var suffix = ( time[0] < 12 ) ? "AM" : "PM";


  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;


  time[0] = time[0] || 12;


  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }


date.join("/") + " " + time.join(":") + " " + suffix;

  $('.reloadbutton').prepend('<div class="result">'+result+('<div class="time">'+(time.join(":") + " " + suffix)));

var random_num = Math.ceil(Math.random() * 10);
var random_multiplier = Math.random() * 1;

shares += Math.ceil(random_multiplier * random_num);

$('.count').html(shares);
 
  


});

$('.button2').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length),
      random_color_number  = Math.floor(Math.random() * colors.length),
      object_to_use        = objects5[random_object_number],
      object1_to_use       = objects6[random_object_number],
      object2_to_use       = objects7[random_object_number],
      object3_to_use       = objects8[random_object_number],
      object4_to_use       = objects9[random_object_number],
      color_to_use         = colors[random_color_number],
      result               = '';

  if (random_object_number < 36) {
    result = '<span class="objects ' + color_to_use + '">' + object_to_use +  object1_to_use + object2_to_use + object3_to_use + object4_to_use +  '</span>'

    
}
   var now = new Date();

  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];


  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];


  var suffix = ( time[0] < 12 ) ? "AM" : "PM";


  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;


  time[0] = time[0] || 12;


  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }


date.join("/") + " " + time.join(":") + " " + suffix;

  $('.reloadbutton').prepend('<div class="result">'+result+('<div class="time">'+(time.join(":") + " " + suffix)));

var random_num = Math.ceil(Math.random() * 10);
var random_multiplier = Math.random() * 1;

shares += Math.ceil(random_multiplier * random_num);

$('.count').html(shares);
 
  


});



