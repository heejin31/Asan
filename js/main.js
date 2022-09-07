const elFooter = document.querySelector('footer'); //footer를 변수로 가지고 오는것
const elcon_wrap = document.querySelector('#con_wrap'); //#con_wrap를 변수로 가지고 오는것


//#con_wrap의 높이구하기 -footer의 fixed를 사용하지 않을때
let winH = $(window).height(); //열려져 있는 화면의 높이
console.log(winH);

const headerH = $('header').height(); //header의 높이
console.log(headerH);

const footerH = elFooter.offsetHeight; //footer의 높이를 자바스크립트의 방식으로 구함
console.log(`현재 화면 높이 ${winH} / header 의 높이 ${headerH} / footer의 높이 ${footerH}`);

//#con_wrap의 높이값 구하기 (화면전체의 세로에서 헤더와 푸터의 높이를 빼준값)
let con_wrap_Height = winH - (headerH + footerH);
//$("#con_wrap").css({height: con_wrap_Height});
console.log(con_wrap_Height);


elcon_wrap.style.height = `${con_wrap_Height}px`; //스타일시트에서 하듯이 수치뒤에px을 넣어줘야 먹힌다
console.log(con_wrap_Height);


// 화면크기를 조절했을때 #con_wrap의 세로 길이 다시 지정
//     $(window).resize(function () {
//         let winH = $(window).height();         
//         let con_wrap_Height = winH - (headerH + footerH);
//         $("#con_wrap").css({ height: con_wrap_Height });
//     });


// 화면크기를 조절했을때 #con_wrap의 세로 길이 다시 지정(자바스크립트)
    window.addEventListener('resize',function(){    
        let winH = $(window).height();        
        let con_wrap_Height = winH - (headerH + footerH);
        elcon_wrap.style.height = `${con_wrap_Height}px`;
    });

var du = 400;
var open = 0;   //메뉴가 닫혀있는 상태(처음)


// lnb슬라이드 메뉴
$('.lnb_btn').click(function(){
    if(open == 0){    //닫혀있는 상태입니까?
        $('#wrap').animate({left:274},du);
        $('#lnb').animate({left:0},du);
        $('.cover').fadeIn(du);
        $(this).find('img').attr({'src':'img/bg_header_lnb_active.png','alt':'메뉴닫기'});
        open = '열림';   
    }
    else{       //그렇지않다면
        $('#wrap').animate({left:0},du);
        $('#lnb').animate({left:-274},du);
        $('.cover').fadeOut(du);
        $(this).find('img').attr({'src':'img/bg_header_lnb.png','alt':'메뉴열기'});
        open = 0; 
    }
});    