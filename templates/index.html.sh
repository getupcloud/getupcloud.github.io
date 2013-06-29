cat <<EOF
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" prefix="og: http://ogp.me/ns#" prefix="og: http://ogp.me/ns#"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" prefix="og: http://ogp.me/ns#"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" prefix="og: http://ogp.me/ns#"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" prefix="og: http://ogp.me/ns#"> <!--<![endif]-->
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

        <script>var U = { register: '$REGISTER', language: '$LANGUAGE_ID', debug: $DEBUG };</script>
        <script src="/static/js/language.js"></script>
        
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"> 
        <link rel="stylesheet" href="/static/css/normalize.min.css">
        <link rel="stylesheet" href="/static/css/main.css">
        <script src="/static/js/vendor/modernizr/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <div class="content">
            <div class="fixed">
                <header id="what">
                    <div class="wrap">
                        <h1 class="sprite">$(gettext "Getup - Grow in the cloud")</h1>
                        <nav>
                            <ul>
                                <li class="active"><a href="what" rel="what">$(gettext "what")</a></li>
                                <li><a href="how-it-works" rel="how-it-works">$(gettext "how it works")</a></li>
                                <li><a href="pricing" rel="pricing">$(gettext "pricing")</a></li>
                                <li><a href="get-in-touch" rel="get-in-touch">$(gettext "get in touch")</a></li>
                                <li><a href="$SUPPORT" rel="support">$(gettext "support")</a></li>
                                <li><a href="$BROKER/console/signin">$(gettext "login")</a></li>
                            </ul>

                            <div class="languages">
                                <a href="/en/" rel="en-us" class="en">EN</a>
                                <a href="" rel="pt-br" class="pt">PT</a>
                            </div>
                        </nav>
                        <h2>$(gettext "Getup is a scalable cloud application platform.")</h2>
                        <p>$(gettext "An easy and fast way to build and deploy web apps.")
                            <br/>$(gettext "You only have to worry about coding your app - we take care of everything else.")
                        </p>
                        <img src="/static/img/astronaut.png">
                    </div>
                </header>
            </div>
            <section id="how-it-works">
                <article class="wrap">
                    <h2>$(gettext "simple steps to deploy your app")</h2>
                    <ul>
                        <li class="active">$(gettext "Overview") <span></span></li>
                        <li>$(gettext "Create Application")</li>
                        <li>$(gettext "Deploy")</li>
                        <li>$(gettext "Scale")</li>
                        <li>$(gettext "Security")</li>
                        <li>$(gettext "Have a beer!")</li>
                    </ul>
                    <div class="details">
                        <p><strong>$(gettext "Create and deploy web-based applications without the cost and complexity of buying and managing server.")</strong>
                            <br/>$(gettext "With Getup you pay only for what you use and only for the applications that are using.")
                        </p>
                        <div class="explanation left">
                            <p>$(gettext "With getup you only need to manage:")</p>
                            <ul>
                                <li>$(gettext "Any CMS")</li>
                                <li>$(gettext "Your Code/Scripts")</li>
                                <li>$(gettext "Your Applications")</li>
                            </ul>
                        </div>
                        <div class="explanation right">
                            <p>$(gettext "And we do all the rest:")</p>
                            <ul>
                                <li>$(gettext "Servers")</li>
                                <li>$(gettext "Network")</li>
                                <li>$(gettext "Redundance")</li>
                                <li>$(gettext "Scalability")</li>
                                <li>$(gettext "DNS")</li>
                            </ul>
                            <ul>
                                <li>$(gettext "Patching/Upgrades")</li>
                                <li>$(gettext "Firewalls")</li>
                                <li>$(gettext "Load Balancers")</li>
                                <li>$(gettext "Operating Systems")</li>
                                <li>$(gettext "Storage")</li>
                            </ul>
                        </div>
                        <div class="why">
                            <img src="/static/img/plataform.png">
                            <h2>$(gettext "Launch in an easy")
                                <br/>$(gettext "and scalable way")</h2>
                            <p>$(gettext "Our platform manages the entire application life-cycle.")
                                <br/>$(gettext "Once deployed, it will take care of all the components, utilization spikes and scalability.")
                                <br/>
                                <br/>$(gettext "Servers, storage, load balancer?")
                                <br/>$(gettext "Forget about this crap. We’ll do all that boring stuff for you!")
                            </p>
                        </div>
                    </div>
                    <div class="details">
                        <img src="/static/img/create-application.png">
                        <h2>$(gettext "Technology")</h2>
                        <p>$(gettext "Choose the technology of your app - PHP, Ruby, Python, Node.js")
                            <br/>$(gettext "Or choose an application from our Fast Start App repo")
                        </p>

                        <h2>$(gettext "Scalability")</h2>
                        <p>$(gettext "We take care of scale so you don’t need to worry about traffic spikes and scalability complexity.")</p>

                        <h2>$(gettext "SSL")</h2>
                        <p>$(gettext "All applications are up and running on your own URL with shared SSL by default.")</p>

                        <h2>$(gettext "Cartridges")</h2>
                        <p>$(gettext "Add components to your app through cartridges like MySQL, PHPMyAdmin, PostgreSQL, Ruby, PHP, Django.")
                            <br/>$(gettext "You can add a cartridge using our powerful Web Console or CLI ")
                            <br/>$(gettext "$ rhc cartridge add MySQL-5.1 -a AppName.")
                        </p>
                    </div>
                    <div class="details">
                        <img src="/static/img/deploy.png">
                        <p><strong>$(gettext "Just type ‘git push’ and voilá! Your application is up and running!")</strong></p>

                        <h2>$(gettext "Development life-cycle")</h2>
                        <p>$(gettext "Warp-speed and too-damn-easy swapping to work with test, stage or production versions of your app.")</p>

                        <h2>$(gettext "Built-in Databases")</h2>
                        <p>$(gettext "Add a database just adding a new cartridge.")
                            <br/>$(gettext "$ rhc cartridge add MySQL-5.1 -a AppName")
                        </p>
                    </div>
                    <div class="details">
                        <img src="/static/img/scale.png">
                        <h2>$(gettext "Gears")</h2>
                        <p>$(gettext "Your app set in one or more gears - as many as you want or your application requests demand.") $(gettext "Forget servers, network, firewall or virtual machines.")
                        </p>

                        <h2>$(gettext "Scaling")</h2>
                        <p>$(gettext "Don’t get caught by traffic spikes. Auto-scaling enables your application to react to them without the pain in the neck of dealing with load balancers, replication and others things.")</p>

                        <h2>$(gettext "Pay as you go")</h2>
                        <p>$(gettext "When you create or scale an application, you pay by hour usage, for what you use and only for the running applications - nothing more, nothing less.")
                            <br/>$(gettext "It’s more efficient and versatile than traditional computing.")
                        </p>

                        <h2>$(gettext "Monitor")</h2>
                        <p>$(gettext "Getup monitors all incoming web traffic across the gears and automatically brings new copies of your gears to handle requests.")
                            <br/>$(gettext "Remember warp-speed? Just lean back and enjoy the ride.")
                        </p>
                    </div>
                    <div class="details">
                        <img src="/static/img/security.jpg" />
                        <p>$(gettext "Getup is built on the Red Hat OpenShift Platform and runs Red Hat Enterprise Linux OS (RHEL), one of the most respected Linux distributions. The security layer is guaranteed by SELinux, which acts as a “firewall” among customers’ applications.")</p>

                        <p><strong>$(gettext "Workload distribution and redundancy")</strong>
                        $(gettext "Our infrastructure is distributed across multiple servers, spread in multiple Amazon AZ (Availability Zones).")<br/>
                        $(gettext "If one server or one Availability Zone fails, the affected applications can be moved to another server or another AZ.")</p>
                    </div>
                    <div class="details">
                        <img src="/static/img/beer.png">
                        <h2>$(gettext "That’s it.")</h2>
                        <p>$(gettext "If you don’t care too much for the liquid gold, do whatever you want with your")
                            <br/>$(gettext "spare time. Told you it was six simple steps, right? ;)")
                        </p>
                    </div>
                </article>
            </section>
            <section id="pricing">
                <article class="wrap">
                    <div class="left">
                        <h1 class="orange">$(gettext "Getup on demand")</h1>

                        <dl>
                            <dt>$(gettext "Scaling")</dt>
                            <dd>$(gettext "Included")</dd>

                            <dt>$(gettext "Suport")</dt>
                            <dd><small>$(gettext "Ticket, Forum, Community")</small></dd>

                            <dt>$(gettext "SSL")</dt>
                            <dd>$(gettext "Shared SSL")</dd>

                            <dt>$(gettext "Additional Storage")</dt>
                            <dd>$(gettext "US$ 0,935")/Gb/$(gettext "month")</dd>

                            <dt>$(gettext "API requests")</dt>
                            <dd>$(gettext "Unlimited")</dd>

                            <dt class="orange">$(gettext "Gear") <small class="info gear">?</small></dt>
                            <dd><small>$(gettext "US$") <span id="gear-value-hour"></span>/$(gettext "hour")
                                    <br/>$(gettext "US$") ~<span id="gear-value-month"></span>/$(gettext "month")
                                </small>
                            </dd>
                        </dl>

                        <a href="" class="button signup">$(gettext "SIGNUP")</a>

                        <form action="" method="post" id="signup">
                            <fieldset>
                                <h2>$(gettext "First Step")</h2>
                                <input type="hidden" name="lang" id="language" value="$LANGUAGE_ID" ?>

                                <label>
                                    <span>$(gettext "What's your name")</span>
                                    <input type="text" name="name" id="name" />
                                </label>
                                <label>
                                    <span>$(gettext "What's your e-mail")</span>
                                    <input type="text" name="email" id="email" />
                                </label>
                                <label>
                                    <span>$(gettext "Password")</span>
                                    <input type="password" name="password1" id="password" class="small" />
                                </label>
                                <label>
                                    <span>$(gettext "Confirm password")</span>
                                    <input type="password" name="password2" id="password-confirm" class="small" />
                                </label>
                                <label>
                                    <span>$(gettext "Coupon code (optional)")</span>
                                    <input type="text" name="coupon_code" id="coupon-code" />
                                </label>

                                <label class="checkbox" id="check-terms">
                                    <span>$(gettext "I read and agree to the") <a href="/termos-de-uso.html">$(gettext "Terms of use")</a></span>
                                    <input type="checkbox" name="use_terms" />
                                </label>

                                <p id="message"></p>

                                <button>OK</button>
                            </fieldset>
                        </form>

                        <p id="success">
                            $(gettext "Almost finished...")<br/>
                            $(gettext "You're just a few clicks away.")<br/>
                            <small>$(gettext "To complete the process, please click the link in the email we just sent you.")</small>
                        </p>
                    </div>
                    <div class="right">
                        <h2>$(gettext "A few examples of applications running on Getup")</h2>
                        <p>$(gettext "An application will run in one or more gears and the number will be determined by amount of traffic - users accessing your application.")
                            <br/> $(gettext "The monthly fee is calculated by the number of gears used and the number of hours that they were active.")
                            <br/>$(gettext "To help you understand and get an estimated cost, we created a reference chart with 3 types of application.")
                        </p>
                        <dl class="panel">
                            <dt class="open">$(gettext "PHP Application")</dt>
                            <dd class="open">
                                <ul>
                                    <li>
                                        <h3>$(gettext "Just started")</h3>
                                        <small>~100k $(gettext "pageviews")
                                            <br/>2 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="2"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>$(gettext "Popular")</h3>
                                        <small>~500k $(gettext "pageviews")
                                            <br/>5 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="5"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>$(gettext "World domination")</h3>
                                        <small>~5M $(gettext "pageviews")
                                            <br/>10 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="10"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                </ul>
                            </dd>
                            <dt>$(gettext "Application like our website") $SITE</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <h3>$(gettext "Just started")</h3>
                                        <small>~100k $(gettext "pageviews")
                                            <br/>2 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="2"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>$(gettext "Popular")</h3>
                                        <small>~500k $(gettext "pageviews")
                                            <br/>5 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="5"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>World domination</h3>
                                        <small>~5M $(gettext "pageviews")
                                            <br/>8 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="8"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                </ul>
                            </dd>
                            <dt>$(gettext "Static HTML with 30KB image")</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <h3>$(gettext "Just started")</h3>
                                        <small>~1M $(gettext "pageviews")
                                            <br/>1 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="1"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>$(gettext "Popular")</h3>
                                        <small>~4M $(gettext "pageviews")
                                            <br/>3 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="3"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                    <li>
                                        <h3>$(gettext "World domination")</h3>
                                        <small>~11M $(gettext "pageviews")
                                            <br/>8 $(gettext "gears")
                                            <br/>$(gettext "US$") ~<span class="gears-value" data-gears="8"></span>/$(gettext "month")
                                        </small>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <p><small>* $(gettext "Estimated costs assume the maximum number of gears running continuously for an entire month.")</small></p>
                    </div>
                    <div class="" id="gear">
                        <h2>$(gettext "Gear")</h2>
                        <dl class="panel full">
                            <dt class="open">$(gettext "Gear")</dt>
                            <dd class="open">$(gettext "Gear is a resource constrained container which allows users to run their application. It's like a server on the cloud ;) Each gear has 512MB RAM and 1GB storage. If one application needs more resources, it can use multiple gears - that scalability thing.")</dd>
                            <dt>$(gettext "Scalability - What it is and how it works")</dt>
                            <dd>$(gettext "Scalability empowers your application with traffic management automation, extending and reducing the capacity by adding and removing gears on demand.")
                                <br/>$(gettext "Some gears can be temporary, as your demand is, so you pay only for the time that each gear is running. You can also set the max number of gears that your application uses - that’s financial control.")
                            </dd>
                        </dl>
                    </div>                    
                </article>
            </section>

            <section class="modal" id="modal-terms">
                <div class="modal-mask"></div>
                <div class="modal-content"></div>
            </section>

            <section id="get-in-touch">
                <article class="wrap">
                    <h2>$(gettext "Don’t be shy.")
                        <br/>$(gettext "Let’s talk about clouds.")
                    </h2>
                    <ul class="talk">
                        <li><a href="mailto:ship@getupcloud.com">ship@getupcloud.com</a></li>
                        <li><a href="http://twitter.com/getupcloud">twitter.com/getupcloud</a></li>
                        <li><a href="http://fb.com/getupcloud">fb.com/getupcloud</a></li>
                    </ul>
                    <ul class="contact">
                        <li><strong>Latin &amp; South America</strong><br/> poa@getupcloud.com<br/> Av. Coronel Marcos, 1919<br/> Porto Alegre - RS</li>
                        <li><strong>North America</strong><br/> losangeles@getupcloud.com</li>
                        <li><strong>Asia Pacific</strong><br/> sydney@getupcloud.com </li>
                    </ul>
                </article>
            </section>
            <div id="menu">
                <nav>
                    <div class="wrap">
                        <ul>
                            <li class="active"><a href="what" rel="what">$(gettext "what")</a></li>
                            <li><a href="#how-it-works" rel="how-it-works">$(gettext "how it works")</a></li>
                            <li><a href="pricing" rel="pricing">$(gettext "pricing")</a></li>
                            <li><a href="get-in-touch" rel="get-in-touch">$(gettext "get in touch")</a></li>
                            <li><a href="$SUPPORT" rel="support">$(gettext "support")</a></li>
                            <li><a href="$BROKER/console/signin">$(gettext "login")</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <footer>
                <article class="wrap">
                    <div class="infrastructure">
                        <p>$(gettext "Our Infrastructure is based on:")</p>
                        <ul>
                            <li class="amazon sprite">Amazon</li>
                            <li class="openshift sprite">Openshift</li>
                        </ul>
                    </div>
                    <address>
                        <p>Getupcloud.com <strong>GROW IN THE CLOUD.</strong></p>

                        <nav class="terms">
                            <a href="/termos-de-uso.html">$(gettext "Terms of use")</a>
                            <a href="/politica-de-privacidade.html">$(gettext "Privacy policy")</a>
                            <a href="/politica-de-utilizacao-aceitavel.html">$(gettext "Acceptable use policy")</a>
                            <a href="/politica-de-suporte.html">$(gettext "Support policy")</a>
                        </nav>
                    </address>
                </article>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/static/js/vendor/jquery/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="/static/js/plugins.js"></script>
        <script src="/static/js/main.js"></script>
        <script>
            window.fbAsyncInit = function() {
                FB.init({ appId: 360523914066509, status: true, cookie: true, xfbml: true, oauth: true });
            };

            // Load the SDK Asynchronously
            (function(d){
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement('script'); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                ref.parentNode.insertBefore(js, ref);
            }(document));
        </script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-39510729-1'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
EOF
