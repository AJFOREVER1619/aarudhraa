
AOS.init({
    duration: 1200, // Duration of the animation in milliseconds
    once: true,     // Whether to animate only once or every time you scroll
});



$(document).ready(function () {
    $('.slider').slider({
        height:600
    });

});

 // JavaScript code for scrolling buttons
 $(document).ready(function () {
    const CARD_WIDTH = 220; // Width of one card including gap. Adjust as needed.
    const SCROLL_AMOUNT = 4 * CARD_WIDTH; // To scroll the width of 4 cards.

    $(".left-scroll-btn").click(function () {
        $('.scroll-container').animate({
            scrollLeft: "-=" + SCROLL_AMOUNT + "px"
        });
    });

    $(".right-scroll-btn").click(function () {
        $('.scroll-container').animate({
            scrollLeft: "+=" + SCROLL_AMOUNT + "px"
        });
    });
});

// line scroll

document.addEventListener("DOMContentLoaded", function() {
    const topicsElements = document.querySelectorAll(".topics");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateLinesOnScroll() {
        topicsElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const percentageScrolled = ((scrollPosition - rect.top) / (rect.bottom - rect.top)) * 100;

            if (isElementInViewport(el)) {
                el.classList.add("animated");
                el.style.setProperty("--line-width", `${percentageScrolled}%`);
            } else {
                el.classList.remove("animated");
            }
        });
    }

    window.addEventListener("scroll", animateLinesOnScroll);
});

// slogan line scroll

document.addEventListener("DOMContentLoaded", function() {
    const sloganElement = document.querySelector(".slogan");
    const lineElements = document.querySelectorAll(".slogan::before, .slogan::after");
    const triggerPosition = 400; // Adjust this value as needed

    function handleScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Calculate the line width based on the scroll position
        const lineWidth = Math.min(560, (scrollPosition / triggerPosition) * 560);

        lineElements.forEach(line => {
            line.style.width = `${lineWidth}px`;
        });

        // Add or remove scroll-up and scroll-down classes based on scroll direction
        if (scrollPosition > lastScrollTop) {
            sloganElement.classList.add("scroll-down");
            sloganElement.classList.remove("scroll-up");
        } else {
            sloganElement.classList.remove("scroll-down");
            sloganElement.classList.add("scroll-up");
        }
        lastScrollTop = scrollPosition;
    }

    let lastScrollTop = 0;
    window.addEventListener("scroll", handleScroll);
});







