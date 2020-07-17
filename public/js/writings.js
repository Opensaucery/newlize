gsap.from(".read", {
    duration: 1,
    opacity: 0,
    ease: "power1"
})

gsap.utils.toArray(".read").forEach(p => {
    let hover = gsap.to(p, {backgroundColor: "#765AC5", duration: .1, paused: true, ease: "power1.inOut"})
    // let hoverTxt = gsap.to(p, {css:{color: "#ffffff"}, duration: .1, paused: true, ease: "power1.inOut"})
    p.addEventListener("mouseenter", () => hover.play());
    p.addEventListener("mouseleave", () => hover.reverse());
    // p.addEventListener("mouseenter", () => hoverTxt.play());
    // p.addEventListener("mouseleave", () => hoverTxt.reverse());
  });

//   var tl = gsap.timeline()
//   tl.to(p, {backgroundColor: "#765AC5", duration: .1, paused: true, ease: "power1.inOut"})
//   .to(p, {css:{color: "#ffffff"}, duration: .1, paused: true, ease: "power1.inOut"})
