class MainNav extends HTMLElement {
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
      <link rel="stylesheet" href="./css/main-nav.css" />
      <nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
          <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
          <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('main-nav', MainNav)
