var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
    

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  const openingButton = document.getElementById('collapsiblebutton2')
  const box = document.getElementsByClassName('content')
  openingButton.addEventListener('click', () => {
box.classList.content('opened');
  if (box.classList.contains('opened')){
    openingButton.style.color = 'red'
  } else {
    openingButton.style.color = 'black'
  } 
})

window.onload = function () {
  let element = document.getElementById("section-four-text-r");
  element.classList.remove("animated"); // Reset animation
  void element.offsetWidth; // Trigger reflow to restart animation
  element.classList.add("animated"); // Reapply animation
};

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("animated");
      }
  });
});

document.querySelectorAll("#text-div-thirdsection").forEach(el => observer.observe(el));



document.addEventListener("DOMContentLoaded", function () {

  let animatedElements = document.querySelectorAll("#text-div-thirdsection");



  function checkVisibility() {

      animatedElements.forEach(el => {

          let rect = el.getBoundingClientRect();

          let isVisible = rect.top < window.innerHeight && rect.bottom >= 0;



          if (isVisible && !el.classList.contains("show")) {

              el.classList.add("show");

              sessionStorage.setItem(el.id, "played"); // Store in session storage

          }

      });

  }



  // Check stored animations and apply immediately

  animatedElements.forEach(el => {

      if (sessionStorage.getItem(el.id)) {

          el.classList.add("show");

      }

  });



  window.addEventListener("scroll", checkVisibility);

  checkVisibility(); // Initial check on load

});

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  
  menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.classList.toggle('active');
      this.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('active');
      overlay.style.display = isExpanded ? 'none' : 'block';
      body.style.overflow = isExpanded ? 'auto' : 'hidden';
  });
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
      this.style.display = 'none';
      body.style.overflow = 'auto';
  });
  
  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.mobile-nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
          overlay.style.display = 'none';
          body.style.overflow = 'auto';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  
  menuToggle.addEventListener('click', function() {
      // Toggle active class on menu toggle
      this.classList.toggle('active');
      
      // Toggle aria-expanded attribute
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle nav menu
      nav.classList.toggle('active');
      
      // Toggle overlay
      overlay.style.display = isExpanded ? 'none' : 'block';
      
      // Toggle body scroll
      body.style.overflow = isExpanded ? 'auto' : 'hidden';
  });
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
      this.style.display = 'none';
      body.style.overflow = 'auto';
  });
  
  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.mobile-nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('active');
          overlay.style.display = 'none';
          body.style.overflow = 'auto';
      });
  });
});