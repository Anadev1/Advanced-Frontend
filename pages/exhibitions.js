import {
     firebaseDB
} from "../js/firebase_config.js";

export default class Exhibitions {
     constructor() {
          this.template();
          this.exhibitionRef = firebaseDB.collection("exhibitions");
          this.read();
     }

     read() {
          this.exhibitionRef.onSnapshot(snapshotData => {
               let exhibitions = [];
               snapshotData.forEach(doc => {
                    let exhibition = doc.data();
                    exhibition.id = doc.id;
                    exhibitions.push(exhibition);
               });
          this.appendExhibitions(exhibitions);
          });
          
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
