function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}
$('.burger').on('click', function(e){
    if ($('.header').hasClass('active')){
        $('.header').removeClass('active')
        $('body').removeClass('hidden')
    }else{
        $('.header').addClass('active')
        $('body').addClass('hidden')
    }
})
$(window).on('load', function(e){
    let width = $(window).width()
    if (width>= 750){
        let scrollAfter = 0

    $(window).on("scroll", function() {
    let scrollBefore = $(window).scrollTop()
    if (scrollBefore > scrollAfter && $(window).scrollTop() >= 100){
        $('.header').addClass('bef');
        scrollAfter = scrollBefore
    }else{
        $('.header').removeClass('bef');
        scrollAfter = scrollBefore
    }
    });
    }
    
})
$(window).on('load resize', function(e){
    let width = $(window).width()
    if (width <= 750){
        $('.footer').removeClass('abs')
    }else{
        $('.footer').addClass('abs')
    }
})
let col = 0
$('.contact__body-form-main-btn').on('click', function(e){
    $('.input').each(function(e){
        if ($(this).val().length == 0){
            $(this).addClass('error')
        }else{
            col++
            $(this).removeClass('error')
        }
    })
    if (col ==3){
        $(this).attr('type', 'submit')
        window.location.href = 'good.html'
    }
})
$(window).on('scroll', function(e){
    if ($(window).scrollTop() >= 200){
        $('.telegram').addClass('active')
    }else{
        $('.telegram').removeClass('active')
    }
})
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 600,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})