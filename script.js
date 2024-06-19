$(document).ready(function() {
    $(".navbar a, footer a[href='#top']").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    })
})

function topdivmargin() {
    var nav = document.getElementsByTagName("nav")
    var navheight = nav[0].offsetHeight
    document.getElementById("top").style.paddingTop = navheight + "px";
}
topdivmargin();
window.addEventListener("resize", function() {
    topdivmargin();

});



var registeritems = $(".registeritem")

$(".flipper").click(function(e) {
    $(this).closest(registeritems).toggleClass("flip");
    e.preventDefault();
});

$(".backflipper").click(function() {
    $(this).closest(registeritems).toggleClass("flip");
});

$(document).mouseup(function(e) {
    $("form").each(function() {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0) {
            $(this).find(".allrest").slideUp("slow");
        }
    });

});

$(".trigger").focus(function() {
    $(this).closest("form").find(".allrest").slideDown("slow");
});

$(".cccube").click(function() {
    $(this).siblings(".numberofcubes").slideDown("slow");
});

$(".nocccube").click(function() {
    $(this).siblings(".numberofcubes").slideUp("slow");
});

$("#groupnotpresent").click(function() {
    if ($(this).prop("checked")) {
        $("#groupnotpresentselected").slideDown("slow");
        $("#groupispresentselected").slideUp("slow");
        $("#groupnotpresentselected").addClass("counted");
        $("#groupispresentselected input").val("");
        $("#groupispresentselected input").next("p").remove();
        $("#groupispresentselected").removeClass("counted");
    }
});

$("#groupnotpresent").click();

$("#groupispresent").click(function() {
    if ($(this).prop("checked")) {
        $("#groupispresentselected").slideDown("slow");
        $("#groupnotpresentselected").slideUp("slow");
        $("#groupnotpresentselected").removeClass("counted");
        $("#groupnotpresentselected input").val("");
        $("#groupnotpresentselected input").next("p").remove();
        $("#groupispresentselected").addClass("counted");
    }
});

//form
$(".notblank").blur(function() {
    var fieldvalue = $(this).val().trim();
    var elementexhists = $(this).next("p").length > 0;
    if (fieldvalue == "") {
        if (elementexhists) {} else {
            $(this).after("<p>please enter the requested information</p>");
        }

    } else {
        if (elementexhists) {
            $(this).next("p").remove();
        }
    }
});

$(".numcheck").blur(function() {
    var fieldvalue = $(this).val().trim();
    var elementexhists = $(this).next("p").length > 0;
    if (isNaN(fieldvalue) || fieldvalue == "") {
        if (elementexhists) {} else {
            $(this).after("<p>please enter only numbers</p>");
        }
    } else {
        if (elementexhists) {
            $(this).next("p").remove();
        }
    }
});

$(".emailcheck").blur(function() {
    var fieldvalue = $(this).val().trim();
    var elementexhists = $(this).next("p").length > 0;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(filter.test(fieldvalue)) || fieldvalue == "") {
        if (elementexhists) {} else {
            $(this).after("<p>please enter your valid email</p>");
        }
    } else {
        if (elementexhists) {
            $(this).next("p").remove();
        }
    }
});

$(".phonenumber").blur(function() {
    var fieldvalue = $(this).val().trim();
    var elementexhists = $(this).next("p").length > 0;
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!(filter.test(fieldvalue)) || fieldvalue == "") {
        if (elementexhists) {} else {
            $(this).after("<p>please enter your valid phone number</p>");
        }
    } else {
        if (elementexhists) {
            $(this).next("p").remove();
        }
    }
});

$("form").submit(function(event) {
    //make sure at least one checkbox is filled
    var checkboxes = $(this).find("input[type='checkbox']");
    var onechecked = false;
    var a = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        var currentcheckbox = checkboxes[i];
        if (currentcheckbox.checked) {
            onechecked = true;
        }
    }
    if (onechecked == false) {
        if ($(this).find(".needaccept").next("label").next("p").length > 0) {
            a = a + 1;
        } else {
            $(this).find(".needaccept").next("label").after("<p>please accept to continue</p>");
            a = a + 1;
        }
    } else {
        $(this).find(".needaccept").next("label").next("p").remove();

    }
    //make sure that all required fields have value
    var notblanktext = $(this).find(".notblank");
    var currentvalue;
    var oneblank = false;
    for (var i = 0; i < notblanktext.length; i++) {
        currentvalue = notblanktext[i].value.trim();
        if (currentvalue == "") {
            var thenow = notblanktext[i].id;
            oneblank = true;
            $("#" + thenow).next("p").remove();
            $("#" + thenow).after("<p>please enter the requested information</p>");
        } else {
            $("#" + thenow).next("p").remove();
        }
    }
    if (oneblank == true) {
        a = a + 1;
    }
    //check if email is valid
    var requiredemail = $(this).find(".emailcheck")
    var emailfieldvalue = $(requiredemail).val().trim();
    var elementexhists = requiredemail.next("p").length > 0;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(filter.test(emailfieldvalue))) {
        a = a + 1;
        if (elementexhists) {

        } else {
            $(requiredemail).after("<p>please enter your valid email</p>");
        }
    } else {
        if (elementexhists) {
            $(requiredemail).next("p").remove();
        }
    }

    //check if phone nember is valid
    var requiredphone = $(this).find(".phonenumber")
    var fieldvalue = requiredphone.val().trim();
    var elementexhists = requiredphone.next("p").length > 0;
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!(filter.test(fieldvalue))) {
        a = a + 1;
        if (elementexhists) {

        } else {
            requiredphone.after("<p>please enter your valid phone number</p>");
        }
    } else {
        if (elementexhists) {
            requiredphone.next("p").remove();
        }
    }
    //check if only numbers are inputted
    var requirednumber = $(this).find(".numcheck")
    for (var i = 0; i < requirednumber; i++) {
        var fieldvalue = requirednumber[i].val().trim();
        var elementexhists = requirednumber.next("p").length > 0;
        if (isNaN(fieldvalue)) {
            a = a + 1;
            if (elementexhists) {} else {
                requirednumber.after("<p>please enter only numbers</p>");
            }
        } else {
            if (elementexhists) {
                requirednumber.next("p").remove();
            }
        }
    }

    var total = a;
    console.log(total);
    if (total <= 0) {
        return true;
    } else {
        return false;
    }
});

var url = document.location.href;
if (url.indexOf("pass") >= 0) {
    $("#registersubtitle").after("<h3>Your registration was successfull! Champion Cubers be in contact with you shortly</h3>")
} else if (url.indexOf("fail") >= 0) {
    $("#registersubtitle").after("<h3>Something went wrong in the registration, please contact Champion Cubers, thank you.<h3>")
}

//Resources