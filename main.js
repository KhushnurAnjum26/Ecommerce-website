var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 1200,
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
    delay: 1200,
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















 // Set the date we're counting down to (e.g., 7 days from now)
 const targetDate = new Date().getTime() + (8 * 24 * 60 * 60 * 1000); // 7 days from now

 // Function to update the countdown every second
 function updateCountdown() {
     const now = new Date().getTime();
     const timeDifference = targetDate - now;

     // Calculate time components
     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Update the HTML elements with the new values
     document.getElementById("days").innerText = days.toString().padStart(2, '0');
     document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
     document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
     document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

     // Stop the countdown when the target date is reached
     if (timeDifference < 0) {
         clearInterval(countdownInterval);
         document.getElementById("days").innerText = '00';
         document.getElementById("hours").innerText = '00';
         document.getElementById("minutes").innerText = '00';
         document.getElementById("seconds").innerText = '00';
     }
 }

 // Run updateCountdown every second
 const countdownInterval = setInterval(updateCountdown, 1000);




// Set the date we're counting down to (e.g., 7 days from now)
const targetDate2 = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days from now

// Function to update the countdown every second
function updateCountdown2() {
    const now2 = new Date().getTime();
    const timeDifference2 = targetDate2 - now2;

    // Calculate time components
    const days2 = Math.floor(timeDifference2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((timeDifference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes2 = Math.floor((timeDifference2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds2 = Math.floor((timeDifference2 % (1000 * 60)) / 1000);

    // Update the HTML elements with the new values
    document.getElementById("days2").innerText = days2.toString().padStart(2, '0');
    document.getElementById("hours2").innerText = hours2.toString().padStart(2, '0');
    document.getElementById("minutes2").innerText = minutes2.toString().padStart(2, '0');
    document.getElementById("seconds2").innerText = seconds2.toString().padStart(2, '0');

    // Stop the countdown when the target date is reached
    if (timeDifference2 < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days2").innerText = '00';
        document.getElementById("hours2").innerText = '00';
        document.getElementById("minutes2").innerText = '00';
        document.getElementById("seconds2").innerText = '00';
    }
}

// Run updateCountdown every second
const countdownInterval2 = setInterval(updateCountdown2, 1000);


















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









//====================Contact section==========================




// function validateForm() {
//   let isValid = true;

//   // Get the form element
//   const form = document.forms['myForm'];

//   // First Name Validation
//   const firstName = form['first_name'].value.trim();
//   if (firstName === '') {
//     document.getElementById("name1-error").innerHTML = "First name is required";
//     isValid = false;
//   } else {
//     document.getElementById("name1-error").innerHTML = "";
//   }

//   // Last Name Validation
//   const lastName = form['last_name'].value.trim();
//   if (lastName === '') {
//     document.getElementById("name2-error").innerHTML = "Last name is required";
//     isValid = false;
//   } else {
//     document.getElementById("name2-error").innerHTML = "";
//   }

//   // Email Validation
//   const email = form['email'].value.trim();
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (email === '') {
//     document.getElementById("email-error").innerHTML = "Email is required";
//     isValid = false;
//   } else if (!emailPattern.test(email)) {
//     document.getElementById("email-error").innerHTML = "Invalid email format";
//     isValid = false;
//   } else {
//     document.getElementById("email-error").innerHTML = "";
//   }

//   // Contact Number Validation
//   const contactNumber = form['contact_number'].value.trim();
//   const phonePattern = /^\d{10}$/; // Example for a 10-digit number validation
//   if (contactNumber === '') {
//     document.getElementById("phone-error").innerHTML = "Contact number is required";
//     isValid = false;
//   } else if (!phonePattern.test(contactNumber)) {
//     document.getElementById("phone-error").innerHTML = "Invalid contact number";
//     isValid = false;
//   } else {
//     document.getElementById("phone-error").innerHTML = "";
//   }

//   // Subject Validation
//   const subject = form['subject'].value.trim();
//   if (subject === '') {
//     document.getElementById("suject-error").innerHTML = "Subject is required";
//     isValid = false;
//   } else {
//     document.getElementById("suject-error").innerHTML = "";
//   }

//   // Message Validation
//   const message = form['message'].value.trim();
//   if (message === '') {
//     document.getElementById("message-error").innerHTML = "Message is required";
//     isValid = false;
//   } else {
//     document.getElementById("message-error").innerHTML = "";
//   }

//   // If form is not valid, stop here
//   if (!isValid) {
//     document.getElementById("submit-error").innerHTML = "Please fix the errors above.";
//     return false;
//   } else {
//     document.getElementById("submit-error").innerHTML = "";
//     sendEmail();
//     return false; // Prevent the form from actually submitting
//   }
// }

// function sendEmail() {
//   const form = document.forms['myForm'];
//   const formData = new FormData(form);

//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     body: formData,
//   })
//   .then(response => response.json())
//   .then(result => {
//     if (result.success) {
//       showModal("Success", "Email sent successfully!");
//     } else {
//       showModal("Error", "Error sending email. Please try again.");
//     }
//   })
//   .catch(error => {
//     showModal("Error", "An error occurred. Please try again.");
//   });
// }

// function showModal(title, body) {
//   document.getElementById("modal-title").innerText = title;
//   document.getElementById("modal-body").innerText = body;
//   document.getElementById("modal").classList.remove("hidden");
// }

// function closeModal() {
//   document.getElementById("modal").classList.add("hidden");
// }




function validateForm() {
  let isValid = true;

  const form = document.forms['myForm'];

  // First Name Validation
  const firstName = form['first_name'].value.trim();
  if (firstName === '') {
    document.getElementById("name1-error").innerHTML = "First name is required";
    isValid = false;
  } else {
    document.getElementById("name1-error").innerHTML = "";
  }

  // Last Name Validation
  const lastName = form['last_name'].value.trim();
  if (lastName === '') {
    document.getElementById("name2-error").innerHTML = "Last name is required";
    isValid = false;
  } else {
    document.getElementById("name2-error").innerHTML = "";
  }

  // Email Validation
  const email = form['email'].value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById("email-error").innerHTML = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerHTML = "Invalid email format";
    isValid = false;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  // Contact Number Validation
  const contactNumber = form['contact_number'].value.trim();
  const phonePattern = /^\d{10}$/; // Example for a 10-digit number validation
  if (contactNumber === '') {
    document.getElementById("phone-error").innerHTML = "Contact number is required";
    isValid = false;
  } else if (!phonePattern.test(contactNumber)) {
    document.getElementById("phone-error").innerHTML = "Invalid contact number";
    isValid = false;
  } else {
    document.getElementById("phone-error").innerHTML = "";
  }

  // Subject Validation
  const subject = form['subject'].value.trim();
  if (subject === '') {
    document.getElementById("suject-error").innerHTML = "Subject is required";
    isValid = false;
  } else {
    document.getElementById("suject-error").innerHTML = "";
  }

  // Message Validation
  const message = form['message'].value.trim();
  if (message === '') {
    document.getElementById("message-error").innerHTML = "Message is required";
    isValid = false;
  } else {
    document.getElementById("message-error").innerHTML = "";
  }

  // If form is not valid, stop here
  if (!isValid) {
    document.getElementById("submit-error").innerHTML = "Please fix the errors above.";
    return false;
  } else {
    document.getElementById("submit-error").innerHTML = "";
    sendEmail();
    return false; // Prevent form from submitting normally
  }
}

function sendEmail() {
  const form = document.forms['myForm'];
  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      showModal("Success", "Email sent successfully!!!");
    } else {
      showModal("Error", "Error sending email. Please try again.");
    }
  })
  .catch(error => {
    showModal("Error", "An error occurred. Please try again.");
  });
}

function showModal(title, body) {
  // Set the modal content
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-body").innerText = body;

  // Open the modal
  document.getElementById("my_modal_1").showModal();
}

function closeModal() {
  // Close the modal
  document.getElementById("my_modal_1").close();
}

