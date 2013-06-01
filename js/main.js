
/* base url */
var base_url = window.location.protocol + '//' + window.location.hostname + window.location.pathname;

/* how it works subsections dimensions */
var dimensions = [696, 870, 746, 908, 668, 662];

/* float menu vars */
var menu = $('#early-access'),
    menuHeight = menu.outerHeight() + 15,
    menuItems = menu.find("nav a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$('#how-it-works ul li').click(function () {
	var index = $(this).index();
	$(this).siblings().removeClass('active').find('span').remove();
	$(this).addClass('active');
	$(this).append('<span />');
	$(this).find('span').animate({ 'bottom': -8 });

	$('#how-it-works').animate({ 'height': dimensions[index] });
	$(this).parent().parent().find('.details').hide();
	$(this).parent().parent().find('.details').eq(index).fadeIn('slow');
});

$(document).ready(function () {
	
	$('#how-it-works ul li span').animate({ 'bottom': -8 });

    $(window).scroll(function () {

		($(this).scrollTop() > 503) ? menu.addClass("fixed") : menu.removeClass("fixed");

		var fromTop = $(this).scrollTop() + menuHeight;
		var current = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
		});

		current = current[current.length - 1];
		var id = current && current.length ? current[0].id : "";
		menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");

    });

    $('.send').click(function () {
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var is_valid = true;

        if (name.val().length == 0) {
            name.addClass('invalid');
            is_valid = false;
        } else {
            name.removeClass('invalid');            
        }

        if (!isValidEmailAddress(email.val())) {
            email.addClass('invalid');
            is_valid = false;
        } else {
            email.removeClass('invalid');
        }

        if (!is_valid)
            return false;

        $.get('save.php', $('form').serialize(), function (data) {
            if (data.success) {
                $('#early-access article > form, #early-access article > p').fadeOut(function () {
                    $('form').get(0).reset();
                    $('#early-access article > .success').fadeIn();
                });
            } else {
                $('#early-access article > form, #early-access article > p').fadeOut(function () {
                    $('#early-access article > .error').fadeIn();
                });

            }
        });
    });

    $('.close').click(function () {
    	$('#early-access article > .success, #early-access article > .error').hide();
    	$('#early-access article > form, #early-access article > p').fadeIn();
    });

    $('nav ul li a').click(function () {
    	var id = $(this).attr('href');
    	var top = ($(id).offset().top);

    	if (id != '#why')
    		top -= 100;

    	$('html, body').animate({scrollTop: top }, 'slow');
    	return false;
    });

    $('.twitter').click(function () {
        window.open('https://twitter.com/intent/tweet?text=Get Free Access to Getup - An easy, fast and scalable way to build and deploy web apps. http://getupcloud.com', '_blank', 'width=500,height=300');
        return false;
    });

    $('.facebook').click(function () {

        FB.ui({
          method: 'feed',
          link: 'http://getupcloud.com',
          picture: base_url + 'img/fb.png',
          name: 'Getupcloud.com',
          caption: 'Grow in the cloud',
          description: 'Get Free Access to Getup - An easy, fast and scalable way to build and deploy web apps.'
        });
        return false;
    });

    $('.linkedin').click(function () {
        window.open('http://www.linkedin.com/cws/share?url=http://getupcloud.com&isFramed=false', '_blank', 'width=500,height=300');
        return false;
    });

});
