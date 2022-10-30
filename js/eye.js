$(document).mousemove(function(e) {
    $('#cursor').css({
      left:e.pageX - 1,
      top:e.pageY - 1
    });
  });