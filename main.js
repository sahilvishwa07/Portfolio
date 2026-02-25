
    // Typing animation effect
    const typing = document.querySelector('.typing');
    const words = ['Web Designer', 'Frontend Developer', 'UI/UX Enthusiast'];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        let current = words[wordIndex];
        if (isDeleting) {
            typing.textContent = current.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        } else {
            typing.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else {
                setTimeout(type, 120);
            }
        }
    }
    type();

    // Scroll-to-top button
    const scrollBtn = document.getElementById('scrollTopBtn');
    window.onscroll = function() {
        scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
    };
    scrollBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Dark mode toggle
    const darkBtn = document.getElementById('darkModeToggle');
    darkBtn.onclick = function() {
        document.body.classList.toggle('light-mode');
        darkBtn.querySelector('i').classList.toggle('fa-moon');
        darkBtn.querySelector('i').classList.toggle('fa-sun');
    };
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when a nav link is clicked
        navbar.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
            });
        });
    }
    