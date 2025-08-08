const theme_button = document.getElementById("theme-button");
let isDarkTheme = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 't') {
        toggleTheme();
    }
});

theme_button.addEventListener("click", toggleTheme)

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
}