/* ============================================
   FIRTINA SU KAÇAĞI TESPİTİ - SCRIPT
   ============================================ */
(function () {
    'use strict';

    /* ---------- Mobil menü ---------- */
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const body = document.body;

    function openNav() {
        nav.classList.add('open');
        body.classList.add('nav-open');
    }
    function closeNav() {
        nav.classList.remove('open');
        body.classList.remove('nav-open');
    }

    if (navToggle) navToggle.addEventListener('click', openNav);
    if (navClose) navClose.addEventListener('click', closeNav);

    // Menüdeki bir bağlantıya tıklandığında menüyü kapat
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) closeNav();
        });
    });

    // Dış alana tıklanınca menüyü kapat
    document.addEventListener('click', function (e) {
        if (
            nav.classList.contains('open') &&
            !nav.contains(e.target) &&
            e.target !== navToggle &&
            !navToggle.contains(e.target)
        ) {
            closeNav();
        }
    });

    // ESC ile menüyü kapat
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
    });

    /* ---------- Sticky header gölgesi ---------- */
    const header = document.getElementById('header');
    function onScroll() {
        if (window.scrollY > 10) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        // Yukarı çık butonu
        if (window.scrollY > 500) scrollTopBtn.classList.add('show');
        else scrollTopBtn.classList.remove('show');
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Yukarı çık butonu ---------- */
    const scrollTopBtn = document.getElementById('scrollTop');
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------- Scroll ile görünür olma animasyonu ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        revealEls.forEach(function (el, i) {
            // hafif stagger efekti
            el.style.transitionDelay = (i % 4) * 80 + 'ms';
            io.observe(el);
        });
    } else {
        // Fallback: hepsini görünür yap
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- SSS akordeon (tek açık) ---------- */
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(function (item) {
        item.addEventListener('toggle', function () {
            if (item.open) {
                faqItems.forEach(function (other) {
                    if (other !== item) other.open = false;
                });
            }
        });
    });

    /* ---------- Footer yılı ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- İlk yüklemede header durumu ---------- */
    onScroll();
})();
