function hfuncation() {
    var hhight = $(".header").innerHeight();
    $(".main-wrapper").css("padding-top", hhight);
}

function ffuncation() {
    var fhight = $(".footer").innerHeight();
    $(".main-wrapper").css("padding-bottom", fhight);
    $(".footer").css("margin-top", -fhight);
}

function item_lest_scroll() {
    $(".list-item li").click(function() {
        var data_target = $(this).attr("data_target");
        $(".custom-block").each(function() {
            var data_value = $(this).attr("data_value");
            if (data_target == data_value) {
                var hhight = $(".header").innerHeight();
                if ($(window).width() < 576) {
                    var list_height = $(".list-item").innerHeight();
                    var scroll_top = $(this).offset().top - hhight - list_height;
                } else {
                    var scroll_top = $(this).offset().top - hhight;
                }

                $("html, body").animate({ scrollTop: scroll_top }, "500");
            }
        });
    });
}

function list_scroll() {
    $(".list-item li").removeClass("active");
    $(".custom-block").each(function() {
        var hhight = $(".header").innerHeight();
        var window_scroll = $(window).scrollTop();
        if ($(window).width() < 576) {
            var list_height1 = $(".list-item").innerHeight();

            var section_offset_top = $(this).offset().top - hhight - list_height1;
            var section_offset_bottom =
                $(this).offset().top + $(this).innerHeight() - hhight - list_height1;
        } else {
            var section_offset_top = $(this).offset().top - hhight;
            var section_offset_bottom =
                $(this).offset().top + $(this).innerHeight() - hhight;
        }

        if (
            window_scroll > section_offset_top &&
            window_scroll < section_offset_bottom
        ) {
            var data_value1 = $(this).attr("data_value");
            console.log(data_value1);
            $(".list-item li").each(function() {
                var data_target1 = $(this).attr("data_target");

                if (data_target1 == data_value1) {
                    $(this).addClass("active");


                }
            });
        }
    });
}

function nav_menu_list() {
    var hhight = $(".header").innerHeight();
    $(".nav-menu-lists").css("top", hhight);
    if ($(window).width() < 991) {
        $(".header .bottom-header .sub-menu-content").css("top", hhight);
        $(".header .bottom-header  .supper-sub-menulist").css("top", hhight);
    }
}

function inputfade() {
    if ($(window).width() < 991) {
        $(".header .open-close-btn .open-search ").click(function() {
            $(" .header .top-header .search-input").fadeToggle();
        });
    }
}

function slick_arrow() {
    if ($(window).width() < 1440) {
        var poffset_left1 = $(
            ".podcast-list .slick-dots  li:first-child button"
        ).offset().left;
        var pleft_arrow1 = poffset_left1 - 30;

        $(".podcast-list .slick-prev").css("left", pleft_arrow1);

        var poffset_right1 = $(
            " .podcast-list  .slick-dots  li:last-child button"
        ).offset().left;
        var pright_arrow1 = poffset_right1 + 15;
        $(".podcast-list .slick-next").css("left", pright_arrow1);
    } else {
        var poffset_left2 = $(
            ".podcast-list .slick-dots  li:first-child button"
        ).offset().left;
        var outer_window_width = ($(window).width() - 1440) / 2;
        var pleft_arrow2 = poffset_left2 - 30 - outer_window_width;
        $(".podcast-list .slick-prev").css("left", pleft_arrow2);
        var poffset_right2 = $(
            " .podcast-list  .slick-dots  li:last-child button"
        ).offset().left;
        var pright_arrow2 = poffset_right2 + 15 - outer_window_width;
        $(".podcast-list .slick-next").css("left", pright_arrow2);
    }

    if ($(window).width() < 1440) {
        var outdoor_offset_left = $(
            ".outdoor-list-section .outdoor-slider .slick-dots  li:first-child button"
        ).offset().left;
        var outdoor_left_arrow = outdoor_offset_left - 30;
        $(".outdoor-list-section .outdoor-slider .slick-prev").css(
            "left",
            outdoor_left_arrow
        );

        var outdoor_offset_right = $(
            " .outdoor-list-section .outdoor-slider  .slick-dots  li:last-child button"
        ).offset().left;
        var outdoor_right_arrow = outdoor_offset_right + 15;
        $(".outdoor-list-section .outdoor-slider .slick-next").css(
            "left",
            outdoor_right_arrow
        );
    } else {
        var outdoor_offset_left2 = $(
            ".outdoor-list-section .outdoor-slider .slick-dots  li:first-child button"
        ).offset().left;
        var outer_window_width = ($(window).width() - 1440) / 2;
        var outdoor_left_arrow2 = outdoor_offset_left2 - 30 - outer_window_width;
        $(".outdoor-list-section .outdoor-slider .slick-prev").css(
            "left",
            outdoor_left_arrow2
        );
        var outdoor_offset_right2 = $(
            ".outdoor-list-section .outdoor-slider  .slick-dots  li:last-child button"
        ).offset().left;
        var outdoor_right_arrow2 = outdoor_offset_right2 + 15 - outer_window_width;
        $(".outdoor-list-section .outdoor-slider .slick-next").css(
            "left",
            outdoor_right_arrow2
        );
    }

    var project_offset_left = $(
        ".latest-project .slick-dots  li:first-child button"
    ).offset().left;
    var project_left_arrow = project_offset_left - 30;
    $(".latest-project .slick-prev").css("left", project_left_arrow);

    var project_offset_right = $(
        ".latest-project  .slick-dots  li:last-child button"
    ).offset().left;
    var project_right_arrow = project_offset_right + 15;
    $(".latest-project .slick-next").css("left", project_right_arrow);
}

function slide_demo() {
    if ($(".podcast-list").length > 0) {
        $(".podcast-list").slick({
            dots: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: "0px",
                        stagePadding: "0px",
                        infinite: true,
                        dots: false,
                        arrows: false,
                    },
                },
            ],
        });
    }
    if ($(".latest-project").length > 0) {
        $(".latest-project").slick({
            centerMode: true,
            centerPadding: "200px",
            slidesToShow: 1,
            dots: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        centerPadding: "40px",
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                        arrows: false,
                        centerMode: true,
                        centerPadding: "0px",
                        stagePadding: "0px",
                        infinite: true,
                    },
                },
            ],
        });
    }
    if ($(".outdoor-slider").length > 0) {
        $(".outdoor-slider").slick({
            slidesToShow: 1.5,
            dots: true,
            rtl: false,
            arrows: true,
            infinite: false,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1.3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
            ],
        });
    }
    if ($(".bg-img-slide").length > 0) {
        $(".bg-img-slide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
            arrows: true,
            fade: true,
            dots: false,
            asNavFor: ".sm-img-slide",
        });
    }
    if ($(".sm-img-slide").length > 0) {
        $(".sm-img-slide").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: ".bg-img-slide",
            dots: false,
            vertical: true,
            verticalSwiping: true,

            focusOnSelect: true,
            responsive: [{
                    breakpoint: 577,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 450,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                        slidesToShow: 3,
                    },
                },
            ],
        });
    }
}

function sliderInit() {
    var $slider = $(".img-slide-demo");
    $slider.each(function() {
        var $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    adaptiveHeight: true,
                },
            }, ],
        });

        if ($(this).find(".img-content-part").length > 1) {
            $(this).siblings(".content").find(".slide-index").show();
        }
        $(this).on("afterChange", function(event, slick, currentSlide) {
            $sliderParent.find(".slide-index .active-slide").html(currentSlide + 1);

            var caption = $(".img-content-part.slick-slide.slick-current").attr(
                "data_attr"
            );
            $(".popup-slider .content .caption").html(caption);
        });
        var sliderItemsNum = $(this)
            .find(".slick-slide")
            .not(".slick-cloned").length;
        $sliderParent.find(".slide-index .total-slide").html(sliderItemsNum);
    });
}

$(document).ready(function() {
    $(".list-item li").click(function() {
        var section_list_Width = $(".list-item").width();
        var li_Width = $(this).outerWidth();
        var position = section_list_Width / 2 - li_Width / 2;
        $(".list-item").animate({
                scrollLeft: $(this).position().left - position,
            },
            300
        );
    });
    var hhight = $(".header").innerHeight();
   
    if ($(window).width() < 991) {
        $(".sub-menu-heading .sub-items").click(function() {
            $(this)
                .closest(".sub-menu-heading")
                .find(".sub-menu-content")
                .fadeToggle();
            $(".sub-menu-content")
                .not($(this).closest(".sub-menu-heading").find(".sub-menu-content"))
                .fadeOut();
        });
        $(".header .back-button").click(function() {
            $(this).closest(".sub-menu-content").fadeOut();
        });
    }
    $(".supper-sub-menu").click(function() {
        $(this).closest(".sub-menu-contents").find(".supper-sub-menulist").fadeIn();
    });
    $(".product-list-colum.supper-sub-menulist .back-buttons").click(function() {
        $(this).closest(".product-list-colum.supper-sub-menulist").fadeOut();
    });

    $(function() {
        $(".account-button").on("click", function(a) {
            $(".buttons").toggleClass("open-detail");
            a.stopPropagation();
        });
        $(document).on("click", function(a) {
            if ($(a.target).is(".account-button") === false) {
                $(".buttons").removeClass("open-detail");
            }
        });
    });

    $(".hamburger-menu").click(function() {
        $(".header").toggleClass("open_menu ");
    });

    $(".category-listes1").mCustomScrollbar({
        scrollButtons: { enable: false },
        scrollInertia: 400,
    });

    $("img.input-close").click(function() {
        $(" .header .top-header .search-input").fadeOut();
    });
    $(".hamburger-menu").click(function() {
        $(".header .bottom-header .nav-menu-lists").fadeToggle();
    });
    $(".header .hamburger-menu").click(function() {
        $(".sub-menu-content").fadeOut();
        $(".supper-sub-menulist").fadeOut();
    });
    hfuncation();
    nav_menu_list();
    inputfade();
    slide_demo();
    slick_arrow();

    item_lest_scroll();
    list_scroll();
});
$(window).on("load", function() {
    item_lest_scroll();
    hfuncation();
    setTimeout(function() {
       
        slick_arrow();
    }, 200);
});
$(window).resize(function() {
    hfuncation();
    nav_menu_list();
    setTimeout(function() {
        
        slick_arrow();
    }, 200);
});
$(window).scroll(function() {
    list_scroll();
});


$("#exampleModal").on('show.bs.modal', function(){
  setTimeout(function(){
  sliderInit();
},500)
});