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