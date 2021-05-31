class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <h3>OMGMOFMOFMOFSOMDAO</h3>
        <h5 class="my-class">My class test<h5>
        `
    }
}

class Body extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section>Some details</section>`
    }
}

window.customElements.define('app-header', Header);
window.customElements.define('app-body', Body);