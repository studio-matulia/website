class MyTerminal extends HTMLElement {
    constructor() {
      super();
  
      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create HTML structure
      const consoleViewport = document.createElement('div');
      consoleViewport.classList.add('console_viewport');
      consoleViewport.innerHTML = `
        <div class="console_frame">
            <div class="console_topbar"></div>
            <textarea id="console"></textarea>
        </div>
      `;
  
      // Create and append styles
      const style = document.createElement('style');
      style.textContent = `
        * {
          box-sizing: border-box;
        }
          
        .console_viewport {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
        }
  
        .console_frame {
          position: absolute;
          right: 20px;
          bottom: 20px;
          width: 320px;
          height: 200px;
          background-color: var(--foreground-primary);
          padding: 32px 4px 4px 4px;
        }
  
        .console_frame:hover {
          cursor: grab;
        }
  
        textarea {
          font-family: var(--font-family-primary);
          width: 100%;
          height: 100%;
          background-color: var(--background-primary);
          color: var(--foreground-primary);
        }
      `;
  
      shadow.appendChild(style);
      shadow.appendChild(consoleViewport);
  
      // Select the elements
      const consoleFrame = consoleViewport.querySelector('.console_frame');
      let showConsole = false;
      let isDragging = false;
      let offset = [0, 0];
      let isDarkTheme = false;
  
      // Add event listeners
      consoleFrame.addEventListener('mousedown', (e) => {
        isDragging = true;
        offset = [
          consoleFrame.offsetLeft - e.clientX,
          consoleFrame.offsetTop - e.clientY
        ];
        consoleFrame.style.cursor = 'grabbing';
      });
  
      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          consoleFrame.style.left = e.clientX + offset[0] + 'px';
          consoleFrame.style.top = e.clientY + offset[1] + 'px';
        }
      });
  
      document.addEventListener('mouseup', () => {
        isDragging = false;
        consoleFrame.style.cursor = 'grab';
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'c') {
          showConsole = !showConsole;
          consoleViewport.style.display = showConsole ? 'block' : 'none';
        }
        if (e.key === 't') {
          isDarkTheme = !isDarkTheme;
          document.body.classList.toggle('dark', isDarkTheme);
        }
      });
    }
  }
  
  // Define the custom element
  customElements.define('my-terminal', MyTerminal);  
