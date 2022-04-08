$( document ).ready(function() {
    $('.video-link').click(function() {
      $('.myVideo').attr("src", $(this).attr("vidUrl"));
      $('.overlay').fadeIn(500, function(){
        $('.main-vid-box').fadeIn(500);
        $('.close').fadeIn(500);
      });
    });
    
    $('.close, .overlay').click(function() {
      $('.overlay').fadeOut(500);
      $('.myVideo').attr("src", $(this).attr("vidUrl"));
      $('.main-vid-box').fadeOut(500);
      $('.close').fadeOut(500);
    });
  });