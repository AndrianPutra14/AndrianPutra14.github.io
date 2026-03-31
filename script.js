// ===== INIT PARTICLES =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#6c63ff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6c63ff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            },
            retina_detect: true
        });
    }
    
    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 4 + 'px';
            cursor.style.top = e.clientY - 4 + 'px';
        });
        
        document.querySelectorAll('a, button, .card, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
            el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
        });
    }
    
    // Typing animation
    const roles = ['Flutter Developer', 'Mobile Engineer', 'Web Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing');
    
    function typeEffect() {
        if (!typingElement) return;
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 300);
            return;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    typeEffect();
    
    // Navbar active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 120;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // Animate skill bars when visible
const skillBars = document.querySelectorAll('.progress');
let animatedSkills = false;

function animateSkills() {
    if (animatedSkills) return;
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            skillBars.forEach(bar => {
                // Ambil nilai dari data-progress
                let targetWidth = bar.getAttribute('data-progress');
                
                // Jika tidak ada data-progress, cek berdasarkan class
                if (!targetWidth) {
                    if (bar.classList.contains('flutter')) targetWidth = '90';
                    else if (bar.classList.contains('dart')) targetWidth = '88';
                    else if (bar.classList.contains('postgresql')) targetWidth = '70';
                    else if (bar.classList.contains('api')) targetWidth = '92';
                    else if (bar.classList.contains('sql')) targetWidth = '80';
                    else if (bar.classList.contains('git')) targetWidth = '87';
                    else targetWidth = '70';
                }
                
                // Terapkan lebar
                bar.style.width = targetWidth + '%';
            });
            animatedSkills = true;
        }
    }
}

// Panggil saat scroll dan load
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
// Panggil sekali untuk memastikan
setTimeout(animateSkills, 500);
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Button interactions
    const viewPortfolioBtn = document.getElementById('viewPortfolioBtn');
    if (viewPortfolioBtn) {
        viewPortfolioBtn.addEventListener('click', () => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const downloadCVBtn = document.getElementById('downloadCVBtn');
if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
        // Ganti dengan path file CV Anda
        const cvPath = 'assets/files/CV.pdf';
        
        // Buat link download
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CV.pdf'; // Nama file saat didownload
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
    
    const contactQuickBtn = document.getElementById('contactQuickBtn');
    if (contactQuickBtn) {
        contactQuickBtn.addEventListener('click', () => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (formFeedback) {
                formFeedback.textContent = '✓ Message sent! I\'ll reply soon.';
                formFeedback.style.color = '#6cff9e';
                contactForm.reset();
                setTimeout(() => {
                    formFeedback.textContent = '';
                }, 4000);
            }
        });
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero && window.innerWidth > 768) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - scrolled / 700;
        }
    });
    
    // Add hover animation on project cards
    const cards = document.querySelectorAll('.project-card, .skill-card-single');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
            header.style.backdropFilter = 'blur(16px)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.85)';
        }
    });
});