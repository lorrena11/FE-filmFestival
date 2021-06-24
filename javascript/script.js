/* Open when someone clicks on burger element */
function openNav() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("burger-icon").style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("burger-icon").style.display = "block";
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevPosition = window.pageYOffset;
window.onscroll = function() {
    const currentPosition = window.pageYOffset;
    if (prevPosition > currentPosition) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-75px";
    }
    prevPosition = currentPosition;
}
