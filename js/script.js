
$(function() {


$('.slider').slick({
	dots: true,
	autoplay: true,
  autoplaySpeed: 2000,
  speed: 1700,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },

{
      breakpoint: 768,
      settings: {
      	 dots: true,
      	   arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },

{
      breakpoint: 980,
      settings: {
      	 dots: true,
      	   arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },


    {
      breakpoint: 600,
      settings: {
      	 dots: true,
      	   arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
      	   dots: true,
      	   arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1

      }
    }
    
  ]
  

});

})


$ (document).ready(function(){
	$('.header__burger').click(function(event){
$('.header__burger, .header__menu').toggleClass('active')
$('body').toggleClass('stop')
	});
});

window.onload = function(){
	let preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
};


