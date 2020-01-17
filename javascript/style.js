
function show1(event){
  $(event).each(function(){
     $("ul li.hidden1").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden1');
          nxt();
        });
      });
  });
  
}

function hide1(event){
  var slides = document.getElementsByClassName("hidden1");
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
     }
}


function show2(event){
  $(event).each(function(){
     $("ul li.hidden2").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden2');
          nxt();
        });
      });
  });
  
}

function hide2(event){
  $event.each(function(){
    $("ul li.hidden2").addClass('hidden2');
  });
  
}


function show3(event){
  $(event).each(function(){
     $("ul li.hidden3").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden3');
          nxt();
        });
      });
  });
  
}

function hide3(event){
  $event.each(function(){
    $("ul li.hidden3").addClass('hidden3');
  });
  
}


function show4(event){
  $(event).each(function(){
     $("ul li.hidden4").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden4');
          nxt();
        });
      });
  });
  
}

function hide4(event){
  $event.each(function(){
    $("ul li.hidden4").addClass('hidden4');
  });
  
}
function show5(event){
  $(event).each(function(){
     $("ul li.hidden5").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden5');
          nxt();
        });
      });
  });
  
}

function hide5(event){
  $event.each(function(){
    $("ul li.hidden5").addClass('hidden5');
  });
  
}


function show6(event){
  $(event).each(function(){
     $("ul li.hidden6").each(function(i) {
        $(this).delay(500 * i).queue(function(nxt) {
          $(this).removeClass('hidden6');
          nxt();
        });
      });
  });
  
}

function hide6(event){
  $event.each(function(){
    $("ul li.hidden6").addClass('hidden6');
  });
  
}

