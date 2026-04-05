/**
 * Natamy Oliveira — Scrollytelling Engine
 *
 * Skills: scrollytelling, scroll-experience
 * Stack: Lenis (smooth scroll) + GSAP ScrollTrigger (complex) + CSS scroll-timeline (native)
 *
 * Narrative Structure (Story Beats):
 *   1. Hook    → Hero: full viewport, striking visual, Ken Burns
 *   2. Context → First content section: problem/story
 *   3. Journey → Middle sections: parallax bands + cards
 *   4. Climax  → Features/differentiators: staggered reveals
 *   5. Resolution → CTA: glow pulse, final commitment
 *
 * Principles:
 *   - Story first, technology second
 *   - CSS-native for simple effects (0 KB)
 *   - GSAP only for complex parallax/pinning (~23 KB)
 *   - Enhance scroll, never hijack it
 *   - Mobile-first: simpler on touch, no smooth scroll
 *   - prefers-reduced-motion: mandatory fallback
 *   - GPU-accelerated only: transform + opacity
 *   - Passive listeners, will-change sparingly
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // ACCESSIBILITY: Reduced Motion (non-negotiable)
  // ═══════════════════════════════════════════
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.band-title, .band-subtitle, .section-num').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return; // Skip everything — content visible immediately
  }

  // ═══════════════════════════════════════════
  // DEVICE DETECTION
  // ═══════════════════════════════════════════
  const isMobile = window.innerWidth <= 768;
  const isTouch = 'ontouchstart' in window;

  // ═══════════════════════════════════════════
  // LAYER 1: CSS SCROLL-DRIVEN ANIMATIONS (Native, 0 KB)
  // Progressive enhancement — works without JS libs
  // ═══════════════════════════════════════════
  (function injectNativeScrollCSS() {
    if (!CSS.supports('animation-timeline', 'scroll()')) return;

    const style = document.createElement('style');
    style.textContent = `
      /* Native scroll progress bar — no JS needed */
      #scrollProgress {
        animation: scrollScale linear !important;
        animation-timeline: scroll() !important;
      }
      @keyframes scrollScale {
        from { transform: scaleY(0); }
        to { transform: scaleY(1); }
      }

      /* Native view-triggered reveals for elements without GSAP */
      @supports (animation-timeline: view()) {
        .band-subtitle {
          animation: nativeReveal 1s ease both;
          animation-timeline: view();
          animation-range: entry 0% entry 80%;
        }
        @keyframes nativeReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      }
    `;
    document.head.appendChild(style);
  })();

  // ═══════════════════════════════════════════
  // LAYER 2: LENIS + GSAP (loaded async, graceful degradation)
  // ═══════════════════════════════════════════
  function onLibsReady(cb) {
    let attempts = 0;
    const check = setInterval(() => {
      attempts++;
      if (window.gsap && window.ScrollTrigger && window.Lenis) {
        clearInterval(check);
        cb();
      }
      if (attempts > 100) { // 5s timeout
        clearInterval(check);
        // Graceful fallback: just show everything
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      }
    }, 50);
  }

  onLibsReady(function () {
    const { gsap, ScrollTrigger, Lenis } = window;
    gsap.registerPlugin(ScrollTrigger);

    // ─────────────────────────────────────
    // LENIS: Smooth Scroll (desktop only)
    // Mobile keeps native momentum scroll
    // ─────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: !isTouch,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ─────────────────────────────────────
    // STORY BEAT 1: HOOK — Hero
    // Full viewport, striking visual, scroll-linked zoom
    // ─────────────────────────────────────
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-inner, .hero-content');

    if (hero) {
      // Hero background: scrub-linked zoom (replaces CSS Ken Burns)
      if (heroBg && !isMobile) {
        // Kill CSS animation, let GSAP control
        heroBg.style.animation = 'none';
        if (heroBg.querySelector('img')) {
          heroBg.querySelector('img').style.animation = 'none';
        }

        gsap.fromTo(heroBg.querySelector('img') || heroBg,
          { scale: 1.05 },
          {
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5, // Slight smoothing
            },
          }
        );
      }

      // Hero content: fade + drift up as user scrolls away
      if (heroContent && !isMobile) {
        gsap.to(heroContent, {
          opacity: 0,
          y: -60,
          scale: 0.97,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '70% top',
            scrub: true,
          },
        });
      }

      // Scroll indicator: fade out faster
      const scrollIndicator = hero.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        gsap.to(scrollIndicator, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: '10% top',
            end: '25% top',
            scrub: true,
          },
        });
      }
    }

    // ─────────────────────────────────────
    // STORY BEAT 2 & 3: CONTEXT + JOURNEY
    // Parallax image bands — layers at different speeds
    // ─────────────────────────────────────
    if (!isMobile) {
      document.querySelectorAll('.section-hero-band').forEach(band => {
        // Background layer: 0.3x speed (far away, slow)
        gsap.fromTo(band,
          { backgroundPositionY: '25%' },
          {
            backgroundPositionY: '55%',
            ease: 'none',
            scrollTrigger: {
              trigger: band,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.3,
            },
          }
        );

        // Section number: floats upward (1.2x — pop forward)
        const num = band.querySelector('.section-num');
        if (num) {
          gsap.fromTo(num,
            { y: 40, opacity: 0.05 },
            {
              y: -80,
              opacity: 0.15,
              ease: 'none',
              scrollTrigger: {
                trigger: band,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }

        // Band title: reveal on entry
        const title = band.querySelector('.band-title');
        if (title) {
          gsap.fromTo(title,
            { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0 0 0)',
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: band,
                start: 'top 65%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }

    // ─────────────────────────────────────
    // PROGRESSIVE DISCLOSURE: Fade-in reveals
    // Elements animate as user scrolls — user controls pace
    // ─────────────────────────────────────
    const fadeEls = document.querySelectorAll('.fade-in');

    // Group by parent for stagger effect
    const parentGroups = new Map();
    fadeEls.forEach(el => {
      const parent = el.parentElement;
      if (!parentGroups.has(parent)) parentGroups.set(parent, []);
      parentGroups.get(parent).push(el);
    });

    parentGroups.forEach((children, parent) => {
      if (children.length > 1) {
        // Staggered group reveal
        gsap.fromTo(children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: isMobile ? 'top 92%' : 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        // Single element
        gsap.fromTo(children[0],
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: children[0],
              start: isMobile ? 'top 92%' : 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // ─────────────────────────────────────
    // STORY BEAT 4: CLIMAX — Card reveals
    // Staggered grid animations — the "wow" moment
    // ─────────────────────────────────────
    const grids = document.querySelectorAll(
      '.features-grid, .platform-grid, .process-grid, .services-grid, ' +
      '.invest-grid, .info-cards, .diff-items'
    );

    grids.forEach(grid => {
      const cards = grid.children;
      if (!cards.length) return;

      gsap.fromTo(cards,
        {
          opacity: 0,
          y: isMobile ? 20 : 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: isMobile ? 0.08 : 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: isMobile ? 'top 90%' : 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ─────────────────────────────────────
    // PULL QUOTES: Slide in with accent bar
    // ─────────────────────────────────────
    document.querySelectorAll('.pull-quote, .pull-quote-glow').forEach(quote => {
      gsap.fromTo(quote,
        { opacity: 0, x: -30, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quote,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ─────────────────────────────────────
    // STATS COUNTER: Numbers count up on reveal
    // ─────────────────────────────────────
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
            duration: 1.8,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = Math.round(this.targets()[0].val);
            },
          });
        },
      });
    });

    // ─────────────────────────────────────
    // SCROLL PROGRESS: Accent line (GSAP fallback for non-supporting browsers)
    // CSS scroll-timeline handles this natively if supported (Layer 1)
    // ─────────────────────────────────────
    const progressEl = document.getElementById('scrollProgress');
    if (progressEl && !CSS.supports('animation-timeline', 'scroll()')) {
      gsap.to(progressEl, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

    // ─────────────────────────────────────
    // STORY BEAT 5: RESOLUTION — CTA
    // Gentle glow + lift signals "this is the moment"
    // ─────────────────────────────────────
    const cta = document.querySelector('.cta-block, .form-card');
    if (cta) {
      gsap.fromTo(cta,
        {
          opacity: 0.7,
          y: 30,
          boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)',
        },
        {
          opacity: 1,
          y: 0,
          boxShadow: '0 0 60px 15px rgba(16, 185, 129, 0.06)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // ─────────────────────────────────────
    // FAQ ACCORDION: Subtle stagger on question entries
    // ─────────────────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length) {
      gsap.fromTo(faqItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqItems[0].parentElement,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // ─────────────────────────────────────
    // SECTION DIVIDERS: Scale in from center
    // ─────────────────────────────────────
    document.querySelectorAll('.section-divider').forEach(div => {
      gsap.fromTo(div,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: div,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ─────────────────────────────────────
    // PERFORMANCE: Clean up will-change after animations settle
    // ─────────────────────────────────────
    ScrollTrigger.addEventListener('scrollEnd', () => {
      document.querySelectorAll('[style*="will-change"]').forEach(el => {
        el.style.willChange = 'auto';
      });
    });
  });
})();
