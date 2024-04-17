let wholeColor = document.querySelector("body");

function toggleTheme() {
    wholeColor.classList.toggle("dark-mode");
}

wholeColor.onclick = toggleTheme;