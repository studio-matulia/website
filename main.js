const theme_button = document.getElementById("theme-button");
const github_button = document.getElementById("github-button");
let isDarkTheme = false;

// --- Functions ---

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
}

function openGitHub() {
    window.open('https://github.com/studio-matulia', '_blank');
}

// --- Event Listeners ---

// Listen for keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 't') {
        toggleTheme();
    } else if (e.key === 'g') {
        openGitHub();
    }
});

// Listen for button clicks
theme_button.addEventListener("click", toggleTheme);
github_button.addEventListener("click", openGitHub);