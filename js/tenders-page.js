jQuery(document).ready(function(){
    jQuery('.tender__info-slider').slick({
        infinite: true,
        variableWidth: true,
        dots: false,
    });

    jQuery(".tender__header").on('click',function(){
        if(jQuery(this).parent().hasClass('active')){
            jQuery(this).next().slideUp()
            jQuery(this).parent().removeClass('active')
        }
        else {
            jQuery(this).next().slideDown()
            jQuery(this).parent().addClass('active')
        }
    });
});