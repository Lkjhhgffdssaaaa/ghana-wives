window.addEventListener('scroll', function() {
    var element = document.querySelector('.fade-in-out');
    var position = element.getBoundingClientRect().top;
  
    // Adjust the value (200 in this example) to determine when the fade-in/fade-out should occur
    var windowHeight = window.innerHeight;
    if (position < windowHeight - 200) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    } else {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    }
  });
  