$(function(){
//<---------------- Preloader ---------------->
   let $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.loader');
   $spinner.delay(350).fadeOut();
   $preloader.delay(350).fadeOut();


   //<---------------- Hamburger ---------------->
   let burger = $('.burger');
   burger.click(function(){
      burger.toggleClass('active');
      $('.menu').toggleClass('active');
      let classNames = this.className;
      if (classNames.substr(7)=='active'){
         $("body").css("overflow", "hidden");
      } else{
         $("body").css("overflow", "visible");
      }
   });

   //<---------------- Slider ---------------->
   $('.slider__body').slick({
      dots: true
   });
   document.querySelector('.slick-prev').innerHTML = '<i class="fas fa-chevron-left"></i>';
   document.querySelector('.slick-next').innerHTML = '<i class="fas fa-chevron-right"></i>';
});