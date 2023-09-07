$(function () {
    
    var windowWidth = $(window).width();
    
    if (windowWidth >= 1500) {
        
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


        /* scroll 했을 때 상단 gnb 색상 해당 div에 따라 변경 */
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var totalPos = $(".menu>ul>li").length;

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


        /* port05 유튜브 버튼 동작 및 영상 생성 */

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

        });




        /* port06 fixed */
        $(window).on('scroll', function () {

            var scroll = $(window).scrollTop();

            if (scroll >= 5830 && scroll < 8900 && $('.port03_box_btm').height() == 645) {
                $('.port06').addClass('on');
            } else if (scroll >= 15000 && scroll < 18100 && $('.port03_box_btm').height() == 9850) {
                $('.port06').addClass('on');
            } else {
                $('.port06').removeClass('on');
            }

        });

        /* port06 parallax */

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var height = $('.port03_box_btm').height();
            var elements = {
                5900: { img: 'images/port06_bg_L_kakao.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                6350: { img: 'images/port06_bg_L_kakao2.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                6850: { img: 'images/port06_bg_L_kakao3.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                7350: { img: 'images/port06_bg_L_naver.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                7800: { img: 'images/port06_bg_L_naver2.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                8250: { img: 'images/port06_bg_L_naver3.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                8800: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                8900: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                15100: { img: 'images/port06_bg_L_kakao.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                15550: { img: 'images/port06_bg_L_kakao2.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                16050: { img: 'images/port06_bg_L_kakao3.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                16550: { img: 'images/port06_bg_L_naver.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                17000: { img: 'images/port06_bg_L_naver2.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                17450: { img: 'images/port06_bg_L_naver3.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                18000: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                18100: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' }
            };

            var keys = Object.keys(elements);
            for (var i = 0; i < keys.length; i++) {
                var key = parseInt(keys[i]);
                if (scroll >= key && scroll < key + 450 && (height == 645 || height == 9850)) {
                    updateElements(elements[key]);
                    break;
                }
            }

            if (scroll < 5900 && height == 645) {
                updateElements(elements[8900]);
            } else if (scroll >= 8900 && height == 645) {
                updateElements(elements[8900]);
            } else if (scroll < 15100 && height == 9850) {
                updateElements(elements[18100]);
            } else if (scroll >= 18100 && height == 9850) {
                updateElements(elements[18100]);
            }
        });

        function updateElements({ img, bgColor, p1Height, p2Height, h2_2Color, h2_1Color }) {
            $('.port06_boxL img').attr('src', img);
            $('.port06').css({ backgroundColor: bgColor });
            $('.06_p_1').css({ height: p1Height });
            $('.06_p_2').css({ height: p2Height });
            $('.06_h2_2').css({ color: h2_2Color });
            $('.06_h2_1').css({ color: h2_1Color });
        }
     
    
    
    
    
    
    } else if (windowWidth >= 1200 && windowWidth < 1600 ) {
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


        /* scroll 했을 때 상단 gnb 색상 해당 div에 따라 변경 */
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var totalPos = $(".menu>ul>li").length;

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


        /* port05 유튜브 버튼 동작 및 영상 생성 */

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

        });




        /* port06 fixed */
        $(window).on('scroll', function () {

            var scroll = $(window).scrollTop();

            if (scroll >= 5830 && scroll < 8900 && $('.port03_box_btm').height() == 645) {
                $('.port06').addClass('on');
            } else if (scroll >= 15000 && scroll < 18100 && $('.port03_box_btm').height() == 9850) {
                $('.port06').addClass('on');
            } else {
                $('.port06').removeClass('on');
            }

        });

        /* port06 parallax */

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var height = $('.port03_box_btm').height();
            var elements = {
                5900: { img: 'images/port06_bg_L_kakao.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                6350: { img: 'images/port06_bg_L_kakao2.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                6850: { img: 'images/port06_bg_L_kakao3.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                7350: { img: 'images/port06_bg_L_naver.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                7800: { img: 'images/port06_bg_L_naver2.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                8250: { img: 'images/port06_bg_L_naver3.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                8800: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                8900: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                15100: { img: 'images/port06_bg_L_kakao.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                15550: { img: 'images/port06_bg_L_kakao2.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                16050: { img: 'images/port06_bg_L_kakao3.png', bgColor: '#fae100', p1Height: 270, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#000000' },
                16550: { img: 'images/port06_bg_L_naver.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                17000: { img: 'images/port06_bg_L_naver2.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                17450: { img: 'images/port06_bg_L_naver3.png', bgColor: '#5dce5d', p1Height: 0, p2Height: 210, h2_2Color: '#000000', h2_1Color: '' },
                18000: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' },
                18100: { img: 'images/port06_bg_L.png', bgColor: '#ffffff', p1Height: 0, p2Height: 0, h2_2Color: '#eeeeee', h2_1Color: '#eeeeee' }
            };

            var keys = Object.keys(elements);
            for (var i = 0; i < keys.length; i++) {
                var key = parseInt(keys[i]);
                if (scroll >= key && scroll < key + 450 && (height == 645 || height == 9850)) {
                    updateElements(elements[key]);
                    break;
                }
            }

            if (scroll < 5900 && height == 645) {
                updateElements(elements[8900]);
            } else if (scroll >= 8900 && height == 645) {
                updateElements(elements[8900]);
            } else if (scroll < 15100 && height == 9850) {
                updateElements(elements[18100]);
            } else if (scroll >= 18100 && height == 9850) {
                updateElements(elements[18100]);
            }
        });

        function updateElements({ img, bgColor, p1Height, p2Height, h2_2Color, h2_1Color }) {
            $('.port06_boxL img').attr('src', img);
            $('.port06').css({ backgroundColor: bgColor });
            $('.06_p_1').css({ height: p1Height });
            $('.06_p_2').css({ height: p2Height });
            $('.06_h2_2').css({ color: h2_2Color });
            $('.06_h2_1').css({ color: h2_1Color });
        }
    }

  
  


});
