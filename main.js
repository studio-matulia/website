const consoleViwport = document.querySelector('.console_viewport');
const consoleFrame = document.querySelector('.console_frame');

let showConsole = false;
let isDragging = false;
let offset = [0, 0];

let isDarkTheme = false;

consoleFrame.addEventListener('mousedown', function(e) {
    isDragging = true;
    offset = [
        consoleFrame.offsetLeft - e.clientX,
        consoleFrame.offsetTop - e.clientY
    ];
    consoleFrame.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        consoleFrame.style.left = e.clientX + offset[0] + 'px';
        consoleFrame.style.top = e.clientY + offset[1] + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    consoleFrame.style.cursor = 'grab';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'c') {
        showConsole = !showConsole;
        consoleViwport.style.display = showConsole ? 'block' : 'none';
    }
    if (e.key === 't') {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark', isDarkTheme);
    }
});
