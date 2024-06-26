// nav code

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById("nav");

    if (nav) {     
        var sticky = nav.offsetTop;
        function stickyNav() {
            if (window.scrollY >= sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }

        window.onscroll = function() {
            stickyNav();
        };
    }
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading nav:', error));
});
