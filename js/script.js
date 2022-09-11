"use script"
// код определяет на каком устройстве открыта страница
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/Windows/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// Бургер Меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};


var swiper = new Swiper(".slide-content, .slide1-content", {
    // slidesPerView: 3,
    spaceBetween: 50,
    // loop: true,
    centerSlides: 'true',
    fade: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
        1055: {
            slidesPerView: 3,
        },
    }
  });
  var swiper = new Swiper(".slide1-content", {
    slidesPerView: 4,
    simulateTouch: false,
    spaceBetween: 23,
    centerSlides: 'true',
    fade: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        simulateTouch: true,
    },

      768: {
        slidesPerView: 1,
        simulateTouch: true,
    },

      1055: {
          slidesPerView: 4,
          spaceBetween: 23,
          simulateTouch: false,
      },
  }

  });
