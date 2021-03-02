$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list li').click(function(event) {
		$(this).toggleClass('opened');

	});
	$('.footer__title').click(function(event) {
		if (document.body.clientWidth < 900) {
			$(this).toggleClass('opened').next().slideToggle(250); 
		}
	});
	window.onscroll = function showHeader() {
		var header = document.querySelector('.header');
		var burger = document.querySelector('.header__burger');

		if(window.pageYOffset > 50) {
			header.classList.add('moving');
			burger.classList.add('moved')

		} else {
			header.classList.remove('moving');
			burger.classList.remove('moved');
		}
	};

	$('.view__navig ul li').click(function(event) {
		$('.view__navig ul li').removeClass('actived');
		$(this).toggleClass('actived');
		let attrib = ($(this).attr('class')).split(' ')[0];
		$('.view__desc').removeClass('actived');
		$('.view__desc' + '.' + attrib).addClass('actived');

	});


	$('#london').click(function(event) {
		$('.stores__info').removeClass('visible');
		$('.stores__info.london').addClass('visible');
		$('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.8890288784381!2d-0.14000527325655415!3d51.51238781177346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5767c9015%3A0x1cf0ab0381c7fd45!2zMTgwIFJlZ2VudCBTdCwgU29obywgTG9uZG9uIFcxQiA1VEosINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2skg!4v1613985468158!5m2!1sru!2skg')
	})
	$('#newyork').click(function(event) {
		$('.stores__info').removeClass('visible');
		$('.stores__info.newyork').addClass('visible');
		$('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.0009079177217!2d-74.20996219736853!3d40.71793655008652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25331de79f8ef%3A0x1e374c563d00813f!2sNAN%20Newark%20Tech!5e0!3m2!1sru!2skg!4v1614494963439!5m2!1sru!2skg');
	})
	$('#paris').click(function(event) {
		$('.stores__info').removeClass('visible');
		$('.stores__info.paris').addClass('visible');
		$('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.1442161411203!2d2.2943346414706545!3d48.85787536077809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2z0K3QudGE0LXQu9C10LLQsCDQsdCw0YjQvdGP!5e0!3m2!1sru!2skg!4v1614495321146!5m2!1sru!2skg')
	})

});