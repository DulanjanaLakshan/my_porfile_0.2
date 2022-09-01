var num=0;
$("#icon").click(function (){
    if (num==0){
        $("nav ul").css('left','0');
        num=1;
    }else if (num==1){
        $("nav ul").css('left','-1000px');
        num=0;
    }
})