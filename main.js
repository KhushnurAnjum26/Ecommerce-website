var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
      delay : 1200,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".new-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  autoplay: {
      delay : 1200,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//------------------Shoe Menu----------------------

const navMenu = document.getElementById('nav_menu'),
 navToggle = document.getElementById('nav_toggle'),
 navClose = document.getElementById('nav_close')




if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

//---------------Show Cart-------------



const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close')


if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
  });
}

const login = document.getElementById('login'),
  loginButton = document.getElementById('login-button'),
  logintClose = document.getElementById('login-close')


if (loginButton) {
  loginButton.addEventListener('click', () => {
    login.classList.add('show-login');
  });
}

if (logintClose) {
  logintClose.addEventListener('click', () => {
    login.classList.remove('show-login');
  });
}



//--------------------ScrollUp--------------------------




function scrollUp() {
  const scrollUp = document.getElementById('scrollup');

  if (window.scrollY >= 3500) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);






//--------------------QUESTIONS ACCORDION--------------------------




const accordionItems = document.querySelectorAll('.questions_item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions_header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions_content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};











// =============Details Section=====================





          // product details




        // Get button elements
        const additionalInfoBtn = document.getElementById('additional-info-btn');
        const reviewsBtn = document.getElementById('reviews-btn');
        
        // Get section elements
        const additionalInfo = document.getElementById('additional-info');
        const reviews = document.getElementById('reviews');
    
        // Function to show additional info and hide reviews
        function showAdditionalInfo() {
            additionalInfoBtn.classList.add('text-green-700', 'border-green-600'); // Add green styling
            additionalInfoBtn.classList.remove('text-gray-600', 'border-b-2'); // Remove gray styling
            reviewsBtn.classList.add('text-gray-600'); // Ensure reviews button has normal style
            reviewsBtn.classList.remove('text-green-600', 'border-green-600'); // Remove green styling
            additionalInfo.classList.remove('hidden'); // Show additional info
            reviews.classList.add('hidden'); // Hide reviews
        }
    
        // Function to show reviews and hide additional info
        function showReviews() {
            reviewsBtn.classList.add('text-green-700', 'border-green-600'); // Add green styling
            reviewsBtn.classList.remove('text-gray-600'); // Remove gray styling
            additionalInfoBtn.classList.add('text-gray-600'); // Ensure additional info button has normal style
            additionalInfoBtn.classList.remove('text-green-600', 'border-green-600'); // Remove green styling
            reviews.classList.remove('hidden'); // Show reviews
            additionalInfo.classList.add('hidden'); // Hide additional info
        }
    
        // Event listeners for buttons
        additionalInfoBtn.addEventListener('click', showAdditionalInfo);
        reviewsBtn.addEventListener('click', showReviews);