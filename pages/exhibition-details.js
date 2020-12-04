export default class ExhibitionsDetails {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="persons" class="page">
               </section>
          `;
    }
}
