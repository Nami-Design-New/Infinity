$(document).ready(function () {
  // fav icon
  function setFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const faviconName = isDarkMode ? "img/favWhite.svg" : "img/fav.svg";
    favicon.href = faviconName;
  }
  setFavicon();
  // active link in scroll
  const navLinks = document.querySelectorAll(".navLink");
  const sections = document.querySelectorAll(".section");
  function findCurrentSection() {
    let currentSection = null;
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        currentSection = sec;
      }
    });
    return currentSection;
  }
  function updateActiveLink() {
    const currentSection = findCurrentSection();
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentSection && link.hash === `#${currentSection.id}`) {
        link.classList.add("active");
      }
    });
  }
  function throttle(callback, delay) {
    let previousCall = new Date().getTime();
    return function () {
      const time = new Date().getTime();
      if (time - previousCall >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }
  window.addEventListener("scroll", throttle(updateActiveLink, -200));
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $(".pageHeader").addClass("headerAnimate");
    } else {
      $(".pageHeader").removeClass("headerAnimate");
    }
  });
  //products Slider
  var blogSlider = new Swiper(".blogSlider", {
    pagination: {
      el: ".blogPagination",
      clickable: true,
    },
    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  //serviceSlider
  var serviceSlider = new Swiper(".serviceSlider", {
    spaceBetween: 10,
    loop: true,
    // effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".serviceSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".serviceSliderNext",
      prevEl: ".serviceSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      467: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  $(".serviceSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1200).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 1000,
    // easing: "linear",
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
