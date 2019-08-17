
$('#login').click(function(){
        $('.switch span').removeClass('active');
        $(this).addClass('active');

        $(this).parents('.content').removeClass('signup');
        $(this).parents('.content').addClass('login');

        $('form button').text('LOGIN')

    })

    $('#signup').click(function(){
        $('.switch span').removeClass('active');
        $(this).addClass('active');

        $(this).parents('.content').removeClass('login');
        $(this).parents('.content').addClass('signup');

        $('form button').text('SIGNUP');
    })

    $('.input input').on('focus',function(){
        $(this).parent().addClass('focus');
    })

    $('.input input').on('blur',function(){
        if($(this).val() === '')
            $(this).parent().removeClass('focus');
    })







    var particles = function() {
    var bubbles = function() {
        var density = 100;
        var uppersize = 10;
        var lowersize = 3;
    };
};

function initparticles() {
    bubbles();
    lines();
    confetti();
    fire();
    sunbeams();
}

function bubbles() {
    $.each($(".particletext.bubbles"), function() {
        var bubblecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
            var size = $.rnd(6, 12);
            $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function lines() {
    $.each($(".particletext.lines"), function() {
        var linecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-30, 50) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function confetti() {
    $.each($(".particletext.confetti"), function() {
        var confetticount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= confetticount; i++) {
            $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function fire() {
    $.each($(".particletext.fire"), function() {
        var firecount = ($(this).find(".text").width() / 50) * 20;
        for (var i = 0; i <= firecount; i++) {
            var size = $.rnd(8, 12);
            $(this).append('<span class="particle" style="top:' + $.rnd(40, 70) + '%; left:' + $.rnd(-10, 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 20) / 10) + 's;"></span>');
        }
    });
}

function sunbeams() {
    $.each($(".particletext.sunbeams"), function() {
        var linecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-50, 00) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

jQuery.rnd = function(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

initparticles();



