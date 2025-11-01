
document.addEventListener("DOMContentLoaded", function () {
    scrollHandler()
    document.addEventListener("scroll", function () {
        scrollHandler()
    });

    function scrollHandler() {
        if (document.documentElement.scrollTop > 100) {
            document.querySelector(".wrap").classList.remove("main-top");
        } else {
            document.querySelector(".wrap").classList.add("main-top");
        }
    }

})