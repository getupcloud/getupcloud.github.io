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
                        <li><a href="#how-it-works" data-article="how-it-works" class="article">$(gettext "How it Works")</a></li>
                        <li><a href="#pricing" data-article="pricing" class="article">$(gettext "Pricing")</a></li>
                        <li><a href="#get-in-touch" data-article="get-in-touch" class="article">$(gettext "Get in Touch")</a></li>
                        <li class="secondary"><a class="black" href="https://getup.zendesk.com/home/">$(gettext "Support")</a></li>
                        <li class="secondary separator"><a class="black" href="blog/">$(gettext "Blog")</a></li>
                    </ul>
                    <ul class="side">
                        <li><a class="button orange flat" target="_blank" href="https://broker.getupcloud.com/console/signin">$(gettext "Log In")</a></li>
                        <li><a class="button red flat article" href="#sign-up" data-article="sign-up">$(gettext "Sign Up")</a></li>                        
                    </ul>
                </nav>

                <aside>
                    <a href="index.html" data-lang="pt-br" class="pt">Português</a>
                    <a href="index_en.html" data-lang="en-us" class="black en">English</a>
                </aside>
            </header>
        </div>

        <div class="main-container">
            <div class="main clearfix">

                <article id="home" class="carousel">
                    <section class="item-01">
                        <div class="wrapper">
                            <h2>$(gettext "Getup is a scalable cloud application plataform")</h2>
                            <p>$(gettext "An easy and fast way to build and deploy web apps.")</p>
                            <p>$(gettext "You only have to worry about coding your app - we take care of everything else.")</p>

                            <div class="actions">
                                <a class="button orange article btn-large" href="#sign-up" data-article="sign-up">$(gettext "Free Trial")</a>
                                <small>$(gettext "No credit card required")</small>
                            </div>
                       </div>
                    </section>

                    <section class="item-02 white">
                        <div class="wrapper">
                            <h2>$(gettext "Grow in the cloud")</h2>
                            <p class="cyan">$(gettext "Compute power when you need it most.")</p>

                            <div class="actions">
                                <a class="button orange article btn-large" href="#sign-up" data-article="sign-up">$(gettext "Free Trial")</a>
                                <small class="white">$(gettext "No credit card required")</small>
                            </div>
                        </div>
                    </section>

                    <section class="item-03">
                        <div class="wrapper">
                            <h2>$(gettext "Auto scale")</h2>
                            <p>$(gettext "Don't get caught by traffic spikes.")</p>
                            <p>$(gettext "Deploy and scale to millions of users.")</p>

                            <div class="actions">
                                <a class="button orange article btn-large" href="#sign-up" data-article="sign-up">$(gettext "Free Trial")</a>
                                <small>$(gettext "No credit card required")</small>
                            </div>
                        </div>
                    </section>
                </article> <!-- #home -->

                <article id="how-it-works" class="wrapper">
                    <header>
                        <h2>$(gettext "Deploy your application in minutes")</h2>
                        <p>$(gettext "Create and deploy web applications without the cost and complexity of buying and managing servers. It's faster and cheaper than create AWS instances.")</p>
                    </header>

                    <div class="centralized">
                        <section>
                            <h3 class="create">$(gettext "Create your application")</h3>
                            <p>$(gettext "Choose the technology"): PHP, Ruby, Python, Node.js</p>

                            <a href="javascript:;" data-text="$(gettext "Less")">$(gettext "See More")</a>

                            <dl>
                                <dt>$(gettext "SSL")</dt>
                                <dd>$(gettext "Included to all applications.")</dd>

                                <dt>$(gettext "Cartridges")</dt>
                                <dd>$(gettext "Add components to your app.")</dd>
                                <dd>$ rhc app-create AppName PHP-5 MySQL-5</dd>
                            </dl>
                        </section><!-- .create -->
                        <section>
                            <h3 class="deploy">$(gettext "Deploy")</h3>
                            <p>$(gettext "Just type 'git push' and voil&aacute;! Your application is up and running!")</p>

                            <a href="javascript:;" data-text="$(gettext "Less")">$(gettext "See More")</a>

                            <dl>
                                <dt>$(gettext "Built-in Databases")</dt>
                                <dd>$(gettext "Add a database just adding a new cartridge.")</dd>
                                <dd>$ rhc cartridge-add MySQL-5 -a AppName</dd>
                            </dl>
                        </section><!-- .deploy -->
                        <section>
                            <h3 class="scale">$(gettext "Scale")</h3>
                            <p>$(gettext "With auto-scale you don't need to worry about growth, don't get caught by traffic spikes.")</p>

                            <a href="javascript:;" data-text="$(gettext "Less")">$(gettext "See More")</a>

                            <dl>
                                <dt>$(gettext "Monitor")</dt>
                                <dd>$(gettext "New gears to handle traffic spikes. Scale to millions of users.")</dd>

                                <dt>$(gettext "Pay as you go")</dt>
                                <dd>$(gettext "Pay by hour usage and just for the time that each gear was active. It's more efficient and versatile than traditional computing.")</dd>

                                <dt>$(gettext "That's it.")</dt>
                                <dd class="beer">$(gettext "Just lean back and enjoy the ride. And don't forget the liquid gold!")</dd>
                            </dl>
                        </section><!-- .scale -->
                    </div>
                </article> <!-- #how-it-works -->

                <div class="background gray">
                    <article id="pricing" class="wrapper">
                        <header>
                            <h2>$(gettext "Pricing and Benefits")</h2>
                        </header>
                        <section>
                            <div class="right">
                                <p>$(gettext "Getup is the best hosting option for those who do not want to waste time setting up servers.")</p>
                                <p>$(gettext "An application can run using one or more gears and the amount will be determined by the volume of access.")</p>
                                <p>$(gettext "The monthly cost is calculated by the number of gears used and the number of hours that each gear were active.")</p>

                                <div class="white-border round compare article" data-article="compare">
                                    <h3>$(gettext "Compare with other services")</h3>
                                    <p>$(gettext "Compare Getup with other services for a month with a traffic peak as an example") <a href="javacript:;">$(gettext "Check it out.")</a></p>
                                </div>
                            </div>                        

                            <div class="left">
                                <dl>
                                    <dt>$(gettext "Auto Scaling")</dt>
                                    <dd>$(gettext "included")</dd>

                                    <dt>$(gettext "Support")</dt>
                                    <dd>$(gettext "Ticket, Forum, Community")</dd>

                                    <dt>SSL</dt>
                                    <dd>$(gettext "Shared SSL included")</dd>

                                    <dt>$(gettext "Additional Storage")</dt>
                                    <dd>$(gettext "US$ 0,935/GB/Month")</dd>

                                    <dt class="no-border">$(gettext "API requests")</dt>
                                    <dd class="no-border">$(gettext "Unlimited")</dd>
                                </dl>

                                <dl class="blue round">
                                    <dt>$(gettext "GEAR") <i class="tooltip" data-text="$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 3GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")">?</i></dt>
                                    <dd>$(gettext "US$ 0,074/hour")</dd>

                                    <dt class="no-border">$(gettext "Monthly cost")</dt>
                                    <dd class="no-border">$(gettext "US$ ~54,23")</dd>
                                </dl>
                            </div>
                        </section><!-- .prices -->
                    </article> <!-- #pricing -->
                </div>

                <div class="background gray">
                    <article id="compare" class="wrapper">
                        <section>
                            <table class="round" caption="$(gettext 'Other hosting companies')">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th><strong class="ir">Getup</strong></th>
                                        <th>$(gettext "Cloud Server")</th>
                                        <th>$(gettext "Shared Hosting")</th>
                                    </tr>                                
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>$(gettext "Resource")</td>
                                        <td>1 gear <i class="tooltip" data-text="$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 3GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")">?</i></td>
                                        <td>$(gettext "Cloud Server") 512Mb RAM</td>
                                        <td>1 $(gettext "hosting")</td>
                                    </tr>
                                    <tr>
                                        <td>$(gettext "Auto Scaling")</td>
                                        <td>$(gettext "Yes")</td>
                                        <td>$(gettext "No")</td>
                                        <td>$(gettext "What?")</td>
                                    </tr>
                                    <tr class="light-blue">
                                        <td><small>$(gettext "Monthly fee")</small></td>
                                        <td><strong>$(gettext "US$ ~54,23")</strong> <i class="tooltip" data-text="$(gettext '730h monthly.')">?</i></td>
                                        <td><strong>$(gettext "US$ ~17")</strong></td>
                                        <td><strong>$(gettext "US$ ~20")</strong></td>
                                    </tr>
                                    <tr class="no-border">
                                        <td>$(gettext "+ Server Admin")</td>
                                        <td>$(gettext "included")</td>
                                        <td>$(gettext "need subscription")</td>
                                        <td>$(gettext "included")</td>
                                    </tr>
                                    <tr class="light-blue">
                                        <td><small>$(gettext "Monthly fee")</small></td>
                                        <td><strong>$(gettext "US$ ~54,23")</strong></td>
                                        <td><strong>$(gettext "US$ ~103.66")</strong></td>
                                        <td><strong>$(gettext "US$ ~20")</strong></td>
                                    </tr>
                                    <tr class="no-border">
                                        <td>$(gettext "Traffic Peak")</td>
                                        <td>$(gettext "Auto Scale out") +2 web gears</td>
                                        <td>$(gettext "turn off server, add 1GB, turn on server")</td>
                                        <td>$(gettext "Light a candle!")</td>
                                    </tr>
                                    <tr>
                                        <td>$(gettext "End of Peak - 6 hours")</td>
                                        <td>$(gettext "Auto Scale down")</td>
                                        <td>$(gettext "turn off server, remove 1GB, turn on server")</td>
                                        <td>$(gettext "-")</td>
                                    </tr>
                                    <tr class="light-blue">
                                        <td><small>$(gettext "Additional charge")</small></td>
                                        <td>$(gettext "2 gears x 6 hours x US$ 0.074 =")  <strong>$(gettext "US$ 0.89")</strong> </td>
                                        <td>$(gettext "24hs x US$ ~0.06 (1GB) =") <strong>$(gettext "US$ 1.44")</strong> <i class="tooltip" data-text="$(gettext 'Trying minimize the user impact you did upgrade one day before and returned on day after the peak.')">?</i></td>
                                        <td>$(gettext "-")</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>$(gettext "Total")</td>
                                        <td><strong>$(gettext "US$ 56.38")</strong> <b>$(gettext "Peace of mind")</b> $(gettext "You just get the traffic peaks on analytics.")</td>
                                        <td><strong>$(gettext "US$ 105.10")</strong> <b>$(gettext "Hard Work.")</b> $(gettext "You had to reboot your server twice.")</td>
                                        <td><strong>$(gettext "US$ 20")</strong> <b>$(gettext "Don't be cheap!")</b> $(gettext "Your site went down and you lost pageviews.")</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </section><!-- .compare -->
                    </article> <!-- #pricing -->
                </div>

                <article id="sign-up" class="wrapper">
                    <header>
                        <h2>$(gettext "You get 750 hours to verify Getup is the s#&@!")</h2>
                        <a class="button orange article btn-large" href="#sign-up" data-article="sign-up">$(gettext "Free Trial")</a>
                    </header>
                    <section>
                        <form method="post" action="$SIGNUP">
                            <input type="hidden" name="lang" id="language" value="$LANGUAGE_ID">
                            <fieldset>
                                <legend>$(gettext "Create Account")</legend>

                                <input type="hidden" name="lang" value="$(gettext "en-us")">

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
                                        <span>$(gettext "I have read and agree to the") <a a class="modal-link" href="termos-de-uso.html">$(gettext "Terms of use")</a></span>

                                    </label>
                                    <button class="button orange">$(gettext "Continue")</button>
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
                    <article id="get-in-touch" class="wrapper">
                        <header>
                            <h2>$(gettext "Don't be shy! Let's talk about clouds.")</h2>
                        </header>
                        <section>
                            <ul>
                                <li><a href="mailto:ship@getupcloud.com">ship@getupcloud.com</a></li>
                                <li><a href="http://www.twitter.com/getupcloud" target="_blank">twitter.com/getupcloud</a></li>
                                <li><a href="http://www.facebook.com/getupcloud" target="_blank">fb.com/getupcloud</a></li>                        
                            </ul>

                            <div class="right">
                                <dl>
                                    <dt>Porto Alegre</dt>
                                    <dd>poa@getupcloud.com</dd>
                                </dl>
                                <dl>
                                    <dt>São Paulo</dt>
                                    <dd>sampa@getupcloud.com</dd>
                                </dl>
                                <dl>
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
                        <li><a class="modal-link" href="termos-de-uso.html">$(gettext "Terms of use")</a></li>
                        <li><a class="modal-link" href="politica-de-privacidade.html">$(gettext "Privacy policy")</a></li>
                        <li><a class="modal-link" href="politica-de-utilizacao-aceitavel.html">$(gettext "Acceptable use policy")</a></li>
                        <li><a class="modal-link" href="politica-de-suporte.html">$(gettext "Support policy")</a></li>
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
