$(function () {
    $('#wrapper').css({ 'height': $(document).height() + 'px' });
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });

    //팝업창 생성 (img)
    $("#bot > div").add(
        "<div class='img-wrapper popupArea'>" +
        "<div class='popBody'>" +
        "<img src='' class='popImage'>" +
        "</div>" +
        "</div>").appendTo("#bot");

    //챗봇창 상단
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>" +
        "<span class='chatTitleText'><strong>TaihoBot</strong></span>" +
        "<span class='chatTitleUser'>taiho님과 대화</span>" +

        "<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
        "<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
        "<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +

        "<div class='chatStatus'>" +
            "<div class='chatStatus1'><strong>TaihoBot</strong><span class='question'></span></div>" +
            "<div class='chatStatus2'>상태 알수 없음</div>" +
            "<div class='chatStatus3'><span class='iconUser1'></span>참가자2명</div>" +
            "<div class='iconUser2'></div>" +
        "</div > ").appendTo(".wc-header");
    $(".wc-console").add(
        "<div class='chatFooter'>" +
            "<div class='chatFooterIcon1'></div>" +
            "<div class='chatFooterIcon2'></div>" +
            "<div class='chatFooterIcon3'></div>" +
            "<div class='chatFooterIcon4'></div>" +
            "<div class='chatFooterIcon5'></div>" +
        "</div > "
    ).appendTo(".wc-chatview-panel");

    //챗봇창 버튼
    $('.btnClose').click(function () {
        $('.wc-chatview-panel').css('bottom', 0).hide();
        $('.bot-wrap').hide().removeClass("chatOn").addClass("chatOff");
    });
    $('.btnMin').click(function () {
        $('.wc-chatview-panel').css({ "overflow": "hidden" });
        $('.wc-chatview-panel').animate({ "height": "32px" }, "fast");
        $('.wc-console, wc-message-pane').hide();
        $('.btnMin').css({ 'display': 'none' });
        $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
        $('.btnLayer > button').removeClass('topIcon02').addClass('topIcon02-1');
    });
    $(document).on('click', '.wc-header [class*=btnLayer]', function () {
        if ($(this).hasClass('btnLayerMid')) {
            $('.wc-chatview-panel').css({ "overflow": "visible" });
            $('.wc-chatview-panel').animate({ "height": "867px" }, "fast");
            $('.wc-console, wc-message-pane').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
            $('.btnMin').css({ 'right': '58px', 'display':'inline-block' });
        } else {
            $('.wc-chatview-panel').animate({ "height": $(document).height() + 'px' }, "fast");
            $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02').addClass('topIcon02-1');
        }
    });

    //챗봇 팝업 동작 (img)
    //img on
    $(document).on('click', '.ac-image > img', function () {
        $('#wrapper').css({ 'opacity': '0.8', 'background-color': '#151515' });
        $('.botStartBtn').css({ 'opacity': '0.3', 'pointer-events': 'none' });
        $('.wc-chatview-panel').css({ 'opacity': '0.3', 'pointer-events': 'none' });
        $('.img-wrapper').css({ "opacity": "1", "display": "block" });
        $('.popBody > img').attr('src', $(this).attr('src'));
    });
    //img off
    $('.popBody').click(function () {
        $('#wrapper').css({ 'opacity': '', 'background-color': '' });
        $('.botStartBtn').css({ 'opacity': '', 'pointer-events': '' });
        $('.wc-chatview-panel').css({ 'opacity': '', 'pointer-events': '' });
        $('.img-wrapper').css({"opacity": "0", "display": "none" });
    });
});