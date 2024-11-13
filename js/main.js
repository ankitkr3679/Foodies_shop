// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");  
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


// counter Design
//  document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setInterval(() => {
//             current += increment;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         }, step);
//     }
//     counter("count1", 0, 55, 3000);
//     counter("count2", 0, 85, 3000);
//     counter("count3", 0, 65, 3000);
//     counter("count4", 0, 95, 3000);
//  });



//  counter Section

 function animateCounter(id, start, end, duration) {
    let current = start;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const element = document.getElementById(id);

    const timer = setInterval(function() {
        current += 1;
        element.textContent = current;
        
        if (current >= end) {
            clearInterval(timer);
            element.textContent = end; // Ensure the counter ends exactly at 'end'
        }
    }, stepTime);
}

// Use IntersectionObserver to detect when the counter section is in view
document.addEventListener("DOMContentLoaded", function() {
    const counterSection = document.getElementById("counter");
    let isAnimated = false;  // Prevent animation from repeating

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the counter section is in view and not already animated
            if (entry.isIntersecting && !isAnimated) {
                // Trigger the counter animation when section is visible
                isAnimated = true;  // Prevent re-triggering

                animateCounter("count1", 0, 55, 2000);  
                animateCounter("count2", 0, 85, 2000);  
                animateCounter("count3", 0, 65, 3000);  
                animateCounter("count4", 0, 95, 3000);  
            }
        });
    }, {
        threshold: 0.5  
    });

    // Start observing the counter section
    observer.observe(counterSection);
});
