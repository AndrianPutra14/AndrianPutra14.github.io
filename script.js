// ===== PROJECTS DATA =====
const projectsData = [
    {
        name: 'airtitip',
        description: 'A modern flight ticket booking application built with Flutter, featuring real-time search, booking management, and secure payment integration.',
        language: 'Dart',
        url: 'https://github.com/AndrianPutra14/airtitip',
        stars: 0,
        updatedAt: '2026-05-02',
        tags: ['Flutter', 'Dart', 'Mobile', 'Booking']
    },
    {
        name: 'tickect',
        description: 'Ticket management system for efficient event and service ticketing solutions.',
        language: null,
        url: 'https://github.com/AndrianPutra14/tickect',
        stars: 0,
        updatedAt: '2026-04-30',
        tags: ['Ticketing', 'Management']
    },
    {
        name: 'MarketplacePaymentgateway',
        description: 'Payment gateway integration for marketplace platforms with support for multiple payment providers and secure transactions.',
        language: 'JavaScript',
        url: 'https://github.com/AndrianPutra14/MarketplacePaymentgateway',
        stars: 0,
        updatedAt: '2026-04-13',
        tags: ['JavaScript', 'Payment', 'API', 'Backend']
    },
    {
        name: 'tickettv',
        description: 'TV ticket booking application with Flutter, enabling users to book and manage TV service subscriptions.',
        language: 'Dart',
        url: 'https://github.com/AndrianPutra14/tickettv',
        stars: 0,
        updatedAt: '2026-03-31',
        tags: ['Flutter', 'Dart', 'Mobile', 'TV']
    },
    {
        name: 'MobileEzytixMaintenance',
        description: 'Maintenance module for Ezytix mobile application, providing bug fixes and performance improvements.',
        language: null,
        url: 'https://github.com/AndrianPutra14/MobileEzytixMaintenance',
        stars: 0,
        updatedAt: '2026-01-19',
        tags: ['Flutter', 'Maintenance', 'Mobile']
    },
    {
        name: 'WebAdminEzytixAssets',
        description: 'Web admin panel for managing Ezytix assets with Blade templating and comprehensive dashboard features.',
        language: 'Blade',
        url: 'https://github.com/AndrianPutra14/WebAdminEzytixAssets',
        stars: 0,
        updatedAt: '2026-01-19',
        tags: ['Blade', 'Laravel', 'Admin', 'Web']
    },
    {
        name: 'Website-telkomedika',
        description: 'Telkomedika data application with AES 256 encryption for secure health information management.',
        language: 'Blade',
        url: 'https://github.com/AndrianPutra14/Website-telkomedika',
        stars: 0,
        updatedAt: '2025-09-12',
        tags: ['Blade', 'Laravel', 'Security', 'Healthcare']
    },
    {
        name: 'Aplikasi-Mobile',
        description: 'Lapak Aduan Banyumas - Mobile application for citizen complaints and public service reporting with real-time notifications.',
        language: 'Dart',
        url: 'https://github.com/AndrianPutra14/Aplikasi-Mobile',
        stars: 0,
        updatedAt: '2025-09-12',
        tags: ['Flutter', 'Dart', 'Government', 'Mobile']
    },
    {
        name: 'sinta',
        description: 'Academic information system built with Laravel Blade for managing student and institutional data.',
        language: 'Blade',
        url: 'https://github.com/AndrianPutra14/sinta',
        stars: 0,
        updatedAt: '2025-05-24',
        tags: ['Blade', 'Laravel', 'Education', 'Web']
    }
];

// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menu-toggle');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initTyping();
    initNavigation();
    initScrollEffects();
    initSkillBars();
    initContactForm();
    initReveal();
});

// ===== PROJECTS =====
function initProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas fa-${getProjectIcon(project.name)}"></i>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="project-meta">
                        ${project.language ? `<span><i class="fas fa-code"></i> ${project.language}</span>` : ''}
                        <span><i class="far fa-clock"></i> ${formatDate(project.updatedAt)}</span>
                    </div>
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.url}" target="_blank" rel="noopener" class="project-link">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.stars > 0 ? `
                    <span class="project-link" style="cursor: default;">
                        <i class="fas fa-star"></i> ${project.stars}
                    </span>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function getProjectIcon(name) {
    const iconMap = {
        'airtitip': 'plane',
        'tickect': 'ticket-alt',
        'tickettv': 'tv',
        'MarketplacePaymentgateway': 'credit-card',
        'MobileEzytixMaintenance': 'mobile-alt',
        'WebAdminEzytixAssets': 'chart-line',
        'Website-telkomedika': 'hospital',
        'Aplikasi-Mobile': 'comments',
        'sinta': 'graduation-cap'
    };
    return iconMap[name] || 'folder';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
        return `${diffDays} days ago`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(diffDays / 365);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}

// ===== TYPING ANIMATION =====
function initTyping() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const roles = [
        'Flutter Developer',
        'Mobile Engineer',
        'Web Developer',
        'Problem Solver'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ===== NAVIGATION =====
function initNavigation() {
    // Mobile menu toggle
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SKILL BARS =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;
    
    function animateSkills() {
        if (animated) return;
        
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            skillBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
            animated = true;
        }
    }
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check
}

// ===== CONTACT FORM =====
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showFormFeedback('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormFeedback('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showFormFeedback('✓ Message sent! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        setTimeout(() => {
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';
        }, 5000);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormFeedback(message, type) {
    if (!formFeedback) return;
    
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;
}

// ===== REVEAL ANIMATION =====
function initReveal() {
    const revealElements = document.querySelectorAll('.section, .project-card, .skill-card, .timeline-item');
    
    function revealOnScroll() {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ===== PARALLAX EFFECT (Optional) =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero && window.innerWidth > 992 && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});
