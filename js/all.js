// $(document).ready(function () {
//     $('.button').click(function(){
//         $('.box1').delay(0).slideToggle();
//         $('.box2').delay(1000).slideToggle();
//         $('.box2').delay(2000).toggleClass('pink');
//         $('.box3').delay(3000).show(0);
//     })
// });

$(document).ready(function () {
    //字體最大
    $('.button-l').click(function(){
        $('p').css('font-size','28px');
    })
    //字體適中
    $('.button-m').click(function(){
        $('p').css('font-size','20px');
    })
    //字體最小
    $('.button-s').click(function(){
        $('p').css('font-size','12px');
    })
    //關閉廣告、stop()
    $('.close-button').click(function(e){
        e.preventDefault();
        $('.close').stop().slideToggle(10000);
    })
});