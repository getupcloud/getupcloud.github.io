cat <<EOF
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="content-language" content="$LANGUAGE_ID">

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

        <script src="static/js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="header-container closed">
            <header class="wrapper clearfix">
                <h1>$(gettext "getup")</h1>
                <nav>
                    <ul>
                        <li><a href="#how-it-works">$(gettext "How it Works")</a></li>
                        <li><a href="#pricing">$(gettext "Pricing")</a></li>
                        <li><a href="#get-in-touch">$(gettext "Get in Touch")</a></li>
                        <li class="black"><a href="https://getup.zendesk.com/home/">$(gettext "Support")</a></li>
                        <li class="black"><a href="blog/">$(gettext "Blog")</a></li>

                        <li class="separator"><a href="https://broker.getupcloud.com/console/signin">$(gettext "Log In")</a></li>
                        <li><a href="#sign-up">$(gettext "Sign Up")</a></li>
                    </ul>
                </nav>

                <aside>
                    <a href="index.html" rel="pt-br">Português</a>
                    <a href="index_en.html" rel="en-us">English</a>
                </aside>
            </header>
        </div>

        <div class="main-container">
            <div class="main wrapper clearfix">

                <article id="home" class="carousel">
                    <section>
                        <h2>$(gettext "Getup is a scalable cloud application plataform")</h2>
                        <p>$(gettext "An easy and fast way to build and deploy web apps. You only have to worry about coding your app - we take care of everything else.")</p>

                        <div class="actions">
                            <a class="button" href="#benefits">$(gettext "Compare benefits")</a>
                            <a class="button orange" href="#sign-up">$(gettext "Sign Up")</a>
                        </div>
                    </section>
                    <section>
                        <h2>$(gettext "Grow in the cloud")</h2>
                        <p>$(gettext "Compute power when you need it most.")</p>

                        <div class="actions">
                            <a class="button" href="#benefits">$(gettext "Compare benefits")</a>
                            <a class="button orange" href="#sign-up">$(gettext "Sign Up")</a>
                        </div>
                    </section>

                    <section>
                        <h2>$(gettext "Auto scale")</h2>
                        <p>$(gettext "Don't get caught by traffic spikes. Deploy and scale to millions of users.")</p>

                        <div class="actions">
                            <a class="button" href="#benefits">$(gettext "Compare benefits")</a>
                            <a class="button orange" href="#sign-up">$(gettext "Sign Up")</a>
                        </div>
                    </section>
                </article> <!-- #home -->

                <article id="how-it-works">
                    <header>
                        <h2>$(gettext "Deploy your application in minutes")</h2>
                        <p>$(gettext "Create and deploy web applications without the cost and complexity of buying and managing servers. It's faster and cheaper than create AWS instances.")</p>
                    </header>
                    <section>
                        <h3 class="create">$(gettext "Create your application")</h3>
                        <p>$(gettext "Choose the technology"): PHP, Ruby, Python, Node.js</p>

                        <dl>
                            <dt>$(gettext "SSL")<dt>
                            <dd>$(gettext "Included to all applications.")<dd>

                            <dt>$(gettext "Cartridges")<dt>
                            <dd>$(gettext "Add components to your app.")<dd>
                            <dd>$ rhc app-create AppName PHP-5 MySQL-5</dd>
                        </dl>
                    </section><!-- .create -->
                    <section>
                        <h3 class="deploy">$(gettext "Deploy")</h3>
                        <p>$(gettext "Just type 'git push' and voil&aacute;! Your application is up and running!")</p>

                        <dl>
                            <dt>$(gettext "Built-in Databases")<dt>
                            <dd>$(gettext "Add a database just adding a new cartridge.")<dd>
                            <dd>$ rhc cartridge-add MySQL-5 -a AppName</dd>
                        </dl>
                    </section><!-- .deploy -->
                    <section>
                        <h3 class="scale">$(gettext "Scale")</h3>
                        <p>$(gettext "With auto-scale you don't need to worry about growth, don't get caught by traffic spikes.")</p>

                        <dl>
                            <dt>$(gettext "Monitor")<dt>
                            <dd>$(gettext "New gears to handle traffic spikes. Scale to millions of users.")<dd>

                            <dt>$(gettext "Pay as you go")<dt>
                            <dd>$(gettext "Pay by hour usage and just for the time that each gear was active. It's more efficient and versatile than traditional computing.")<dd>

                            <dt>$(gettext "That's it.")<dt>
                            <dd>$(gettext "Just lean back and enjoy the ride. And don't forget the liquid gold!") <img src="" alt="$(gettext 'Liquid gold!')" title="$(gettext 'Liquid gold!')" /><dd>
                        </dl>
                    </section><!-- .scale -->
                </article> <!-- #how-it-works -->

                <article id="pricing">
                    <header>
                        <h2>$(gettext "Pricing and Benefits")</h2>
                    </header>
                    <section>
                        <div class="right">
                            <p>$(gettext "Getup is the best hosting option for those who do not want to waste time setting up servers.")</p>
                            <p>$(gettext "An application can run using one or more gears and the amount will be determined by the volume of access.")</p>
                            <p>$(gettext "The monthly cost is calculated by the number of gears used and the number of hours that each gear were active.")</p>

                            <div class="white-border round">
                                <h3>$(gettext "Compare with other services")</h3>
                                <p>$(gettext "Compare Getup with other services for a month with a traffic peak as an example") <a href="#compare">$(gettext "Check it out.")</a></p>
                            </div>
                        </div>                        

                        <div class="left">
                            <dl>
                                <dt>$(gettext "Auto Scaling")</dt>
                                <dd>$(gettext "included")</dd>

                                <dt class="separator">$(gettext "Support")</dt>
                                <dd>$(gettext "Ticket, Forum, Community")</dd>

                                <dt class="separator">SSL</dt>
                                <dd>$(gettext "Shared SSL included")</dd>

                                <dt class="separator">$(gettext "Additional Storage")</dt>
                                <dd>$(gettext "US$ 0,935/GB/Month")</dd>

                                <dt class="separator">$(gettext "API requests")</dt>
                                <dd>$(gettext "Unlimited")</dd>
                            </dl>

                            <dl class="blue-background round">
                                <dt data-tooltip="$(gettext 'Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 1GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.')">$(gettext "GEAR")</dt>
                                <dd>$(gettext "US$ 0,074/hour")</dd>

                                <dt class="separator">$(gettext "Monthly cost")</dt>
                                <dd>$(gettext "US$ ~54,23")</dd>
                            </dl>
                        </div>
                    </section><!-- .prices -->
                    <section>
                        <table><!-- TODO--></table>
                    </section><!-- .compare -->                    
                </article> <!-- #pricing -->

                <article id="sign-up">
                    <header>
                        <h2>$(gettext "With Getup you pay only for what you use and saves time.")</h2>
                        <a class="button orange" href="#sign-up">$(gettext "Sign Up")</a>
                    </header>
                    <section>
                        <form></form>
                    </section><!-- . -->
                </article> <!-- #sign-up -->      

                <article id="get-in-touch">
                    <header>
                        <h2>$(gettext "Don't be shy! Let's talk about clouds.")</h2>
                    </header>
                    <section>
                        <ul>
                            <li><a href="mailto:ship@getupcloud.com">ship@getupcloud.com</a></li>
                            <li><a href="http://www.twitter.com/getupcloud" target="_blank">twitter.com/getupcloud</a></li>
                            <li><a href="http://www.facebook.com/getupcloud" target="_blank">fb.com/getupcloud</a></li>                        
                        </ul>

                        <dl>
                            <dt>Porto Alegre</dt>
                            <dd>poa@getupcloud.com</dd>
                            
                            <dt>São Paulo</dt>
                            <dd>sampa@getupcloud.com</dd>

                            <dt>Overseas</dt>
                            <dd>overseas@getupcloud.com</dd>
                        </dl>
                    </section><!-- . -->
                </article> <!-- #pricing -->                          

            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>$(gettext "Infrastructure is based on:")</h3>
                
                <ul>
                    <li class="amazon">Amazon</li>
                    <li class="openshift">Openshift</li>
                </ul>

                <p>GROW IN THE CLOUD</p>

                <nav>
                    <ul>
                        <li><a href="termos-de-uso.html">$(gettext "Terms of use")</a></li>
                        <li><a href="politica-de-privacidade.html">$(gettext "Privacy policy")</a></li>
                        <li><a href="politica-de-utilizacao-aceitavel.html">$(gettext "Acceptable use policy")</a></li>
                        <li><a href="politica-de-suporte.html">$(gettext "Support policy")</a></li>
                    </ul>
                </nav>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>

        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
EOF
