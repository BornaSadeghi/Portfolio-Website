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
        </div>`;
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
        </li>`;
    }
}

class NavigationBar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="nav-container">

            <div class="name-wrapper">
                <a href="c:/users/borna/source/portfolio_site/index.html">
                    Borna Sadeghi
                </a>
            </div>
            

            <ul class="right-nav-items">
                
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
            
        </div>`;
    }
}

class HeadGlobal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="c:/users/borna/source/portfolio_site/styles.css">
        <link rel="icon" href="images/favicon.jpg">
        <title>Borna Sadeghi - ${this.getAttribute('title')}</title>
        <script src="https://kit.fontawesome.com/40349dda9f.js" crossorigin="anonymous"></script>
        <script src="components.js"></script>`;
    }
}

customElements.define('head-global', HeadGlobal);
customElements.define('project-instance', ProjectTemplate);
customElements.define('nav-item-instance', NavigationItem);
customElements.define('nav-bar', NavigationBar);
