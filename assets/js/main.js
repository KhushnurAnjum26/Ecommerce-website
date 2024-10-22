/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "4",
//   spaceBetween: 2,
//   autoplay: {
//       delay : 2000,
//       disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints:{
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1400: {
//       slidesPerView: 5,
//       spaceBetween: 24,
//     },
//   }
// });
var swiperCategories = new Swiper(".categories_container", {
  // slidesPerView: "4",
  spaceBetween: 24,
  loop: true,
  // autoplay: {
  //     delay : 2000,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  }
});





/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/












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



















document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('#slider');
  const leftArrow = document.querySelector('#leftArrow');
  const rightArrow = document.querySelector('#rightArrow');

  const scrollAmount = 300; // Adjust this value as needed

  // Scroll left
  leftArrow.addEventListener('click', () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  // Scroll right
  rightArrow.addEventListener('click', () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });
});







//======================Contact Page=========================

const form = document.querySelector('form');
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const city = document.getElementById("city");
const phone = document.getElementById("phone");

function sendEmail() {

  const bodyMessage = 
  `First name : ${name1.value}<br> Last name : ${name2.value}<br>
  Email : ${email.value}<br> City : ${city.value}<br> Phone number : ${phone.value}` ;
  


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "khushnurtashme@gmail.com",
    Password: "995CB49D5445A875E7094D86013B6BDD3D9B",
    To: 'khushnurtashme@gmail.com',
    From: "khushnurtashme@gmail.com",
    Subject: subject.value,
    Body : bodyMessage
   
  }).then(
    message => alert(message)
  );

}

form.removeEventListener("submit", (e) => {

  e.preventDefault();

  sendEmail();

});




