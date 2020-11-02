var wnum=0;
// wnum은 슬라이드 인덱스 초기값이다.
var wwslidingAuto =null;
// 자동실행 변수 초기값. 자동으로 화면 넘어가는거
// 자바스크립트 함수 선언
function play_w()//-directw//  //다이렉트 좌우 슬라이드 방향을 지정//
{
    if(directw == "right") {
    wnum=wnum+1;
    if(wnum>2){wnum=0;}
}else if(directw == "left") {
    wnum=wnum-1;
    if(wnum<0){wnum=2}
}else {
    wnum=directw;
}
$(".roolingbtn").find('li.seq a').each(function() {
        // 슬라이드 이미지아래의 이동버튼을 초기값으로 동그란 모양으로 만드는 것.
        $(".rollingbtn li.seq a img").attr('src', $(".roolingbtn li.seq a img").attr('src').replace('_on.png','_off.png'));
    });
    $(".rollingbtn li.butt"+wnum+ " a img").attr('src',$(".rollingbtn li.butt"+wnum+ " a img").attr('src').replace('_off.png','_on.png'));
    
    if(wnum==0) {
        $(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
        // 슬라이드 인덱스가 
        $(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist0").animate({'opacity' : 1 },1000);
    }else if (wnum==1){
        // 슬라이드 인덱스가 1번일 때 li태그를 1초간 서서히 사라지게 한다.
        $(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist1").animate({'opacity' : 1 },1000);
    }else if (wnum==2){
        // 슬라이드 인덱스가 2번 일 때, li태그를 1초간 서서히 사라지게 한다.
        $(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
        $(".viewImgList li.imglist2").animate({'opacity' : 1 },1000);
}
// true, false값을 슬라이드 auto변수값으로 사용
if(wwslidingAuto)clearTimeout(wwslidingAuto);
            wwslidingAuto=setTimeout("play_w('right')",3000);
            // 아래에서 셋업된 6초를 초기화
            // 매개변수가 2개, 소괄호안에 setTimeout을 부여하는 것. w라는 함수. 기본값 right 실행할 때 6초를 주겠다.
// 어떤 순간에 참이라면 셋타임준것을 초기화 시키겠다.//
    }
    // 함수를 진입(함수명play_w를 호출해서 실행)됩니다(아래)
    var wwslidingAuto=setTimeout("play_w('right')",3000);
// play_w함수를 실행 중지한다.(6초 후 실행하는 걸 취소한다.)
// 슬라이드는 6000위에 것까지만 해도 작동되지만 버튼 실행은 아래꺼를 써야 실행됨
$(document).ready(function(){
// 기본형식.버튼.(멈춤.진행.멈춤.진행.처리하는거들어감(아래))

	$(".rollstop a").click(function(){
		$(this).parent().hide();// this(본인)의 부모(parent)것을 숨긴다.
		$(".rollplay").css('display','inline-block');//    숨기고, 인라인 블럭, 가로배치 한다.  
		if(wwslidingAuto)clearTimeout(wwslidingAuto);	// 6초후에 시작하는 것을 실행하지 않는다.// 진행형 삼각형을 클릭했을 때, settimout으로 실행시킨 함수를 취소한다.
	});

	$(".rollplay a").click(function(){
		$(this).parent().hide();
		$(".rollstop").css('display','inline-block');
		play_w('right');
    });
// 함수 호출하면  slide 함수 실행.//페이지 진입했을 때는 바로 실행. 6초후에. 준이 눌렀다가 다시 버트 누르면 다시 실행
	$(".rollingbtn li.seq a").each(function(index){
		$(this).click(function(){
			$(".rollplay").hide(); 
			$(".rollstop").css('display','inline-block');
			if(wwslidingAuto)clearTimeout(wwslidingAuto);	
			play_w(index);
		});
	});
// 콜백함수. index 라는 매개 변수가 있음.each 는 매번 넘겨줌-이게 뭔말일까
//클릭했을 때 function.콜백함수.-롤플레이 버튼을 숨긴다. 중계버튼 나오면 플레이버튼이 숨겨진다.는 뜻
//$-j쿼리 쓰겟다는 뜻. css디스플레이 명령.settimeout으로 3초뒤에 실행하는 play_w가 취소되고
//강제로 index 처리한다. index 0.1.2에 따라 작동이 달라짐(위에 쓴거)
});
