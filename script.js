// Home Carousel
$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// Navbar
window.addEventListener('scroll', function () {
    let navbar = document.getElementById("navbar");
    // Toggles Fixed Class In Navbar On Scroll
    navbar.classList.toggle("fixed", this.window.scrollY > 0);
})

let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');

menuBtn.onclick = function () {
    // Toggles Active Class In Nav Items On Click
    document.getElementById("nav-items").classList.toggle('active');

    // Changes Icon On Click
    if (document.getElementById("nav-items").classList.contains('active')) {
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else {
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}

searchBtn.onclick = function () {
    // Toggles Active Class In Search Form On Click
    document.getElementById("search-form").classList.toggle('active');

    // Changes Icon On Click
    if (document.getElementById("search-form").classList.contains('active')) {
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else {
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}

cartBtn.onclick = function () {
    // Toggles Active Class In Cart On Click
    document.getElementById("cart").classList.toggle('active');

    // Changes Icon On Click
    if (document.getElementById("cart").classList.contains('active')) {
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else {
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}

darkBtn.onclick = function () {
    // Toggles Dark Mode Class To Body On Click
    document.body.classList.toggle('dark-mode');

    // If Body Contains Dark Mode Class
    if (document.body.classList.contains('dark-mode')) {
        // Changes Dark Mode Button Icon To Sun 
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        // Chnages Sign Img For Dark Background
        signImg.src = '/Images/sign/sign-dark.png';
    }
    // If Body Does Not Contains Dark Mode Class
    else {
        // Changes Dark Mode Button Icon To Moon 
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");

        // Chnages Sign Img For Light Background
        signImg.src = '/Images/sign/sign-light.png';
    }
}

// Menu-Section
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function (e) {

    // If Clicked Tab Does Not contains Active Class
    if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {

        //Get Data Attribute
        const target = e.target.getAttribute("data-target");
        console.log(target);

        // Remove Active Class From Active Tab
        menuTabs.querySelector('.active').classList.remove('active');

        // Add Active Class From Clicked Tab
        e.target.classList.add("active");

        let menuSection = document.querySelector(".menu-section");

        //Remove Show Class From Active Tab Content
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");
        

        //Add Show Class To Clicked Tab Content
        menuSection.querySelector(target).classList.add("show");
        // const targetElement = menuSection.querySelector(target);
        // if (targetElement) {
        //     targetElement.classList.add("show");
        // } else {
        //     console.error(`Element with ID "${target}" not found in menuSection.`);
        // }
    }

    // If Clicked Tab Contains Active Class
    else {
        return //Returns Nothing
    }
})

// Events Carousel
$('.events-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

// Team Carousel
$('.team-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// Review Carousel
$('.review-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// Blog Carousel
$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 5,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})