export default class ExhibitionDetails {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibition-details" class="page">
                  <div id="banner">
                      <h3>Human Nature</h3>
                  </div>
               </section>
          `;
    }
}
