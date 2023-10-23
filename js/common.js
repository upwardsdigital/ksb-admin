jQuery(document).ready(function(){
    //switch-box
    jQuery('.switch-box__header-item').on('click',function (){
        const currentButtonIndex = jQuery(this).index()
        const buttonsList = jQuery(this).parent().children()
        const boxesList = jQuery(this).parent().next().children()

        buttonsList.removeClass('active');
        boxesList.removeClass('active');

        jQuery(this).addClass('active');
        boxesList.eq(currentButtonIndex).addClass('active');
    })


    // function to switch on sliders in mobile
    if (jQuery(window).width() <= '730'){
        jQuery('.best-from-bank__items').slick({
            infinite: true,
            centerMode: true,
        });
        jQuery('.news-block__items').slick({
            infinite: true,
            centerMode: true,
        });
    }


    // default modal
    jQuery(".default-modal__show-button").on('click',function(){
        jQuery(this).next().fadeIn({
            duration: 200,
            start: function () {
                jQuery(this).css({
                    display: "flex"
                })
            }
        });
    });
    jQuery(".default-modal__close-button").on('click',function(){
        jQuery(this).closest('.default-modal').fadeOut(200);
    });
    jQuery(".default-modal").on('click',function(){
        jQuery(this).fadeOut(200);
    });


    // question box
    jQuery(".question__header").on('click',function(){
        if(jQuery(this).parent().hasClass('active')){
            jQuery(this).next().slideUp()
            jQuery(this).parent().removeClass('active')
        }
        else {
            jQuery(this).next().slideDown()
            jQuery(this).parent().addClass('active')
        }
    });


    // calculator
    jQuery(".calculator__slider-item-currency").on('click',function(){
        const currency = jQuery(this).data('currency')
        jQuery('.calculator__slider-item-currency').removeClass('active')
        jQuery(this).addClass('active')
        jQuery(this).parent().parent().parent().parent().parent().find('.currency-text').text(currency)
    });
    jQuery(".calculator__slider-item-input").change(function(){
        const max = jQuery(this).data('max')
        const min = jQuery(this).data('min')
        let value = jQuery(this).val()

        if(jQuery(this).val() > max){
            value = max
            jQuery(this).val(max)
        }
        if(jQuery(this).val() < min){
            value = min
            jQuery(this).val(min)
        }
        jQuery(this).parent().parent().parent().find('.calculator__slider-item-slider').val(value)
        jQuery(this).next().text(value)
    });
    jQuery(".calculator__slider-item-slider").on('input',function(){
        jQuery(this).parent().parent().parent().find('.calculator__slider-item-input').val(jQuery(this).val())
        jQuery(this).parent().parent().parent().find('.calculator__slider-item-input').next().text(jQuery(this).val())
    });

    $("#header").load("header.html");
    $("#footer").load("footer.html");
})