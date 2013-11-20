cat <<EOF
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="$LANGUAGE_ID"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="$LANGUAGE_ID"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="$LANGUAGE_ID"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="$LANGUAGE_ID"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">

        <title>$(gettext "Getup Cloud | Scalable Cloud Application | Grow in the cloud")</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="fb:app_id" content="360523914066509">
        <meta property="og:title" content="$(gettext "Getup - Grow in the cloud")">
        <meta property="og:type" content="website">
        <meta property="og:url" content="http://getupcloud.com">
        <meta property="og:image" content="http://getupcloud.com/static/img/fb-big.png">
        <meta property="og:description" name="description" content="$(gettext "Getup is a scalable cloud application platform.") $(gettext "An easy and fast way to build and deploy web apps.") $(gettext "You only have to worry about coding your app - we take care of everything else.")">
        <meta property="gc:build_id" content="$BUILD_ID">

        <link rel="shortcut icon" type="image/x-icon" href="http://getupcloud.com/favicon.ico"> 

        <script>var U = { register: '$SIGNUP', language: '$LANGUAGE_ID', debug: $DEBUG };</script>
        <script src="static/js/language.js"></script>

        <link href='http://fonts.googleapis.com/css?family=Roboto:400,300italic,300,100italic,100,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="static/css/normalize.min.css">
        <link rel="stylesheet" href="static/css/main.css">

        <script src="static/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <!--Start of Zopim Live Chat Script-->
        <script type="text/javascript"> window.\$zopim || (function(d,s){var z=\$zopim=function(c){z._.push(c)},\$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];\$.async=!0;$.setAttribute('charset','utf-8'); \$.src='//v2.zopim.com/?1aNSsavBi1e9Gs5y9Olsh4R2HJYYQFNP';z.t=+new Date; \$.type='text/javascript';e.parentNode.insertBefore(\$,e)})(document,'script');
        </script>
        <!--End of Zopim Live Chat Script-->        
    </head>
    <body class="preloader">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- <img src="static/img/pp-mobile-menu.jpg" style="margin: 0 auto; pointer-events: none; position: absolute; opacity: 0.5;" /> -->

        <div class="header-container closed"> <!-- start closed for mobile -->
            <header class="wrapper clearfix">
                <h1 class="ir article" data-article="home">$(gettext "getup")</h1>
                <a class="menu-control" href="javascript:;">Menu</a>
                <nav>
                    <ul>
                        <li><a href="#how-it-works" data-event="Menu,Link,How it works" data-article="how-it-works" class="article">$(gettext "How it Works")</a></li>
                        <li><a href="#pricing" data-event="Menu,Link,Pricing" data-article="pricing" class="article">$(gettext "Pricing")</a></li>
                        <li><a href="$(gettext "technologies").html" data-event="Menu,Link,Technologies">$(gettext "Technologies")</a></li>
                        <li><a class="black" data-event="Menu,External link,Support" href="https://getup.zendesk.com/home/">$(gettext "Support")</a></li>
                        <li><a class="black" data-event="Menu,External link,Blog" href="blog/">$(gettext "Blog")</a></li>
                        <li><a href="#get-in-touch" data-event="Menu,Link,Get in touch" data-article="get-in-touch" class="article">$(gettext "Get in Touch")</a></li>
                    </ul>
                    <ul class="side">
                        <li><a class="button orange flat" target="_blank" data-event="Menu,Button,Signin" href="https://broker.getupcloud.com/console/signin">$(gettext "Log In")</a></li>
                        <li><a class="button red flat article" href="#sign-up" data-event="Menu,Button,Signup" data-article="sign-up">$(gettext "Sign Up")</a></li>                        
                    </ul>
                </nav>

                <aside>
                    <a href="index.html" data-event="Language,Link,Portuguese" data-lang="pt-br" class="pt">Português</a>
                    <a href="index_en.html" data-event="Language,Link,English" data-lang="en-us" class="black en">English</a>
                </aside>
            </header>
        </div>

        <div class="main-container">
            <div class="main clearfix">

                <article id="technologies" class="wrapper pageview" data-pageview="technologies">
                    <header>
                        <h2>$(gettext "Technologies")</h2>
                        <p>$(gettext "We say we’re polyglots because we offer support to a wide list of programming languages and services deployed through a cartridge. Cartridges can be web frameworks, databases, monitoring services or connectors to external backends.")</p>
                        <p>$(gettext "Delivering services and frameworks through a cartridge offers developers and system administrators a way to get more productivity and standardization. Focus on your code, that’s the message!")</p>
                    </header>

                    <nav>
                        <h3>Technologies</h3>

                        <ul>
                            <li><a href="#/">Tomcat (JBOSS EWS) 6 / 7</a></li>
                            <li><a class="active" href="#/PHP5x">PHP 5.3 / 5.4 / 5.5</a></li>
                            <li><a href="#/">Ruby 1.8 / 1.9  </a></li>
                            <li><a href="#/">Python 2.6 / 2.7 / 3.3 </a></li>
                            <li><a href="#/">Node.js</a></li>
                            <li><a href="#/">Perl</a></li>
                            <li><a href="#/">MongoDB</a></li>
                            <li><a href="#/">MySQL</a></li>
                            <li><a href="#/">PostgreSQL 8.4 / 9.2</a></li>
                        </ul>
                    </nav>

                    <section>
                        <article id="PHP5x" class="tecnology">
                            <h4>PHP 5.3 / 5.4 / 5.5</h4>

                            <p>$(gettext "PHP is a general-purpose server-side scripting language originally designed for Web development to produce dynamic Web pages.")</p>
                            <p>$(gettext "With Getup you can easily deploy and run PHP applications using your favorite framework and databases. Auto-Scale to millions of users without breaking a sweat about server setup and administration. Forget about servers and focus on the code.")</p>

                            <h5>$(gettext "Simplify the lifecycle")</h5>
                            <p>$(gettext "Deploying PHP application with MySQL is as easy as it can be:")</p>
                            <code>$ rhc app-create App php-5.5 mysql-5.1</code>
                            <p>$(gettext "The command will create your gear (server), install and configure PHP, MySQL and git repository on the server. Access your application on the web at http://App-namespace.getup.io - HTTPS works just fine as well, and all applications have a SSL certificate.")</p>

                            <h5>$(gettext "Auto scale")</h5>
                            <p>$(gettext "What about scale? Don't worry about it, we are specialists in high traffic, simple add the -s parameter when creating your application and voilá - the platform will scale your application.")</p>
                            <code>$ rhc app-create App php-5.5 -s</code>
                            <p>$(gettext "The scalability is based on simultaneous connections. The platform will add new gears every time your application receives a traffic spike, automatically.")</p>

                            <h5>$(gettext "Frameworks, databases and other tools")</h5>
                            <p>$(gettext "Work with frameworks like CakePHP, Symfony, CodeIgniter")</p>
                            <code>$ rhc app-create App php-5.3 mysql-5.1 --from-code=https://github.com/openshift/CodeIgniterQuickStart</code>
                            <p>$(gettext "Work with database like MySQL, PostgreSQL or MongoDB through cartridges")</p>
                            <code>$ rhc cartridge add mysql-5.1 -a App</code>
                        </article>
                    </section>
                </article> <!-- #technologies -->

                <article id="sign-up" class="wrapper pageview" data-pageview="signup">
                    <header>
                        <h2>$(gettext "You get 750 hours to verify Getup is the s#&@!")</h2>
                        <a class="button orange article btn-large" data-event="Signup,Button,Free trial" href="#sign-up" data-article="sign-up">$(gettext "Free Trial")</a>
                    </header>
                    <section>
                        <form method="post" action="$SIGNUP">
                            <input type="hidden" name="lang" id="language" value="$LANGUAGE_ID">
                            <fieldset>
                                <legend>$(gettext "Create Account")</legend>

                                <p class="no-margin">$(gettext "You get 750 hours to verify Getup is the s#&@!")</p>
                                <p>$(gettext "If you have a promo code, use it!")</p>

                                <div class="group">
                                    <input type="text" tabindex="1" placeholder="$(gettext "What's your name?")" name="name" />
                                    <input type="text" tabindex="2" placeholder="$(gettext "What's your e-mail?")" name="email" />
                                </div>

                                <div class="group">
                                    <p>$(gettext "Inform a password:")</p>

                                    <input type="password" tabindex="3" placeholder="$(gettext "Password")" name="password1" />
                                    <input type="password" tabindex="4" placeholder="$(gettext "Confirm password")" name="password2" />
                                </div>

                                <div class="group">
                                    <p>$(gettext "Promo Code?")</p>

                                    <input type="text" tabindex="5" placeholder="$(gettext "Promo code (optional)")" name="coupon_code" />
                                </div>

                                <div class="actions">
                                    <label>
                                        <input type="checkbox" name="use_terms" value="1" />
                                        <span>$(gettext "I have read and agree to the") <a class="modal-link" href="termos-de-uso.html">$(gettext "Terms of use")</a></span>

                                    </label>
                                    <button class="button orange trackevent" data-event="Signup,Button,Continue">$(gettext "Continue")</button>
                                </div>
                            </fieldset>
                        </form>
                        <p id="success">
                            <strong>$(gettext "Welcome aboard.")</strong>
                            <span>$(gettext "We sent you a email confirmation. Thank you!")</span>
                        </p>       
                    </section><!-- . -->
                </article> <!-- #sign-up -->      
                <div class="background orange">
                    <article id="get-in-touch" class="wrapper pageview" data-pageview="get_in_touch">
                        <header>
                            <h2>$(gettext "Don't be shy! Let's talk about clouds.")</h2>
                        </header>
                        <section>
                            <ul>
                                <li><a data-event="Get in touch,Link,E-mail" href="mailto:ship@getupcloud.com">ship@getupcloud.com</a></li>
                                <li><a data-event="Get in touch,Link,Twitter" href="http://www.twitter.com/getupcloud" target="_blank">twitter.com/getupcloud</a></li>
                                <li><a data-event="Get in touch,Link,Facebook" href="http://www.facebook.com/getupcloud" target="_blank">fb.com/getupcloud</a></li>                        
                            </ul>

                            <div class="right">
                                <dl class="trackevent" data-event="Get in touch,Maps,Porto Alegre">
                                    <dt>Porto Alegre</dt>
                                    <dd>poa@getupcloud.com</dd>
                                </dl>
                                <dl class="trackevent" data-event="Get in touch,Maps,São Paulo">
                                    <dt>São Paulo</dt>
                                    <dd>sampa@getupcloud.com</dd>
                                </dl>
                                <dl class="trackevent" data-event="Get in touch,Maps,Overseas">
                                    <dt>Overseas</dt>
                                    <dd>overseas@getupcloud.com</dd>
                                </dl>
                            </div>
                        </section><!-- . -->
                    </article>
                </div> <!-- #pricing -->
            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer>
                <div class="wrapper">
                    <h3>$(gettext "Infrastructure is based on:")</h3>
                    
                    <ul>
                        <li class="amazon">Amazon</li>
                        <li class="openshift">Openshift</li>
                    </ul>

                    <p>GROW IN THE CLOUD</p>
                </div>

                <nav>
                    <ul class="wrapper">
                        <li><a class="modal-link" data-event="Footer,Link,Terms of use" href="termos-de-uso.html" data-pageview="terms_of_use">$(gettext "Terms of use")</a></li>
                        <li><a class="modal-link" data-event="Footer,Link,Privacy Policy" href="politica-de-privacidade.html" data-pageview="privacy_policy">$(gettext "Privacy policy")</a></li>
                        <li><a class="modal-link" data-event="Footer,Link,Acceptable use policy" href="politica-de-utilizacao-aceitavel.html" data-pageview="aup">$(gettext "Acceptable use policy")</a></li>
                        <li><a class="modal-link" data-event="Footer,Link,Support policy" href="politica-de-suporte.html" data-pageview="support_policy">$(gettext "Support policy")</a></li>
                    </ul>
                </nav>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script>
            var _gaq=[['_setAccount','UA-39510729-1']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>

        <script src="static/js/main.js"></script>
    </body>
</html>
EOF
