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
               <section id="exhibitions" class="page">
               <div id="exhibitions-list" class="list-container"></div>
               </section>
          `;
     }
     appendExhibitions(exhibitions) {
    let template = "";
    for (let exhibition of exhibitions) {
      template += /*html*/ `
        <article>
          <h1>${exhibition.name}</h1>
          <p>${exhibition.date}</p>
        </article>
        `;
    }
    document.querySelector("#grid-exhibitions").innerHTML = template;
  }
}
