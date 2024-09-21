class MyTeaser extends HTMLElement {
    constructor() {
      super();
  
      // Attach the Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Get the 'title' and 'target' attributes
      const title = this.getAttribute('title') || 'Click Here';
      const target = this.getAttribute('target') || '#';
  
      // Create the anchor element with class 'teaser'
      const link = document.createElement('a');
      link.classList.add('teaser');
      link.href = target;
      link.textContent = title;

  
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .teaser {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 4/3;
          text-align: center;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 8px;
          border: 1px solid var(--foreground-primary);
          text-decoration: none;
          color: var(--foreground-primary);
        }
        .teaser:hover {
          background-color: var(--background-subtle);
        }
      `;
  
      // Append styles and link to the shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(link);
    }
  }
  
  // Define the custom element
  customElements.define('my-teaser', MyTeaser);  
