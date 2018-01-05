$( document ).ready(function() {
  "use strict";

  /* ------------------------------------- */
  /* Masonry Grid    ................... */
  /* ------------------------------------- */
    $(function() {
      var $grid = $('.gallery').imagesLoaded( function() {
        $grid.masonry({
          itemSelector: '.item',
        });
      });
    });

 /* ------------------------------------- */ /* Project Gallery   ................... */
 /* ------------------------------------- */
  $(function() {

    function showContent(e, element, navigation, info, img, close) {
      var eventTarget = e.target.hash;
      var imgSrc = $(e.target).parents('figure').children('img').attr('src');

      e.preventDefault();
      $(element).addClass('show');

      $(info).find('li').removeClass('is-visible');
      $(info).find("li"+eventTarget).addClass('is-visible');

      // $(navigation).siblings(".project_info").children('li'+eventTarget).find('img').attr('src', imgSrc);
    }

    var projectContainerList = document.getElementsByClassName('project');

    $(projectContainerList).each(function() {
   //  for (var i = 0; i < projectContainerList.length; i++) {
      var project = $(this);
      var projectNavigation = $(project).children(".project_navigation");
      var projectInfo = $(projectNavigation).siblings(".project_info");
      var projectImg = $('<img>');
      var closeButton = $('<a href="#close" class="close"><i class="ion-android-close"></i></a>');

      function appendAndPrepend(info, img, close) {
        var infoTab = $(info).children('li');
        $(infoTab).append(close);
        $(infoTab).prepend(img);
      }  appendAndPrepend(projectInfo, projectImg, closeButton);

      $(projectNavigation).on('click', function(event) {
        if ( event.target.tagName.toLowerCase() === 'a' ) {
          showContent(event, project, projectNavigation, projectInfo, projectImg, closeButton);
        }
      });

      $('.close').on('click', function(e) {
        e.preventDefault();
        $(project).removeClass('show')
      });

    });

  });


/* ------------------------------------- */
/* Backgound img Appending................... */
/* ------------------------------------- */

  $(function () {
    $('.background-img-holder').each(function(){
      var $imgSrc = $(this).children("img").attr("src");
      $(this).children("img").hide();
      $(this).css('background','url("'+$imgSrc+'")');
      $(this).css('background-size', 'cover');
      $(this).css('background-position', 'center');
      $(this).css('height', '100%');
    });
  });

  /* ------------------------------------- */
  /* ScrollToTop   ................... */
  /* ------------------------------------- */

    $('.up').on('click', function() {
      $('#rightSide').animate({
          scrollTop: 0
      }, 500);
      $('.project_info').animate({
          scrollTop: 0
      }, 500);
      if($(window).width() < 1024) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
      }
      return false;
    });


});
