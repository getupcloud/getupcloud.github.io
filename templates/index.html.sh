cat <<EOF
<!DOCTYPE html>
<head>

<title>$(gettext "Getup - Grow in the cloud")</title>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<META http-equiv="Content-Language" Content="$LANGUAGE_ID">
<meta name="viewport" content="width=device-width">

<meta property="fb:app_id" content="360523914066509">
<meta property="og:title" content="$(gettext "Getup - Grow in the cloud")">
<meta property="og:type" content="website">
<meta property="og:url" content="http://getupcloud.com">
<meta property="og:image" content="http://getupcloud.com/static/img/fb-big.png">
<meta property="og:description" name="description" content="$(gettext "Getup is a scalable cloud application platform.") $(gettext "An easy and fast way to build and deploy web apps.") $(gettext "You only have to worry about coding your app - we take care of everything else.")">
<meta property="gc:build_id" content="$BUILD_ID">

<script>var U = { register: '$SIGNUP', language: '$LANGUAGE_ID', debug: $DEBUG };</script>
<script src="http://www.getupcloud.com/static/js/language.js"></script>

<link rel="shortcut icon" type="image/x-icon" href="http://getupcloud.com/favicon.ico"> 

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="static/js/html5_ie.js"></script>

<script src="static/js/getup.js"></script>
<script src="static/js/jquery.flexslider-min.js"></script>

<link href="static/css/main.css" rel="stylesheet" />
<link href="static/css/slide.css" rel="stylesheet" />

<script src="static/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>

<link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,300,100italic,100,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

</head>

<body>

    <header>

        <div class="fix">

            <a href="index.html"><img src="static/img/logo_getup.png" class="logo" border="0" /></a>

            <nav>

                <a class="advantages-link" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "how")']);">$(gettext "How it Works")</a>
                <a class="price-link" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "pricing")']);">$(gettext "Pricing")</a>
                <a class="contact-link" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "get_in_touch")']);">$(gettext "Get in Touch")</a>
                <a href="https://getup.zendesk.com/home/" class="support" rel="support" style="color: #232323;" target="_blank" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', '$(gettext "section")', '$(gettext "support")]);">$(gettext "Support")</a>
                <br class="mobile-space">
                <a href="/blog" class="blog" style="color: #232323;" onclick="_gaq.push(['_trackPageview', '/blog')]);">Blog</a>

                <div class="fl mobile-space" style="width: 100%;">
                    <a href="index.html" rel="pt-br" class="fl pt" onclick="_gaq.push(['_trackEvent', 'pt', 'menu_superior', 'pt']);">Português</a>
                    <a href="index_en.html" style="color: #232323; margin-left: 20px;" class="fl" onclick="_gaq.push(['_trackEvent', 'en', 'menu_superior', 'en']);">English</a>
                </div>

                <div class="separator-register_mobile"></div>

                <div class="register_mobile mobile-space">

                    <a class="enter fl" href="https://broker.getupcloud.com/console/signin" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'menu_superior', 'login']);" target="_blank">$(gettext "Log In")</a>

                    <a class="btn create-your-account fl" href="#criesuaconta" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'menu_superior', '$(gettext "signup")']);">$(gettext "Sign Up")</a>

                </div><!-- register mobile -->

            </nav><!-- menu -->

            <a class="button-mobile"></a>

            <div class="right-side fr">

                <div class="for-ipad">

                    <a href="https://getup.zendesk.com/home/" rel="support" target="_blank" style="color: #232323;" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', '$(gettext "section")', '$(gettext "support")]);">$(gettext "Support")</a>
                    <a href="/blog" style="color: #232323;" onclick="_gaq.push(['_trackPageview', '/blog')]);">Blog</a>

                </div><!-- for ipad -->

                <div class="languages fr">

                    <a href="index.html" rel="pt-br" class="pt" onclick="_gaq.push(['_trackEvent', 'pt', 'menu_superior', 'pt']);">PT</a>
                    <a href="index_en.html" style="color: #232323;" onclick="_gaq.push(['_trackEvent', 'en', 'menu_superior', 'en']);">EN</a>

                </div><!-- languages -->

                <div class="clear"></div>

                <div class="register">

                    <a class="enter fl" href="https://broker.getupcloud.com/console/signin" target="_blank" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'menu_superior', 'login']);">$(gettext "Log In")</a>

                    <a class="btn create-your-account fl" href="#criesuaconta" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'menu_superior', '$(gettext "signup")']);">$(gettext "Sign Up")</a>

                </div><!-- register -->

            </div><!-- right side -->

        </div><!-- fix -->

    </header>

    <div class="flex-container">
        <div class="flexslider">
            <ul class="slides">
                
                <li>
                    <div class="each-image">

                        <img src="static/img/slider_001.jpg" border="0" />

                        <div class="caption">

                            <h1>$(gettext "GETUP IS A")<br class="mobile-space"> $(gettext "SCALABLE CLOUD")<br class="desktop-space"> $(gettext "APPLICATION")<br class="mobile-space"> $(gettext "PLATFORM")</h1>
                            <br>
                            <h2>$(gettext "An easy and fast way to build and deploy web apps.")<div class="mobile-hidden"><br class="dekstop-space">$(gettext "You only have to worry about coding your app - we take care of everything else.")</div></h2>

                            <div class="buttons">
                                <a class="btn compare" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "pricing")')]);">$(gettext "Compare benefits")</a>
                                <a class="btn create-your-account" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'carrossel', '$(gettext "signup")')]);">$(gettext "Sign Up")</a>
                            </div><!-- buttons -->

                        </div><!-- caption -->

                    </div><!-- each image -->
                </li>

                <li>
                    <div class="each-image">

                        <img src="static/img/slider_002.jpg" border="0" />

                        <div class="caption">

                            <h1 style="color: #fff;">$(gettext "GROW IN THE CLOUD")</h1>
                            <br>
                            <h2 style="color: #80d2d1;">$(gettext "Compute power when you need it most.")</h2>

                            <div class="buttons">
                                <a class="btn compare" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "pricing")')]);">$(gettext "Compare benefits")</a>
                                <a class="btn create-your-account" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'carrossel', '$(gettext "signup")')]);">$(gettext "Sign Up")</a>
                            </div><!-- buttons -->

                        </div><!-- caption -->

                    </div><!-- each image -->
                </li>

                <li>
                    <div class="each-image">

                        <img src="static/img/slider_003.jpg" border="0" />

                        <div class="caption">

                            <h1>$(gettext "AUTO SCALE")</h1>
                            <br>
                            <h2>$(gettext "Don't get caught by traffic spikes.")<br>$(gettext "Deploy and scale to millions of users.")</h2>

                            <div class="buttons">
                                <a class="btn compare" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "pricing")')]);">$(gettext "Compare benefits")</a>
                                <a class="btn create-your-account" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', 'carrossel', '$(gettext "signup")')]);">$(gettext "Sign Up")</a>
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

                <img src="static/img/arrow.png" class="each-arrow" border="0" />

                <div class="image">
                    <center>
                        <span class="advantages-section-application images no-text">$(gettext "Application")</span>
                    </center>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Create your application")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "Choose the technology")<br class="mobile-space"><br class="ipad-space"> <br>PHP, Ruby, Python, Node.js</h2>
                <h3 class="each-see-more see-application" id="application" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "how")/$(gettext "create")')]);"><span class="see-more-text">$(gettext "See More")</span><span class="see-less-text">$(gettext "Less")</span></h3>

                <div class="more-application roboto_14ce">
                  <b>SSL</b>
                    <br>$(gettext "Included to all applications.")
                    <br><br>
                    <b>Cartridges</b>
                    <br>$(gettext "Add components to your app.")
                    <br>
                    <br>$ rhc cartridge add MySQL-5.1 -a AppName
         

                </div><!-- more about application -->

            </div><!-- each -->

            <div class="each">

                <img src="static/img/arrow.png" class="each-arrow" border="0" />

                <div class="image">
                    <center>
                        <span class="advantages-section-publish images no-text">$(gettext "Deploy")</span>
                    </center>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Deploy")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "Just type 'git push' and voil&aacute;!")<br class="mobile-space"><br class="ipad-space"> $(gettext "Your application")<br class="desktop-space"> $(gettext "is up")<br class="ipad-space"> $(gettext "and")<br class="mobile-space"> $(gettext "running!")</h2>
                <h3 class="each-see-more see-publish" id="publish" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "how")/$(gettext "deploy")')]);"><span class="see-more-text">$(gettext "See More")</span><span class="see-less-text">$(gettext "Less")</span></h3>

                <div class="more-publish roboto_14ce">

                    <b>$(gettext "Built-in Databases")</b>
                    <br>
                    $(gettext "Add a database just adding a new cartridge.")
                    <br><br>
                    $  rhc cartridge add mysql-5.1 -a AppName

                </div><!-- more about publish -->

            </div><!-- each -->

            <div class="each">

                <div class="image">
                    <center>
                        <span class="advantages-section-climb images no-text">$(gettext "Scale")</span>
                    </center>
                </div><!-- image -->

                <h1 class="each-title">$(gettext "Scale")</h1>
                <br>
                <h2 class="each-sub-title">$(gettext "With auto-scale")<br class="mobile-space"><br class="ipad-space"><br class="desktop-space"> $(gettext "you don't need")<br class="mobile-space"> $(gettext "to worry about")<br class="desktop-space"> $(gettext "growth,")<span class="hidden-work"><br class="desktop-space"> $(gettext "don't get caught by traffic spikes.")</span></h2>
                <h3 class="each-see-more see-climb" id="climb"  onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "how")/$(gettext "scale")')]);"><span class="see-more-text">$(gettext "See More")</span><span class="see-less-text">$(gettext "Less")</span></h3>

                <div class="more-climb roboto_14ce">

                    <b>$(gettext "Monitor")</b>
                    <br>
                    $(gettext "New gears to handle traffic spikes.")
                    <h2>$(gettext "Scale to millions of users")
                    <br><br>
                    <b>Pay as you go</b>
                    <br>$(gettext "Pay by hour usage and just for the time that each gear was active.")
                    <br>$(gettext "It's more efficient and versatile than traditional computing.")
                    <br>
                    <br>
                    <b>$(gettext "That's it.")</b>
                    <br>$(gettext "Just lean back and enjoy the ride.")
                    <br>$(gettext "And  don't forget the liquid gold!")
                    <center>
                        <div style="margin: 20px 0;">
                            <img src="static/img/beer.png" style="margin: 20px 0;" border="0"/>
                        </div>
                    </center>

                </div><!-- more about climb -->

            </div><!-- each -->

        </div><!-- fix advantages-section -->

    </section><!-- advantages -->

    <section class="price">

        <div class="price-section">

            <h1 class="title">$(gettext "Pricing and Benefits")</h1>

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

                    <dt>$(gettext "Additional Storage")</dt>
                    <dd>$(gettext "US$ 0,935/GB/Month")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "API requests")</dt>
                    <dd>$(gettext "Unlimited")</dd>
                </dl>

                <dl class="second">
                    <dt><span class="fl">GEAR</span> <a class="info-gear" id="info-gear"><img src="static/img/info-gear.png" class="fl" border="0" /></a>
                        <div class="info-gear-show">
                            <div class="top-info-open"></div>
                            <div class="info-opened roboto_14ce">$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 1GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")</div>
                            <div class="bottom-info-open"></div>
                        </div>
                    </dt>
                    <dd>$(gettext "US$ 0,074/hour")</dd>

                    <span class="separator"></span>

                    <dt>$(gettext "Monthly cost")</dt>
                    <dd>$(gettext "US$ ~54,23")</dd>
                </dl>

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

                <div class="comparative comparative-show">

                    <img src="static/img/prices-1.png" border="0" />

                    <div class="info">

                        <div class="title-info">
                            <h1 class="roboto_14v">$(gettext "Compare with other services")</h1>
                        </div>
                        <br>
                        <div class="description">
                            <h2 class="roboto_14c">$(gettext "Compare Getup with other services for a month with a traffic peak as an example") <b><u><a class="comparative-show" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "pricing")/$(gettext "checkitout")')]);">$(gettext "Check it out.")</a></u></b></h2>
                        </div>

                    </div><!-- info -->

                </div><!-- comparative -->

            </div><!-- right -->

            <div class="comparative-opened">

                <div style="margin-top: 30px;">

                    <a class="close-comparative fr"></a>

                    <table class="fl comparative-table" cellspacing="0" cellpadding="0">

                        <tr>
                            <td class="first-with-border">
                            </td>
                            <td class="second-with-border">
                                <img src="static/img/table_logo_getup.jpg" style="margin: auto;" border="0" />
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-with-border">
                                <h1 class="roboto_14ce">$(gettext "Resource")</h1>
                            </td>
                            <td class="normal-big-with-border">
                                <div class="align">
                                    <h1 class="fl roboto_14ce">1 gear</h1>
                                    <div id="recurso">
                                        <img src="static/img/info-gear.png" class="fr" border="0" />
                                    </div>
                                    <div class="info-recurso">
                                        <div class="top-info-open"></div>
                                        <div class="info-opened roboto_14ce">$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 1GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")<br></div>
                                        <div class="bottom-info-open"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border">
                                <h1 class="roboto_14ce">$(gettext "Auto Scaling")</h1>
                            </td>
                            <td class="normal-big-without-border">
                                <h1 class="roboto_14ce">$(gettext "Yes")</h1>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border-bg">
                                <h1 class="roboto_11cc">$(gettext "Monthly fee")</h1>
                            </td>
                            <td class="normal-big-without-border-bg">
                                <div class="align">
                                    <h1 class="fl roboto_13ae">$(gettext "US$ ~54,23")</h1>
                                    <div id="valor-mensal-1">
                                        <img src="static/img/info-gear.png" class="fr" border="0" />
                                    </div>
                                    <div class="info-valor-mensal-1">
                                        <div class="top-info-open"></div>
                                        <div class="info-opened roboto_14ce">$(gettext "730h monthly.")</div>
                                        <div class="bottom-info-open"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border">
                                <h1 class="roboto_14ce">$(gettext "+ Server Admin")</h1>
                            </td>
                            <td class="normal-big-without-border">
                                <h1 class="roboto_14ce">$(gettext "included")</h1>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border-bg">
                                <h1 class="roboto_11cc">$(gettext "Monthly fee")</h1>
                            </td>
                            <td class="normal-big-without-border-bg">
                                <h1 class="roboto_13ae">$(gettext "US$ ~54,23")</h1>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-with-border">
                                <h1 class="roboto_14ce">$(gettext "Traffic Peak")</h1>
                            </td>
                            <td class="normal-big-with-border">
                                <h1 class="roboto_14ce">$(gettext "Auto Scale out")<br>+2 web gears</h1>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border">
                                <h1 class="roboto_14ce">$(gettext "End of Peak - 6 hours")</h1>
                            </td>
                            <td class="normal-big-without-border">
                                <h1 class="roboto_14ce">$(gettext "Auto Scale down")</h1>
                            </td>
                        </tr>

                        <tr>
                            <td class="normal-without-border-bg">
                                <h1 class="roboto_11cc">$(gettext "Additional charge")</h1>
                            </td>
                            <td class="normal-big-without-border-bg-padding">
                                <h1 class="fl roboto_14ce">$(gettext "2 gears x 6 hours x US$ 0.074 =")</h1> <h1 class="fl roboto_13ae" style="margin-left: 3px;">$(gettext "US$ 0.89")</h1>
                            </td>
                        </tr>

                        </table>

                        <table class="comparative-table-1" cellspacing="0" cellpadding="0">

                            <div class="start-title">
                                <h1 class="roboto_12cc">$(gettext "Other hosting companies")</h1>
                            </div>

                            <tr>
                                <td class="first-with-padding">
                                    <h1 class="roboto_13ver">$(gettext "Cloud Server")</h1>
                                </td>
                                <td class="second-with-padding">
                                    <h1 class="roboto_13ver">$(gettext "Shared")<br>$(gettext "Hosting")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-with-border">
                                    <h1 class="roboto_14ce">$(gettext "Cloud Server")<br>512Mb RAM</h1>
                                </td>
                                <td class="normal-with-border">
                                    <h1 class="roboto_14ce">$(gettext "1 hosting")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border">
                                    <h1 class="roboto_14ce">$(gettext "No")</h1>
                                </td>
                                <td class="normal-without-border">
                                    <h1 class="roboto_14ce">$(gettext "What?")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border-bg">
                                    <h1 class="roboto_13ae">$(gettext "~US$ 17")</h1>
                                </td>
                                <td class="normal-without-border-bg">
                                    <h1 class="roboto_13ae">$(gettext "~US$ 20")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border">
                                    <h1 class="roboto_14ce">$(gettext "need subscription")</h1>
                                </td>
                                <td class="normal-without-border">
                                    <h1 class="roboto_14ce">$(gettext "included")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border-bg">
                                    <h1 class="roboto_13ae">$(gettext "~US$ 103.66")</h1>
                                </td>
                                <td class="normal-without-border-bg">
                                    <h1 class="roboto_13ae">$(gettext "~US$ 20")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-with-border">
                                    <h1 class="roboto_14ce">$(gettext "turn off server, add")<br>
                                    $(gettext "1GB, turn on server")</h1>
                                </td>
                                <td class="normal-with-border">
                                    <h1 class="roboto_14ce">$(gettext "Light a candle!")</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border">
                                    <h1 class="roboto_14ce">$(gettext "turn off server, remove")<br>
                                    $(gettext "1GB, turn on server")</h1>
                                </td>
                                <td class="normal-without-border">
                                    <h1 class="roboto_14ce">-</h1>
                                </td>
                            </tr>

                            <tr>
                                <td class="normal-big-without-border-bg">
                                    <div style="width: 221px; margin: auto;">
                                        <h1 class="fl roboto_14ce">$(gettext "24hs x ~US$ 0.06 (1GB) =")</h1> <h1 class="fl roboto_13ae" style="margin-left: 3px;">$(gettext "US$ 1.44")</h1>
                                        <div id="custo-adicional-cloud">
                                            <img src="static/img/info-gear.png" class="fr" border="0" />
                                        </div>
                                        <div class="info-custo-adicional-cloud">
                                            <div class="top-info-open"></div>
                                            <div class="info-opened roboto_14ce">$(gettext "Trying minimize the user impact you did upgrade one day before and returned on day after the peak.")</div>
                                            <div class="bottom-info-open-right"></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="normal-without-border-bg">
                                    <h1 class="roboto_14ce">-</h1>
                                </td>
                            </tr>

                        </table>

                        <table class="comparative-table-2" cellspacing="0" cellpadding="0">
 
                            <tr>

                                <td class="result1">
                                    <h1 class="roboto_16b">TOTAL</h1>
                                </td>

                                <td class="result2">
                                    <h1 class="roboto_30b">$(gettext "US$ 56.38")</h1>
                                    <h2 class="roboto_14ce">$(gettext "Peace of mind")</h1>
                                    <h3 class="roboto_12ce">$(gettext "You just get the traffics")<br>
                                    $(gettext "peaks on analytics")</h1>
                                </td>

                            </tr>

                            <tr>
                                <td class="result3">
                                    <h1 class="roboto_30b">$(gettext "US$ 105.10")</h1>
                                    <h2 class="roboto_14ce">$(gettext "Hard Work.")</h2>
                                    <h3 class="roboto_12ce">$(gettext "You had to reboot")<br>
                                    $(gettext "your server twice")</h3>
                                </td>
                                <td class="result4">
                                    <h1 class="roboto_30b">$(gettext "US$ 20")</h1>
                                    <h2 class="roboto_14ce">$(gettext "Don't be cheap")</h2>
                                    <h3 class="roboto_12ce">$(gettext "Your site went down and")<br>
                                    $(gettext "you lost pageviews.")</h3>
                                </td>
                            </tr>

                        </table>

                    </table>

                </div>

            </div><!-- show info gear -->

        </div><!-- fix price -->

    </section><!-- price -->

            <section id="pricing">
                <article class="wrap">
                 
                    <div class="about">

                        <div class="introduction">

                            <h1 class="roboto_20v">Na Getup você paga apenas<br class="mobile-space"> pelo que usou <br class="ipad-space">e ainda<br class="mobile-space"> economiza seu tempo.</h1>

                        </div><!-- introduction -->

                        <div class="register">

                            <a class="btn create-account fl">Crie sua conta</a>

                        </div><!-- register -->

                        <div style="clear: both;"></div>

                        <div class="open-create-your-account">

                        <div class="start-register">
                            <h1 class="fl">Criar conta</h1>
                            <a class="fr close-register"></a>
                        </div>

                        <div id="create-account"></div>
                        <form action="" method="post" id="signup">
                            <fieldset>
                                <input type="hidden" name="lang" id="language" value="pt-br">

                                <div class="fl">
                                    <label>
                                        <span>Qual seu nome?</span>
                                        <input tabindex="1" type="text" class="name" name="name" id="name" />
                                    </label>
                                    <label>
                                        <span>Qual seu e-mail?</span>
                                        <input tabindex="2" type="text" name="email" id="email" class="email" />
                                    </label>
                                    <div class="promotional-code">
                                        <h1 class="fl roboto_14ce">Código promocional?</h1>
                                        <label>
                                            <span>Código promocional</span>
                                            <input tabindex="3" type="text" class="promotional" name="coupon_code" id="coupon-code" />
                                        </label>
                                    </div>
                                </div>
                                <div class="fl" style="margin-left: 31px;">
                                    <label>
                                        <span>Senha</span>
                                        <input tabindex="3" type="password" name="password1" id="password" class="pass" />
                                    </label>
                                    <label>
                                        <span>Confirme a senha</span>
                                        <input tabindex="4" type="password" name="password2" id="password-confirm" class="confirm-pass" />
                                    </label>

                                </div>

                                <div class="fl separator-button"></div>

                                <div class="fr">

                                    <fieldset class="fl checkbox" id="check-terms" style="margin-right: 20px;">
                                        <input id="use_terms" class="css-checkbox" type="checkbox" name="use_terms" value="5">
                                        <label for="use_terms" name="use_terms" class="c18r css-label">Li e aceito os <u><a href="#termodeuso" style="color: #585858;">Termos de uso</a>.</u></label>
                                    </fieldset>

                                    <p id="message"></p>

                                    <button tabindex="8" class="fl btn continue">Continuar</button>

                                </div>

                            </fieldset>
                        </form>

                        <p id="success">
                            <p class="roboto_20ver">$(gettext "Welcome aboard.")</h1>
                            <p class="roboto_14ce">$(gettext "We sent you a email confirmation. Thank you!")</h2>
                        </p>
            
                        </div></div></div>

                    
                </article>
            </section>

            <section class="modal" id="modal-terms">
                <div class="modal-mask"></div>
                <div class="modal-content"></div>
            </section>

    <section class="get-in-touch">

        <article class="get-in-touch-section">

            <h1 class="title">$(gettext "Don't be shy!") $(gettext "Let's talk")<br class="mobile-space"> $(gettext "about clouds.")</h1>

            <br>
            <br>

            <ul class="talk">
                <li>
                    <a onclick="_gaq.push(['_trackEvent', '$(gettext "en")', '$(gettext "contact")', 'ship']);">ship@getupcloud.com</a>
                </li>

                <li>
                    <a href="http://www.twitter.com/getupcloud" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', '$(gettext "contact")', 'twitter']);" target="_blank">twitter.com/getupcloud</a>
                </li>

                <li>
                    <a href="http://www.facebook.com/getupcloud" onclick="_gaq.push(['_trackEvent', '$(gettext "en")', '$(gettext "contact")', 'facebook']);" target="_blank">fb.com/getupcloud</a>
                </li>
            </ul><!-- talk list -->

            <span class="separator-talk"></span>

            <div class="right">

                <ul class="contact">
                    <li>
                        <h1 class="contact-title">Porto Alegre</h1>
                        <br>
                        poa@getupcloud.com
                    </li>

                    <li>
                        <h1 class="contact-title">São Paulo</h1>
                        <br>
                        sampa@getupcloud.com
                    </li>

                    <li>
                        <h1 class="contact-title">Overseas</h1>
                        <br>
                        overseas@getupcloud.com
                    </li>

                </ul><!-- contact list -->

            </div><!-- right -->

        </article><!-- get in touch section -->

    </section><!-- get in touch -->

    <footer class="primary">
        <article class="footer-section">
            <div class="infrastructure">
                <p>$(gettext "Infrastructure is based on:")</p>
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

            <div class="right">

                <nav class="terms">

                    <a href="termos-de-uso.html" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "terms_of_use")')]);">$(gettext "Terms of use")</a>
                    <a href="politica-de-privacidade.html" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "privacy_police")')]);">$(gettext "Privacy policy")</a>
                    <a href="politica-de-utilizacao-aceitavel.html" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "aup")')]);">$(gettext "Acceptable use policy")</a>
                    <a href="politica-de-suporte.html" onclick="_gaq.push(['_trackPageview', '/$(gettext "en")/$(gettext "support_policy")')]);">$(gettext "Support policy")</a>

                </nav><!-- terms -->

            </div><!-- right -->
    
        </article><!-- footer section -->

    </footer><!-- footer secondary -->
    
    <script>window.jQuery || document.write('<script src="static/js/jquery-1.9.1.min.js"><\/script>')</script>    
    <script src="static/js/plugins.js"></script>
    <script src="static/js/main.js"></script>

    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-39510729-1']);
      _gaq.push(['_setDomainName', 'getupcloud.com']);
      _gaq.push(['_setAllowLinker', true]);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>

</body>

</html>
EOF