const cube = document.getElementById("cube");
let isDragging = false;
let startX, startY;

cube.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    cube.style.transform = `rotateX(${-deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg)`; // Invert deltaY
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

cube.addEventListener("click", (e) => {
    if (!isDragging) {
        const clickedFace = e.target;
        if (clickedFace.classList.contains("face")) {
            const href = clickedFace.getAttribute("href");
            if (href) {
                window.location.href = href;
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var message = document.getElementById("message");
    message.style.display = "block";
    
    setTimeout(function() {
      message.style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
  });





