$(document).ready(function () {
    $("#pic1").click(function () {
      $(".social-media-img").toggle('1500');
      $(".fb").toggle('1000');
    });
    $("pic2").click(function () {
      $(".social-media-img").toggle('1500');
      $(".inst").toggle('1000');
    });
  
    $("#pic3").click(function () {
      $(".social-media-img").toggle('1500');
      $(".twit").toggle('1000');
    });
  
  
    $("#pic4").click(function () {
      $(".social-media-img").slideUp('1500');
      $(".yout").slideDown('1500');
    });
});

