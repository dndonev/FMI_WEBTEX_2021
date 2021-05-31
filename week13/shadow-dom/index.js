const template = document.createElement('template');

template.innerHTML = `
<h3></h3>
<p id="details"></p>
<div class="info">
    <p><slot name="email"></slot></p>
    <p><slot name="phone"></slot></p>
</div>
<button type="button">Hide details </button>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('#details').innerText = this.getAttribute('info');
    }

    toggleInfo() {
        const info = this.shadowRoot.querySelector('.info');
        const button = this.shadowRoot.querySelector('button');
        this.showInfo = !this.showInfo;

        if (this.showInfo) {
            info.style.display = 'block';
            button.innerText = 'Hide info';
        } else {
            info.style.display = 'none';
            button.innerText = 'Show info';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button')
            .addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('button')
            .removeEventListener('click');
    }
}

window.customElements.define('user-card', UserCard);