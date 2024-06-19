filterSelection("all");

window.addEventListener("resize", function() {
    makepositions();
});

makepositions();

function sizeit() {
    var numperrow = calnumperrow();
    var w = document.getElementById("myBtnContainer").clientWidth;

    var them = document.getElementsByClassName("filteritem");
    var available = w / numperrow;
    var realwidth = available - 10;
    for (var g = 0; g < them.length; g++) {
        them[g].style.width = realwidth + "px";
    }
    return available;
}

function calnumperrow() {
    if (document.getElementById("myBtnContainer").clientWidth >= 1000) {
        return 3;
    } else if (document.getElementById("myBtnContainer").clientWidth >= 650) {
        return 2;
    } else if (document.getElementById("myBtnContainer").clientWidth < 650) {
        return 1;
    }
}

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filteritem");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }
    makepositions();
}

function makepositions() {
    var totaloffset;
    var heightadd = 0;
    var width = sizeit();
    var numperrow = calnumperrow();
    var theshown = document.getElementsByClassName("show");
    for (var u = 0; u < theshown.length; u++) {
        if (u % numperrow == 0) {
            if (u / numperrow == 0) {
                theshown[u].style.position = "absolute";
                theshown[u].style.top = "0";
                theshown[u].style.left = "0";
            } else {
                theshown[u].style.position = "absolute";
                heightadd = 0;
                for (var total = u / numperrow, done = 0; done < total; done++) {
                    heightadd += theshown[done * numperrow].clientHeight + 10;
                }
                theshown[u].style.top = heightadd + "px";
                theshown[u].style.left = "0";


            }

        }

        if (u % numperrow == 1) {
            if (u == 1) {
                theshown[u].style.position = "absolute";
                theshown[u].style.top = "0";
                theshown[u].style.left = width + "px";
            } else {
                theshown[u].style.position = "absolute";
                heightadd = 0;
                for (
                    var total = Math.floor(u / numperrow), done = 1, counter = 0; counter < total; counter++, done += numperrow
                ) {
                    heightadd += theshown[done].clientHeight + 10;
                }
                theshown[u].style.top = heightadd + "px";
                theshown[u].style.left = width + "px";
            }
        }

        if (u % numperrow == 2) {
            if (u == 2) {
                theshown[u].style.position = "absolute";
                theshown[u].style.top = "0";
                theshown[u].style.left = width * 2 + "px";
            } else {
                theshown[u].style.position = "absolute";
                heightadd = 0;
                for (
                    var total = Math.floor(u / numperrow), done = 2, counter = 0; counter < total; counter++, done += numperrow
                ) {
                    heightadd += theshown[done].clientHeight + 10;
                }
                theshown[u].style.top = heightadd + "px";
                theshown[u].style.left = width * 2 + "px";
            }
        }
    }
    makepositioninfooter();
}

function makepositioninfooter() {
    console.log("HELLO");
    var all = document.getElementsByClassName("show");
    $("footer").css({ positon: 'relative !important' });
    var numperrow = calnumperrow();
    if (numperrow == 1) {
        var totalheight = 0;
        for (var i = 0; i < all.length; i = i + numperrow) {
            totalheight += all[i].clientHeight + 10;
        }
        $("footer").css({ "top": totalheight + 'px', "positon": 'relative !important' });
    } else if (numperrow == 2) {
        var totalheight0 = 0;
        var totalheight1 = 0;
        for (var i = 0; i < all.length; i = i + numperrow) {
            totalheight0 += all[i].clientHeight + 10;
        }
        for (var i = 1; i < all.length; i = i + numperrow) {
            totalheight1 += all[i].clientHeight + 10;
        }
        if (totalheight0 >= totalheight1) {
            $("footer").css({ top: totalheight0 + 'px', positon: 'relative !important' });
        } else if (totalheight1 > totalheight0) {
            $("footer").css({ top: totalheight1 + 'px', positon: 'relative !important' });
        }
    } else if (numperrow == 3) {
        var totalheight0 = 0;
        var totalheight1 = 0;
        var totalheight2 = 0;
        for (var i = 0; i < all.length; i = i + numperrow) {
            totalheight0 += all[i].clientHeight + 10;
        }
        for (var i = 1; i < all.length; i = i + numperrow) {
            totalheight1 += all[i].clientHeight + 10;
        }
        for (var i = 2; i < all.length; i = i + numperrow) {
            totalheight2 += all[i].clientHeight + 10;
        }
        if (totalheight0 >= totalheight1 && totalheight0 >= totalheight2) {
            $("footer").css({ top: totalheight0 + 'px', positon: 'relative !important' });
        } else if (totalheight1 >= totalheight0 && totalheight1 >= totalheight2) {
            $("footer").css({ top: totalheight1 + 'px', positon: 'relative !important' });
        } else if (totalheight2 >= totalheight1 && totalheight2 >= totalheight0) {
            $("footer").css({ top: totalheight2 + 'px', positon: 'relative !important' });
        }
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activebutton");
        current[0].className = current[0].className.replace(" activebutton", "");
        this.className += " activebutton";
    });
}