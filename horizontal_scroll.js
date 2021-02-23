$(document).ready(function() {
    var windowWidth;
    windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
    $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 125);
    });
    }
});

$(window).resize(function() {
    var windowWidth;
    windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
      $('html, body, *').mousewheel(function(e, delta) {
        this.scroll -= (delta * 20);
      });
    }  
    else
      $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 20);
      });
    console.log('window was resized to ' + windowWidth);
});

