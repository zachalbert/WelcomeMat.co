$(document).ready(function() {

  // Fade some shit in
  $('.features .columns').addClass('animated fadeInLeft');
  $('.nav').addClass('animated fadeInRight');
  $('.ascii-wrapper').hover(function () {
    $('.legend').addClass('animated fadeInDown');
  }, function () {
    $('.legend').removeClass('animated fadeInDown');
  });

  $('.opl').delay(1500).queue( function(next){
    $(this).show().addClass('animated fadeInLeft');
    next();
  });

  function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  $(function() {
    $('.ascii-wrapper').click(function() {
      var id = $(this).attr('id');
      var target = 'ascii-'+id;
      var targetEl = document.getElementById(target);
      SelectText(target);
    });
  });

  // Reveal stuff
  $("a.reveal-demo").click(function(e) {
    e.preventDefault();
    $('#demoModal').foundation('reveal', 'open');
  });

  $("a.reveal-submit").click(function(e) {
    e.preventDefault();
    $('#submitModal').foundation('reveal', 'open');
  });

  $("a.reveal-about").click(function(e) {
    e.preventDefault();
    $('#aboutModal').foundation('reveal', 'open');
  });

  $("a.close-reveal-modal").click(function(e) {
    e.preventDefault();
    $('#submitModal').foundation('reveal', 'close');
  });

});