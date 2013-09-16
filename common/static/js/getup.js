$(document).ready(function(){

/* novo */

$(".comparative-show").click(function(){

    $(".comparative-opened").slideDown();

});

$(".close-comparative").click(function(){

    $(".comparative-opened").slideUp();

});

$("#recurso").hover(function(){

    $(this).next().show("fast");

});

$("#recurso").mouseleave(function(){

    $(this).next().hide("fast");

});


$("#valor-mensal-1").hover(function(){

    $(this).next().show("fast");

});

$("#valor-mensal-1").mouseleave(function(){

    $(this).next().hide("fast");

});

$("#custo-adicional-cloud").hover(function(){

    $(this).next().show("fast");

});

$("#custo-adicional-cloud").mouseleave(function(){

    $(this).next().hide("fast");

});

$(".close-register").click(function(){

    $(".open-create-your-account").slideUp();
    $(".register, .introduction").show();

});

$("#info-gear").hover(function(){

    $(this).next().show("fast");

});

$("#info-gear").mouseleave(function(){

    $(this).next().hide("fast");

});

/* */

$("#application").click(function() {

    $(".more-application").toggle("fast");
    $(this).find(".see-less-text").toggle("fast");
    $(this).find(".see-more-text").toggle("fast");
    $(".see-publish").show();
    $(".see-climb").show();
    $(".more-publish").hide("fast");
    $(".more-climb").hide("fast");

});

$("#publish").click(function() {

    $(".more-publish").toggle("fast");
    $(this).find(".see-less-text").toggle("fast");
    $(this).find(".see-more-text").toggle("fast");
    $(".see-climb").show();
    $(".see-application").show();
    $(".more-application").hide("fast");
    $(".more-climb").hide("fast");

});

$("#climb").click(function() {

    $(".more-climb").toggle("fast");
    $(this).find(".see-less-text").toggle("fast");
    $(this).find(".see-more-text").toggle("fast");
    $(".see-application").show();
    $(".see-publish").show();
    $(".more-publish").hide("fast");
    $(".more-application").hide("fast");

});


$(".interval-section .about .open-create-your-account span.blur").click(function(){

    $(this).fadeOut();

});

$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: 'fade',
        controlsContainer: '.flexslider'
    });
});


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


jQuery(".info-gear").click(function(){

    jQuery(".info-gear-show").slideDown();

});

$(".interval-section .about .register").click(function(){

    $(this).next().next().slideDown();
    $(this).prev().hide();
    $(this).hide();

});

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

jQuery(".compare").click(function() {
    jQuery(".comparative-opened").show();
    jQuery('html, body').animate({
        scrollTop: jQuery(".comparative-opened").offset().top - 122
        }, 2000);
    });

jQuery(".create-your-account").click(function() {
    jQuery(".open-create-your-account").show();
    $(".interval-section .about .register, .interval-section .about .introduction").hide();
    jQuery('html, body').animate({
        scrollTop: jQuery(".interval").offset().top - 122
        }, 2000);
    });

$(function(){
  $("#slider").slidesjs({
    width: 2000,
    height: 500
  });
});

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

});
