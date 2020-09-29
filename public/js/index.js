function clickContact() {
    document.getElementsByClassName("menu-link").style.display = 'none';
}

function vwResponse(x) {

    if (x.matches) {
    } else {

        gsap.to(".vid-bg", {
            duration: 0.5,
            opacity: 0,
            ease: "power1",
            delay: 2,
            display: "inline-block"
        })

        // gsap.from("main", {
        //     duration: 0.5,
        //     opacity: 0,
        //     ease: "power1",
        //     delay: 2.2
        // })

// Menu for sections
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".menu-link", {
            scrollTrigger: {
                trigger: ".skinny",
                start: "top 100px",
                end: "top top",
                scrub: true,
                // markers: "show",
                toggleActions: "restart none none none"
            },
            color: "white"
        })

        gsap.to(".menu-link", {
            scrollTrigger: {
                trigger: ".skinny",
                start: "25% 16%",
                end: "25% 12%",
                scrub: true,
                // markers: "show",
                toggleActions: "restart none none none"
            },
            opacity: 0
        })

        gsap.to(".menu-link", {
            scrollTrigger: {
                trigger: ".journalism",
                start: "top 100px",
                end: "top 100px",
                // markers: "show",
                scrub: true,
                toggleActions: "restart none none none"
            },
            immediateRender: false, // for dealing with logic issues
            color: "var(--main-color)",
            opacity: 100
        })
        
        gsap.to(".menu-link", {
            scrollTrigger: {
                trigger: ".journalism",
                start: "75% 65%",
                end: "75% 67%",
                scrub: true,
                // markers: "show",
                toggleActions: "restart none none none"
            },
            immediateRender: false,
            opacity: 0
        })

// Skinny covers
        gsap.from(".skinny-cover1", {
            scrollTrigger: {
                trigger: ".skinny",
                start: "25% center",
                end: "top 110px",
                scrub: true,
            },
            x: 150,
            ease: "power4",
        })

        gsap.from(".skinny-cover2", {
            scrollTrigger: {
                trigger: ".skinny",
                start: "35% center",
                end: "35% 35%",
                scrub: true,
                // markers: "show"
            },
            y: 200,
            ease: "power2",
        })

        gsap.from(".skinny-cover3", {
            scrollTrigger: {
                trigger: ".skinny",
                start: "top 200px",
                end: "top top",
                scrub: true,
            },
            y: -400,
            ease: "power1",
        })

        // let snapSections = gsap.utils.toArray(".snap"),
        // snapper;
        // ScrollTrigger.create({
        //     trigger: snapSections[0], // first section
        //     start: "top bottom",
        //     endTrigger: snapSections[snapSections.length-1], // last section
        //     end: "bottom top",
        //     onRefresh: self => {
        //         // translate the offsetTop of each section into a progress value between the ScrollTrigger's start and end for snapping
        //         let values = snapSections.map(section => gsap.utils.normalize(self.start, self.end, section.offsetTop));
        //         values.push(1); // make sure it can snap to the end of the last section.
        //         snapper = gsap.utils.snap(values); // create a function that'll do the snapping for us. Just pass in a value and it'll return the closest one in the Array.
        //     },
        //     snap: value => snapper(value)
        // });

    }
}

var x = window.matchMedia("(max-width: 700px)")
vwResponse(x) // Listener function at runtime
x.addEventListener(vwResponse) // On state changes