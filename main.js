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


// --- Loading Glyph Animation ---

const loadingElement = document.getElementById('loading-glyph');

if (loadingElement) {
    const GLYPHS = ['╱', '╌', '╲', '╎', '╱', '╌', '╲', '╎', ' ', '░', '▒', '▓', '▒', '░', ' '];

    const ANIMATION_SPEED_MS = 400;

    let currentGlyphIndex = 0;

    function animateGlyph() {
        loadingElement.textContent = GLYPHS[currentGlyphIndex];
        currentGlyphIndex = (currentGlyphIndex + 1) % GLYPHS.length;
    }

    setInterval(animateGlyph, ANIMATION_SPEED_MS);
}
