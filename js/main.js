//Js pour le pricing section 

// Toggle billing functionality
        const billingToggle = document.getElementById('billingToggle');
        const toggleLabels = document.querySelectorAll('.toggle-label');
        const priceAmounts = document.querySelectorAll('.price-amount');
            const title = document.querySelector(".pricing-title");

 

        
        let isYearly = false;
        
        // Price data
        const prices = {
            free: { monthly: 0, yearly: 0 },
            pro: { monthly: 12, yearly: 7 },
            ultimate: { monthly: 33, yearly: 18 }
        };
        
        function updatePrices() {
            const period = isYearly ? 'yearly' : 'monthly';
            priceAmounts[0].textContent = `$${prices.free[period]}`;
            priceAmounts[1].textContent = `$${prices.pro[period]}`;
            priceAmounts[2].textContent = `$${prices.ultimate[period]}`;
        }
        
        function toggleBilling() {
            isYearly = !isYearly;
            billingToggle.classList.toggle('yearly', isYearly);
            
            toggleLabels.forEach(label => {
                label.classList.remove('active');
                if ((isYearly && label.dataset.period === 'yearly') || 
                    (!isYearly && label.dataset.period === 'monthly')) {
                    label.classList.add('active');
                }
            });
            
            updatePrices();
        }
        
        billingToggle.addEventListener('click', toggleBilling);
        toggleLabels.forEach(label => {
            label.addEventListener('click', () => {
                const shouldBeYearly = label.dataset.period === 'yearly';
                if (shouldBeYearly !== isYearly) {
                    toggleBilling();
                }
            });
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.cta-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

         function updateTitle() {
            if (window.innerWidth < 768) {
            title.textContent = "Our User Kind Words";
            } else {
            title.textContent = "Ready to Get Started?";
            }
        }

        // Exécution au chargement
        updateTitle();

        // Exécution au redimensionnement
        window.addEventListener("resize", updateTitle);



//Animation pour testimonials

let currentSlide = 0;
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const totalSlides = testimonialCards.length;
        const track = document.getElementById('testimonialsTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Fonction pour calculer les slides visibles selon la largeur d'écran
        function getSlidesPerView() {
            return window.innerWidth >= 768 ? 3 : 1;
        }
        
        function updateSlide() {
            const slidesPerView = getSlidesPerView();
            const slideWidth = 100 / slidesPerView;
            const translateX = -(currentSlide * slideWidth);
            track.style.transform = `translateX(${translateX}%)`;
            
            // Update navigation buttons
            const maxSlide = totalSlides - slidesPerView;
            prevBtn.disabled = currentSlide <= 0;
            nextBtn.disabled = currentSlide >= maxSlide;
            
            // Update active state
            prevBtn.classList.toggle('active', currentSlide > 0);
            nextBtn.classList.toggle('active', currentSlide < maxSlide);
        }
        
        function nextSlide() {
            const slidesPerView = getSlidesPerView();
            const maxSlide = totalSlides - slidesPerView;
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlide();
            }
        }
        
        function previousSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlide();
            }
        }
        
        // Reset slide position on window resize
        window.addEventListener('resize', () => {
            const slidesPerView = getSlidesPerView();
            const maxSlide = totalSlides - slidesPerView;
            if (currentSlide > maxSlide) {
                currentSlide = maxSlide;
            }
            updateSlide();
        });
        
        // Initialize
        updateSlide();
        
        // Auto-play functionality (optional)
        let autoPlayInterval;
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                const slidesPerView = getSlidesPerView();
                const maxSlide = totalSlides - slidesPerView;
                if (currentSlide >= maxSlide) {
                    currentSlide = 0;
                } else {
                    currentSlide++;
                }
                updateSlide();
            }, 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Start auto-play
        startAutoPlay();
        
        // Pause auto-play on hover
        const section = document.querySelector('.testimonials-section');
        section.addEventListener('mouseenter', stopAutoPlay);
        section.addEventListener('mouseleave', startAutoPlay);



// Animation au scroll pour le footer
        const footer = document.querySelector('.footer');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        observer.observe(footer);

        // Animation des liens au hover
        document.querySelectorAll('.footer-link, .social-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        // Gestion des clics sur les liens sociaux (démo)
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const socialName = this.textContent.trim();
                console.log(`Redirection vers ${socialName}`);
                
                // Effet visuel de clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });