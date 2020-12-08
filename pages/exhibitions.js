
import {
     firebaseDB
} from "../js/firebase_config.js";


// let _selectedUserId = "";

export default class Exhibitions {
     constructor() {
          this.exhibitionRef = firebaseDB.collection("exhibitions");
          this.template();
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
                    <img src="./media/search_icon.svg" id="search-icon" alt="search icon">
               </section>
          `;
     }
     
     appendExhibitions(exhibitions) {
     let template = "";
     for (let exhibition of exhibitions) {
          template += /*html*/ `
          <article class="exhibition-item" onclick="selectUser('${exhibition.name}', '${exhibition.image}', '${exhibition.floor}', '${exhibition.description}' )">
               <div class="image-container">
                    <img src="${exhibition.image}" alt="exhibition" class="exhibition-image">
               </div>
               <div class="dark-overlay"></div>
               <div class="exhibition-details-container">
                    <h1 class="exhibition-name">${exhibition.name}</h1>
                    <div class="date-arrow-container">
                    <p class="exhibition-date">Exhibition end: ${exhibition.date}</p>
                    <img src="/media/arrow.svg" alt="arrow" id="arrow">
                    </div>
               </div>
          </article>
          `;
          }
          document.querySelector("#exhibitions").innerHTML = template;
     }  
     
   
}

     


