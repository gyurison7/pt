$(".content-box a").hover(
    function () {
        $(this).closest(".project").find(".left-area").addClass("on");
    },
    function () {
        $(this).closest(".project").find(".left-area").removeClass("on");
    }
);
