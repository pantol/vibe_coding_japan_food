/* ===================================
   Japan Culinary Guide - Main Script
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Dark Mode Toggle ---
  const darkToggles = document.querySelectorAll('.dark-mode-toggle');
  darkToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
    });
  });

  // --- Loading Screen ---
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingBar = document.querySelector('.loading-bar-inner');
  
  if (loadingScreen) {
    let progress = 0;
    const loadInterval = setInterval(() => {
      progress += Math.random() * 30 + 10;
      if (progress > 100) progress = 100;
      if (loadingBar) loadingBar.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(loadInterval);
        setTimeout(() => {
          loadingScreen.classList.add('loaded');
          document.body.style.overflow = '';
        }, 400);
      }
    }, 200);
  }

  // --- Navigation Scroll Effect ---
  const navHeader = document.querySelector('.nav-header');
  if (navHeader) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        navHeader.classList.add('scrolled');
      } else {
        navHeader.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Hero In-View ---
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => hero.classList.add('in-view'), 100);
  }

  // --- Parallax Effect ---
  const parallaxBgs = document.querySelectorAll('.parallax-bg');
  
  if (parallaxBgs.length > 0) {
    window.addEventListener('scroll', () => {
      parallaxBgs.forEach(bg => {
        const section = bg.parentElement;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
          const translateY = (scrollPercent - 0.5) * 80;
          bg.style.transform = `translateY(${translateY}px)`;
        }
      });
    }, { passive: true });
  }

  // --- Dish Card Expansion ---
  document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', () => {
      const isExpanded = card.classList.contains('expanded');
      // Close all other cards
      document.querySelectorAll('.dish-card.expanded').forEach(c => {
        if (c !== card) c.classList.remove('expanded');
      });
      card.classList.toggle('expanded');
    });
  });

  // --- Restaurant Filters ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const restaurantItems = document.querySelectorAll('.restaurant-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      restaurantItems.forEach(item => {
        if (filter === 'all' || item.dataset.price === filter) {
          item.style.display = '';
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });

  // --- City Page Nav Active State ---
  const cityNav = document.querySelector('.city-nav');
  if (cityNav) {
    const cityNavLinks = cityNav.querySelectorAll('a');
    const cityNavSections = [];
    
    cityNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) cityNavSections.push({ link, section });
      }
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 150;
      
      let activeLink = cityNavSections[0]?.link;
      cityNavSections.forEach(({ link, section }) => {
        if (scrollY >= section.offsetTop) {
          activeLink = link;
        }
      });

      cityNavLinks.forEach(l => l.classList.remove('active'));
      if (activeLink) activeLink.classList.add('active');
    }, { passive: true });
  }

  // --- Back to Top ---
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll Indicator Click ---
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const nextSection = document.querySelector('.section-intro') || document.querySelector('.section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Daily Philosophy Quote ---
  // (Handled by i18n.js — removed duplicate code)

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
