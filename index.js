$(document).ready( ()=> {
    
    if($('#particle-js').length) {
        console.log("particle-js element found"); // Add this for debugging
        
        particlesJS('particle-js', {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#774ef9",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    } else {
        console.error("particle-js element not found"); // Add this for debugging
    }
});


var typed = new Typed('.multiple-text',{
    strings: ["Frontend Developer","ML Practitioner","UI UX Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



// custom navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 75) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
;