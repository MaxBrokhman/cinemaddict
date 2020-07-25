class FilmsList extends HTMLElement {
  set isExtra(value) {
    this.setAttribute('is-extra', value)
  }

  get isExtra() {
    return this.hasAttribute('is-extra')
  }

  get headingContent() {
    return this.getAttribute('heading-content') || ''
  }

  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
    console.log(this.isExtra, this.setSectionClassName())
    this.className = this.setSectionClassName()
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

  setSectionClassName() {
    return this.isExtra 
      ? "films-list--extra" 
      : "films-list"
  }

  setHeadingClassName() {
    return this.isExtra
      ? "films-list__title"
      : "films-list__title visually-hidden"
  }

  renderShowMoreBtn() {
    return this.isExtra
      ? ''
      : '<button class="films-list__show-more">Show more</button>'
  }

  get html() {
    console.log('first render', this.isExtra)
    return `
      <link rel="stylesheet" href="./css/visually-hidden.css" />
      <link rel="stylesheet" href="./css/films-list.css" />
      <h2 class="${this.setHeadingClassName()}">${this.headingContent}</h2>

      <div class="films-list__container">
        <film-card></film-card>
      </div>
      ${this.renderShowMoreBtn()}
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('films-list', FilmsList)
