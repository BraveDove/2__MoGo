$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight()
        nav = $("#nav")
        shadow = $("#shadow");
        scrollOffset = $(window).scrollTop();


// ################_Fixed Header_################ //

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

        console.log(scrollOffset)
    });

    function checkScroll(scrollOffset) {   // === Scroll function ====
        if (scrollOffset >= 648) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

// ################_Active Class_################ //

    $("#burger").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(header).toggleClass('active');
        $(nav).toggleClass('active');
        $(shadow).toggleClass('active');
      })

// ################_Fixed Header_################ //

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this)
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass('active');
        $("#nav").removeClass('active');
        $("#shadow").removeClass('active');
        $("#burger").removeClass('active');
        $(header).removeClass('active');
        $this.addClass('active');
            
        $("html, body").animate({
            scrollTop: blockOffset 
        }, 800);
        
    })

// ################_Outline active elements_################ //

    $(window).on("scroll", function(){
        if (scrollOffset >= 0 && scrollOffset <= 1778) {
            $("#n1").addClass('active')
        } else {
            $("#n1").removeClass('active')
        }
        if (scrollOffset >= 1778 && scrollOffset <= 5798) {
            $("#n2").addClass('active')
        } else {
            $("#n2").removeClass('active')
        }
        if (scrollOffset >= 5798 && scrollOffset <= 8102) {
            $("#n3").addClass('active')
        } else {
            $("#n3").removeClass('active')
        }
        if (scrollOffset >= 8102 && scrollOffset <= 8460) {
            $("#n4").addClass('active')
        } else {
            $("#n4").removeClass('active')
        }
        if (scrollOffset >= 8460 && scrollOffset <= 9016) {
            $("#n5").addClass('active')
        } else {
            $("#n5").removeClass('active')
        }
    });

// ################_Click outside the element_################ //

    // $(document).mouseup(function(e){
    //     var div = $("#nav")
    //     if ( !div.is(e.target) // если клик был не по нашему блоку
	// 	    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
	// 		$("#nav, #shadow, #burger, #header").removeClass('active') // скрываем его
	// 	} 
    // });
    
    const menuBtn = $(".nav-toggle"),
      menu = $(".nav");

// menuBtn.on("click", function () {
//     if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//         menu.slideUp();
//     } else {
//         $(this).addClass("active");
//         $(".nav").addClass("active");
//         $(".header").addClass("active");
//         menu.slideDown();
//         // $(".nav").css("opacity", "1");
//     }
// });

// $(document).click(function (e) {
//     if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
//         menu.slideUp();
//         $(".header").removeClass('active')
//         $(".nav").removeClass('active')              //РАЗОБРАТЬСЯ С ЭТИМ
//         $(".nav-toggle").removeClass('active')
//         $(".shadow").removeClass('active')
//     };
// });

// ################_Nav animation_################ //


    $(".nav-toggle").on("click", function(e){
        e.preventDefault();

        if ( $(this).hasClass('active') ) {
            $(".nav").animate({top: "56px"}, 500)
            $(".shadow").animate({top: "58px"}, 500)
        } else {
            $(".nav").animate({top: "-400px"}, 500)
            $(".shadow").animate({top: "-400px"}, 500)
        }
    })


    //    $(document).mouseup(function(e){
    //     var div = $(".nav")
    //     if ( !div.is(e.target) // если клик был не по нашему блоку
	// 	    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
    //             $(".nav").animate({top: "-400px"}, 1)
    //             $(".shadow").animate({top: "-400px"}, 1) // скрываем его
    //             $(".nav-toggle, .header").removeClass('active');
	// 	} 
    // });



});
