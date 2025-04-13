
    // // Enhanced animation control
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.animation = 'none';
    //             entry.target.offsetHeight; // Trigger reflow
    //             entry.target.style.animation = null;
                
    //             // Animate child elements
    //             const children = entry.target.querySelectorAll('.project, .certification-item, .soft-skill');
    //             children.forEach((child, index) => {
    //                 child.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    //             });
    //         }
    //     });
    // }, {
    //     threshold: 0.2,
    //     rootMargin: '50px'
    // });

    // // Observe sections
    // document.querySelectorAll('.section').forEach(section => {
    //     observer.observe(section);
    // });

    // // Initialize soft skills animation
    // document.querySelectorAll('.soft-skill').forEach((skill, index) => {
    //     skill.style.setProperty('--i', index);
    // });

    // // Smooth scroll behavior
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
