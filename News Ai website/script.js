 const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const searchIconDesktop = document.getElementById('search-icon-desktop');
        const searchInputContainer = document.getElementById('search-input-container');
        const searchInput = document.getElementById('search-input');
        const closeSearchButton = document.getElementById('close-search');

        // Refresh button elements
        const refreshButtonDesktop = document.getElementById('refresh-button-desktop');
        const refreshButtonMobile = document.getElementById('refresh-button-mobile'); // Mobile refresh button in hamburger menu

        // Dark mode toggle elements
        const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');
        const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
        const sunIcons = document.querySelectorAll('.sun-icon');
        const moonIcons = document.querySelectorAll('.moon-icon');

        // Mobile dropdown toggles
        const mobileCategoriesToggle = document.getElementById('mobile-categories-toggle');
        const mobileCategoriesOptions = document.getElementById('mobile-categories-options');
        const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
        const mobileFilterOptions = document.getElementById('mobile-filter-options');

        // Logo link
        const logoLink = document.getElementById('logo-link');

        // Hero section element for kaleidoscope interaction
        const heroSection = document.getElementById('hero-section');

        // News articles container for rendering
        const newsArticlesContainer = document.getElementById('news-articles-container');

        // --- News Article Data (Expanded) ---
        const newsArticles = [
            {
                id: 1,
                title: "Apple Sports App Updated With Improved Access to Standings and NHL Goal Scorers",
                author: "Eric Slivka",
                date: "May 31, 2025",
                summary: "Apple today updated its Apple Sports app with several tweaks to improve the user experience, including at-a-glance standings on league pages, highlighting of goal scorers at the top of NHL game pages, and support for the upcoming Relegation Playoff in the Ger...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Sports+News",
                category: "Sports",
                filterType: "Most Recent"
            },
            {
                id: 2,
                title: "Pokémon TCG's Return Of Team Rocket Is A Triumph",
                author: "John Walker",
                date: "May 30, 2025",
                summary: "Oh it's fun to have good news! The latest set from the Pokémon TCG, Scarlet & Violet Destined Rivals, is a top-notch collection of cards bursting with Team Rocket antics, which sports (in my limited experience, at least) pull rates I don't believe we've seen...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Gaming+News",
                category: "Gaming",
                filterType: "Trending"
            },
            {
                id: 3,
                title: "Transfer rumors, news: Gunners shift their sights towards Leão",
                author: "Danny Lewis",
                date: "May 29, 2025",
                summary: "Could AC Milan star Rafael Leão be headed to Arsenal this summer? Transfer Talk has the latest news, gossip and rumors...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Football+Transfer",
                category: "Sports",
                filterType: "Most Popular"
            },
            {
                id: 4,
                title: "The new Motorola Edge 2025 aims to 'redefine' with an AI key and a tough, stylish design",
                author: "Unknown",
                date: "May 28, 2025",
                summary: "Motorola's latest flagship phone boasts an innovative AI key for quick access to smart features and a durable yet elegant build, promising a new era in smartphone design...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Tech+News",
                category: "Technology",
                filterType: "Most Recent"
            },
            {
                id: 5,
                title: "Despite the India-Pakistan ceasefire, these five measures remain",
                author: "Unknown",
                date: "May 27, 2025",
                summary: "India and Pakistan have ceased military hostilities, but diplomatic retaliatory measures remain in place, impacting trade, travel, and cultural exchange...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Global+Affairs",
                category: "Global Affairs",
                filterType: "Trending"
            },
            {
                id: 6,
                title: "Voyage-3.5 and Voyage-3.5-lite: improved quality for a new retrieval frontier",
                author: "Unknown",
                date: "May 26, 2025",
                summary: "TLDR—We're excited to introduce voyage-3.5 and voyage-3.5-lite, the latest generation of our embedding models. These models offer improved retrieval quality over voyage-3 and voyage-3-lite at th...",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=AI+Development",
                category: "AI Development",
                filterType: "Most Recent"
            },
            {
                id: 7,
                title: "Breakthrough in Quantum Computing: New Qubit Stability Achieved",
                author: "Dr. Anya Sharma",
                date: "May 25, 2025",
                summary: "Researchers at CERN have announced a significant leap in quantum computing, developing new methods to maintain qubit coherence for extended periods, paving the way for more powerful quantum processors.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Quantum+Tech",
                category: "Technology",
                filterType: "Most Popular"
            },
            {
                id: 8,
                title: "New Study Links Gut Microbiome to Mental Health Improvements",
                author: "Health Daily",
                date: "May 24, 2025",
                summary: "A groundbreaking study published in 'Nature Medicine' reveals direct correlations between the diversity of gut bacteria and improved symptoms of anxiety and depression, suggesting new therapeutic avenues.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Health+Research",
                category: "Health",
                filterType: "Most Recent"
            },
            {
                id: 9,
                title: "Mars Rover 'Perseverance' Discovers Evidence of Ancient River Systems",
                author: "NASA JPL",
                date: "May 23, 2025",
                summary: "The Perseverance rover has sent back compelling data indicating the presence of extensive ancient river systems on Mars, further strengthening the theory of past liquid water on the red planet.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Space+Science",
                category: "Science",
                filterType: "Trending"
            },
            {
                id: 10,
                title: "Global Summit on Climate Change Concludes with Ambitious New Targets",
                author: "Reuters",
                date: "May 22, 2025",
                summary: "Leaders from over 150 nations have agreed to a new set of ambitious climate targets at the UN Global Climate Summit, aiming for accelerated decarbonization and increased investment in renewable energy.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Climate+Summit",
                category: "Global Affairs",
                filterType: "Most Popular"
            },
            {
                id: 11,
                title: "Esports Industry Sees Record Investment in Q2 2025",
                author: "Gaming Insider",
                date: "May 21, 2025",
                summary: "The esports sector continues its rapid growth, with Q2 2025 reporting unprecedented levels of investment from venture capital firms and traditional sports organizations, signaling a maturing market.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Esports+Finance",
                category: "Gaming",
                filterType: "Most Recent"
            },
            {
                id: 12,
                title: "New AI Model Achieves Human-Level Performance in Medical Diagnosis",
                author: "AI Research",
                date: "May 20, 2025",
                summary: "A team at DeepMind has developed an AI model, 'MedScan', that demonstrates diagnostic accuracy on par with human specialists across several complex medical conditions, promising to revolutionize healthcare.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=AI+Healthcare",
                category: "AI Development",
                filterType: "Trending"
            },
            {
                id: 13,
                title: "Cricket World Cup 2025: Early Favorites Emerge After Group Stages",
                author: "Sports Analyst",
                date: "May 19, 2025",
                summary: "With the group stages concluding, several teams have established themselves as strong contenders for the Cricket World Cup 2025 title, showcasing dominant performances in batting and bowling.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Cricket+WC",
                category: "Sports",
                filterType: "Most Recent"
            },
            {
                id: 14,
                title: "Breakthrough in Alzheimer's Research: New Drug Shows Promise",
                author: "Medical News Today",
                date: "May 18, 2025",
                summary: "Clinical trials for a new experimental drug for Alzheimer's disease have yielded positive results, showing significant reduction in cognitive decline and amyloid plaque buildup in patients.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Alzheimers+Drug",
                category: "Health",
                filterType: "Most Popular"
            },
            {
                id: 15,
                title: "New Exoplanet Discovered with Potential for Liquid Water",
                author: "Astronomical Journal",
                date: "May 17, 2025",
                summary: "Astronomers have announced the discovery of a new exoplanet, 'Kepler-186f II', located within its star's habitable zone, with atmospheric conditions suggesting the presence of liquid water.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Exoplanet",
                category: "Science",
                filterType: "Most Recent"
            },
            {
                id: 16,
                title: "Cybersecurity Firm Uncovers Major Global Ransomware Operation",
                author: "CyberSec News",
                date: "May 16, 2025",
                summary: "A leading cybersecurity firm has dismantled a sophisticated global ransomware network responsible for attacks on critical infrastructure and businesses worldwide, preventing billions in damages.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Cybersecurity",
                category: "Technology",
                filterType: "Archived"
            },
            {
                id: 17,
                title: "AI Ethics: New Guidelines Proposed for Responsible AI Development",
                author: "AI Policy Forum",
                date: "May 15, 2025",
                summary: "An international consortium of AI experts and policymakers has released a comprehensive set of guidelines for ethical AI development, focusing on transparency, fairness, and accountability.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=AI+Ethics",
                category: "AI Development",
                filterType: "Most Popular"
            },
            {
                id: 18,
                title: "Gaming Console Sales Soar in Q2 Amidst New Releases",
                author: "Game Industry Report",
                date: "May 14, 2025",
                summary: "The second quarter of 2025 saw a significant surge in gaming console sales, driven by the release of highly anticipated titles and aggressive marketing campaigns from major console manufacturers.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Console+Sales",
                category: "Gaming",
                filterType: "Archived"
            },
            {
                id: 19,
                title: "New Vaccine for Malaria Shows Promising Results in Phase 3 Trials",
                author: "WHO News",
                date: "May 13, 2025",
                summary: "A novel malaria vaccine has demonstrated high efficacy in large-scale Phase 3 clinical trials across multiple African nations, offering new hope in the fight against the deadly disease.",
                imageUrl: "https://placehold.co/600x300/F8F9FA/343A40?text=Malaria+Vaccine",
                category: "Health",
                filterType: "Trending"
            }
        ];

        // --- Header Functionality ---

        // Toggle Mobile Menu
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            searchInputContainer.classList.add('hidden'); // Hide search if menu is opened
            // Ensure mobile dropdowns are closed when hamburger menu is toggled
            mobileFilterOptions.classList.add('hidden');
            mobileCategoriesOptions.classList.add('hidden');
        });

        // Function to toggle search input visibility
        function toggleSearchInput() {
            searchInputContainer.classList.toggle('hidden');
            if (!searchInputContainer.classList.contains('hidden')) {
                searchInput.focus(); // Focus on input when visible
            }
            mobileMenu.classList.add('hidden'); // Hide mobile menu if search is opened
            mobileFilterOptions.classList.add('hidden');
            mobileCategoriesOptions.classList.add('hidden');
        }

        // Event listeners for search icons
        searchIconDesktop.addEventListener('click', toggleSearchInput);
        // searchIconMobile is now inside mobile-menu, its listener is added below
        document.getElementById('search-icon-mobile').addEventListener('click', toggleSearchInput);
        closeSearchButton.addEventListener('click', toggleSearchInput);

        // Close search when clicking outside (optional, but good for UX)
        document.addEventListener('click', (event) => {
            if (!searchInputContainer.contains(event.target) && !searchIconDesktop.contains(event.target) && !searchInputContainer.classList.contains('hidden')) {
                // Check if the click was not on the mobile search button itself, as it's now inside the menu
                const isClickOnMobileSearchButton = (event.target.closest('#search-icon-mobile') === document.getElementById('search-icon-mobile'));
                if (!isClickOnMobileSearchButton) {
                    searchInputContainer.classList.add('hidden');
                }
            }
        });

        // Mobile Filter Toggle (inside hamburger menu)
        mobileFilterToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            mobileFilterOptions.classList.toggle('hidden');
            mobileCategoriesOptions.classList.add('hidden'); // Close other dropdown
        });

        // Mobile Categories Toggle (inside hamburger menu)
        mobileCategoriesToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            mobileCategoriesOptions.classList.toggle('hidden');
            mobileFilterOptions.classList.add('hidden'); // Close other dropdown
        });

        // --- Theme Mode Functionality ---

        // Theme states array: 'dark', 'light', 'extra-bright'
        const themes = ['dark', 'light', 'extra-bright'];
        let currentThemeIndex = 0; // Will be set by loadTheme

        // Function to apply the selected theme
        function applyTheme(themeName) {
            // Remove all theme classes first
            document.documentElement.classList.remove(...themes);
            // Add the new theme class
            document.documentElement.classList.add(themeName);

            // Update icons based on theme
            if (themeName === 'dark') {
                sunIcons.forEach(icon => icon.classList.add('hidden'));
                moonIcons.forEach(icon => icon.classList.remove('hidden'));
            } else { // 'light' or 'extra-bright'
                sunIcons.forEach(icon => icon.classList.remove('hidden'));
                moonIcons.forEach(icon => icon.classList.add('hidden'));
            }
            // Update kaleidoscope colors based on the new theme
            updateKaleidoscopeColors();
        }

        // Load theme preference from localStorage or set default
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme && themes.includes(savedTheme)) {
                currentThemeIndex = themes.indexOf(savedTheme);
            } else {
                currentThemeIndex = 1; // Default to 'light' if no saved theme or invalid
            }
            applyTheme(themes[currentThemeIndex]);
        }

        // Toggle theme and save preference
        function toggleTheme() {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            const newTheme = themes[currentThemeIndex];
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        }

        // Event listeners for dark mode toggles
        darkModeToggleDesktop.addEventListener('click', toggleTheme);
        darkModeToggleMobile.addEventListener('click', toggleTheme);

        // Load theme on page load
        document.addEventListener('DOMContentLoaded', loadTheme);

        // --- Logo and Refresh Button Functionality ---

        // Logo click to scroll to top
        logoLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior (page reload)
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling effect
            });
        });

        // Refresh button click to reload page
        function handleRefresh() {
            location.reload(); // Reloads the entire page
            // For a more advanced SPA, you might fetch new data here instead of a full reload
            // e.g., fetchDataAndUpdateUI();
        }
        refreshButtonDesktop.addEventListener('click', handleRefresh);
        refreshButtonMobile.addEventListener('click', handleRefresh);


        // --- Scroll to Top Button Functionality ---
        const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        // Scroll to top on button click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling effect
            });
        });

        // --- Kaleidoscope Background Animation ---
        const canvas = document.getElementById('kaleidoscope-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        // Increased numParticles for a denser animation
        const numParticles = 120; // Number of particles
        // Increased maxLineDistance for more connections
        const maxLineDistance = 200; // Max distance for particles to connect with a line
        let animationFrameId; // To store the requestAnimationFrame ID

        // Global mouse position for interaction
        // Increased radius for a more noticeable interaction area
        let mouse = { x: null, y: null, radius: 150 }; // radius for interaction effect

        // Flag to check if mouse is within hero section
        let isMouseInHeroSection = false;

        // Function to set canvas size
        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Function to get current kaleidoscope colors from CSS variables
        function getKaleidoscopeColors() {
            const style = getComputedStyle(document.documentElement);
            return {
                color1: style.getPropertyValue('--kaleidoscope-color-1').trim(),
                color2: style.getPropertyValue('--kaleidoscope-color-2').trim()
            };
        }

        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                // Slightly increased base movement speed
                this.baseVx = (Math.random() - 0.5) * 0.7;
                this.baseVy = (Math.random() - 0.5) * 0.7;
                this.vx = this.baseVx;
                this.vy = this.baseVy;
                // Slightly increased particle size
                this.radius = Math.random() * 0.8 + 0.8; // Small dots (0.8 to 1.6)
                this.color = Math.random() > 0.5 ? getKaleidoscopeColors().color1 : getKaleidoscopeColors().color2;
            }

            // Update particle position and apply mouse interaction if active
            update() {
                // Interaction with mouse if mouse is in hero section and mouse coordinates are available
                if (isMouseInHeroSection && mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        // Increased maxForce for a stronger attraction
                        const maxForce = 0.08; // Max force of attraction
                        const force = (mouse.radius - distance) / mouse.radius * maxForce;

                        this.vx += forceDirectionX * force;
                        this.vy += forceDirectionY * force;

                        // Limit velocity to prevent particles from flying off too fast
                        const maxSpeed = 2;
                        this.vx = Math.min(Math.max(this.vx, -maxSpeed), maxSpeed);
                        this.vy = Math.min(Math.max(this.vy, -maxSpeed), maxSpeed);
                    } else {
                        // Gradually revert to base velocity if outside interaction radius
                        this.vx += (this.baseVx - this.vx) * 0.02;
                        this.vy += (this.baseVy - this.vy) * 0.02;
                    }
                } else {
                    // Revert to base velocity if mouse leaves hero section or is not tracked
                    this.vx += (this.baseVx - this.vx) * 0.02;
                    this.vy += (this.baseVy - this.vy) * 0.02;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            // Draw particle
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        function initParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        }

        // Update kaleidoscope colors for existing particles based on current theme
        function updateKaleidoscopeColors() {
            const colors = getKaleidoscopeColors();
            particles.forEach(p => {
                p.color = Math.random() > 0.5 ? colors.color1 : colors.color2;
            });
        }

        // Animation loop
        function animateKaleidoscope() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            const heroRect = heroSection.getBoundingClientRect(); // Get hero section bounds dynamically

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw lines between nearby particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxLineDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);

                        // Increased base line opacity
                        let lineOpacity = (1 - (distance / maxLineDistance)) * 0.8; // Base opacity
                        // Increased base line width
                        let lineWidth = 0.8; // Base line width

                        // Check if both particles are within the hero section's visible bounds
                        const p1InHero = particles[i].x >= heroRect.left && particles[i].x <= heroRect.right &&
                                         particles[i].y >= heroRect.top && particles[i].y <= heroRect.bottom;
                        const p2InHero = particles[j].x >= heroRect.left && particles[j].x <= heroRect.right &&
                                         particles[j].y >= heroRect.top && particles[j].y <= heroRect.bottom;

                        // Enhance lines if mouse is in hero section AND both particles are within hero section
                        if (isMouseInHeroSection && p1InHero && p2InHero) {
                            // Increased hover enhancement for lines
                            lineOpacity = Math.min(1, lineOpacity * 1.8); // Make lines brighter, cap at 1
                            lineWidth = 1.5; // Make lines slightly thicker
                        }

                        ctx.strokeStyle = `rgba(0, 123, 255, ${lineOpacity})`; // Use Horizon Blue for lines
                        ctx.lineWidth = lineWidth;
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animateKaleidoscope);
        }

        // --- Event Listeners for Interaction ---

        // Update global mouse position
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Reset mouse position when mouse leaves window to stop interaction
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Set flag when mouse enters/leaves hero section
        heroSection.addEventListener('mouseenter', () => {
            isMouseInHeroSection = true;
        });
        heroSection.addEventListener('mouseleave', () => {
            isMouseInHeroSection = false;
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            setCanvasSize();
            initParticles(); // Re-initialize particles on resize to distribute them
        });

        // Initialize and start animation when the DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            setCanvasSize();
            initParticles();
            animateKaleidoscope();
            renderArticles(newsArticles); // Initial render of all articles
        });

        // --- Article Rendering and Filtering ---

        function renderArticles(articlesToDisplay) {
            newsArticlesContainer.innerHTML = ''; // Clear current articles

            if (articlesToDisplay.length === 0) {
                newsArticlesContainer.innerHTML = '<p class="col-span-full text-center text-muted-stone text-lg py-10">No articles found matching your criteria.</p>';
                return;
            }

            articlesToDisplay.forEach(article => {
                const articleHtml = `
                    <div class="bg-clear-sky-white rounded-xl shadow-lg overflow-hidden border border-muted-stone/30 hover:shadow-xl transition-shadow duration-300
                                flex flex-col md:flex-row news-item-card">
                        <div class="md:w-1/3 flex-shrink-0">
                            <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-48 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none">
                        </div>
                        <div class="p-6 flex-grow">
                            <h3 class="text-xl font-poppins font-semibold text-deep-slate mb-2">${article.title}</h3>
                            <p class="text-sm text-muted-stone font-inter mb-3">Author: ${article.author} | ${article.date}</p>
                            <p class="text-deep-slate font-inter text-base mb-4">${article.summary}</p>
                            <a href="#" class="inline-block bg-horizon-blue text-clear-sky-white font-poppins font-medium py-2 px-4 rounded-lg hover:bg-action-orange transition-colors duration-300">Read More</a>
                        </div>
                    </div>
                `;
                newsArticlesContainer.insertAdjacentHTML('beforeend', articleHtml);
            });
        }

        // Event listeners for filter items (desktop and mobile)
        document.querySelectorAll('.category-filter-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                const filterType = e.target.dataset.filterType; // 'category' or 'filter'
                const filterValue = e.target.dataset.filterValue; // e.g., 'Technology', 'Most Recent', 'all'

                let filtered = [...newsArticles]; // Start with all articles

                if (filterValue !== 'all') {
                    if (filterType === 'category') {
                        filtered = newsArticles.filter(article => article.category === filterValue);
                    } else if (filterType === 'filter') {
                        filtered = newsArticles.filter(article => article.filterType === filterValue);
                    }
                }
                renderArticles(filtered);

                // Close mobile menu/dropdowns after selection
                mobileMenu.classList.add('hidden');
                mobileCategoriesOptions.classList.add('hidden');
                mobileFilterOptions.classList.add('hidden');
            });
        });
