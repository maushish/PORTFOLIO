$(document).ready(function(){
    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menubtn i').toggleClass("active")
    });
});
//typing animation script
var typed=new Typed(".typing",{
    strings:["Student" , "Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});




