import {
    firebaseDB
} from "../js/firebase_config.js";

export default class ArtDetails {
    constructor() {
        this.template();
        this.artworkRef = firebaseDB.collection("artworks");
        this.read();
    }

    read() {
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
        });
     }
     
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="art-details" class="page">
                  <div id="details-banner">
                      <h3 class="artwork-title">Boy</h3>
                  </div>
                  <div id="details-container">
                    <div id="artwork-description-left">
                         <h1 class="artist-name">Ron Mueck</h1>
                         <h3 class="artwork-name">Boy</h3>
                    </div>
                    <div id="artwork-description-right">
                         <h3 class="description-title">Description</h3>
                         <p class="description-text">There are certain elements that people, at all times, have 
                         had to respond to in life: nature, religion, philosophy, and science.
                         KüNSTE has decided to use these themes as common threads in a new presentation 
                         of works from the collection opening in February. The purpose of the exhibition is to 
                         present the history of art as well as to allowing art to convey food for thought and a 
                         chance to reflect on life. A number of the familiar main works in our collection will, 
                         of course, be included in this new hanging.</p> 
                      </div>
                  </div>
                  <div id="artist-artworks">
                      <h4 class="list-title">Other artworks by this artist:</h4>
                  <div id="artworks-list"></div>
                </div>
               </section>
          `;
    }
}
