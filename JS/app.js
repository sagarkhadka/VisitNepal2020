// To animate the nav bar in mobile view

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll ('nav ul li');
    //Toggel nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3 }s`;
                /* 
                    index here is the total number of nav link available and is divided by 7 to make a animation transition to all the link.
                    And +0.5 is to add delay on the link animation to make it smother.
                */
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
