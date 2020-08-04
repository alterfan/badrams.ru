const $document = $(document)
const $window = $(window)
const $navbar = $('.header__nav')
const $anchor = $('.header__nav .link')
const $main = $('#main')
const offset = 64
var windowHeight = window.innerHeight,
    scrollPos = $(window).scrollTop(),
    isWhell = true,
    isSectionsLoaded = false,
    canScroll = true
new Vue({
    el: '#app',
    data: {
        active: 'home',
    },
    methods: {
        onDone(item) {
            $(item).addClass('active')
            this.active = item
        },
        onCancel(e) {},
        onStart(e) {
            $('.header__nav .link.active').removeClass('active')
        },
        toggleMobileMenu () {
            if (!$('#nav').hasClass('open')) {
                $('#bars').addClass('open');
                $('#nav').addClass('open');
                canScroll = false;
            } else if ($('#nav').hasClass('open')) {
                $('#bars').removeClass('open');
                $('#nav').removeClass('open');
                canScroll = true;
            }

        },
    },
})
new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 150, // default
    mobile: true, // default
    live: true,
}).init()
$(document).ready(function () {
    $('#bars').load('./assests/bars.svg')
    $('#main').load('main.html')
    $('#info').load('info.html')
    $('#skills').load('skills.html')
    $('#works').load('works.html')
    $('#contact').load('contact.html')
    windowHeight = window.innerHeight
    scrollPos = $window.scrollTop()
    windowHeight = window.innerHeight
    onScrollHeaderBg(scrollPos)
    toggleUpBtn()
})
$window.on('scroll', function () {
    scrollPos = $window.scrollTop()
    onScrollHeaderBg(scrollPos)
    markNavbarLink(scrollPos)
    toggleUpBtn(scrollPos)
})
$window.resize(function () {
    toggleUpBtn()
    windowHeight = window.innerHeight
})
$('[data-action="scroll-top"]').click(function (event) {
    !$(this).hasClass('invisible') ? $(this).addClass('invisible') : ''
    $('html, body').animate({
            scrollTop: 0,
        },
        900,
    )
})

function loadSections() {
    isSectionsLoaded = true
}

function toggleUpBtn(scrollPos) {
    var offsetHeigh = $('#main')[0].offsetHeight - 64
    if (scrollPos > offsetHeigh) {
        $('#scroll-top').removeClass('invisible')
    }
    if (scrollPos < offsetHeigh && !$('#scroll-top').hasClass('invisible'))
        $('#scroll-top').addClass('invisible')
}

function onScrollBlurBg() {}

function onScrollHeaderBg(scrollPos) {
    if (scrollPos > offset) $('.header').addClass('header-bg')
    else $('.header').removeClass('header-bg')
}

function markNavbarLink(scrollPos) {
    var id
    if (!isWhell) return
    const $anchors = $('[data-type="anchor"]')
    if (scrollPos < $anchors.offset().top - offset) {
        id = 'main'
    } else {
        var cur = $anchors.filter(function () {
            return $(this).offset().top - offset < scrollPos
        })
        id = cur[cur.length - 1] ? ('#' + cur[cur.length - 1].id) : ''
    }
    $('.header__nav .link.active').removeClass('active')
    $("[href='" + id + "']").addClass('active')
}
