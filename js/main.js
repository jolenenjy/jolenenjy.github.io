$('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  })

$(function() {
    var header = $(".nav-wrap");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (pass1.toLowerCase() == "letmesee") {
  location.href = "pg.html";
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
return " ";
} 