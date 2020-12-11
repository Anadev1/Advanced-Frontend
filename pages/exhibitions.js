
import {
     firebaseDB
} from "../js/firebase_config.js";

let exhibitionsData = [];

export default class Exhibitions {
     constructor() {
          this.exhibitionRef = firebaseDB.collection("exhibitions");
          this.template();
          this.read();
     }

     read() {
          this.exhibitionRef.onSnapshot(snapshotData => {
               
               snapshotData.forEach(doc => {
                    let exhibition = doc.data();
                    exhibition.id = doc.id;
                    exhibitionsData.push(exhibition);
               });
               this.appendExhibitions(exhibitionsData);
          });

     }

     template() {
          document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibitions" class="page">
                    <div id="search-container">
                    <!-- <img src="./media/search_icon.svg" id="search-icon" alt="search icon"> -->
                    <input type="search" placeholder="Search" onkeyup="search(this.value)">
               </div>
               <div id="exhibitions-container">

                </div>    
               </section>
          `;
     }

     appendExhibitions(exhibitions) {
          let template = "";
          for (let exhibition of exhibitions) {
               template += /*html*/ `
          <article class="exhibition-item" onclick="selectExhibition('${exhibition.name}', '${exhibition.image}', '${exhibition.floor}', '${exhibition.description}' )">
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
           document.querySelector("#exhibitions-container").innerHTML = template;
     }  

     search(value) {
          let searchValue = value.toLowerCase();
          let filteredExhibitions = this.exhibitions.filter(exhibition => exhibition.name.rendered.toLowerCase().includes(searchValue));
          this.appendExhibitions(filteredExhibitions);
          console.log(searchValue);
          console.log(exhibitionsData);
     }
}




