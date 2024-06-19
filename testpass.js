var form1 = document.getElementById("password");
var element2 = "Speedcuber";
var element1 = "CCstudent";
var form2 = document.getElementById("username");

var remembercookie = getCookie("remember");

if (remembercookie == "true") {
    changer();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

form1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("passbutton").click();
    }
});

form2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("passbutton").click();
    }
});

function verify() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    if (!(x == element2 && y == element1)) {
        alert("Something is incorrect...")
    } else if (x == element2 && y == element1) {
        if (document.getElementById("remembercheckbox").checked) {
            var currentdate = new Date();
            var newdate = currentdate.getTime() + 86400000; //2629800000
            document.cookie = "remember=true; expires=" + newdate + ";path=/;";
        } else if (!(document.getElementById("remembercheckbox").checked)) {
            document.cookie = "remember=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        $("#passform").replaceWith('<div><h3>Success! Click on the button below to continue.</h3><button onclick="changer()" type="button" id="changebutton"><h4 class="passtitles">Continue</h4></button></div>');

    }
}

function changer() {
    $("#changeable").load('teststudents.html');
}

function shower() {
    $("#password").attr('type', '')
    $("i").replaceWith('<i class="far fa-eye-slash" onclick="hider ()"></i>');

}

function hider() {
    $("#password").attr('type', 'password')
    $("i").replaceWith('<i class="far fa-eye" onclick="shower ()"></i>');

}