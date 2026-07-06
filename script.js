 console.log("OneClick AI is running 🚀");

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Hero button click
    const heroBtn = document.querySelector(".hero button");

    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("🚀 AI Tools are coming soon!");
        });
    }

    // Card click interactions
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            alert("This tool will open in the next version 🔥");
        });
    });

});
