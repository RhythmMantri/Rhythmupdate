// Create stars for the background
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 150;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3;
    
    // Random animation duration
    const duration = 2 + Math.random() * 5;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);
    
    // Random delay for twinkling
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    starsContainer.appendChild(star);
  }
}

// Create shooting stars
function createShootingStars() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 5;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 50;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    
    // Random animation delay
    star.style.animationDelay = `${Math.random() * 15}s`;
    
    starsContainer.appendChild(star);
  }
}

// Create particles for the cosmic sphere
function createSphereParticles() {
  const particlesContainer = document.querySelector('.sphere-particles');
  const particleCount = 40;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Position particles in a circular pattern
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 60;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    // Random size
    const size = 1 + Math.random() * 3;
    
    // Random animation duration and delay
    const duration = 2 + Math.random() * 4;
    const delay = Math.random() * 2;
    
    particle.style.left = `calc(50% + ${x}px)`;
    particle.style.top = `calc(50% + ${y}px)`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Add fog elements for depth
function createFog() {
  const background = document.querySelector('.background');
  const fog = document.createElement('div');
  fog.classList.add('fog');
  background.appendChild(fog);
  
  // Add multiple fog layers
  for (let i = 0; i < 3; i++) {
    const fogLayer = document.createElement('div');
    fogLayer.classList.add('fog-layer');
    fogLayer.style.bottom = `${i * 10}%`;
    fogLayer.style.opacity = 0.2 + (i * 0.1);
    fogLayer.style.animationDelay = `${i * 2}s`;
    fog.appendChild(fogLayer);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createShootingStars();
  createSphereParticles();
  createFog();
  
  // Add hover effect to hat
  const hat = document.querySelector('.hat');
  const nameReveal = document.querySelector('.name-reveal');
  
  hat.addEventListener('mouseenter', () => {
    nameReveal.style.opacity = '1';
  });
  
  hat.addEventListener('mouseleave', () => {
    nameReveal.style.opacity = '0';
  });
});

// Generate stars
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }

    // Generate shooting stars
    const shootingStarsContainer = document.getElementById('shooting-stars');
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.width = (Math.random() * 100 + 100) + 'px';
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
        shootingStarsContainer.appendChild(shootingStar);

        setTimeout(() => {
            shootingStar.remove();
        }, 4000);
    }

    setInterval(createShootingStar, 1500);

    // Generate particles
    const particlesContainer = document.getElementById('particles');
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = (70 + Math.random() * 20) + '%'; // Position particles near the right side
        particle.style.bottom = (10 + Math.random() * 30) + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 4000);
    }, 500);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
