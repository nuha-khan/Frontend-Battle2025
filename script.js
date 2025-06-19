// Loader fade logic
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('homepage').style.display = 'block';
    }, 1000);
  }, 3000);
});

// Hover interaction for services
const offers = document.querySelectorAll('.offer');
const cards = document.querySelectorAll('.background-cards .card');

offers.forEach(offer => {
  const targetClass = offer.dataset.card;

  offer.addEventListener('mouseenter', () => {
    cards.forEach(card => card.classList.remove('focused'));
    const targetCard = document.querySelector(`.${targetClass}`);
    if (targetCard) targetCard.classList.add('focused');
  });

  offer.addEventListener('mouseleave', () => {
    const targetCard = document.querySelector(`.${targetClass}`);
    if (targetCard) targetCard.classList.remove('focused');
  });
});

// Smooth scrolling for nav
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Pause carousel on hover
// Pause carousel scroll & float on hover
const carouselTrack = document.querySelector('.carousel-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    carouselTrack.classList.add('paused');
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    carouselTrack.classList.remove('paused');
    card.classList.remove('hovered');
  });
});

// TechNova Growth Graph

const ctx = document.getElementById('growthChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'TechNova Growth',
      data: [10, 25, 40, 65, 95],
      borderColor: '#ff69b4',
      backgroundColor: 'rgba(255, 105, 180, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#ff69b4',
      pointRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 16,
            family: 'Poppins'
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#fff', font: { size: 14 } },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: '#fff', font: { size: 14 } },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  }
});
document.querySelectorAll('.ripple-button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = this.querySelector('::after');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.style.setProperty('--x', x + 'px');
    this.style.setProperty('--y', y + 'px');
  });
});

// Parallax scroll effect
window.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.parallax-layer');

  layers.forEach(layer => {
    const speed = parseFloat(layer.dataset.parallaxSpeed || 0.3);
    const offset = window.scrollY * speed;
    layer.style.transform = `translateY(${offset}px)`;
  });
});
