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
  const dailyQuoteText = document.getElementById('daily-quote-text');
  const dailyQuoteJp = document.getElementById('daily-quote-jp');
  const dailyQuoteAuthor = document.getElementById('daily-quote-author');

  if (dailyQuoteText && dailyQuoteJp && dailyQuoteAuthor) {
    const quotes = [
      {
        jp: '一期一会',
        text: 'One lifetime, one meeting. Every encounter is unique and can never be reproduced. Treasure each meal, each moment, each person at the table\u2014for this exact gathering will never happen again.',
        author: 'Ii Naosuke \u2014 Ichi-go ichi-e, the philosophy of treasuring every encounter'
      },
      {
        jp: '食は命なり',
        text: 'Food is life itself. In Japan, cooking is not merely sustenance\u2014it is an act of care, a transfer of life energy from ingredient to body. The cook bears responsibility for another person\u2019s well-being.',
        author: 'Ishizuka Sagen \u2014 Shoku wa inochi nari, the foundation of shokuiku'
      },
      {
        jp: '旬を食す',
        text: 'To eat what is in season is to eat in harmony with nature. A strawberry in winter may fill the stomach, but a strawberry at the peak of spring nourishes the soul.',
        author: 'Japanese culinary principle \u2014 Shun wo shosu, eating with the seasons'
      },
      {
        jp: '出汁は料理の基本',
        text: 'Dashi is the foundation of all cooking. From a piece of kelp and a handful of bonito flakes emerges the fifth taste\u2014umami\u2014the invisible architecture upon which all Japanese cuisine is built.',
        author: 'Japanese culinary tradition \u2014 Dashi wa ryouri no kihon'
      },
      {
        jp: '素材を活かす',
        text: 'Let the ingredient speak. The highest form of Japanese cooking is not transformation but revelation\u2014removing everything that stands between the diner and the true nature of what they are eating.',
        author: 'Japanese culinary philosophy \u2014 Sozai wo ikasu'
      },
      {
        jp: '腹八分目に医者いらず',
        text: 'Eat until you are eighty percent full, and you will never need a doctor. This ancient wisdom from Okinawa is not about deprivation\u2014it is about awareness, about listening to the body before the plate is empty.',
        author: 'Okinawan proverb \u2014 Hara hachi bunme ni isha irazu'
      },
      {
        jp: '目で食べる',
        text: 'We eat first with our eyes. In Japanese cuisine, presentation is not decoration\u2014it is the first course. The arrangement of food on the plate tells a story of season, place, and the cook\u2019s respect for the diner.',
        author: 'Japanese aesthetic principle \u2014 Me de taberu'
      },
      {
        jp: '包丁は料理人の魂',
        text: 'The knife is the soul of the cook. A Japanese chef\u2019s relationship with their blade is intimate and lifelong. The way a fish is cut determines not just its shape but its texture, its interaction with the tongue, its very flavor.',
        author: 'Japanese culinary tradition \u2014 Houchou wa ryourinin no tamashii'
      },
      {
        jp: '初心忘るべからず',
        text: 'Never forget the beginner\u2019s mind. Even the master who has shaped ten thousand pieces of sushi must approach each one as if it were the first\u2014with full attention, humility, and wonder.',
        author: 'Zeami Motokiyo \u2014 Shoshin wasuru bekarazu'
      },
      {
        jp: '侘び寂び',
        text: 'In imperfection, there is beauty. The cracked glaze of a tea bowl, the irregular shape of a handmade plate, the slight asymmetry of a carefully placed garnish\u2014these are not flaws, but signatures of life itself.',
        author: 'Sen no Riky\u016B \u2014 Wabi-sabi, finding beauty in imperfection'
      },
      {
        jp: '職人気質',
        text: 'The craftsman\u2019s spirit. A ramen shop may serve only one style of broth, perfected over decades. A sushi master may spend three years learning to cook rice before touching fish. Mastery is not breadth\u2014it is depth.',
        author: 'Japanese work ethic \u2014 Shokunin katagi'
      },
      {
        jp: '和食は和の心',
        text: 'Japanese food is the spirit of harmony. Washoku is not a set of recipes but a philosophy\u2014balance of five colors, five tastes, five methods. Each meal is a small universe in equilibrium.',
        author: 'UNESCO Intangible Cultural Heritage \u2014 Washoku wa wa no kokoro'
      },
      {
        jp: '地産地消',
        text: 'Produce locally, consume locally. The best food travels the shortest distance. Every region of Japan has built its cuisine around what the local soil, sea, and climate provide\u2014this is not limitation but identity.',
        author: 'Japanese food movement \u2014 Chisan chishou'
      },
      {
        jp: 'もったいない',
        text: 'What a waste\u2014to discard what still has value. In the Japanese kitchen, nothing is wasted: vegetable scraps become stock, fish bones become broth, stale rice becomes crackers. Respect for food is respect for life.',
        author: 'Japanese environmental ethic \u2014 Mottainai'
      },
      {
        jp: 'いただきます',
        text: 'I humbly receive. Before every meal, these words acknowledge the sacrifice of every living thing on the plate, the labor of every hand that brought it to the table, and the profound gift of being alive to taste it.',
        author: 'Japanese mealtime tradition \u2014 Itadakimasu'
      },
      {
        jp: 'ごちそうさまでした',
        text: 'It was a feast. After every meal, these words honor not just the cook but the entire chain of existence that made the meal possible\u2014from sun and rain to farmer and fisherman to the hands that prepared it.',
        author: 'Japanese mealtime tradition \u2014 Gochisousama deshita'
      },
      {
        jp: '器も料理のうち',
        text: 'The vessel is part of the cuisine. In Japan, the plate is not a container\u2014it is a stage. A winter stew arrives in heavy stoneware to warm the hands; a summer sashimi rests on glass to suggest coolness.',
        author: 'Rosanjin Kitaoji \u2014 Utsuwa mo ryouri no uchi'
      },
      {
        jp: '七転び八起き',
        text: 'Fall seven times, stand up eight. The master sushi chef failed thousands of times before his rice became perfect. Every great dish in Japan is built on a mountain of quiet, persistent failures.',
        author: 'Japanese proverb \u2014 Nana korobi ya oki'
      },
      {
        jp: '道',
        text: 'The Way. In Japan, cooking is not a job\u2014it is a path. Like the way of tea, the way of the sword, or the way of flowers, the way of food is a lifelong practice of discipline, humility, and devotion.',
        author: 'Japanese philosophical concept \u2014 D\u014D, the Way'
      },
      {
        jp: '花鳥風月',
        text: 'Flowers, birds, wind, moon\u2014the beauties of nature. Japanese cuisine follows the rhythm of the natural world. Spring brings cherry blossoms and bamboo shoots; autumn brings moon-viewing and matsutake mushrooms.',
        author: 'Japanese aesthetic concept \u2014 Kachou fuugetsu'
      },
      {
        jp: '三方よし',
        text: 'Good for the buyer, good for the seller, good for society. The greatest restaurants in Japan are not built on ambition but on this principle\u2014that a transaction should leave the world slightly better than before.',
        author: 'Omi merchant philosophy \u2014 Sanpou yoshi'
      },
      {
        jp: '茶禅一味',
        text: 'Tea and Zen have the same taste. In the tea room as in the kitchen, every gesture is meditation. Boiling water, cutting vegetables, arranging a plate\u2014when done with full presence, the ordinary becomes sacred.',
        author: 'Zen Buddhist saying \u2014 Chazen ichimi'
      },
      {
        jp: '風土',
        text: 'Climate and land. Japanese cuisine cannot be separated from its geography. The cold currents that bring squid to Hakodate, the volcanic soil that sweetens Kagoshima\u2019s sweet potatoes\u2014the land is the first ingredient.',
        author: 'Watsuji Tetsur\u014D \u2014 F\u016Bdo, the philosophy of climate and culture'
      },
      {
        jp: '五味五色五法',
        text: 'Five tastes, five colors, five methods. Sweet, sour, salty, bitter, umami. White, black, red, green, yellow. Raw, simmered, grilled, steamed, fried. A single meal should contain all fifteen\u2014this is the architecture of balance.',
        author: 'Washoku principle \u2014 Gomi goshoku gohou'
      },
      {
        jp: '残心',
        text: 'The lingering spirit. After the last bite, after the final sip of tea, there is a moment of stillness\u2014a space to absorb what has passed. The best meals do not end when the plate is cleared; they continue in memory.',
        author: 'Martial arts and tea ceremony concept \u2014 Zanshin'
      },
      {
        jp: '知足',
        text: 'To know what is enough. The greatest Japanese meals are often the simplest: a bowl of rice, a piece of grilled fish, a cup of miso, a few pickles. Abundance is not quantity\u2014it is the awareness that nothing is missing.',
        author: 'Zen Buddhist teaching \u2014 Chisoku'
      },
      {
        jp: '守破離',
        text: 'Follow the rules, break the rules, transcend the rules. Every great Japanese chef begins by imitating the master exactly. Only after years of faithful repetition does personal expression emerge\u2014and only then is it earned.',
        author: 'Japanese mastery concept \u2014 Shu-ha-ri'
      },
      {
        jp: '実るほど頭を垂れる稲穂かな',
        text: 'The more the rice grows, the more it bows its head. The greatest chefs in Japan are often the most humble. Mastery brings not arrogance but a deeper understanding of how much remains to learn.',
        author: 'Japanese proverb \u2014 Minoru hodo atama wo tareru inaho kana'
      },
      {
        jp: '縁',
        text: 'Connection, fate, the invisible thread. Every meal you eat in Japan exists because of a chain of relationships\u2014between farmer and soil, fisherman and sea, master and apprentice, cook and guest. You are part of that chain.',
        author: 'Buddhist concept \u2014 En, the interconnection of all things'
      },
      {
        jp: '真善美',
        text: 'Truth, goodness, beauty. The ideal Japanese dish achieves all three: truth in the honest expression of ingredients, goodness in the nourishment it provides, and beauty in its presentation. Remove any one, and the dish is incomplete.',
        author: 'Japanese aesthetic ideal \u2014 Shin-zen-bi'
      },
      {
        jp: '温故知新',
        text: 'Study the old to understand the new. The most innovative chefs in Japan are also the deepest students of tradition. You cannot break rules you do not understand; you cannot transcend a foundation you have not built.',
        author: 'Confucius, adopted into Japanese philosophy \u2014 Onko chishin'
      }
    ];

    // Deterministic "quote of the day" based on the current date
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const quoteIndex = dayOfYear % quotes.length;
    const quote = quotes[quoteIndex];

    dailyQuoteJp.textContent = quote.jp;
    dailyQuoteText.textContent = '\u201C' + quote.text + '\u201D';
    dailyQuoteAuthor.textContent = '\u2014 ' + quote.author;
  }

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
