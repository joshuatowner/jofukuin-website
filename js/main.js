// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {headerBackground()};

function headerBackground() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").classList.add("header-scrolled");
    } else {
        document.getElementById("header").classList.remove("header-scrolled");
    }
}
