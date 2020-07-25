class FooterStatistics extends HTMLElement {
  static get observedAttributes() {
    return []
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch(name) {
        case '':
      }
    }
  }

  connectedCallback() {
    this.render()
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }

  disconnectedCallback() {
    
  }

  get html() {
    return `
      <section class="footer__statistics">
        <p>130 291 movies inside</p>
      </section>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('footer-statistics', FooterStatistics)
