/**
 * Natamy Oliveira — Apple-Style Scrollytelling Engine
 *
 * What makes Apple's scroll different:
 *   1. EVERYTHING is scrub-linked (tied to scroll position, not triggered)
 *   2. Sticky sections — content pins while scroll progresses
 *   3. Text reveals word-by-word or line-by-line with scroll
 *   4. Scale transitions — elements grow from 90% to 100%
 *   5. Crossfade between sections — opacity tied to scroll
 *   6. Parallax DEPTH — foreground moves faster than background
 *   7. Smooth, deliberate pacing — nothing snaps or pops
 *
 * Stack: Lenis + GSAP ScrollTrigger + CSS scroll-timeline
 * Skills: scrollytelling, scroll-experience
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // ACCESSIBILITY: Reduced Motion
  // ═══════════════════════════════════════════
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.band-title, .band-subtitle, .section-num').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const isTouch = 'ontouchstart' in window;

  // ═══════════════════════════════════════════
  // CSS NATIVE: scroll-timeline (0 KB, progressive)
  // ═══════════════════════════════════════════
  (function () {
    if (!CSS.supports('animation-timeline', 'scroll()')) return;
    const s = document.createElement('style');
    s.textContent = `
      #scrollProgress {
        animation: scaleUp linear !important;
        animation-timeline: scroll() !important;
      }
      @keyframes scaleUp { from { transform: scaleY(0); } to { transform: scaleY(1); } }
    `;
    document.head.appendChild(s);
  })();

  // ═══════════════════════════════════════════
  // WAIT FOR LIBS
  // ═══════════════════════════════════════════
  function onReady(cb) {
    let n = 0;
    const id = setInterval(() => {
      if (++n > 100) { clearInterval(id); document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); return; }
      if (window.gsap && window.ScrollTrigger && window.Lenis) { clearInterval(id); cb(); }
    }, 50);
  }

  onReady(function () {
    const { gsap, ScrollTrigger, Lenis } = window;
    gsap.registerPlugin(ScrollTrigger);

    // Perf: batch ScrollTrigger callbacks, reduce work during fast scroll
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    // Low-power device detection (slow CPUs, low RAM, or mobile)
    const isLowPower = isMobile
      || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      || (navigator.deviceMemory && navigator.deviceMemory <= 4);

    // ─────────────────────────────────────
    // LENIS: Apple-like smooth scroll
    // ─────────────────────────────────────
    const lenis = new Lenis({
      duration: isLowPower ? 1.0 : 1.4,   // Shorter catch-up = less lag feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isTouch,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    // ═══════════════════════════════════════════
    // APPLE PATTERN 1: STICKY HERO WITH SCROLL-LINKED ZOOM
    // Hero stays pinned, background zooms, content fades away
    // ═══════════════════════════════════════════
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    const heroInner = document.querySelector('.hero-inner, .hero-content');
    const heroImg = heroBg ? (heroBg.querySelector('img') || heroBg) : null;

    if (hero && !isMobile) {
      // Kill CSS Ken Burns — GSAP takes over
      if (heroImg) heroImg.style.animation = 'none';
      if (heroBg && !heroBg.querySelector('img')) heroBg.style.animation = 'none';

      // Background: smooth zoom tied to scroll
      if (heroImg) {
        gsap.fromTo(heroImg,
          { scale: 1.05 },
          {
            scale: 1.25,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
              pin: false,
            },
          }
        );
      }

      // Content: fade + drift up + slight scale down (no blur — blur is a massive repaint cost)
      if (heroInner) {
        gsap.to(heroInner, {
          opacity: 0,
          y: -80,
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '80% top',
            scrub: 0.4,
          },
        });
      }

      // Scroll indicator: vanishes quickly
      const scrollInd = hero.querySelector('.scroll-indicator');
      if (scrollInd) {
        gsap.to(scrollInd, {
          opacity: 0,
          y: 20,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: '5% top', end: '15% top', scrub: true },
        });
      }
    }

    // ═══════════════════════════════════════════
    // APPLE PATTERN 2: PARALLAX IMAGE BANDS WITH DEPTH
    // Background moves at 0.3x, content at 1x = depth illusion
    // ═══════════════════════════════════════════
    document.querySelectorAll('.section-hero-band').forEach((band, idx) => {
      // NOTE: backgroundPositionY parallax removed — it forces a full repaint every
      // scroll frame and was the single biggest stutter cause. If you want parallax
      // back, put an <img> inside the band and animate its transform:translateY.

      // Section number: floats upward at 1.3x (pop forward layer)
      const num = band.querySelector('.section-num');
      if (num) {
        gsap.fromTo(num,
          { y: 60, opacity: 0.04 },
          {
            y: isMobile ? -30 : -100,
            opacity: 0.18,
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

      // Band title: scale up from 0.85 + fade (Apple product name reveal)
      const title = band.querySelector('.band-title');
      if (title) {
        gsap.fromTo(title,
          { opacity: 0, scale: 0.85, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: band,
              start: 'top 75%',
              end: 'top 40%',
              scrub: 0.4,
            },
          }
        );
      }

      // Band subtitle: delayed fade
      const sub = band.querySelector('.band-subtitle');
      if (sub) {
        gsap.fromTo(sub,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: band,
              start: 'top 60%',
              end: 'top 30%',
              scrub: 0.4,
            },
          }
        );
      }
    });

    // ═══════════════════════════════════════════
    // APPLE PATTERN 3: CONTENT SECTIONS SCALE IN
    // Sections grow from 0.92 scale + fade — Apple "zooming in" feel
    // ═══════════════════════════════════════════
    document.querySelectorAll('section, .story-section, .problem-section, .cta-section, .stats-strip').forEach(section => {
      // Skip hero and bands
      if (section.classList.contains('hero') || section.classList.contains('section-hero-band')) return;

      gsap.fromTo(section,
        { opacity: 0, scale: isMobile ? 1 : 0.94 },
        {
          opacity: 1,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: isMobile ? 'top 95%' : 'top 85%',
            end: isMobile ? 'top 75%' : 'top 55%',
            scrub: isMobile ? false : 0.5,
            toggleActions: isMobile ? 'play none none none' : undefined,
          },
        }
      );
    });

    // ═══════════════════════════════════════════
    // APPLE PATTERN 4: TEXT REVEALS — LINE BY LINE
    // Headlines split into lines, each fades up in sequence
    // ═══════════════════════════════════════════
    document.querySelectorAll('.section-title, .section h2, .diff-section h2, .services-section h2').forEach(heading => {
      // Skip if inside a band (already handled)
      if (heading.closest('.section-hero-band')) return;

      gsap.fromTo(heading,
        { opacity: 0, y: 40, clipPath: 'inset(30% 0 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: isMobile ? 'top 90%' : 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ═══════════════════════════════════════════
    // APPLE PATTERN 5: CARD GRIDS — STAGGERED SCALE REVEAL
    // Cards grow from 0.9 scale, staggered like Apple feature grids
    // ═══════════════════════════════════════════
    document.querySelectorAll(
      '.features-grid, .platform-grid, .process-grid, .services-grid, ' +
      '.invest-grid, .info-cards, .diff-items, .diff-list, .faq-list, .audience-list'
    ).forEach(grid => {
      const items = grid.children;
      if (!items.length) return;

      gsap.fromTo(items,
        {
          opacity: 0,
          y: isMobile ? 20 : 50,
          scale: isMobile ? 1 : 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isMobile ? 0.5 : 0.8,
          stagger: isMobile ? 0.06 : 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: isMobile ? 'top 92%' : 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ═══════════════════════════════════════════
    // APPLE PATTERN 6: GLASS CARDS — BORDER GLOW ON SCROLL
    // As cards enter view, borders briefly glow accent then settle
    // ═══════════════════════════════════════════
    if (!isMobile) {
      document.querySelectorAll('.glass-card, .glass-card-glow, .form-card, .pull-quote-glow').forEach(card => {
        gsap.fromTo(card,
          { borderColor: 'rgba(255,255,255,0.07)' },
          {
            borderColor: 'rgba(16,185,129,0.2)',
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    // ═══════════════════════════════════════════
    // APPLE PATTERN 7: PULL QUOTES — SLIDE + SCALE
    // ═══════════════════════════════════════════
    document.querySelectorAll('.pull-quote, .pull-quote-glow').forEach(q => {
      gsap.fromTo(q,
        { opacity: 0, x: isMobile ? 0 : -40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: q,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ═══════════════════════════════════════════
    // STATS COUNTERS
    // ═══════════════════════════════════════════
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      if (isNaN(target)) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to({ v: 0 }, {
            v: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(this.targets()[0].v); },
          });
        },
      });
    });

    // ═══════════════════════════════════════════
    // SCROLL PROGRESS (GSAP fallback)
    // ═══════════════════════════════════════════
    const prog = document.getElementById('scrollProgress');
    if (prog && !CSS.supports('animation-timeline', 'scroll()')) {
      gsap.to(prog, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: true },
      });
    }

    // ═══════════════════════════════════════════
    // APPLE PATTERN 8: CTA — THE FINAL MOMENT
    // Glow builds as user approaches, signaling "this is it"
    // ═══════════════════════════════════════════
    const cta = document.querySelector('.cta-block, .form-card');
    if (cta) {
      // One-shot reveal instead of scrubbed boxShadow (shadow scrub = huge repaint cost)
      gsap.fromTo(cta,
        { opacity: 0.6, y: isMobile ? 15 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // ═══════════════════════════════════════════
    // OUTROS SERVICOS: Pill links cascade in
    // ═══════════════════════════════════════════
    const outrosLinks = document.querySelector('.outros-links');
    if (outrosLinks) {
      gsap.fromTo(outrosLinks.children,
        { opacity: 0, y: 10, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: outrosLinks,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // ═══════════════════════════════════════════
    // FADE-IN ELEMENTS (catch-all for remaining .fade-in)
    // Uses IntersectionObserver approach — lighter than GSAP for simple fades
    // ═══════════════════════════════════════════
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      // Skip if already handled by a parent animation
      if (el.closest('.features-grid, .platform-grid, .process-grid, .services-grid, .invest-grid, .info-cards, .diff-items, .faq-list')) return;

      let delay = 0;
      const dm = el.className.match(/fade-in-delay-(\d)/);
      if (dm) delay = parseInt(dm[1]) * 0.1;

      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: isMobile ? 'top 93%' : 'top 87%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ═══════════════════════════════════════════
    // PERFORMANCE: will-change cleanup
    // ═══════════════════════════════════════════
    ScrollTrigger.addEventListener('scrollEnd', () => {
      document.querySelectorAll('[style*="will-change"]').forEach(el => {
        el.style.willChange = 'auto';
      });
    });
  });
})();
