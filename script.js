// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initPortfolioFilter();
    initModal();
    initContactForm();
    initScrollAnimations();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Portfolio filter functionality
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                // Hide all items first
                item.style.display = 'none';
                item.classList.remove('fade-in');

                // Show items that match the filter
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.classList.add('fade-in');
                    }, 100);
                }
            });
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('projectModal');
    const viewProjectButtons = document.querySelectorAll('.view-project');
    const closeButton = document.querySelector('.close');

    // Project data
 // Project data
const projectData = {
    packaging1: {
        title: 'Emballage Produit Electric',
        description: 'Conception d\'un emballage moderne pour une gamme de produits electric. Le design met l\'accent sur la durabilité et l\'authenticité de la marque, utilisant des matériaux recyclables et des couleurs naturelles pour communiquer les valeurs environnementales du produit.',
        client: 'Sarl 2ge electric',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio',
        year: '2024',
        mainImage: 'assets/images/pack1.png',
        thumbnails: [
            'assets/images/pack1.png',
            'assets/images/pack1.png',
            'assets/images/pack1.png'
        ]
    },
    packaging2: {
        title: 'Emballage Produit Electric',
        description: 'Design d\'emballage écologique pour une ligne de produits electric. Utilisation de matériaux recyclés et de designs inspirés de la nature pour communiquer les valeurs écologiques de la marque.',
        client: 'Sarl 2ge electric',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio',
        year: '2024',
        mainImage: 'assets/images/pack2.png',
        thumbnails: [
            'assets/images/pack2.png',
            'assets/images/pack2.png',
            'assets/images/pack2.png'
        ]
    },
    packaging3: {
        title: 'Emballage Produit Electric',
        description: 'Design d\'emballage produits electric.',
        client: 'Sarl 2ge electric',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio,',
        year: '2023',
        mainImage: 'assets/images/pack3.png',
        thumbnails: [
            'assets/images/pack3.png',
            'assets/images/pack3.png'
        ]
    },
    packaging4: {
        title: 'Emballage Produit electric',
        description: 'Conception d\'emballages pratiques et attractifs pour produits alimentaires. Focus sur la fonctionnalité et la conservation des produits tout en maintenant un design attractif.',
        client: 'FreshFoods',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio',
        year: '2023',
        mainImage: 'assets/images/pack4.png',
        thumbnails: [
            'assets/images/pack4.png',
            'assets/images/pack4.png'
        ]
    },
    packaging5: {
        title: 'Emballage Produit electric',
        description: 'Design d\'emballage haut de gamme pour produits de luxe. Utilisation de textures premium, finitions spéciales et détails sophistiqués pour créer une expérience d\'unboxing mémorable.',
        client: 'Prestige Collection',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio',
        year: '2024',
        mainImage: 'assets/images/pack5.png',
        thumbnails: [
            'assets/images/pack5.png',
            'assets/images/pack5.png',
            'assets/images/pack5.png'
        ]
    },
	    packaging6: {
        title: 'Emballage Produit electric',
        description: 'Design d\'emballage haut de gamme pour produits de luxe. Utilisation de textures premium, finitions spéciales et détails sophistiqués pour créer une expérience d\'unboxing mémorable.',
        client: 'Prestige Collection',
        category: 'Packaging Design',
        tools: 'EngView, Adobe Illustrator, Photoshop, Esko Studio',
        year: '2024',
        mainImage: 'assets/images/pack6.png',
        thumbnails: [
            'assets/images/pack6.png',
            'assets/images/pack6.png',
            'assets/images/pack6.png'
        ]
    },
    branding1: {
        title: 'Identité Industriel',
        description: 'Développement complet de l\'identité visuelle pour un restaurant gastronomique. Le projet inclut la création du logo, de la charte graphique, des supports de communication et de la signalétique, reflétant l\'atmosphère chaleureuse et authentique du lieu.',
        client: 'Sarl 2ge electric',
        category: 'Branding',
        tools: 'Adobe Illustrator, Photoshop',
        year: '2023',
        mainImage: 'assets/images/habillage2.jpg',
        thumbnails: [
            'assets/images/habillage2.jpg',
			'assets/images/habillage5.jpg',
			'assets/images/habillage8.jpg',
            'assets/images/habillage3.jpg',
			'assets/images/habillage6.jpg',
			'assets/images/habillage4.jpg',
			'assets/images/habillage7.jpg',
			
        ]
    },
    branding2: {
        title: 'Startup Tech',
        description: 'Création d\'une identité visuelle moderne et dynamique pour une startup technologique. Le design communique l\'innovation et la fiabilité, avec un système visuel flexible adapté aux différents supports numériques et print.',
        client: 'TechFlow',
        category: 'Branding',
        tools: 'Adobe Illustrator, Figma, After Effects',
        year: '2024',
        mainImage: 'assets/images/catalogue1.jpg',
        thumbnails: [
            'assets/images/catalogue1.jpg',
            'assets/images/catalogue2.jpg',
            'assets/images/catalogue3.jpg',			
			'assets/images/catalogue4.jpg',	
        ]
    },
	    branding3: {
        title: 'Startup Tech',
        description: 'Création d\'une identité visuelle moderne et dynamique pour une startup technologique. Le design communique l\'innovation et la fiabilité, avec un système visuel flexible adapté aux différents supports numériques et print.',
        client: 'TechFlow',
        category: 'Branding',
        tools: 'Adobe Illustrator, Figma, After Effects',
        year: '2024',
        mainImage: 'assets/images/frontside.png',
        thumbnails: [
            'assets/images/frontside.png',
			'assets/images/rightside.png',
			'assets/images/leftside.png',
			'assets/images/Backside.png',
        ]
    },
		    branding4: {
        title: 'Startup Tech',
        description: 'Création d\'une identité visuelle moderne et dynamique pour une startup technologique. Le design communique l\'innovation et la fiabilité, avec un système visuel flexible adapté aux différents supports numériques et print.',
        client: 'TechFlow',
        category: 'Branding',
        tools: 'Adobe Illustrator, Figma, After Effects',
        year: '2024',
        mainImage: 'assets/images/stand3.jpg',
        thumbnails: [
			'assets/images/stand3.jpg',
			'assets/images/stand1.jpg',
			'assets/images/stand2.jpg',
			'assets/images/stand4.jpg',
			'assets/images/stand5.jpg',
			'assets/images/stand6.jpg',
			'assets/images/stand7.jpg',
			'assets/images/stand8.jpg',
			'assets/images/stand9.jpg',
			'assets/images/stand10.jpg',
			'assets/images/stand11.jpg',
			'assets/images/stand12.jpg',
			'assets/images/stand13.jpg',
			'assets/images/stand14.jpg',
			'assets/images/stand15.jpg',
			'assets/images/stand16.jpg',
        ]
    },
    logo1: {
        title: 'Logo Sarl 2GE Electric',
        description: 'Conception d\'un logo épuré et moderne pour une agence de design. L\'approche minimaliste met l\'accent sur la simplicité et l\'élégance, créant une marque mémorable et intemporelle.',
        client: 'Sarl 2ge electric',
        category: 'Logo Design',
        tools: 'Adobe Illustrator',
        year: '2024',
        mainImage: 'assets/images/logo1.jpg',
        thumbnails: [
            'assets/images/logo1.jpg',
            'assets/images/logo1.2.jpg'
        ]
    },
    logo2: {
        title: 'Logo Sgs',
        description: 'Création d\'un logo au style rétro pour une brasserie artisanale. Le design s\'inspire des codes visuels vintage tout en restant contemporain, reflétant l\'authenticité et le savoir-faire traditionnel de la marque.',
        client: 'Sarl 2ge electric',
        category: 'Logo Design',
        tools: 'Adobe Illustrator, Photoshop',
        year: '2022',
        mainImage: 'assets/images/logosgs1.png',
        thumbnails: [
            'assets/images/logosgs1.png',
            'assets/images/logosgs1.png'
        ]
    },
	    logo3: {
        title: 'Logo YozarBio',
        description: 'Création d\'un logo au style rétro pour une brasserie artisanale. Le design s\'inspire des codes visuels vintage tout en restant contemporain, reflétant l\'authenticité et le savoir-faire traditionnel de la marque.',
        client: 'YozarBio Cosmétique',
        category: 'Logo Design',
        tools: 'Adobe Illustrator, Photoshop',
        year: '2022',
        mainImage: 'assets/images/maquetteyozarbio1.png',
        thumbnails: [
            'assets/images/maquetteyozarbio1.png',
            'assets/images/maquetteyozarbio2.png'
        ]
    },
		    logo4: {
        title: 'Logo AmanatAcademy',
        description: 'Création d\'un logo au style rétro pour une brasserie artisanale. Le design s\'inspire des codes visuels vintage tout en restant contemporain, reflétant l\'authenticité et le savoir-faire traditionnel de la marque.',
        client: 'Amanat Academy',
        category: 'Logo Design',
        tools: 'Adobe Illustrator, Photoshop',
        year: '2022',
        mainImage: 'assets/images/logoamanat1.png',
        thumbnails: [
		    'assets/images/logoamanat1.png',
            'assets/images/mockupamanatacademy1.png',
            'assets/images/mockupamanatacademy2.png',
        ]
    },
    poster1: {
        title: 'Affiche Événement',
        description: 'Design d\'affiche pour un festival de musique électronique. Le visuel dynamique et coloré capture l\'énergie de l\'événement, utilisant des éléments graphiques modernes et une typographie impactante.',
        client: 'Electronic Festival',
        category: 'Poster Design',
        tools: 'Adobe Photoshop, Illustrator',
        year: '2024',
        mainImage: 'assets/images/poste1.jpg',
        thumbnails: [
            'assets/images/poste1.jpg',
            'assets/images/poste2.jpg',
			'assets/images/poste3.jpg',
			'assets/images/poste4.jpg',
        ]
    },
    label1: {
        title: 'Étiquette Vin',
        description: 'Conception d\'étiquettes élégantes pour une gamme de vins premium. Le design sophistiqué reflète la qualité du produit, avec une attention particulière à la hiérarchie typographique et aux finitions spéciales.',
        client: 'Domaine Viticole',
        category: 'Label Design',
        tools: 'Adobe Illustrator, Photoshop',
        year: '2023',
        mainImage: 'assets/images/label1.jpg',
        thumbnails: [
            'assets/images/label1.jpg',
            'assets/images/label1-detail1.jpg'
        ]
    }
};

// Open modal
viewProjectButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];

        if (project) {
            document.getElementById('projectTitle').textContent = project.title;
            document.getElementById('projectDescription').textContent = project.description;
            document.getElementById('projectClient').textContent = project.client;
            document.getElementById('projectCategory').textContent = project.category;
            document.getElementById('projectTools').textContent = project.tools;
            document.getElementById('projectYear').textContent = project.year;
            
            // Mettre à jour l'image principale
            const mainImage = document.getElementById('projectMainImage');
            mainImage.src = project.mainImage;
            mainImage.alt = project.title;
            
            // Mettre à jour les miniatures
            const thumbnailsContainer = document.getElementById('projectThumbnails');
            thumbnailsContainer.innerHTML = ''; // Vider les miniatures existantes
            
            if (project.thumbnails && project.thumbnails.length > 0) {
                project.thumbnails.forEach(thumbSrc => {
                    const thumbImg = document.createElement('img');
                    thumbImg.src = thumbSrc;
                    thumbImg.alt = project.title + ' thumbnail';
                    thumbImg.className = 'thumbnail';
                    
                    // Changer l'image principale au clic sur une miniature
                    thumbImg.addEventListener('click', function() {
                        mainImage.src = thumbSrc;
                    });
                    
                    thumbnailsContainer.appendChild(thumbImg);
                });
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

    // Close modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Veuillez remplir tous les champs.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });

    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .portfolio-item, .service-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.image-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `rotate(${scrolled * speed}deg)`;
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-image');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Typing effect for hero title
function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title .gradient-text');
    const text = 'Slimani Tarek';
    let index = 0;
    
    titleElement.textContent = '';
    
    function typeWriter() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(initTypingEffect, 500);
});

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    Object.assign(progressBar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '0%',
        height: '3px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        zIndex: '9999',
        transition: 'width 0.1s ease'
    });
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Lazy loading for images (if real images are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Any scroll-heavy operations can be placed here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Theme toggle (for future enhancement)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    Object.assign(themeToggle.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '1000',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Initialize theme toggle
// initThemeToggle(); // Uncomment to enable theme toggle

// Back to top button
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    Object.assign(backToTopButton.style, {
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '1000',
        transition: 'all 0.3s ease',
        opacity: '0',
        visibility: 'hidden'
    });
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
initBackToTop();
