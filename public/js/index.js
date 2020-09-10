


gsap.from(".landing", {
    duration: 0.5,
    opacity: 0,
    ease: "power1",
    delay: 3
})

gsap.to(".vid-bg", {
    duration: 0.5,
    opacity: 0,
    ease: "power1",
    delay: 3
})

gsap.from(".menu-link", {
    duration: 0.5,
    opacity: 0,
    ease: "power1",
    delay: 4
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".menu-link", {
    scrollTrigger: {
        trigger: ".skinny",
        // start: "top top",
        toggleActions: "restart none none reset"
    },
    color: "white"
})