// Navegación sticky
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer click en un enlace
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Filtro de propiedades
const filterButtons = document.querySelectorAll('.filter-btn');
const propertyItems = document.querySelectorAll('.property-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Actualizar botones activos
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-purple-600', 'text-white', 'shadow-lg');
            btn.classList.add('bg-white', 'border-gray-200', 'text-gray-700');
        });
        button.classList.add('active', 'bg-purple-600', 'text-white', 'shadow-lg');
        button.classList.remove('bg-white', 'border-gray-200', 'text-gray-700');
        
        // Filtrar propiedades con animación
        const filter = button.getAttribute('data-filter');
        
        propertyItems.forEach((item, index) => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1) translateY(0)';
                }, index * 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8) translateY(-20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);
            }
        });
    });
});

// Animaciones al scroll con Intersection Observer mejorado
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.property-card, .bg-white.rounded-2xl.shadow-lg').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) scale(0.95)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(el);
});

// Animación de entrada para secciones
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando fetch para enviar a un backend
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        contactForm.reset();
    });
}

// Formulario de newsletter
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Aquí puedes agregar la lógica para suscribir al newsletter
        // Por ejemplo, usando fetch para enviar a un backend
        alert(`¡Gracias por suscribirte con ${email}! Recibirás nuestras mejores ofertas.`);
        newsletterForm.reset();
    });
}

// Modales de Política de Privacidad y Términos
const privacyModal = document.getElementById('privacyModal');
const termsModal = document.getElementById('termsModal');
const privacyLink = document.getElementById('privacyLink');
const termsLink = document.getElementById('termsLink');
const closePrivacyModal = document.getElementById('closePrivacyModal');
const closeTermsModal = document.getElementById('closeTermsModal');

// Abrir modal de Política de Privacidad
if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.remove('hidden');
        privacyModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modal de Política de Privacidad
if (closePrivacyModal) {
    closePrivacyModal.addEventListener('click', () => {
        privacyModal.classList.add('hidden');
        privacyModal.classList.remove('flex');
        document.body.style.overflow = '';
    });
}

// Abrir modal de Términos y Condiciones
if (termsLink && termsModal) {
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        termsModal.classList.remove('hidden');
        termsModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modal de Términos y Condiciones
if (closeTermsModal) {
    closeTermsModal.addEventListener('click', () => {
        termsModal.classList.add('hidden');
        termsModal.classList.remove('flex');
        document.body.style.overflow = '';
    });
}

// Cerrar modales al hacer click fuera del contenido
if (privacyModal) {
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.add('hidden');
            privacyModal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    });
}

if (termsModal) {
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) {
            termsModal.classList.add('hidden');
            termsModal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    });
}

// Cerrar modales con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (privacyModal && !privacyModal.classList.contains('hidden')) {
            privacyModal.classList.add('hidden');
            privacyModal.classList.remove('flex');
            document.body.style.overflow = '';
        }
        if (termsModal && !termsModal.classList.contains('hidden')) {
            termsModal.classList.add('hidden');
            termsModal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }
});

// Botón flotante para subir arriba
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });
    
    // Funcionalidad de scroll suave al hacer click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Efecto parallax suave en hero mejorado
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#inicio');
    if (hero) {
        const heroImage = hero.querySelector('.hero-image');
        const heroContent = hero.querySelector('.hero-content');
        const blobElements = hero.querySelectorAll('.animate-blob');
        
        if (scrolled < window.innerHeight) {
            // Parallax sutil para la imagen
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`;
            }
            
            // Efecto parallax inverso para el contenido
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
            
            // Animar elementos blob
            blobElements.forEach((blob, index) => {
                const speed = 0.1 * (index + 1);
                blob.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
            });
        }
    }
});

// Animación de números contadores para estadísticas
const animateCounter = (element, target, suffix = '') => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
};

// Observar contadores para animarlos cuando sean visibles
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const counter = entry.target;
            const originalText = counter.textContent;
            const match = originalText.match(/(\d+)(.*)/);
            if (match) {
                const target = parseInt(match[1]);
                const suffix = match[2] || '';
                counter.classList.add('counted');
                animateCounter(counter, target, suffix);
            }
        }
    });
}, { threshold: 0.5 });

// Aplicar animación a los contadores cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#inicio .text-3xl.font-bold').forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Efectos de hover mejorados para tarjetas
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Mejorar smooth scroll con offset para navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web de Marbi Silva cargado correctamente');
    
    // Añadir efecto de entrada para elementos hero
    const heroElements = document.querySelectorAll('.hero-content > *, .hero-image');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});
