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
    $(".see-application").show();
});

$("#publish").click(function() {

    $(".more-publish").toggle("fast");
    $(this).find(".see-less-text").toggle("fast");
    $(this).find(".see-more-text").toggle("fast");
    $(".see-publish").show();

});

$("#climb").click(function() {

    $(".more-climb").toggle("fast");
    $(this).find(".see-less-text").toggle("fast");
    $(this).find(".see-more-text").toggle("fast");
    $(".see-climb").show();

});

$(".wrap .about .open-create-your-account span.blur").click(function(){

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

jQuery(".advantages-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".advantages").offset().top - 122
        });
    });

jQuery(".price-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".price").offset().top - 122
        });
    });

jQuery(".contact-link").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".get-in-touch").offset().top - 122
        });
    });

jQuery(".compare").click(function() {
    jQuery(".comparative-opened").show();
    jQuery('html, body').animate({
        scrollTop: jQuery(".comparative-opened").offset().top - 122
        });
    });

/*$(".wrap .about .register").click(function(){
$(this).next().next().slideDown();
$(this).prev().hide();
$(this).hide();
jQuery('html, body').animate({
scrollTop: jQuery("#pricing").offset().top - 122
}, 2000);
});

jQuery(".create-your-account").click(function() {
jQuery(".open-create-your-account").show();
$(".wrap .about .register, .wrap-section .about .introduction").hide();
jQuery('html, body').animate({
scrollTop: jQuery("#pricing").offset().top - 122
}, 2000);
});*/

    $('.wrap .about .register, .create-your-account').click(function() {
        _pricing.signup.show();
        $('html, body').animate({ scrollTop: $("#pricing").offset().top - 122 });
    });

    $(".close-register").click(function(){
        _pricing.signup.hide(true);
    });

});
