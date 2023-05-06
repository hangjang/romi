$(function () {
    $('.main1').hover(function () {
        $('.imgbox img:nth-of-type(1)').show();
        $('.imgbox img:nth-of-type(2)').hide();
        $('.imgbox img:nth-of-type(3)').hide();
        $('.imgbox img:nth-of-type(4)').hide();
    });
    $('.main2').hover(function () {
        $('.imgbox img:nth-of-type(1)').hide();
        $('.imgbox img:nth-of-type(2)').show();
        $('.imgbox img:nth-of-type(3)').hide();
        $('.imgbox img:nth-of-type(4)').hide();
    });
    $('.main3').hover(function () {
        $('.imgbox img:nth-of-type(1)').hide();
        $('.imgbox img:nth-of-type(2)').hide();
        $('.imgbox img:nth-of-type(3)').show();
        $('.imgbox img:nth-of-type(4)').hide();
    });
    $('.main4').hover(function () {
        $('.imgbox img:nth-of-type(1)').hide();
        $('.imgbox img:nth-of-type(2)').hide();
        $('.imgbox img:nth-of-type(3)').hide();
        $('.imgbox img:nth-of-type(4)').show();
    });
});
$(function(){
    $('.main1').hover(function(){
        $('.main1').css("opacity","0.6");
        $('.main2').css("opacity","1");
        $('.main3').css("opacity","1");
        $('.main4').css("opacity","1");
    })
    $('.main2').hover(function(){
        $('.main1').css("opacity","1");
        $('.main2').css("opacity","0.6");
        $('.main3').css("opacity","1");
        $('.main4').css("opacity","1");
    })
    $('.main3').hover(function(){
        $('.main1').css("opacity","1");
        $('.main2').css("opacity","1");
        $('.main3').css("opacity","0.6");
        $('.main4').css("opacity","1");
    })
    $('.main4').hover(function(){
        $('.main1').css("opacity","1");
        $('.main2').css("opacity","1");
        $('.main3').css("opacity","1");
        $('.main4').css("opacity","0.6");
    })
});
$(function(){
    $('.color1').click(function(){
        if($('.black1').css("border") == '2px solid rgb(0, 0, 0)'){ //눌려져있는 상태에서 한 번 더 누르면 원래 상태로 돌아가는 명령
            $('.black1').css("border","1px solid lightgray");
            $('.color1 span').css("color","white");
            //눌러진 상태이니까 안누른 상태로 돌리는 코드 쓰기.
        }else{
            $('.black1').css("border","2px solid black");
            $('.color1 span').css("color","#333");
            $('.beige1').css("border","1px solid lightgray");
            $('.color2 p').css("color","white");
        }
    })
    $('.color2').click(function () {
        if ($('.beige1').css("border") == '2px solid rgb(0, 0, 0)') {
            $('.beige1').css("border", "1px solid lightgray");
            $('.color2 p').css("color", "white");
        } else {
            $('.beige1').css("border", "2px solid black");
            $('.color2 p').css("color", "#333");
            $('.black1').css("border", "1px solid lightgray");
            $('.color1 span').css("color", "white");
        }
    });
});

$(function(){
    $('.r1').click(function () {
        if ($('.r1').css("border") == '2px solid rgb(51, 51, 51)') {
            $('.r1').css("border", "1px solid lightgray");
            $('.r1').css("color","lightgray");
        } else {
            $('.r1').css("border", "2px solid #333");
            $('.r1').css("color","#333");
            $('.r2').css("border", "1px solid lightgray");
            $('.r2').css("color","lightgray");
        }
    });
    $('.r2').click(function () {
        if ($('.r2').css("border") == '2px solid rgb(51, 51, 51)') {
            $('.r2').css("border", "1px solid lightgray");
            $('.r2').css("color","lightgray");
        } else {
            $('.r2').css("border", "2px solid #333");
            $('.r2').css("color","#333");
            $('.r1').css("border", "1px solid lightgray");
            $('.r1').css("color","lightgray");
        }
    });
});

$(function(){
    $('.like').click(function(){
        if($('.like').css("border") == '2px solid rgb(128, 128, 128)'){
            $('.like').css("border","2px solid lightgray");
            $('.like span').text("70");
        } else {
            $('.like').css("border","2px solid gray");
            $('.like span').text("71");
        }
    })
});
