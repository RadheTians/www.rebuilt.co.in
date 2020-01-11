<!DOCTYPE html>
<html lang="zxx">
   <head>
      <title>Rebuilt</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta charset="UTF-8">
      <!-- External CSS libraries -->
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/bootstrap.min.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/magnific-popup.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/jquery.selectBox.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/dropzone.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/animate.min.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/leaflet.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/slick.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/jquery.mCustomScrollbar.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/fonts/font-awesome/css/font-awesome.min.css">
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/fonts/flaticon/font/flaticon.css">
      <!-- Favicon icon -->
      <link rel="shortcut icon"href="https://www.rebuilt.co.in/assets/template/img/favicon.png" >
      <!-- Google fonts -->
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800%7CPoppins:400,500,700,800,900%7CRoboto:100,300,400,400i,500,700">
      <!-- Custom Stylesheet -->
      <link type="text/css" rel="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/style.css">
      <link rel="stylesheet" type="text/css" id="stylesheet"href="https://www.rebuilt.co.in/assets/template/css/skins/default.css">
      
      <link rel="stylesheet" href="https://www.rebuilt.co.in/assets/template/css/megamenu-style.css"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css" rel="stylesheet" type="text/css" />
      <style>
         p,select,input,p,span,li,u,textarea,h6{
            font-size:14px;
         }
         .rb-loader {
           border: 16px solid #f3f3f3;
           border-radius: 50%;
           border-top: 16px solid #3498db;
           width: 60px;
           position:fixed;
           left : 50%;
            top : 50%;
           z-index:99999;
            margin:0px auto;
            display: none;
            background-position:center;
           height: 60px;
           -webkit-animation: spin 2s linear infinite; /* Safari */
           animation: spin 2s linear infinite;
         }

         /* Safari */
         @-webkit-keyframes spin {
           0% { -webkit-transform: rotate(0deg); }
           100% { -webkit-transform: rotate(360deg); }
         }

         @keyframes spin {
           0% { transform: rotate(0deg); }
           100% { transform: rotate(360deg); }
         }
        li.drop-down ul{
          display:none;
        }
        li.drop-down:hover ul{
          display:block;
          position: relative;
          z-index:999;
        }
        li.drop-down{
          width:118px;
        }
        ul.dropdown-submenu li a,ul.dropdown-submenu li,ul.dropdown li,ul.dropdown li a{
          background:#212529 !important;
          color:#fff !important;
        }
        li.drop-down ul li ul.dropdown-submenu{
            display: none;
        }
        li.drop-down ul li:hover ul.dropdown-submenu{
            display: block;
            position: relative;
            left: 107%;
            bottom: 24px;
        }
        li.drop-down ul li>ul.dropdown-submenu li{
          max-height:40px;
        }
        li.drop-down>ul>li {
          padding:6px 12px !important;
          line-height:1em;
          max-height:40px;
        }
        li.drop-down:hover ul li{
          background: blue;
          max-height:40px;
        }
        li.drop-down:hover ul li{
          background: white;
          color:black;
        
          padding:6px 8px;
          width:200px;
          border-bottom: 1px solid #cdcdcd !important;
          padding:6px 12px !important;

        }
        li.drop-down:hover{
          height:20px;
        }

      </style>
       <script>
         function gen_tkn_nm()
         {
            var  csrfName = "csrf_rbuilt_access_token";
            return csrfName;
            
         }
         function gen_tkn_hsh() {

           var  csrfHash = "e0e0deed014cd88ff9afe5fe2c1b8718";
           return csrfHash;
         
         }
      </script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141289615-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141289615-1');
</script>
   </head>
   <body id="top">
      <div class="rb-loader"></div>

      <!-- Top header start -->
      <header class="top-header top-header-bg d-none d-xl-block d-lg-block d-md-block" id="top-header-2">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="list-inline">
                     <a href="https://wa.me/9896593029" target="blank"><i class="fa fa-whatsapp"></i>9896593029</a>
                     <a href="tel:8929555400" target="_blank"><i class="fa fa-phone"></i>8929555400</a>
                     
                     <a href="mailto:info@rebuilt.co.in" target="_blank"><i class="fa fa-envelope"></i>info@rebuilt.co.in</a>
                  </div>
               </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                     <ul class="top-social-media pull-right">
                        <li>
                           <a target="_blank" href="https://www.facebook.com/ReBuilt.India/" class="facebook"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                           <a target="_blank" href="https://www.linkedin.com/company/rebuilt" class="linkedin"><i class="fa fa-linkedin"></i> </a>
                        </li>
                         <li>
                           <a target="_blank" href="http://www.instagram.com/rebuilt_india/" class="instagram"><i class="fa fa-instagram"></i> </a>
                        </li>
                        <li>
                           <a href="#">/</a>
                        </li>
   					              <li>
                           <a href="https://www.rebuilt.co.in/Home/partner-register" class="sign-in"> BECOME A PROFESSIONAL</a>
                        </li>
   					            <li>
                           <a href="#">/</a>
                        </li>
                                                <li>
                           <a href="https://www.rebuilt.co.in/Home/Login" class="sign-in"><i class="fa fa-sign-in"></i> Login / Sign up </a>
                        </li>
                       <!--  <li>
                           <a href="https://www.rebuilt.co.in/Home/Register" class="sign-in"><i class="fa fa-user"></i> Register</a>
                        </li> -->
                                             </ul>
                  </div>
            </div>
         </div>
      </header>
      <!-- Top header end -->
      <!-- main header start -->
      <header class="main-header do-sticky" id="main-header-2">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <nav class="navbar navbar-expand-lg navbar-light rounded">
                     <a class="navbar-brand logo" href="https://www.rebuilt.co.in/">
                     <img src="https://www.rebuilt.co.in/assets/template/img/logos/black-logo.png" alt="logo">
                     </a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="fa fa-bars"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbar">

                        <ul class="navbar-nav ml-auto">
                           <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/">
                              Home
                              </a>
                           </li>
                           <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/Home/About-us">
                              About Us
                              </a>
                           </li>

                           <li class="drop-down">
                              <a class="nav-link" href="#">Services</a>
                              
                                 <ul class="dropdown">
                                                                          
                                                                                            
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/Geyser/Gurgaon">  
                                                     Geyser                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/Refrigerator/Gurgaon">  
                                                     Refrigerator                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/Microwave+%26+Oven/Gurgaon">  
                                                     Microwave & Oven                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/RO+or+Water+Purifier/Gurgaon">  
                                                     RO or Water Purifier                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/Washing+Machine/Gurgaon">  
                                                     Washing Machine                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/A.C/Gurgaon">  
                                                     A.C                                                   </a>
                                                </li>
                                                                                                                                        
                                                <li class="subs">
                                                    <a class="dropdown-item" href="https://www.rebuilt.co.in/Home/Appliance/T.V/Gurgaon">  
                                                     T.V                                                   </a>
                                                </li>
                                                                                                                                
                                                                </ul>

                            </li>
                            
                              <!-- <li class="nav-item dropdown">
                                <a class="nav-link " href="https://www.rebuilt.co.in/Home/Price-list">Prices </a>
                              </li> -->
                           <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/Home/Offers">
                              Offer
                              </a>
                           </li>
						   
						                <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/Home/Career">
                              Career
                              </a>
                           </li>
						                <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/Home/Blog">
                              Blog
                              </a>
                           </li>
                           <li class="nav-item dropdown">
                              <a class="nav-link " href="https://www.rebuilt.co.in/Home/Contact-us">
                              Contact US
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
      <!-- main header end -->
<script type="text/javascript">

</script><style>
	.jumbotron{
		background: none;
	}
</style>
	<div id="container ">
		<div class="jumbotron">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					<img src="https://www.rebuilt.co.in/assets/images/error_404_http_code.jpg" alt="">
					<h1 align="center">Page Not found</h1>
						<p align="center">this page does not exist</p>

				</div>
				<div class="col-md-2"></div>
			</div>
		</div>
	</div>
<!-- Footer start -->
<footer class="footer">
   <div class="container footer-inner">
      <div class="row">
         <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item">
               <h4>Contact Us</h4>
               <ul class="contact-info">
                  <li>
                     Address: V-25/8 DLF Phase 3 near moulsari arcade sec-24,Gurgaon 122002
                  </li>
                  <li>
                     Email: <a href="#">info@rebuilt.co.in</a>
                  </li>
                  <li>
                     Mobile No: <a href="#">+918929555400</a>
                  </li>
                  <li>
                     WhatsApp: +919896593029
                  </li>
               </ul>
               <ul class="social-list clearfix">
                  <li><a target="_blank" href="https://www.facebook.com/ReBuilt.India/" class="facebook"><i class="fa fa-facebook"></i></a></li>
                  <!-- <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#" class="google"><i class="fa fa-google-plus"></i></a></li>
                  <li><a href="#" class="rss"><i class="fa fa-rss"></i></a></li> -->
                  <li><a target="_blank"  href="https://www.linkedin.com/company/rebuilt" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                   <li><a target="_blank"  href="http://www.instagram.com/rebuilt_india/" class="instagram"><i class="fa fa-instagram"></i></a></li>
               </ul>
            </div>
         </div>
         <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item">
               <h4>
                  Useful Links
               </h4>
               <ul class="links">
                  <li>
                     <a href="https://www.rebuilt.co.in/Home/About-us"><i class="fa fa-angle-right"></i>About us</a>
                  </li>
                 
                  <li>
                     <a href="https://www.rebuilt.co.in/Home/Price-list"><i class="fa fa-angle-right"></i>Prices</a>
                  </li>
                   <li>
                     <a href="https://www.rebuilt.co.in/Home/privacy-policy"><i class="fa fa-angle-right"></i>Privacy-policy</a>
                  </li>
                  <li>
                     <a href="https://www.rebuilt.co.in/Home/term-condition"><i class="fa fa-angle-right"></i>Terms & Condition</a>
                  </li>
                  <li>
                     <a href="https://www.rebuilt.co.in/Home/Contact-us"><i class="fa fa-angle-right"></i>Contact us</a>
                  </li>
               </ul>
            </div>
         </div>
         <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item">
               <h4>
                  Our Areas
               </h4>
               <ul class="links">
                                   <li>
                     <a href="#" class="footer_area_rb" data-area-id="8"><i class="fa fa-angle-right"></i>Roorkee</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="7"><i class="fa fa-angle-right"></i>Delhi</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="6"><i class="fa fa-angle-right"></i>Dehradun</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="5"><i class="fa fa-angle-right"></i>Rohtak</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="3"><i class="fa fa-angle-right"></i>Faridabad</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="2"><i class="fa fa-angle-right"></i>Noida</a>
                  </li>
                                    <li>
                     <a href="#" class="footer_area_rb" data-area-id="1"><i class="fa fa-angle-right"></i>Gurgaon</a>
                  </li>
                                 </ul>
            </div>
         </div>
         <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="footer-item clearfix">
               <h4>Subscribe</h4>
               <div class="Subscribe-box">
                  <p></p>
                  <form action="#" method="GET">
                     <p>
                        <input type="text" class="form-contact" name="email" placeholder="Enter Address">
                     </p>
                     <p>
                        <button type="submit" name="submitNewsletter" class="btn btn-block btn-color">
                        Subscribe
                        </button>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-xl-6">
            <p class="copy">
               &copy;  2019 
               <a href="#" target="_blank">
                  Rebuilt India Pvt. Ltd.
            </p>
         </div>
         <div class="col-xl-6">
         <p class="copy"><span> <a href="">Privacy-Policy  </a></span><span>|</span><span><a href="">Terms & Condition</span></p>
         </div>
      </div>
   </div>
</footer>
<!-- Footer end -->
<!-- External JS libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>        
<script src="https://www.rebuilt.co.in/assets/template/js/jquery-2.2.0.min.js"></script>

<script src="https://www.rebuilt.co.in/assets/template/js/popper.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.selectBox.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/rangeslider.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.magnific-popup.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.filterizr.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/wow.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/backstretch.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.countdown.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.scrollUp.js"></script>
<!---<script src="https://www.rebuilt.co.in/assets/template/js/particles.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/typed.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/dropzone.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/jquery.mb.YTPlayer.js"></script>----->
<script src="https://www.rebuilt.co.in/assets/template/js/leaflet.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/leaflet-providers.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/leaflet.markercluster.js"></script>
<!--<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>-->

<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src='https://www.rebuilt.co.in/assets/template/js/select2.min.js'></script>

<script src="https://www.rebuilt.co.in/assets/template/js/slick.min.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/bootstrap1.min.js"></script>

<!-- <script src="https://www.rebuilt.co.in/assets/template/js/bootstrap-datetimepicker.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="https://www.rebuilt.co.in/assets/template/js/multi-step-modal.js"></script>
<script type='text/javascript' src="https://www.rebuilt.co.in/resources/js/rb_cpro.js"></script>
<!-- Custom JS Script -->



<script type="text/javascript" src="https://www.rebuilt.co.in/assets/template/js/app-code.js"></script>
<script src="https://www.rebuilt.co.in/assets/template/js/multislider.min.js"></script> 


<script>
    var Settings={
             base_url: "https://www.rebuilt.co.in/"
        }
        
           function doSticky()
    {
        if ($(document).scrollTop() > 40) {
            $('.do-sticky').addClass('sticky-header');
            //$('.do-sticky').addClass('header-shrink');
        }
        else {
            $('.do-sticky').removeClass('sticky-header');
            //$('.do-sticky').removeClass('header-shrink');
        }
    }
        function adjustHeader()
    {
        var windowWidth = $(window).width();
        if(windowWidth > 992) {
            if ($(document).scrollTop() >= 100) {
                if($('.header-shrink').length < 1) {
                    $('.sticky-header').addClass('header-shrink');
                }
                if($('.do-sticky').length < 1) {
                    $('.logo img').attr('src', Settings.base_url+'assets/template/img/logos/black-logo.png');
                }
            }
            else {
                $('.sticky-header').removeClass('header-shrink');
                if($('.do-sticky').length < 1) {
                    $('.logo img').attr('src', Settings.base_url+'assets/template/img/logos/black-logo.png');
                }
            }
        } else {
            $('.logo img').attr('src', Settings.base_url+'assets/template/img/logos/black-logo.png');
        }
    }
    
      // Megamenu activation
    $(".megamenu").on("click", function (e) {
        e.stopPropagation();
    });
    
         // Header shrink while page scroll
    adjustHeader();
    doSticky();
    $(window).on('scroll', function () {
        adjustHeader();
        doSticky();
    });
 // Dropdown activation
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
      $(document).ready(function(){
        $(".navbar-toggler").on("click",function(e){
            $(this).next().toggle("show"); 
        });
        
         $(".megamenu-li a.dropdown-toggle").on("click",function(e){
            $(this).next().toggle("show"); 
        });
        
    });

       $('#home_rb_area').select2({
            width: "100%",
            height:"40px",
            templateResult: formatloc,
            templateSelection: function (option) {
                if (option.id.length > 0 ) {
                    return option.text;
                } else {
                    return option.text;
                }
            },
            escapeMarkup: function (m) {
              return m;
            }
  });

    function format (option) {
        if (!option.id) { return option.text; }
        a=$(option.element).attr("data-image");

        var ob = option.text + '<img src="'+a+'" width="20px"  hspace="20px" height="20px"/>'; // replace image source with option.img (available in JSON)
        return ob;
    };
    function formatloc (option) {
        if (!option.id) { return option.text; }
      
        var ob ="<i class='fa fa-map-marker'></i>&nbsp;&nbsp;&nbsp;"+option.text ; // replace image source with option.img (available in JSON)
        return ob;
    };
    
  $("#rb_app_name").select2({
      width: "100%",
      height:"40px",
      templateResult: format,
      templateSelection: function (option) {
          if (option.id.length > 0 ) {
              return option.text;
          } else {
              return option.text;
          }
      },
      escapeMarkup: function (m) {
        return m;
      }
  });
 
</script>

</body>
</html>


