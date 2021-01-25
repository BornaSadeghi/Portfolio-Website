/* Global elements */

class NavigationBar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="nav-container">
        
        <ul class="nav-item-group">
        
        <nav-item-instance
        href="/index.html"
        fa-icon="fas fa-home"
        ></nav-item-instance>
        
        <span class="name-wrapper">
        Borna Sadeghi
        </span>
        </ul>
        
        <ul class="nav-item-group">
        
        <nav-item-instance
        href="https://github.com/BornaSadeghi"
        fa-icon="fab fa-github"
        ></nav-item-instance>
        
        <nav-item-instance
        href="https://linkedin.com/in/borna-sadeghi"
        fa-icon="fab fa-linkedin"
        ></nav-item-instance>
        
        <nav-item-instance
        href="mailto:sadeghiborna@gmail.com"
        fa-icon="far fa-envelope"
        ></nav-item-instance>
        
        <nav-item-instance
        href="documents/Borna_Sadeghi_Resume.pdf"
        fa-icon="far fa-file-alt"
        ></nav-item-instance>
        
        </ul>
        
        </div>`;
    }
}

/* Home and Projects portfolio elements */

class ProjectTemplate extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="project-wrapper">
        <a href="${this.getAttribute('href') ?? ''}">
        <div class="project-img" style="background-image:url(${this.getAttribute('img-url')});">
        <div class="project-label-wrapper">
        <div align="center" class="project-title">
        ${this.getAttribute('name') ?? 'Untitled'}
        </div>
        <div align="center" class="project-summary">
        ${this.getAttribute('description') ?? ''}
        </div>
        </div>
        </div>
        </a>
        </div>`;
    }
}

// Item in the nav bar
class NavigationItem extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <li class="nav-item">
        <a href="${this.getAttribute('href')}">
        <i class="${this.getAttribute('fa-icon')}"></i>
        </a>
        </li>`;
    }
}

/* Project details page elements */

class DocumentWrapper extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="doc-wrapper">
            <div class="doc-description">
                <h2>${this.getAttribute('title')}</h2>
                ${this.getAttribute('description')}
            </div>
            <embed class="doc-viewer" src="${this.getAttribute('src')}"></embed>
        </div>`;
    }
}

customElements.define('nav-bar', NavigationBar);
customElements.define('project-instance', ProjectTemplate);
customElements.define('nav-item-instance', NavigationItem);
customElements.define('document-wrapper', DocumentWrapper);
