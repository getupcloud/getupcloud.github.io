(function() {
    'use strict';

    var Getup = {};

    Getup.elements = {};

    Getup.init = function() {

        Getup.elements.window = $(window);
        Getup.elements.body = $('body');
        Getup.elements.html = $('html');

        Getup.menu.init();
        Getup.sections.init();

        Getup.bindEvents();
    };

    Getup.bindEvents = function() {
        Getup.elements.window.scroll(Getup.scroll)
    };

    Getup.scroll = function() {
        Getup.scrollTop = Getup.elements.window.scrollTop();

        var fixMenu = (Getup.scrollTop > Getup.sections.what.elements.content.height());
        Getup.menu.elements.content[fixMenu ? 'addClass' : 'removeClass']('fixed');

        if (!Getup.menu.scrolling) {
            Getup.menu.setActive();
        }
    };

    Getup.resize = function() {

    };

    Getup.config = {};

    Getup.config.paths = {};

    Getup.config.current = 'what';

    Getup.menu = {};
    Getup.menu.config = {};
    Getup.menu.elements = {};

    Getup.menu.scrolling = false;

    Getup.menu.init = function() {
        Getup.menu.elements.content = $('#menu');
        Getup.menu.elements.fixedLinks = Getup.menu.elements.content.find('li');
        Getup.menu.elements.links = $('nav a');

        Getup.menu.bindEvents();
    };

    Getup.menu.bindEvents = function() {
        Getup.menu.elements.links.click(Getup.menu.goTo);
    };

    Getup.menu.goTo = function() {
        var rel = this.rel;
        if (!rel) return true;

        var top = $('#' + rel).offset().top;
        Getup.menu.scrolling = true;

        Getup.elements.body.animate({scrollTop: top }, {queue: false, duration: '400', easing: 'easeOutQuad', complete: function() {
            setTimeout(function() {
                Getup.menu.scrolling = false;
                Getup.menu.setActive();
            }, 1);
        }});

        return false;
    };

    Getup.menu.setActive = function() {
        var current;

        $(Getup.sections.itemsToScroll).map(function() {
            if (this.offset().top <= Getup.scrollTop) {
                return (current = this);
            }
        });

        if (current && current.size() > 0) {
            Getup.menu.elements.fixedLinks.removeClass('active').find('a[rel=' + current.attr('id') + ']').parent().addClass('active');

            if (!Getup.menu.scrolling && Getup.config.current != current.attr('id')) {
                location.href = '#/' + current.attr('id');

                Getup.config.current = current.attr('id');
            }
        }
    };
    
    Getup.sections = {};
    Getup.sections.itemsToScroll = [];

    Getup.sections.init = function() {
        Getup.sections.what.init();
        Getup.sections.howItWorks.init();
        Getup.sections.pricing.init();
        Getup.sections.about.init()
        Getup.sections.getInTouch.init();
    };

    Getup.sections.what = {};

    Getup.sections.what.elements = {};

    Getup.sections.what.init = function() {
        Getup.sections.what.elements.content = $('#what');
        Getup.sections.itemsToScroll.push(Getup.sections.what.elements.content);
    };

    Getup.sections.howItWorks = {};
    Getup.sections.howItWorks.config = {};
    Getup.sections.howItWorks.config.dimensions = [];

    Getup.sections.howItWorks.elements = {};

    Getup.sections.howItWorks.init = function() {
        Getup.sections.howItWorks.elements.content = $('#how-it-works');
        Getup.sections.howItWorks.elements.options = Getup.sections.howItWorks.elements.content.find('ul:first li');
        Getup.sections.howItWorks.elements.details = Getup.sections.howItWorks.elements.content.find('.details');

        Getup.sections.itemsToScroll.push(Getup.sections.howItWorks.elements.content);

        Getup.sections.howItWorks.elements.details.each(function(index, element) {
            Getup.sections.howItWorks.config.dimensions.push($(element).height() + 350);
        });

        Getup.sections.howItWorks.elements.content.height(Getup.sections.howItWorks.config.dimensions[0]);
        Getup.sections.howItWorks.elements.options.find('span').css('bottom', -8);

        Getup.sections.howItWorks.bindEvents();
    };

    Getup.sections.howItWorks.bindEvents = function() {
        Getup.sections.howItWorks.elements.options.click(Getup.sections.howItWorks.change);
    };

    Getup.sections.howItWorks.change = function() {
        var element = $(this),
            index   = element.index(),
            marker  = $('<span />'),
            height  = Getup.sections.howItWorks.config.dimensions[index];

        element.siblings().removeClass('active').find('span').remove();
        element.addClass('active').append(marker);
        marker.animate({ bottom: -8 });

        Getup.sections.howItWorks.elements.content.animate({ height: height });
        Getup.sections.howItWorks.elements.details.hide().eq(index).fadeIn();
    };

    Getup.sections.pricing = {};
    Getup.sections.pricing.config = {};
    Getup.sections.pricing.config.startHeight = 0;

    Getup.sections.pricing.elements = {};

    Getup.sections.pricing.init = function() {
        Getup.sections.pricing.elements.content = $('#pricing');
        Getup.sections.pricing.config.startHeight = Getup.sections.pricing.elements.content.height();

        Getup.sections.pricing.elements.infoPanel = Getup.sections.pricing.elements.content.find('.right .panel');
        Getup.sections.pricing.elements.gearPanel = $('#gear .panel');

        Getup.sections.pricing.elements.gearInfo = Getup.sections.pricing.elements.content.find('.gear.info');
        Getup.sections.pricing.elements.signupButton = Getup.sections.pricing.elements.content.find('.signup.button');

        Getup.sections.pricing.elements.gear = $('#gear');
        Getup.sections.pricing.elements.form = $('#signup');
        Getup.sections.pricing.elements.inputs = {};
        Getup.sections.pricing.elements.inputs.email = $('#email');
        Getup.sections.pricing.elements.inputs.password = $('#password');
        Getup.sections.pricing.elements.inputs.passwordConfirm = $('#password-confirm');
        Getup.sections.pricing.elements.postButton = Getup.sections.pricing.elements.form.find('button');

        Getup.sections.itemsToScroll.push(Getup.sections.pricing.elements.content);

        panels(Getup.sections.pricing.elements.infoPanel);
        panels(Getup.sections.pricing.elements.gearPanel);

        Getup.sections.pricing.bindEvents();
    };

    Getup.sections.pricing.bindEvents = function() {
        Getup.sections.pricing.elements.gearInfo.click(function() {
            Getup.sections.pricing.gear.show();
            return false;
        });
        Getup.sections.pricing.elements.signupButton.click(function() {
            Getup.sections.pricing.signup.show();
            return false;
        });

        Getup.sections.pricing.elements.form.submit(Getup.sections.pricing.signup.post);

        Getup.sections.pricing.elements.form.find('input').focus(function() {
            $(this).prev().fadeOut('fast');
        }).blur(function() {
            var element = $(this);
            if (element.val() == '') element.prev().fadeIn('fast');
        });
    };

    Getup.sections.pricing.resize = function(height, callback) {
        Getup.sections.pricing.elements.content.animate({ height: height }, { queue: false, duration: 400, easing: 'easeInOutQuad', complete: callback });
    };

    Getup.sections.pricing.gear = {};
    
    Getup.sections.pricing.gear.show = function() {
        Getup.sections.pricing.signup.hide(false, function() {
            Getup.sections.pricing.resize(Getup.sections.pricing.config.startHeight + 150);
            Getup.sections.pricing.elements.gear.fadeIn();
        });
    };

    Getup.sections.pricing.gear.hide = function(resize, callback) {
        Getup.sections.pricing.elements.gear.fadeOut(function() {
            if (resize) Getup.sections.pricing.resize(Getup.sections.pricing.config.startHeight);
            if (callback) callback();
        });
    };

    Getup.sections.pricing.signup = {};
    
    Getup.sections.pricing.signup.show = function() {
        Getup.sections.pricing.gear.hide(false, function() {
            Getup.sections.pricing.resize(Getup.sections.pricing.config.startHeight + 150)
            Getup.sections.pricing.elements.form.fadeIn();
        });
    };
    
    Getup.sections.pricing.signup.hide = function(resize, callback) {
        Getup.sections.pricing.elements.form.fadeOut(function() {
            if (resize) Getup.sections.pricing.resize(Getup.sections.pricing.config.startHeight);
            if (callback) callback();
        });
    };

    Getup.sections.pricing.signup.submiting = false;

    Getup.sections.pricing.signup.validation = {};
    Getup.sections.pricing.signup.validation.exclude  =/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    Getup.sections.pricing.signup.validation.check    =/@[\w\-]+\./;
    Getup.sections.pricing.signup.validation.checkend =/\.[a-zA-Z]{2,3}$/;

    Getup.sections.pricing.signup.post = function() {
        if (Getup.sections.pricing.signup.submiting) return false;

        var email           = Getup.sections.pricing.elements.inputs.email;;
        var password        = Getup.sections.pricing.elements.inputs.password;
        var passwordConfirm = Getup.sections.pricing.elements.inputs.passwordConfirm;

        var valid        = true;
        var emailValue   = email.val();
        var emailInvalid = ((emailValue.search(Getup.sections.pricing.signup.validation.exclude) != -1) || (emailValue.search(Getup.sections.pricing.signup.validation.check)) == -1) || (emailValue.search(Getup.sections.pricing.signup.validation.checkend) == -1);

        (emailInvalid)                            ? valid = !email.parent().addClass('error') : email.parent().removeClass('error');
        (password.val().length < 6)               ? valid = !password.parent().addClass('error') : password.parent().removeClass('error');
        (passwordConfirm.val() != password.val()) ? valid = !passwordConfirm.parent().addClass('error')   : passwordConfirm.parent().removeClass('error');

        if (valid) {
            Getup.sections.pricing.signup.submiting = true;
            Getup.sections.pricing.elements.postButton.addClass('loading');

            $.post(U.broker + '/registration/first-step', R.sections.more.elements.form.serialize(), function(transport) {
                email.val('');
                password.val('');
                passwordConfirm.val('');

                email.prev().fadeIn('fast');
                password.prev().fadeIn('fast');
                passwordConfirm.prev().fadeIn('fast');

                Getup.sections.pricing.elements.postButton.removeClass('loading');
                Getup.sections.pricing.signup.submiting = false;
            });
        }

        return false;
    };

    Getup.sections.about = {};
    Getup.sections.about.elements = {};

    Getup.sections.about.init = function() {
        Getup.sections.about.elements.content = $('#about');

        Getup.sections.itemsToScroll.push(Getup.sections.about.elements.content);
    };


    Getup.sections.getInTouch = {};
    Getup.sections.getInTouch.elements = {};

    Getup.sections.getInTouch.init = function() {
        Getup.sections.getInTouch.elements.content = $('#get-in-touch');

        Getup.sections.itemsToScroll.push(Getup.sections.getInTouch.elements.content);
    };

    Getup.networks = {};
    Getup.networks.elements = {};

    Getup.networks.init = function() {
        Getup.networks.elements.facebook = $('.facebook');
        Getup.networks.elements.twitter = $('.twitter');
        Getup.networks.elements.linkedin = $('.linkedin');
    };

    Getup.networks.bindEvents = function() {
        Getup.networks.elements.facebook.click(Getup.networks.facebook);
        Getup.networks.elements.twitter.click(Getup.networks.twitter);
        Getup.networks.elements.linkedin.click(Getup.networks.linkedin);
    };

    Getup.networks.facebook = function(description) {
        FB.ui({
          method: 'feed',
          link: 'http://getupcloud.com',
          picture: U.assets + '/img/fb.png',
          name: 'Getupcloud.com',
          caption: 'Grow in the cloud',
          description: description //'Get Free Access to Getup - An easy, fast and scalable way to build and deploy web apps.'
        });
    };

    Getup.networks.twitter = function(message) {
        //var message = 'Get Free Access to Getup - An easy, fast and scalable way to build and deploy web apps.';
        window.open('https://twitter.com/intent/tweet?text=' + message + ' http://getupcloud.com', '_blank', 'width=500,height=300');
    };
    Getup.networks.linkedin = function() {
        window.open('http://www.linkedin.com/cws/share?url=http://getupcloud.com&isFramed=false', '_blank', 'width=500,height=300');
    };

    // Initialize
    Getup.init();
}())