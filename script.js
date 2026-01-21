// JavaScript to change background color when button is clicked
document.addEventListener("DOMContentLoaded", function () {
    // Toggle Background Color
    document.getElementById("toggleTheme").addEventListener("click", function () {
        let body = document.body;
        let currentBg = window.getComputedStyle(body).backgroundColor;
        
        if (currentBg === "rgb(0, 128, 0)") { // Green in RGB
            body.style.backgroundColor = "black";
        } else {
            body.style.backgroundColor = "green";
        }
    });

    // Change Marquee Text Color on Hover
    document.getElementById("marqueeText").addEventListener("mouseover", function () {
        const colors = ["red", "blue", "yellow", "purple", "orange", "pink"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.color = randomColor;
    });
});
