document.querySelectorAll('.swiper').forEach(slider => {
        new Swiper(slider, {
                direction: 'horizontal',
                loop: true,
                pagination: {
                        el: slider.querySelector('.swiper-pagination'),
                        type: 'progressbar'
                },
                navigation: {
                        nextEl: slider.querySelector('.swiper-button-next'),
                        prevEl: slider.querySelector('.swiper-button-prev'),
                },
        });
});
                                             
