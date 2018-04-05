// SMOOTH SCROLL
$('a[href^="#top"]').click(function(){

var scroll = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(scroll).offset().top
    }, 'slow');

return false;});



// IMAGE GALLERY
$.fn.simpleSlides = function () {

    return this.each(function () {
        var simple_slideshow = $(this),
            listItems = simple_slideshow.children('li'),
            listLen = listItems.length,
            i = 0,
            changeList = function () {
                listItems.eq(i).fadeOut(300, function () {
                    i += 1;
                    if (i === listLen) { i = 0; }
                    listItems.eq(i).fadeIn(300);
                });
            };
        listItems.not(':first').hide();
        setInterval(changeList, 2000);
    });
}


$(function(){
    $('.slideshow').simpleSlides()
});



// MAP API
function initMap() {
        var uluru = {lat: 77.735729, lng: -45.243699};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }