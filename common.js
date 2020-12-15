(function() {
    const main = document.getElementsByTagName("main")[0];
    const SCROLL_T = 300;
    var currentPos = 0;
    
    var scrollToTopButton = document.getElementById("scroll-to-top");
    scrollToTopButton.addEventListener("click", (e) => {
        window.scrollTo(0,0);
    });

    document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        var position = main.offsetTop;
        
        // show 'scroll-to-top' button
        if(scrolled > SCROLL_T) {
            if (currentPos < SCROLL_T) {
                scrollToTopButton.setAttribute("class", "enable-scroll-to-top");
            }
        }

        // hide 'scroll-to-top' button
        if(scrolled < SCROLL_T) {
            if (currentPos > SCROLL_T) {
                scrollToTopButton.setAttribute("class", "disable-scroll-to-top");
            }
        }

        currentPos = scrolled;
    });
})();