/**
 * Natamy Oliveira — Scroll Experience Engine
 * GSAP ScrollTrigger + Lenis smooth scroll
 *
 * Skills: scroll-experience, scrollytelling
 * Anti-patterns respected: no scroll hijacking, mobile-first, reduced-motion fallback
 */

(function () {
  'use strict';

  // ── Reduced motion check (mandatory per scrollytelling skill) ──
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show all content immediately, skip all animations
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }

  const isMobile = window.innerWidth <= 768;

  // ── Wait for GSAP + Lenis to load ──
  function waitForLibs(cb) {
    const check = setInterval(() => {
      if (window.gsap && window.ScrollTrigger && window.Lenis) {
        clearInterval(check);
        cb();
      }
    }, 50);
    // Timeout after 5s — graceful degradation
    setTimeout(() => clearInterval(check), 5000);
  }

  waitForLibs(function () {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // ══════════════════════════════════════
    // 1. LENIS SMOOTH SCROLL
    // ══════════════════════════════════════
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile, // Disable smooth wheel on mobile (respect native momentum)
      touchMultiplier: 1.5,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ══════════════════════════════════════
    // 2. PARALLAX IMAGE BANDS (0.3x speed)
    // ══════════════════════════════════════
    if (!isMobile) {
      document.querySelectorAll('.section-hero-band').forEach(band => {
        gsap.to(band, {
          backgroundPositionY: '60%',
          ease: 'none',
          scrollTrigger: {
            trigger: band,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }

    // ══════════════════════════════════════
    // 3. HERO KEN BURNS — scrub-linked zoom
    // ══════════════════════════════════════
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && !isMobile) {
      gsap.to(heroBg, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // ══════════════════════════════════════
    // 4. SCROLL-TRIGGERED REVEALS (replace IntersectionObserver)
    // ══════════════════════════════════════
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      // Get delay from class
      let delay = 0;
      const delayMatch = el.className.match(/fade-in-delay-(\d)/);
      if (delayMatch) delay = parseInt(delayMatch[1]) * 0.08;

      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ══════════════════════════════════════
    // 5. SECTION NUMBER PARALLAX (decorative)
    // ══════════════════════════════════════
    document.querySelectorAll('.section-num').forEach(num => {
      gsap.to(num, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: num.closest('.section-hero-band') || num,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // ══════════════════════════════════════
    // 6. BAND TITLE REVEAL (slide up from below)
    // ══════════════════════════════════════
    document.querySelectorAll('.band-title').forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title.closest('.section-hero-band'),
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ══════════════════════════════════════
    // 7. GLASS CARD STAGGER (cards animate in sequence)
    // ══════════════════════════════════════
    document.querySelectorAll('.features-grid, .platform-grid, .process-grid, .services-grid, .invest-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.glass-card, .glass-card-glow, .feature-card, .process-card, .platform-card, .invest-card, .service-card');
      if (cards.length === 0) return;

      gsap.fromTo(cards,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ══════════════════════════════════════
    // 8. PROGRESS BAR (accent line tracking scroll)
    // ══════════════════════════════════════
    const progressEl = document.getElementById('scrollProgress');
    if (progressEl) {
      gsap.to(progressEl, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

    // ══════════════════════════════════════
    // 9. HERO CONTENT FADE OUT on scroll
    // ══════════════════════════════════════
    const heroContent = document.querySelector('.hero-inner, .hero-content');
    if (heroContent && !isMobile) {
      gsap.to(heroContent, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }

    // ══════════════════════════════════════
    // 10. STATS COUNTER ANIMATION (on scroll into view)
    // ══════════════════════════════════════
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      if (isNaN(target)) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val);
            },
          });
        },
      });
    });

    // ══════════════════════════════════════
    // 11. CTA BLOCK GLOW PULSE on approach
    // ══════════════════════════════════════
    const ctaBlock = document.querySelector('.cta-block');
    if (ctaBlock) {
      gsap.fromTo(ctaBlock,
        { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
        {
          boxShadow: '0 0 80px 20px rgba(16, 185, 129, 0.08)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaBlock,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });
})();
