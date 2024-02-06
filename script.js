



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // Set default tab on page load
  document.getElementById("mountain1").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");
  




  const dotsContainer = document.querySelector('.carousel-dots');
  const imageContainer = document.querySelector('.image-container');
  const images = document.querySelectorAll('.image-container img');
  
  images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
  
      dot.addEventListener('click', () => {
          imageContainer.style.transform = `translateX(-${index * (220 + 20)}px)`;
          setActiveDot(index);
      });
  });
  
  function setActiveDot(index) {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
          dot.classList.remove('active');
          if (i === index) {
              dot.classList.add('active');
          }
      });
  }
  
  setActiveDot(0); // Set the initial dot as active
  