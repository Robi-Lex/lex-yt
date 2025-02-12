document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("#no-btn"); 

    if (noButton) { 
        let clickCount = 0; 

        noButton.addEventListener("click", function (event) {
            event.preventDefault();
            clickCount++;

            if (clickCount >= 1) {
                noButton.style.position = "absolute";
                noButton.style.top = Math.random() * 80 + 5 + "%";
                noButton.style.left = Math.random() * 80 + 5 + "%";
            }
        });
    } else {
        console.error("No button not found! Check your HTML.");
    }
});

