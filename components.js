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

class NavigationBar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="nav-container">

            <div class="name-wrapper">
                <a href="index.html">
                    Borna Sadeghi
                </a>
            </div>
            

            <ul class="social-media-list">
                
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
                href="documents/Resume.pdf"
                fa-icon="far fa-file-alt"
                ></nav-item-instance>

            </ul>
            
        </div>
        `
    }
}

customElements.define('project-instance', ProjectTemplate)
customElements.define('nav-item-instance', NavigationItem)
customElements.define('nav-bar', NavigationBar)
