/* ===================================
   PASING BARBERSHOP - JAVASCRIPT
   =================================== */

// ===================================
// TRANSLATIONS
// ===================================
const translations = {
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_about: "Über Uns",
        nav_services: "Leistungen",
        nav_gallery: "Galerie",
        nav_contact: "Kontakt",
        
        // Hero
        hero_badge: "Premium Barbershop",
        hero_title: "Pasing Barbershop",
        hero_subtitle: "Tradition trifft modernen Stil in München Pasing",
        hero_btn_services: "Unsere Leistungen",
        hero_btn_contact: "Kontakt",
        hero_rating: "Sterne Bewertung",
        scroll_down: "Nach unten scrollen",
        
        // About
        about_tag: "Willkommen",
        about_title: "Über Uns",
        about_years: "Jahre Erfahrung",
        about_heading: "Ihr Barbershop in München Pasing",
        about_p1: "Willkommen bei Pasing Barbershop – Ihrem Experten für Herrenhaarschnitte und Bartpflege im Herzen von München Pasing. Wir verbinden traditionelle Barbershop-Kultur mit modernsten Techniken und Trends.",
        about_p2: "Unser erfahrenes Team sorgt dafür, dass Sie sich bei uns entspannen und den Service genießen können. Ob klassischer Haarschnitt, modernes Styling oder professionelle Bartpflege – bei uns sind Sie in besten Händen.",
        about_feature1: "Professionelle Stylisten",
        about_feature2: "Premium Produkte",
        about_feature3: "Entspannte Atmosphäre",
        about_feature4: "Faire Preise",
        
        // Services
        services_tag: "Was wir bieten",
        services_title: "Unsere Leistungen & Preise",
        featured: "Beliebt",
        service1_name: "Herrenhaarschnitt",
        service1_desc: "Klassischer Haarschnitt mit Waschen, Schneiden und Styling",
        service2_name: "Maschinenschnitt",
        service2_desc: "Kompletter Schnitt mit der Maschine, einheitliche Länge",
        service3_name: "Kinderhaarschnitt",
        service3_desc: "Haarschnitt für Kinder bis 12 Jahre",
        service4_name: "Fade Haarschnitt",
        service4_desc: "Moderner Fade-Schnitt mit präzisen Übergängen",
        service5_name: "Bart trimmen",
        service5_desc: "Professionelles Barttrimmen und Konturieren",
        service6_name: "Rasur mit Heißtuch",
        service6_desc: "Traditionelle Nassrasur mit heißem Handtuch",
        service7_name: "Komplett-Paket",
        service7_desc: "Haarschnitt + Bart trimmen + Styling",
        service8_name: "Augenbrauen zupfen",
        service8_desc: "Augenbrauen in Form bringen",
        
        // Gallery
        gallery_tag: "Unsere Arbeit",
        gallery_title: "Galerie",
        
        // Contact
        contact_tag: "Besuchen Sie uns",
        contact_title: "Kontakt",
        contact_address_title: "Adresse",
        contact_phone_title: "Telefon",
        contact_hours_title: "Öffnungszeiten",
        contact_hours: "Mo - Fr: 9:00 - 19:00<br>Sa: 9:00 - 17:00<br>So: Geschlossen",
        
        // Footer
        footer_desc: "Ihr Premium Barbershop in München Pasing",
        footer_links_title: "Schnelllinks",
        footer_follow: "Folgen Sie uns",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_impressum: "Impressum",
        footer_datenschutz: "Datenschutz"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "Premium Barbershop",
        hero_title: "Pasing Barbershop",
        hero_subtitle: "Where Tradition Meets Modern Style in Munich Pasing",
        hero_btn_services: "Our Services",
        hero_btn_contact: "Contact",
        hero_rating: "Star Rating",
        scroll_down: "Scroll down",
        
        // About
        about_tag: "Welcome",
        about_title: "About Us",
        about_years: "Years Experience",
        about_heading: "Your Barbershop in Munich Pasing",
        about_p1: "Welcome to Pasing Barbershop – your expert for men's haircuts and beard care in the heart of Munich Pasing. We combine traditional barbershop culture with the latest techniques and trends.",
        about_p2: "Our experienced team ensures that you can relax and enjoy the service. Whether classic haircut, modern styling or professional beard care – you are in the best hands with us.",
        about_feature1: "Professional Stylists",
        about_feature2: "Premium Products",
        about_feature3: "Relaxed Atmosphere",
        about_feature4: "Fair Prices",
        
        // Services
        services_tag: "What We Offer",
        services_title: "Our Services & Prices",
        featured: "Popular",
        service1_name: "Men's Haircut",
        service1_desc: "Classic haircut with wash, cut and styling",
        service2_name: "Clipper Cut",
        service2_desc: "Complete cut with clippers, uniform length",
        service3_name: "Kids Haircut",
        service3_desc: "Haircut for children up to 12 years",
        service4_name: "Fade Haircut",
        service4_desc: "Modern fade cut with precise transitions",
        service5_name: "Beard Trim",
        service5_desc: "Professional beard trimming and contouring",
        service6_name: "Hot Towel Shave",
        service6_desc: "Traditional wet shave with hot towel",
        service7_name: "Complete Package",
        service7_desc: "Haircut + Beard trim + Styling",
        service8_name: "Eyebrow Grooming",
        service8_desc: "Shaping your eyebrows",
        
        // Gallery
        gallery_tag: "Our Work",
        gallery_title: "Gallery",
        
        // Contact
        contact_tag: "Visit Us",
        contact_title: "Contact",
        contact_address_title: "Address",
        contact_phone_title: "Phone",
        contact_hours_title: "Opening Hours",
        contact_hours: "Mon - Fri: 9:00 AM - 7:00 PM<br>Sat: 9:00 AM - 5:00 PM<br>Sun: Closed",
        
        // Footer
        footer_desc: "Your Premium Barbershop in Munich Pasing",
        footer_links_title: "Quick Links",
        footer_follow: "Follow Us",
        footer_rights: "All rights reserved.",
        footer_impressum: "Imprint",
        footer_datenschutz: "Privacy Policy"
    }
};

// ===================================
// DOM ELEMENTS
// ===================================
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const slides = document.querySelectorAll('.slide');
const slideDots = document.getElementById('slideDots');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const backToTop = document.getElementById('backToTop');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryItems = document.querySelectorAll('.gallery-item');
const langBtns = document.querySelectorAll('.lang-btn');

// ===================================
// VARIABLES
// ===================================
let currentSlide = 0;
let slideInterval;
let currentLightboxIndex = 0;
let currentLang = localStorage.getItem('pasingBarberLang') || 'de';

// ===================================
// PRELOADER
// ===================================
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
    
    // Initialize language
    setLanguage(currentLang);
    
    // Start slideshow
    initSlideshow();
    
    // Initialize AOS-like animations
    initScrollAnimations();
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Trigger scroll animations
    checkScrollAnimations();
});

// ===================================
// MOBILE MENU
// ===================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SLIDESHOW
// ===================================
function initSlideshow() {
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        slideDots.appendChild(dot);
    });
    
    // Start auto-slide
    startSlideshow();
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    slideDots.children[currentSlide].classList.remove('active');
    
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    slideDots.children[currentSlide].classList.add('active');
    
    // Reset interval
    stopSlideshow();
    startSlideshow();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

prevSlideBtn.addEventListener('click', prevSlide);
nextSlideBtn.addEventListener('click', nextSlide);

// ===================================
// LIGHTBOX
// ===================================
const galleryImages = Array.from(galleryItems).map(item => item.querySelector('img').src);

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentLightboxIndex = index;
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxPrev.addEventListener('click', () => {
    currentLightboxIndex--;
    if (currentLightboxIndex < 0) currentLightboxIndex = galleryImages.length - 1;
    lightboxImg.src = galleryImages[currentLightboxIndex];
});

lightboxNext.addEventListener('click', () => {
    currentLightboxIndex++;
    if (currentLightboxIndex >= galleryImages.length) currentLightboxIndex = 0;
    lightboxImg.src = galleryImages[currentLightboxIndex];
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
    if (e.key === 'ArrowRight') lightboxNext.click();
});

// ===================================
// BACK TO TOP
// ===================================
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================
// LANGUAGE SWITCHING
// ===================================
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pasingBarberLang', lang);
    
    // Update active button
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// ===================================
// SCROLL ANIMATIONS (AOS-like)
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = getInitialTransform(el.dataset.aos);
    });
    
    checkScrollAnimations();
}

function getInitialTransform(animation) {
    switch(animation) {
        case 'fade-up': return 'translateY(30px)';
        case 'fade-down': return 'translateY(-30px)';
        case 'fade-left': return 'translateX(-30px)';
        case 'fade-right': return 'translateX(30px)';
        case 'zoom-in': return 'scale(0.9)';
        default: return 'translateY(30px)';
    }
}

function checkScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
            const delay = el.dataset.aosDelay || 0;
            setTimeout(() => {
                el.classList.add('aos-animate');
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) translateX(0) scale(1)';
            }, parseInt(delay));
        }
    });
}

// ===================================
// SMOOTH SCROLL FOR NAV LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// TYPEWRITER EFFECT
// ===================================
function typewriter(element, text, speed = 100) {
    element.textContent = '';
    element.style.borderRight = '3px solid var(--accent-gold)';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, speed);
}

// Start typewriter when page loads
window.addEventListener('load', () => {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        setTimeout(() => {
            typewriter(typewriterElement, text, 80);
        }, 1500);
    }
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===================================
// SERVICE CARDS TILT EFFECT
// ===================================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// MAGNETIC BUTTON EFFECT
// ===================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ===================================
// PARTICLE EFFECT ON HERO (Optional Enhancement)
// ===================================
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(212, 175, 55, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}%;
        top: 100%;
        animation: floatUp ${5 + Math.random() * 5}s linear forwards;
    `;
    
    hero.appendChild(particle);
    
    setTimeout(() => particle.remove(), 10000);
}

// Add particles occasionally
setInterval(createParticle, 300);

// Add float up animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            top: -10%;
            opacity: 0;
            transform: translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(style);

console.log('Pasing Barbershop website loaded successfully!');
