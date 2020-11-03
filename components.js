class ProjectTemplate extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="project-wrapper">
            <a href="${this.getAttribute('href') ?? ''}" target="_blank">
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
        </div>`
    }
}

// Item in the nav bar
class NavigationItem extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <li class="nav-item">
            <a href="${this.getAttribute('href')}" target="_blank">
                <i class="${this.getAttribute('fa-icon')}"></i>
            </a>
        </li>`
    }
}

customElements.define('project-instance', ProjectTemplate)
customElements.define('nav-item-instance', NavigationItem)
