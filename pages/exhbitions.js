import exhibitionsData from "../js/exhibitions-data.js";
export default class Exhibitions{
     constructor() {
          this.template();
     }

     async initData() {
          let exhibitions = await exhibitionsData.loadExhibitions();
          this.appendExhibitions(exhibitions);
      }
     template() {
          document.querySelector('#app').innerHTML += /*html*/ `
               <section id="persons" class="page">
               <header class="topbar">
                    <h2>Persons</h2>
               </header>
               <div id="grid-persons" class="grid-container"></div>
               </section>
          `;
     }
}
