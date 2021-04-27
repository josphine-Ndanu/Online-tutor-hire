$(document).ready(function () {
    $('.hamburgerIcon').click(function(){
        $('#sidebar').toggle();
    })
  
    //hide nav on screen resize
    $(window). resize(function(){
        $('#sidebar').hide();
    })
})