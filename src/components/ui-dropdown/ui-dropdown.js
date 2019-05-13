import $ from 'jquery';

$(() => {

    $('.ui-dropdown__header').click(() => {
        $('.ui-dropdown__header').toggleClass('ui-dropdown__header_active');
        $('.ui-dropdown__list').toggleClass('ui-dropdown__list_hidden')
    })
    $('.ui-dropdown__item').click(() => {
        $('.ui-dropdown__header').toggleClass('ui-dropdown__header_active');
        $('.ui-dropdown__list').addClass('ui-dropdown__list_hidden')
    })
})