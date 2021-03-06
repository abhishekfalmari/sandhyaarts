'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	/*---------------------
		Instagram slider
	----------------------*/
	$('.instagram-slider').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		responsive : {
			0 : {
				items: 3,
			},
			480 : {
				items: 4,
				
			},
			768 : {
				items: 5,
			},
			991 : {
				items: 6,
			},
			1200 : {
				items: 7,
			}
		}
	});

	/*---------------
		Masonry
	----------------*/
	var masonryLayout = function () {
		$('.portfolio-grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	}

	/*---------------
		Mixitup
	----------------*/
	masonryLayout();
	if($('.portfolio-gallery').length > 0 ) {
		var containerEl = document.querySelector('.portfolio-gallery');
		var mixer = mixitup(containerEl, {
			callbacks: {
				onMixEnd: function() {
					masonryLayout();
				}
			}
		});
	}

	
});
	

(function($) {

	/*----------------------
		Carousel item load
	------------------------*/

	var CarouselItem = function () {
		var folder = './img/images'
		var i = 0;
		var fileExt = [];
		fileExt[0]=".png";
		fileExt[1]=".jpg";

		$.get({url: folder, async: false, success: function(data){
			var files = $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + ")")

			for (i =0; i < files.length/3; i++){
					//  var filename = this.href.replace(window.location.host, "./img/images").replace("http://", "");
					var filename = files[i].href.replace(window.location.host, "./img/images").replace("http://", "").replace("https://", "");
					// console.log(i +"=>" +filename)

					$('.carouselItem').append(`<div class="hero-item portfolio-item set-bg" data-setbg="`+filename+`" style="background-image: url('`+filename+`'); height: 217.025px;"> 
													<a href="images.html" class="hero-link">
														<h2>Take a look at my Portfolio</h2>
													</a>
												</div>`);
				};
			for (i = parseInt(files.length/3); i < parseInt(files.length/3*2); i++){
					//  var filename = this.href.replace(window.location.host, "./img/images").replace("http://", "");
					var filename = files[i].href.replace(window.location.host, "./img/images").replace("http://", "").replace("https://", "");
					// console.log(i +"=>" +filename)

					$('.carouselItem1').append(`<div class="hero-item portfolio-item set-bg" data-setbg="`+filename+`" style="background-image: url('`+filename+`'); height: 217.025px;"> 
													<a href="images.html" class="hero-link">
														<h2>Take a look at my Portfolio</h2>
													</a>
												</div>`);
				};
			for (i = parseInt(files.length/3*2); i < files.length; i++){
					//  var filename = this.href.replace(window.location.host, "./img/images").replace("http://", "");
					var filename = files[i].href.replace(window.location.host, "./img/images").replace("http://", "").replace("https://", "");
					// console.log(i +"=>" +filename)

					$('.carouselItem2').append(`<div class="hero-item portfolio-item set-bg" data-setbg="`+filename+`" style="background-image: url('`+filename+`'); height: 217.025px;"> 
													<a href="images.html" class="hero-link">
														<h2>Take a look at my Portfolio</h2>
													</a>
												</div>`);
				};
			}	
		});
	}
	CarouselItem();

	/*------------------------
	   Portfolio Images load
	--------------------------*/

	var PortfolioItem = function () {
		var folder = './img/images'
		var i = 0;
		var fileExt = [];
		fileExt[0]=".png";
		fileExt[1]=".jpg";

		$.get({url: folder, async: false, success: function(data){
			var files = $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + ")")

			for (i =0; i < files.length; i++){
					//  var filename = this.href.replace(window.location.host, "./img/images").replace("http://", "");
					var filename = files[i].href.replace(window.location.host, "./img/images").replace("http://", "").replace("https://", "");
					// console.log(i +"=>" +filename)

					$('.portfolioItem').append(`<div class="mix col-xl-2 col-md-3 col-sm-4 col-6 p-0">
													<a href="`+filename+`" class="portfolio-item img-popup set-bg" data-setbg="`+filename+`" style="background-image: url("`+filename+`"); height: 253.2px;"></a>
												</div>`);
				};
			}	
		});
		$('.portfolioItem').append(`<div class="mix col-xl-2 col-md-3 col-sm-4 col-6 p-0">
										<div class="portfolio-item  next-btn">
											<h2>Next</h2>
										</div>
									</div>`);
	}
	PortfolioItem();

	/*--------------------
	   Video Items load
	----------------------*/

	var VideoItem = function () {
		var file = './videos.txt'
		var itemList;
		fetch(file)
		.then(response => response.text())
		.then(text => {
			// console.log(text)
			text = text.split("\r\n")
			// console.log(text)
			text.forEach(item => {
				item = 	item.replace("https://www.youtube.com/watch?v=","")			
				// console.log(item)
				$('.videoItems').append(`<div class="mix col-lg-4 col-sm-6 p-0">
												<div class="portfolio-box">
													<div class="portfolio-item set-bg" style="height: 371.325px;">
														<iframe width="100%" height="100%" src="https://www.youtube.com/embed/`+item+`" allowfullscreen></iframe>
													</div>
												</div>
											</div>`);
			});
		});
	}
	VideoItem();

	/*------------------
		Navigation
	--------------------*/
	$('.main-menu').slicknav({
		appendTo:'.header-section',
		closedSymbol: '<i class="fa fa-angle-down"></i>',
		openedSymbol: '<i class="fa fa-angle-up"></i>'
	});

	$('.nav-switch-btn').on('click', function() {
		if(localStorage.getItem("navMenu") == null) {
			localStorage.setItem("navMenu", "show");
			$('.main-menu').slideDown(400);
		} else if(localStorage.getItem("navMenu") == "show") {
			localStorage.removeItem("navMenu");
			$('.main-menu').slideUp(400);
		}
	});

	if(localStorage.getItem("navMenu") == "show") {
		$('.main-menu').slideDown(400);
	}

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
				
			},
			768 : {
				items: 3,
			},
			991 : {
				items: 4,
			},
			1200 : {
				items: 5,
			},
			1400 : {
				items: 7,
			}
		}
	});


	/*----------------------
		Portfolio item size
	------------------------*/
	var PorfolioItemFix = function () {
		$( ".portfolio-item" ).each(function( index ) {
			var portfolioItem = $(this);
			var PIheight = portfolioItem.width();
			portfolioItem.css('height',PIheight);
		});
	}
	PorfolioItemFix();
	$(window).on('resize',function(){
		PorfolioItemFix();
	});

	
	/*------------------
		Image Popup
	--------------------*/
	$('.img-popup').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});
	

	/*------------------
		Progress Bar
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 190,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 190,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

	
	if($('#instafeed').length > 0) {
		userFeed.run();
	}
	
})(jQuery);
