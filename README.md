### 학습목표(아래)

- 반응형 웹사이트 만들기
- 파이어폭스 개발자도구의 스타일 탭사용
- 기존 PC용 > 태블릿용 > 모바일용 CSS작업순서를 [모바일용 > 태블릿용 > PC용] 으로 변경작업

#### 20201028(수)
-meta 데이터: 데이터의 데이터, 콘텐츠를 설명하는 데이터, 실제 콘텐츠에는 영향을 안미침.
메타태그중 viewport 는 필수-반응형 사이트에서 없으면 작동이 안됨.
-깃허브 README.md(MarkDown 언어를 씀) 
#4개가 H4로 바뀌는게 Markdown 언어임

-CSS 스타일 적용하는 3가지 방법: 
1.인라인 스타일: 태그 안쪽에  속성사용- ex) style="padding 10px;"
2.파일안에 <style>태그 사용: <style> </style>
3.외부 css 파일 지정하기: ex) <link href="css파일 위치>

z-index: 주), 0부터 시작, 
화면에는 레이어라는 개념이 있음(포토피아)

#### 20201029(목)
-햄버거메뉴: .openMOgnb->gnb(glova navigation 전체 메뉴)
Ps.Page Navigation(페이징 링크 처리)
-웹접근성: 시각 장애인들을 위한 코딩 추가.

-사각형 영역 크기: box-sizing: border-box;

-네이밍 규칙: 카멜 표기(낙타등)

-ul(unorder list)태그> li태그
-nav 태그: html5에 추가된 태그.
-<div id="nav"></div> -> <nav></nav>

-자바스크립트 콜백함수: (아래)
-이름이 없는 함수
-기본함수는 이름을 호출해야만 실행이 되지만, 콜백함수는 호출없이 실행

-함수의 기본 작동원리
function aname(vars) {
    alert(vars+ "이름 출력");
}
aname('김일국');//함수호출
<!-- 함수 매개 변수?가 다 있는거 -->
-j쿼리: 네이티브 자바스크립트 단축키워드로 사용.
j쿼리 코어를 가져와서 사용.
JQuery 연습(아래)
<!-- 1. jQuery 개요
  -개요 : 자바 스크립트 라이브러리 중 대표적임.

 - DOM엘리먼트 하나하나 접근하여 작업을 수행

    -페이지에 강력한 CSS를 추가

    -엘리먼트 속성 변경, 엘리먼트를 추가

  -특징 : DOM 엘리먼트셀렉터(DOM: HTML, XML을 제어)
 html태그선택 : $("a"),$("div")
 CSS클래스선택 : $(".클래스명"), $("태그, 클래스명")
 CSS ID선택 : $("#id") document.getElementById("id")와 같다
 중첩구조 : $("#id").find("li") => $("#id li")
 jquery 사용법 시작부분
<script type="text/javascript" src="jquery.js"></script>
<head> 태그 안쪽에 사용 </head>

 -Ajax 지원 (현재 진행중인 스프링프로젝트 댓글 기능에 사용할 예정)
 -사용법(아래)
 *$(document).ready(callback)
   단축형: jQuery(callback)/$(callback) 
  $(document).ready(function(){
   //사용자 소스 영역
  });
  $(function() {
  //사용자 소스 영역
  });
  jQuery(document).ready(function() {
  //사용자 소스 영역
  });
  jQuery(function() {
  //사용자 소스 영역
  });  -->

-bbs(pc통신부터 게시판 약자 bbs) boad system.
-img는 가로크기를 지정하면, 세로크기는 자동으로 조정.


- 반응형사이트 화면설계서_학생용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/17jXgf7R2BawMt3K9eoxfnnO_8X9yClLZ/view?usp=sharing
- 반응형사이트 기획서_학생용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1dC2RMqDqNeEFtr-r-dvcsKk0YwPjk0Xy/view?usp=sharing

#### 20201030 (금)
-background-size: cover;속성은 이미지가 영역보다 작을 때 작동
-inherit: 상속
-@media all-> screen, print. 같은  모든게 들어간다.
-대괄호[배열], 중괄호{구현내용}, 소괄호(매개변수)
-@미디어쿼리
-@=애노테이션=지시어
-웹프로그램: 기본은 게시판(아래)
-CRUD: Create(Insert-자료입력)
      Read(Select-자료조회)
      Update(자료수정)
      Delete(자료삭제)

#### 20201102(월)
-fadeIn(서서히 나타남)/ fadeOut(서서히 사라짐)
-자바스크립트는 뒤에서 앞으로 해석한다
-자바스크립트: 조건문안에!Ok = Not Ok=false=! True
-조건: &&==and == x, ||==or==+
-컴퓨터 0, 1
1&&0==1x0=0= and 2개 만족시 true
-1||0==1+0=1=or 1개 만족해도 true
-Rest API: Repreesentation 화면처리
-원시 데이터(Raw 데이터-공공데이터)
-앱인터페이서(APInput Output)에서 받아서, 재가공
-토큰: 네트워크로 전송되는 조각 데이터
-토큰: 인증데이터
-코드생략(애버로우 함수):->자바=>자바스크립트
-람다식(코드생략:애로우함수):자바7(x), 자바8(o), 안드로이드 스튜디오
-자바스크립트 버전(아래)
-es5(엑마스크립트2015), es7(엑마스크립트2017-람다함수 추가)
-슬라이드 버튼 3초 후에 플레이시 초기 진행버튼 숨기기 처리 필요
-자바스크립트(제이쿼리) 디버그 방법(아래)
1.개발자도구>콘솔>화면실행
2.alert99('디버그값 출력')
3.console.log('디버그값 출력')

#### 20201102(화)
-css 값에 대한 수정 : padding: 40px 0 30px;이 있을 때->40px은 위, 0이 좌우, 30px 아래 
-vertical: 수직정렬-top, middle, bottom
-horizontal: 수평정렬-left, right, center
-table th(table header 가로줄), td(table data)
-유효성검사: 예전에는 자바스크립트 처리
-유효성검사: 현재는 html5 속성으로 처리

-<form>태그 속성 2가지 중요한 것
-action: 데이터 전송 위치
method : 데이터 전송 방법(아래)
-get(비보안-데이터노출)/post(보안-데이터 숨김)
-get(기본): 검색방식
-post(지정): 등록폼에서 사용.

-게시판 리스트: 모바일용
-모바일용->테블릿용->pc용

-부트스트랩 
-***부트스트랩 4.x 버전***
-J 쿼리 기반 자바스크립트 프레임웍
-프레임워크: 라이브러리를 구조화시킨
-그리드시스템 :  화면 레이아웃 구조
-화면을 가로 12개로 분할해서 구성
-AdminLTE 프레임웍(부트스트랩기반)

#### 20201022(목)

- 소스내용 교육용으로 정리
- 깃 사용시 토큰인증헤제: [윈도우 자격증명관리]에 personal access token 을 삭제 후 커밋
아디 비번 입력없이 자동 로그인되는거.
- 강사블로그 http://blog.daum.net/web_design 에서 익스텐션으로 검색 vscode 사용법 참조.
- 비주얼스튜디오코드 익스텐션 파일 구글드라이브 다운로드(아래):
- https://drive.google.com/file/d/1NkZ0qfr2P0tDsRKyP9qHQ3tPkafeKiPv/view?usp=sharing

#### 20201019(월)

- 반응형사이트 화면설계서_교사용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1GqBK_sKPFpfhTDd4whbLK3ZLXP1g3_Kw/view?usp=sharing
- 반응형사이트 기획서_교사용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1Wjuov4TCQjqBtCu5EbUc3SNns8PaxHSX/view?usp=sharing
