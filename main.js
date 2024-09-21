
let isDarkTheme = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 't') {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark', isDarkTheme);
    }
});
