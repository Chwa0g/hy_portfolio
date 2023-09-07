$(function () {

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        $('#scroll').text(sct);
    });

    /* port00 스크롤 위치 시 배경 및 텍스트 나오기 */

    $(window).scroll(function () {
        var sct = $(this).scrollTop();

        if (sct > 390) {
            $('.port00_bgBox').animate({
                    width: '100%'
                }, 500)
                .next('.port00_txtBox')
                .delay(400)
                .animate({
                    opacity: 1
                }, 300)
                .find('h2')
                .delay(500)
                .animate({
                    opacity: 1,
                    paddingLeft: '50px'
                }, 300)
                .next('p')
                .delay(600)
                .animate({
                    opacity: 1,
                    paddingLeft: '50px'
                }, 300);
        }
    });

    /* navigation click -> div.offset().top */
    $(function () {
        var divSize = $(".menu>ul>li").length;

        $(".menu>ul>li").click(function () {
            var cnt = $(this).index();
            var targetY = $(".pos" + cnt).offset().top - 80;

            $("html,body").stop().animate({
                scrollTop: targetY
            }, 700);

            $(".menu>ul>li>a").removeClass("on");
            $(this).children('a').addClass("on");
            return false;
        });
    });

    /*
        $(window).scroll(function(){
            var posT = [];
            var scroll = $(window).scrollTop();
            var totalPos = 9;
            
            for (var i = 0; i < totalPos; i++) {
                posT[i] = $(".pos" + i).offset().top - 280;
            };

            if (scroll > posT[0] && scroll < posT[1] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(0).addClass('on');
            } else if (scroll >= posT[1] && scroll < posT[2] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(1).addClass('on');
            } else if (scroll >= posT[2] && scroll < posT[3] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(2).addClass('on');
            } else if (scroll >= posT[3] && scroll < posT[4] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(3).addClass('on');
            } else if (scroll >= posT[4] && scroll < posT[5] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(4).addClass('on');
            } else if (scroll >= posT[5] && scroll < posT[6] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(5).addClass('on');
            } else if (scroll >= posT[6] && scroll < posT[7] - 1) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(6).addClass('on');
            } else if (scroll >= posT[7] && scroll < posT[8] - 1 ) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(7).addClass('on');
            } else if (scroll >= posT[8] ) {
                $('.menu li a').removeClass();
                $('.menu li a').eq(8).addClass('on');
            }

        });
    */

    /* scroll 했을 때 상단 gnb 색상 해당 div에 따라 변경 */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var totalPos = 9;

        var posT = Array.from({
            length: totalPos
        }, function (_, i) {
            return $(".pos" + i).offset().top - 280;
        });

        $('.menu li a').removeClass('on');

        for (var i = 0; i < totalPos; i++) {
            if (scroll >= posT[i] && (i === totalPos - 1 || scroll < posT[i + 1] - 1)) {
                $('.menu li a').eq(i).addClass('on');
                break;
            }
        }
    });


    /* port02,port03 ul 밑 li 이미지 생성 */
    $(function () {
        function appendImages(selector, prefix, totalImg) {
            for (var cnt = 0; cnt < totalImg; cnt++) {
                var imgURL = "images/" + prefix + cnt + ".png";
                var img = $("<img>").attr("src", imgURL);
                var liImg = $("<li>").append(img);

                $(selector).append(liImg);
            }
        }
        $(function () {
            appendImages(".port02R_ul", "runko", 13);
        });

        $(function () {
            appendImages(".port02R_ul2", "mara", 13);
        });

        $(function () {
            appendImages(".port03_box_posterUl", "poster", 5);
        });

        $(function () {
            appendImages(".port03_box_snsUl", "sns", 12);
        });

        $(function () {
            appendImages(".port03_box_leafletUl", "leaflet", 7);
        });

        $(function () {
            appendImages(".port03_box_bannerUl", "banner", 7);
        });

        $(function () {
            appendImages(".port03_box_etcUl", "etc", 4);
        });
    });

    /* port03 더보기 닫기 기능과 더보기 클릭 시 하단에 닫기 버튼 생성 */

    $(function () {
        var more = $('.port03_btm_more');
        var port03Btm = $('.port03_box_btm');
        var a = 1;

        more.click(function () {

            if (a > 0) {
                port03Btm.animate({
                    height: '9850px'
                }, 1000);
                more.text('close');
                more.addClass('on');
                more.addClass('fix');
                a = a - 1;
            } else {
                port03Btm.animate({
                    height: '645px'
                }, 1000);
                more.text('more');
                more.removeClass('on');
                more.removeClass('fix');
                $("html,body").stop().animate({
                    scrollTop: 3300
                }, 1000);
                a = a + 1;
            }
            return false;
        });

        $(window).scroll(function () {
            var sct = $(this).scrollTop();
            if (sct > 12350) {
                more.removeClass('fix');
            } else if (sct >= 3301 && sct < 12350 && port03Btm.height() == 9850) {
                more.addClass('fix');
            } else if (sct < 3301 && port03Btm.height() == 9850) {
                more.removeClass('fix');
            }
        });
    });



    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll >= 5730 && scroll < 8800 && $('.port03_box_btm').height() == 645) {
            $('.port_relax').addClass('on');
        } else if (scroll >= 14900 && scroll < 18000 && $('.port03_box_btm').height() == 9850) {
            $('.port_relax').addClass('on');
        } else {
            $('.port_relax').removeClass('on');
        }

    });
    
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        
        if (scroll >= 5730 && scroll < 6750 && $('.port03_box_btm').height() == 645) {
            $('.port_relax').css({backgroundColor : '#fae100'});
            $('.relax_h2_2').css({color : '#eeeeee'});
            $('.relax_h2_3').css({color : '#eeeeee'});
            $('.relax_h2_1').css({color : '#000000'});
        } else if (scroll >= 6750 && scroll < 7750 && $('.port03_box_btm').height() == 645) {
            $('.port_relax').css({backgroundColor : '#3cae43'});
            $('.relax_h2_3').css({color : '#eeeeee'});
            $('.relax_h2_2').css({color : '#000000'});
        } else if (scroll >= 7750 && scroll < 8800 && $('.port03_box_btm').height() == 645) {
            $('.port_relax').css({backgroundColor : '#ffffff'});
            $('.relax_h2_3').css({color : '#000000'});
        }
    });

    $(function () {
        var moving = $('.port05_box_youtube');

        function stopYouTubeVideo(iframe) {
            var iframeSrc = iframe.attr('src');
            iframe.attr('src', iframeSrc);
        }
        
        function left() {
            moving.find('ul li:first').insertBefore(moving.find('ul li:last'));
            moving.find('ul').css({ left: 0 }).stop().animate({ left: -250 }, 500);
            moving.find('ul li:not(:eq(3)) iframe').each(function () {
              stopYouTubeVideo($(this));
            });
            moving.find('ul li').removeClass('activeSize');
            moving.find('ul li').removeClass('activeFrame');
            moving.find('ul li').eq(3).addClass('activeSize');
            moving.find('ul li').eq(3).delay(500).queue(function (next) {
                $(this).addClass('activeFrame');
                next();
            });
        }

        function right() {
            moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
            moving.find('ul').css({ left: -500 }).stop().animate({ left: -250 }, 500);
            moving.find('ul li:not(:eq(3)) iframe').each(function () {
              stopYouTubeVideo($(this));
            });
            moving.find('ul li').removeClass('activeSize');
            moving.find('ul li').removeClass('activeFrame');
            moving.find('ul li').eq(3).addClass('activeSize');
            moving.find('ul li').eq(3).delay(500).queue(function (next) {
                $(this).addClass('activeFrame');
                next();
            });
          }


        $('.youtube_btnLeft').click(function () {
            right();
        });
        $('.youtube_btnRight').click(function () {
            left();
        });
        
        /*$('.port05_box_youtube>ul li').click(function () {
            var clickedIndex = $(this).index();
            var currentIndex = moving.find('ul li.activeSize').index();
            var distance = currentIndex - clickedIndex;

            if (distance === 0) {
                return; // 클릭한 요소가 이미 eq(3) 위치에 있는 경우 아무 작업도 수행하지 않음
            }

            moving.find('ul li').removeClass('activeSize');
            moving.find('ul li').removeClass('activeFrame');

            if (distance < 0) {
                // 클릭한 요소가 eq(3) 보다 오른쪽에 있을 때
                moving.find('ul li').eq(clickedIndex).insertAfter(moving.find('ul li').eq(3));
            } else {
                // 클릭한 요소가 eq(3) 보다 왼쪽에 있을 때
                moving.find('ul li').eq(clickedIndex).insertBefore(moving.find('ul li').eq(3));
            }

            moving.find('ul').css({ left: -distance * 250 }).stop().animate({ left: -250 }, 500);

            moving.find('ul li').eq(3).addClass('activeSize');
            moving.find('ul li').eq(3).delay(500).queue(function (next) {
                $(this).addClass('activeFrame');
                next();
            });

            autoSlide();
        });*/

    });




});
