$(document).ready(function(){
    //BARRE DE NAVIGATION
    $('.openMenu').on('click', show);
    $('.closeMenu').on('click', close);

    function show(){
        // $('.menu').css('display' ,'flex');
        $('nav ul').css({top: '0'});
    }

    function close(){
        $('nav ul').css({top: '-100%'});
    }
})