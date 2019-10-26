$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // отримую напрямок
    if(dest !== undefined && dest !== '') { 
        $('body').animate({ 
            scrollTop: $(dest).offset().top // прокручую сторінку
        }, 500 // швидкість
		);
		$('html').animate({ 
            scrollTop: $(dest).offset().top // прокручую сторінку
        }, 500 // швидкість
        );
    }
    return false;
});