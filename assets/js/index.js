$(".content-box a").hover(
    function () {
        $(this).closest(".project").find(".left-area").addClass("on");
    },
    function () {
        $(this).closest(".project").find(".left-area").removeClass("on");
    }
);

gsap.from(".footer .tag span", {
    scrollTrigger: {
        trigger: ".footer",
        start: "0% 70%",
        end: "100% 0%",
        toggleActions: "play none none reverse",
        // markers: true,
    },
    stagger: 0.3,
    yPercent: 100,
    ease: "power2.inOut",
});
