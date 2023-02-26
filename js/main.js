    $(window).scroll(function(){
        var top =$(this).scrollTop();
        if(top >=100){
            $(".navbar").css({"background-color":"white "},1000)
        }else{
            $(".navbar").css({"background-color":"transparent"},1000)

        }
    })