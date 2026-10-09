document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    const players = document.querySelectorAll(".player-card");

    if (!search) return; // للتأكد من وجود حقل البحث في الصفحة الحالية

    search.addEventListener("input", function () {
        const searchText = search.value.trim().toLowerCase();

        players.forEach(function (player) {
            const nameElement = player.querySelector("h3");
            
            if (nameElement) {
                const playerName = nameElement.textContent.toLowerCase();

                if (playerName.includes(searchText)) {
                    player.style.display = ""; // إعادة العرض الافتراضي
                } else {
                    player.style.display = "none";
                }
            }
        });
    });
});




const button = document.getElementById("darkModeBtn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}