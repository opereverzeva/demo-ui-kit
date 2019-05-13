import $ from 'jquery';

$(function () {

    var $min = $('.ui-counter__input').attr('min') || 0;
    var $max = $('.ui-counter__input').attr('max') || 100;


    function increment(number) {
        return number++;
    };

    function decrement(number) {
        return number--;
    };

    function checkCount(number) {
        return number < $min ?
            $min :
            (number > $max ?
                $max :
                number
            )
    }

    $(".ui-counter").click(function (event) {
        console.log($(event.target).parent())
        var $value = $('.ui-counter__input').attr('value')
        var som = $(event.target)
        console.log($value)
        console.log($(som))
        $value = $(som).hasClass("ui-counter__button_inc") ?
            increment($value) :
            ($(som).hasClass("ui-counter__button_dec") ?
                decrement($value) :
                $value);
        console.log($value)
        $('.ui-counter__input').attr("value", checkCount($value))



    });

})