cat <<EOF
<!DOCTYPE html>
<html lang="pt-br">
<head>
<title>$(gettext "Getup - Grow in the cloud")</title>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Language" Content="pt-br">
<meta name="viewport" content="width=device-width">

<meta property="fb:app_id" content="360523914066509">
<meta property="og:title" content="$(gettext "Getup - Grow in the cloud")">
<meta property="og:type" content="website">
<meta property="og:url" content="http://getupcloud.com">
<meta property="og:image" content="http://getupcloud.com/static/img/fb-big.png">
<meta property="og:description" name="description" content="$(gettext "GETUP IS A SCALABLE CLOUD APPLICATION PLATFORM.)" $(gettext "An easy and fast way to build and deploy web apps.") $(gettext "You only have to worry about coding your app - we take care of everything else.")">
<meta property="gc:build_id" content="testing-20130821134219">

<script>var U = { register: 'https://broker.getupcloud.com/getup/account/signup/', language: 'pt-br', debug: 0 };</script>
<script src="http://getupcloud.com/static/js/language.js"></script>

<link rel="shortcut icon" type="image/x-icon" href="http://getupcloud.com/favicon.ico"> 

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="/static/js/html5_ie.js"></script>

<script src="/static/js/jquery.flexslider-min.js"></script>

<link href="/static/css/main.css" rel="stylesheet" />
<link href="/static/css/slide.css" rel="stylesheet" />

<link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,300,100italic,100,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

</head>

<body>

    <header>

        <div class="fix">

            <a href="index.html"><img src="static/img/logo_getup.png" class="logo" border="0" /></a>

            <nav>

                <a href="#comofunciona" class="advantages-link">$(gettext "how it works")</a>
                <a href="#preco" class="price-link">$(gettext "pricing")</a>
                <a href="#contato" class="contact-link">$(gettext "get in touch")</a>
                <a href="https://getup.zendesk.com/home/" class="support" rel="support" style="color: #232323;">$(gettext "support")</a>
                <a href="#blog" class="blog" style="color: #232323;">Blog</a>

            </nav><!-- menu -->

            <a class="button-mobile"></a>

            <div class="right-side fr">

                <div class="for-ipad">

                    <a href="https://getup.zendesk.com/home/" rel="support" style="color: #232323;">$(gettext "support")</a>
                    <a href="#blog" style="color: #232323;">Blog</a>

                </div><!-- for ipad -->

                <div class="languages fr">

                    <a href="" rel="pt-br" class="pt">PT</a>
                    <a href="/en/" rel="en-us" class="en" style="color: #232323;">EN</a>

                </div><!-- languages -->

                <div class="clear"></div>

                <div class="register">

                    <a class="enter fl" href="#entrar">$(gettext "login")</a>

                    <a class="btn create-your-account fl" href="#criesuaconta">$(gettext "Sign up")</a>

                </div><!-- register -->

            </div><!-- right side -->

        </div><!-- fix -->

    </header>

    <div class="flex-container">
        <div class="flexslider">
            <ul class="slides">
                
                <li>
                    <div class="each-image">

                        <img src="/static/img/slider_001.jpg" border="0" />

                        <div class="caption">

                            <h1>$(gettext "GETUP IS A")<br class="mobile-space"> $(gettext "SCALABLE CLOUD")<br class="desktop-space"> $(gettext "APPLICATION") <br class="mobile-space"> $(gettext "PLATFORM")</h1>
                            <br>
                            <h2>$(gettext "An easy and fast way to build and deploy web apps.")<div class="mobile-hidden"><br class="dekstop-space">$(gettext "You only have to worry about coding your app - we take care of everything else.")</div></h2>

                            <div class="buttons">
                                <a class="btn compare">$(gettext "Compare benefits and price")</a>
                                <a class="btn create-your-account">$(gettext "Sign up")</a>
                            </div><!-- buttons -->

                        </div><!-- caption -->

                    </div><!-- each image -->
                </li>

                <li>
                    <div class="each-image">

                        <img src="/static/img/slider_001.jpg" border="0" />

                        <div class="caption">

                            <h1>$(gettext "AUTO SCALE")<br class="mobile-space"><br class="desktop-space"><br class="mobile-space"></h1>
                            <br>
                            <h2>$(gettext "Don’t get caught by traffic spikes. Deploy and scale to millions of users.")</h2>

                            <div class="buttons">
                                <a class="btn compare">$(gettext "Compare benefits and price")</a>
                                <a class="btn create-your-account">$(gettext "Sign up")</a>
                            </div><!-- buttons -->

                        </div><!-- caption -->

                    </div><!-- each image -->
                </li>
                
                <li>
                    <div class="each-image">

                        <img src="/static/img/slider_001.jpg" border="0" />

                        <div class="caption">

                            <h1>$(gettext "GROW IN THE CLOUD")<br class="mobile-space"><br class="desktop-space"><br class="mobile-space"></h1>
                            <br>
                            <h2>$(gettext "Compute power when you need it most.")</h2>

                            <div class="buttons">
                                <a class="btn compare">$(gettext "Compare benefits and price")</a>
                                <a class="btn create-your-account">$(gettext "Sign up")</a>
                            </div><!-- buttons -->

                        </div><!-- caption -->

                    </div><!-- each image -->
                </li>
            </ul><!-- list -->
        </div><!-- flex slider -->
    </div><!-- flex container -->

    <section class="advantages">

        <div class="advantages-section">

            <h1 class="title">$(gettext "Deploy your application in minutes")</h1>
            <h2 class="sub-title">$(gettext "Create and deploy web applications without the cost and complexity of buying and managing servers.")<br>$(gettext "It's faster and cheaper than create AWS instances.")</h2>

            <br>

            <div class="each first first-ipad">

                <img src="/static/img/arrow.png" class="each-arrow" border="0" />

                <div class="image">
                    <center>
                        <span class="advantages-section-application images no-text">$(gettext "Application")/span>
                    </center>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Create your application")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "Choose the technology")<br class="mobile-space"><br class="ipad-space">$(gettext "of your app -")<br>$(gettext "PHP, Ruby, Python, Node.js")</h2>
                <h3 class="each-see-more see-application" id="application">$(gettext "See More")</h3>

                <div class="more-application">

                    <h1 style="margin: 20px;">SSL</h1>

                </div><!-- more about application -->

            </div><!-- each -->

            <div class="each">

                <img src="/static/img/arrow.png" class="each-arrow" border="0" />

                <div class="image">
                    <center>
                        <span class="advantages-section-publish images no-text">$(gettext "Deploy")</span>
                    </cemter>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Deploy")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "Just type 'git push' and voil&aacute;!")<br class="mobile-space"><br class="ipad-space"> $(gettext "Your application")<br class="desktop-space"> $(gettext "is up")<br class="ipad-space"> $(gettext "and")<br class="mobile-space"> $(gettext "running!")</h2>
                <h3 class="each-see-more see-application" id="application">$(gettext "See More")</h3>

                <div class="more-publish">

                    <h1 style="margin: 20px;">$(gettext "Development life-cycle")</h1>

                </div><!-- more about publish -->

            </div><!-- each -->

            <div class="each">

                <div class="image">
                    <center>
                        <span class="advantages-section-climb images no-text">$(gettext "Scale")</span>
                    </cemter>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Scale")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "With auto-scale")<br class="mobile-space"><br class="ipad-space"><br class="desktop-space"> $(gettext "you don't need")<br class="mobile-space"> $(gettext "to worry about")<br class="desktop-space"> $(gettext "growth,")<span class="hidden-work"><br class="desktop-space"> $(gettext "don't get caught by traffic spikes.")</span></h2>
                <h3 class="each-see-more see-application" id="application">$(gettext "See More")</h3>

                <div class="more-climb">

                    <h1 style="margin: 20px;">Gears</h1>

                </div><!-- more about climb -->

            </div><!-- each -->

        </div><!-- fix advantages-section -->

    </section><!-- advantages -->

    <section class="price">

        <div class="price-section">

            <h1 class="title">$(gettext "Pricing and benefits")</h1>

            <div class="text-mobile">

                <p class="roboto_14c">
                    $(gettext "Getup is the best hosting option for those who do not want to waste time setting up servers.")
                    <br><br>
                    $(gettext "An application can run using one or more gears and the amount will be determined by the volume of access.")
                    <br><br>
                    $(gettext "The monthly cost is calculated by the number of gears used and the number of hours that each gear were active.")
                </p>

            </div><!-- text-->

            <div class="left">

                <dl class="first">
                    <dt>$(gettext "Auto Scaling")</dt>
                    <dd>$(gettext "included")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "Support")</dt>
                    <dd>$(gettext "Ticket, Forum, Community")</dd>

                    <span class="separator"></span>

                    <dt>SSL</dt>
                    <dd>$(gettext "Shared SSL included")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "Additional Storage") </dt>
                    <dd>$(gettext "US$ 0,935/GB/Month")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "API requests")</dt>
                    <dd>$(gettext "Unlimited")</dd>
                </dl>

                <dl class="second">
                    <dt><span class="fl">GEAR</span> <a class="info-gear"><img src="static/img/info-gear.png" class="fl" border="0" /></a></dt>
                    <dd>$(gettext "US$ 0,074/hour")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "Monthly cost")</dt>
                    <dd>$(gettext "US$ ~54,23")</dd>
                </dl>

                <div class="info-gear-show">

                    <h1 class="roboto_14v">Gear</h1>
                    <br>
                    <p class="roboto_14c">$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 1GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")</p>

                </div><!-- show info gear -->

            </div><!-- left -->

            <div class="text">

                <p class="roboto_14c">
                    $(gettext "Getup is the best hosting option for those who do not want to waste time setting up servers.")
                    <br><br>
                    $(gettext "An application can run using one or more gears and the amount will be determined by the volume of access.")
                    <br><br>
                    $(gettext "The monthly cost is calculated by the number of gears used and the number of hours that each gear were active.")
                </p>

            </div><!-- text-->

            <div class="right">

                <div class="comparative">

                    <img src="static/img/prices-1.png" border="0" />

                    <div class="info">

                        <div class="title-info">
                            <h1 class="roboto_14v">$(gettext "Compare with other services")</h1>
                        </div>
                        <br>
                        <div class="description">
                            <h2 class="roboto_14c">$(gettext "Compare Getup with other services for a month with a traffic peak as an example") <b><u>$(gettext "Check it out.")</u></b></h2>
                        </div>

                    </div><!-- info -->

                </div><!-- comparative -->

            </div><!-- right -->

        </div><!-- fix price -->

    </section><!-- price -->

    <section class="interval">

        <div class="interval-section">

            <div class="about">

                <div class="introduction">

                    <h1 class="roboto_20v">$(gettext "With Getup you pay only")<br class="mobile-space"> $(gettext "for what you use") <br class="ipad-space"><br class="mobile-space"> $(gettext "and saves time.")</h1>

                </div><!-- introduction -->

                <div class="register">

                    <a class="btn create-account fl" href="#criesuaconta">$(gettext "Sign up")</a>

                </div><!-- register -->

                <div style="clear: both;"></div>

                <div class="open-create-your-account">

                    <form action="" method="post" id="signup">
                        <fieldset>
                            <h2>$(gettext  "First Step")</h2>
                            <input type="hidden" name="lang" id="language" value="pt-br">

                            <label>
                            <span class="blur">$(gettext "What's your name")</span>
                            <input tabindex="1" type="text" name="name" id="name" />
                            </label>
                            <label>
                            <span class="blur">$(gettext "What's your e-mail")</span>
                            <input tabindex="2" type="text" name="email" id="email" />
                            </label>
                            <label>
                            <span class="blur">$(gettext "Password")</span>
                            <input tabindex="3" type="password" name="password1" id="password" class="small" />
                            </label>
                            <label>
                            <span class="blur">$(gettext "Confirm password")</span>
                            <input tabindex="4" type="password" name="password2" id="password-confirm" class="small" />
                            </label>
                            <label>
                            <span class="blur">$(gettext "Promo code (optional)")</span>
                            <input tabindex="5" type="text" name="coupon_code" id="coupon-code" />
                            </label>

                            <label class="checkbox" id="check-terms">
                            <span class="accept-terms">$(gettext "I read and agree to the")  <a tabindex="7" href="/termos-de-uso.html">$(gettext "Terms of use")</a></span>
                            <input tabindex="6" type="checkbox" name="use_terms" />
                            </label>

                            <p id="message"></p>

                            <button tabindex="8">OK</button>
                        </fieldset>
                    </form>

                </div>

            </div><!-- about -->

        </div><!-- interval section -->

    </section><!-- interval -->

    <section class="get-in-touch">

        <article class="get-in-touch-section">

            <h1 class="title">$(gettext "Let's talk")<br class="mobile-space"> $(gettext "about clouds")</h1>

            <br>
            <br>

            <ul class="talk">
                <li>
                    ship@getupcloud.com
                </li>

                <li>
                    <a href="http://www.twitter.com/getupcloud" target="_blank">twitter.com/getupcloud</a>
                </li>

                <li>
                    <a href="http://www.facebook.com/getupcloud" target="_blank">fb.com/getupcloud</a>
                </li>
            </ul><!-- talk list -->

            <span class="separator-talk"></span>

            <div class="right">

                <ul class="contact">
                    <li>
                        <h1 class="contact-title">Porto Alegre</h1>
                        <br>
                        Av. Coronel Marcos, 1919
                        <br>
                        Porto Alegre - RS
                        <br>
                        poa@getupcloud.com
                    </li>

                    <li>
                        <h1 class="contact-title">São Paulo</h1>
                        <br>
                        Av. Coronel Marcos, 1919
                        <br>
                        Porto Alegre - RS
                    </li>
                </ul><!-- contact list -->

            </div><!-- right -->

        </article><!-- get in touch section -->

    </section><!-- get in touch -->

    <footer class="primary">
        <article class="footer-section">
            <div class="infrastructure">
                <p>$(gettext "Our Infrastructure is based on:")</p>
                <br>
                <ul>
                    <li class="amazon">Amazon</li>
                    <li class="openshift">Openshift</li>
                </ul>
            </div><!-- infrastructure -->

            <div class="mark">

                <strong>GROW IN THE CLOUD</strong>

            </div><!-- mark -->
        </article><!-- footer section -->
    </footer><!-- footer primary -->

    <footer class="secondary">

        <article class="footer-section">

            <div class="left">

                <nav class="nav-footer roboto_14c">

                    <a href="#comofunciona" class="advantages-link first-child">$(gettext "how it works")</a>
                    <a href="#valores">$(gettext "pricing")</a>
                    <a href="#contato">$(gettext "get in touch")</a>
                    <a href="#blog">Blog</a>
                    <a href="https://getup.zendesk.com/home/" rel="support">$(gettext "support")</a>

                </nav><!-- nav footer -->

            </div><!-- left -->

            <div class="right">

                <nav class="terms">

                    <a href="/termos-de-uso.html">$(gettext "Terms of use")</a>
                    <a href="/politica-de-privacidade.html">$(gettext "Privacy policy")</a>
                    <a href="/politica-de-utilizacao-aceitavel.html">$(gettext "Acceptable use policy")</a>
                    <a href="/politica-de-suporte.html">$(gettext "Support policy")</a>

                </nav><!-- terms -->

            </div><!-- right -->
    
        </article><!-- footer section -->

    </footer><!-- footer secondary -->

</body>

<script>

$("#application").click(function() {

    $(".more-application").show("fast");
    $(this).hide();
    $(".see-publish").show();
    $(".see-climb").show();
    $(".more-publish").hide("fast");
    $(".more-climb").hide("fast");

});

$("#publish").click(function() {

    $(".more-publish").show("fast");
    $(this).hide();
    $(".see-climb").show();
    $(".see-application").show();
    $(".more-application").hide("fast");
    $(".more-climb").hide("fast");

});

$("#climb").click(function() {

    $(".more-climb").show("fast");
    $(this).hide();
    $(".see-application").show();
    $(".see-publish").show();
    $(".more-publish").hide("fast");
    $(".more-application").hide("fast");

});

</script>

<script>

$(".interval-section .about .open-create-your-account span.blur").click(function(){

    $(this).fadeOut();

});

</script>

<script>
$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: 'fade',
        controlsContainer: '.flexslider'
    });
});
</script>

<script>

    $(".button-mobile").click(function(){

        $("header nav").css("background","#ff4c4d").slideToggle();

    });

    //Função para exibir o menu ao aumentar o tamanho da tela:

    $(document).ready(function() {
    $(window).resize(function(){
    var width = $(window).width();
    if(width>768){
      $("header nav").show();
    }
    });
    });

</script>

<script>

jQuery(".info-gear").click(function(){

    jQuery(".info-gear-show").slideDown();

});

</script>

<script>

$(".interval-section .about .register").click(function(){

    $(this).next().next().slideDown();

});

function Close() { 

    $(".open-create-your-account").hide();

}

</script>

<script>

jQuery(".advantages-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".advantages").offset().top - 122
        }, 2000);
    });

jQuery(".price-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".price").offset().top - 122
        }, 2000);
    });

jQuery(".contact-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".get-in-touch").offset().top - 122
        }, 2000);
    });

jQuery(".create-your-account").click(function() {
    jQuery(".open-create-your-account").show();
    jQuery('html, body').animate({
        scrollTop: jQuery(".interval").offset().top - 122
        }, 2000);
    });

</script>

<!--script>
$(function(){
  $("#slider").slidesjs({
    width: 2000,
    height: 500
  });
});
</script-->         

<!--script>
$(function(){
  $("#slider").slidesjs({
    pagination: {
      active: true,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});
</script-->            

<!--script>

$(function(){
  $("#slider").slidesjs({
    navigation: {
      active: true,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});

</script-->

</html>
EOF