export class App {
  constructor(root) {
    this.root = document.querySelector(root)
  }

  init() {
    this.render()
  }

  get html() {
    return `
      <header class="header">
        <h1 class="header__logo logo">Cinemaddict</h1>
      
        <user-profile></user-profile>
      </header>
      
      <main class="main">
        <main-nav></main-nav>
      
        <films-sort></films-sort>
      
        <section class="films">
          <films-list heading-content="All movies. Upcoming"></films-list>
          <films-list is-extra="" heading-content="Top rated"></films-list>
          <films-list is-extra="" heading-content="Most commented"></films-list>
        </section>
      </main>
      
      
      <footer class="footer">
        <section class="footer__logo logo logo--smaller">Cinemaddict</section>
        <footer-statistics></footer-statistics>
      </footer>
    `
  }

  render() {
    this.root.insertAdjacentHTML('afterbegin', this.html)
  }
}
