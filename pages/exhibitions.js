  import {
  firebaseDB
} from "../js/firebase_config.js";

export default class Exhibitions{
     constructor() {
          this.template();
          this.userRef = firebaseDB.collection("exhibitions");
          this.read();
     }

     read() {
          // ========== READ ==========
          // watch the database ref for changes
          this.exhibitionRef.onSnapshot(snapshotData => {
               let exhibitions = [];
               snapshotData.forEach(doc => {
               let exhibition = doc.data();
               exhibition.id = doc.id;
               exhibitions.push(exhibitions);
               });
          });
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
    document.querySelector("#exhibitions-list").innerHTML = template;
  }
}
