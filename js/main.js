$(document).ready(function(){
    // alert('콜백함수 실행');
    $(".openMOgnb").click(function(){
        // alert();디버그용
        // $(".header_cont").css("display", "block");
        $(".header_cont").slideDown("slow");
        // background 추가 header 아이디 영역 백그라운드추가
        $("#header").addClass("on");

    });
    $(".closePop").click(function(){
        $(".header_cont").css("display", "none");
        $(".header").slideUp("fast");
        $("#header").removeClass("on");
    });
    
});
