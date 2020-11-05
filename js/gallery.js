jQuery(document).ready(function ($) {
    moveImg();
    rotateImg();
    /* Gallery */
    function rotateImg() {
        $.each($('#gal img'), function (i, element) {
            $(element).css({
                //"top": "+=" + Math.floor(Math.random() * 500) + "px", "left": Math.floor(Math.random() * 300),
                "transform": "rotate(" + (Math.random() * -30 + Math.random() * 30) + "deg)",
                    "-moz-transform": "rotate(" + (Math.random() * -30 + Math.random() * 30) + "deg)",
                    "-webkit-transform": "rotate(" + (Math.random() * -30 + Math.random() * 30) + "deg)",
                    "-o-transform": "rotate(" + (Math.random() * -30 + Math.random() * 30) + "deg)",
                    "-ms-transform": "rotate(" + (Math.random() * -30 + Math.random() * 30) + "deg)"
            });
        });
        $("#gal img").draggable({
            stack: "#gal img",
            cursor: "move",
            containment: "#st-panel-3"
        });
        //, containment: "window"    
    }

    function moveImg() {
        $.each($('#gal img'), function (i, element) {
            $(element).css({
                "top": Math.floor((Math.random() * 100) + 200) + "%",
                    "left": Math.floor(Math.random() * 70) + "%",
                    "width": (Math.floor(Math.random() * 30) + 10) + "%"
            });
        });


    }
    /* /Gallery */

});