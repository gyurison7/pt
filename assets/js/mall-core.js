const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 34,
    navigation: {
        prevEl: ".btn-prev",
        nextEl: ".btn-next",
    },
});

$(".swiper-slide").click(function () {
    const $class = $(this).attr("class").split(" ")[1];

    if ($class !== "link") {
        $(".popup-wrapper").addClass("on");
        $(`.popup-wrapper .${$class}`).show().siblings().hide();
    }
});

$(document).on("click", function (e) {
    if ($(".popup-wrapper").hasClass("on") && !$(e.target).closest(".popup-wrapper, .swiper-slide").length) {
        $(".popup-wrapper").removeClass("on");
        $(".popup-wrapper > *").hide();
    }
});
