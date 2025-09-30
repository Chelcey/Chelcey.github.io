const swiper = new Swiper('.project1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        //Progress bar pagination
        pagination: {
            el: '.project1.swiper-pagination',
            type: 'progressbar',
           },

        //Navigation arrows
        navigation: {
            nextEl: '.project1.swiper-button-next',
            prevEl: '.project1.swiper-button-prev',
            },
         });
