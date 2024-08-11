// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// Sync Locomotive Scroll with ScrollTrigger
scroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

document.addEventListener("DOMContentLoaded", function () {
    
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 640) {
            navLinks.classList.remove("show");
        }
    });
});


var tl = gsap.timeline();


tl.from(".line1",{
    opacity: 0,
    y: -100,
    duration: 2,
    // stagger: 0.1,
    ease: Power3.easeInOut
})

tl.from(".line2",{
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: Power3.easeInOut
})

tl.from(".line3",{
    stagger: 0.1,
    opacity: 0,
    y: 100,
    duration: 1,
    ease: Power3.easeInOut
})



tl.from(".image", {
    opacity: 0,         
    y: -100,            
    rotation: 180,     
    duration: 2,   
    ease: Power3.easeInOut  
});


// GSAP animations for each section with individual ScrollTriggers
gsap.from(".merchSection", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: ".merchSection",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#cloth", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: "#cloth",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".merchandiseProducts", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: ".merchandiseProducts",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#mername", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: "#mername",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".productslist", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: ".productslist",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".Bmiandexcise", {
    scrollTrigger: {
        scroller: "#main", 
        trigger: ".Bmiandexcise",
        start: "top 50%",
        end: "bottom 20%", 
        toggleActions: "play none none reverse",
    },
    width: "20%",
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "power3.out",
});
