gsap.from(".intro", {
    duration: 1,
    opacity: 0,
    y: 25,
    ease: "power1"
})

gsap.utils.toArray("p").forEach(p => {
    let hover = gsap.to(p, {scale: 1.08, duration: .28, paused: true, ease: "power1.inOut"});
    p.addEventListener("mouseenter", () => hover.play());
    p.addEventListener("mouseleave", () => hover.reverse());
  });


  