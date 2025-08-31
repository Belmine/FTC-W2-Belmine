        function handleDemo() {
            alert('Redirection vers la démo gratuite !');
            // Ici vous pouvez ajouter la logique de redirection
            // window.location.href = '/demo';
        }

        // Animation des barres au chargement
        document.addEventListener('DOMContentLoaded', function() {
            const bars = document.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.transition = 'height 0.8s ease-out';
                    bar.style.height = bar.getAttribute('style').match(/height: (\d+%)/)[1];
                }, 600 + (index * 100));
            });
        });
document.addEventListener('DOMContentLoaded', function() {
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const heroButtons = document.querySelector('.hero-buttons');
            const dashboardPreview = document.querySelector('.dashboard-preview');
            
            // Animation séquentielle
            setTimeout(() => {
                heroTitle.style.opacity = '0';
                heroTitle.style.transform = 'translateY(30px)';
                heroTitle.style.transition = 'all 0.8s ease';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 200);
            
            setTimeout(() => {
                heroSubtitle.style.opacity = '0';
                heroSubtitle.style.transform = 'translateY(30px)';
                heroSubtitle.style.transition = 'all 0.8s ease';
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 400);
            
            setTimeout(() => {
                heroButtons.style.opacity = '0';
                heroButtons.style.transform = 'translateY(30px)';
                heroButtons.style.transition = 'all 0.8s ease';
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 600);
            
            setTimeout(() => {
                dashboardPreview.style.opacity = '0';
                dashboardPreview.style.transform = 'translateY(50px)';
                dashboardPreview.style.transition = 'all 1s ease';
                dashboardPreview.style.opacity = '1';
                dashboardPreview.style.transform = 'translateY(0)';
            }, 800);
        });

        // Interactions des boutons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                // Animation de clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Effet hover sur les liens de navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                const arrow = this.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = 'rotate(180deg)';
                }
            });
            
            link.addEventListener('mouseleave', function() {
                const arrow = this.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const mobileToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const closeMenu = document.querySelector('.mobile-menu__close');
            const menuLinks = document.querySelectorAll('.mobile-menu__list a');
            const mobileMenuCta = document.querySelector('.mobile-menu__cta');

            const toggleMenu = (show) => {
                mobileMenu.classList.toggle('active', show);
                document.body.style.overflow = show ? 'hidden' : '';
            };

            mobileToggle.addEventListener('click', () => toggleMenu(true));
            closeMenu.addEventListener('click', () => toggleMenu(false));

            // Fermer le menu quand on clique sur un lien
            menuLinks.forEach(link => {
                link.addEventListener('click', () => toggleMenu(false));
            });
            mobileMenuCta.addEventListener('click', () => toggleMenu(false));



            // Fermer le menu avec la touche Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    toggleMenu(false);
                }
            });
        });










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


         function toggleContent(type) {
            // Update button states
            const buttons = document.querySelectorAll('.toggle-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            
            if (type === 'with') {
                buttons[0].classList.add('active');
            } else {
                buttons[1].classList.add('active');
            }

            // Update content sections
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => section.classList.remove('active'));
            
            document.getElementById(type + '-content').classList.add('active');

            // Update dashboard data and chart
            updateDashboard(type);
        }

        function updateDashboard(type) {
            const amountValue = document.getElementById('amount-value');
            const amountChange = document.getElementById('amount-change');
            const changePercent = document.getElementById('change-percent');
            const positiveChart = document.getElementById('positive-chart');
            const negativeChart = document.getElementById('negative-chart');

            if (type === 'with') {
                amountValue.textContent = '$85,211.00';
                amountChange.className = 'amount-change positive';
                amountChange.innerHTML = '<span class="change-icon">▲</span><span>65,1%</span>';
                positiveChart.style.display = 'block';
                negativeChart.style.display = 'none';
            } else {
                amountValue.textContent = '$25,780.00';
                amountChange.className = 'amount-change negative';
                amountChange.innerHTML = '<span class="change-icon">▼</span><span>45,6%</span>';
                positiveChart.style.display = 'none';
                negativeChart.style.display = 'block';
            }
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            updateDashboard('with');
        });