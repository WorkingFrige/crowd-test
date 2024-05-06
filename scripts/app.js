const gotoLinks = document.querySelectorAll('[data-goto]');

if (gotoLinks.length > 0) {
    gotoLinks.forEach(gotoLink => {
        gotoLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const gotoLink = e.target;
        if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
            console.log(1)
            const gotoBlock = document.querySelector(gotoLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const membersSwiper = new Swiper('.members .swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.members .swiper-button-next',
        prevEl: '.members .swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        580: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        // when window width is >= 480px
        810: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },
});

if (document.querySelector('.members .swiper .current')) {
    document.querySelector('.members .swiper .total').textContent = membersSwiper.slides.length;
    document.querySelector('.members .swiper .current').textContent = document.querySelector('.members__swiper-item.swiper-slide-active').dataset.count;

    membersSwiper.on('slideChange', () => {
        document.querySelector('.members .swiper .current').textContent = document.querySelector('.members__swiper-item.swiper-slide-active').dataset.count;
    });
}


const stagesSwiper = new Swiper('.stages .swiper', {
    direction: 'horizontal',
    loop: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    slidesPerView: 1,
    enabled: true,

    // If we need pagination
    pagination: {
        el: '.stages .swiper-pagination',
    },
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.stages .swiper-button-next',
        prevEl: '.stages .swiper-button-prev',
    },

    breakpoints: {
        1180: {
            enabled: false,
            spaceBetween: 0,
        },
    },
});