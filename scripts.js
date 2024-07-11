document.addEventListener("DOMContentLoaded", () => {
    const animateElement = (element, animation, duration, delay = 0) => {
        element.style.transition = `all ${duration}s ease ${delay}s`;
        for (const [key, value] of Object.entries(animation)) {
            element.style[key] = value;
        }
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // about-me
    const aboutTextContent = document.querySelector("#about-me .text-content");
    aboutTextContent.style.transform = 'translateX(-100px)';
    aboutTextContent.style.opacity = '0';

    // testimonials
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial) => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(50px)';
    });

    // contact-links
    const contactLinks = document.querySelectorAll(".contact-links a");
    
    const showContactItems = () => {
        contactLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add("show");
            }, index * 300); 
        });
    };

    const handleScroll = () => {
        if (isElementInViewport(aboutTextContent)) {
            animateElement(aboutTextContent, { transform: 'translateX(0)', opacity: '1' }, 0.5);
        }

        testimonials.forEach((testimonial, index) => {
            if (isElementInViewport(testimonial)) {
                animateElement(testimonial, { transform: 'translateY(0)', opacity: '1' }, 0.5, index * 0.1);
            }
        });

        const contactSection = document.querySelector("#contact");
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            showContactItems();
            window.removeEventListener('scroll', handleScroll); 
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Show contact items immediately if the section is already in view
    const contactSection = document.querySelector("#contact");
    const rect = contactSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        showContactItems();
        window.removeEventListener('scroll', handleScroll);
    }

    // Navbar toggle
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarLinks = document.querySelector(".navbar-links");
    
    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("show");
    });
});
