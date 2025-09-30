document.querySelectorAll('.swiper').forEach(slider => {
        const nav = slider.nextElementSibling;
        
        new Swiper(slider, {
                direction: 'horizontal',
                loop: true,
                pagination: {
                        el: slider.querySelector('.swiper-pagination'),
                        type: 'progressbar'
                        },
                navigation: {
                        nextEl: nav.querySelector('.swiper-button-next'),
                        prevEl: nav.querySelector('.swiper-button-prev'),
                },
        });
});
                                             
