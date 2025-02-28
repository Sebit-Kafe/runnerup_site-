document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully.');

  // Animate the headline with an elastic effect using Anime.js
  anime({
    targets: '.headline',
    scale: [0.8, 1],
    duration: 1500,
    easing: 'easeOutElastic(1, .8)'
  });

  // Animate the subheadline with a slide effect
  anime({
    targets: '.subheadline',
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 600
  });

  // Stagger fade-in for each paragraph in the poetry section (if already visible)
  // These animations will run when the poem is revealed.
  function animatePoem() {
    anime.timeline({ loop: false }).add({
      targets: '.poetry p',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: anime.stagger(300)  // Stagger each paragraph by 300ms
    });
  }

  // Event listener for the reveal button
  var revealButton = document.getElementById('revealButton');
  revealButton.addEventListener('click', function() {
    var poemSection = document.querySelector('.poetry');
    // Remove the hidden class to display the poem
    poemSection.classList.remove('hidden');
    // Animate the entire poem section (optional fade-in)
    anime({
      targets: poemSection,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
    // Run the paragraph stagger animation
    animatePoem();
    // Hide the button after clicking
    revealButton.style.display = 'none';
  });

  // Falling Flowers Effect: create a new flower every second
  function createFlower() {
    const flowerContainer = document.querySelector('.flower-container');
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    // Randomize animation duration and delay for variation
    flower.style.animationDuration = (Math.random() * 3 + 5) + 's';
    flower.style.animationDelay = (Math.random() * 5) + 's';
    flowerContainer.appendChild(flower);
    // Remove the flower after the animation (8 seconds)
    setTimeout(() => flower.remove(), 8000);
  }
  
  setInterval(createFlower, 1000);
});
