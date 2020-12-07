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
               <section id="artwork-details" class="page">
                  <div id="details-banner">
                      <h3 class="art-title">Human Nature</h3>
                      <img src="/media/map.svg" onclick="navigateTo('map')" alt="map" class="banner_img">
                  </div>
                  <div id="details-description">
                    <div id="floor-description">
                         <h1 class="floornumber">Floor 8</h1>
                    </div>
                    <div>
                         <h3 class="description_title">Description</h3>
                         <p class="description_text">There are certain elements that people, at all times, have 
                         had to respond to in life: nature, religion, philosophy, and science.
                         KüNSTE has decided to use these themes as common threads in a new presentation 
                         of works from the collection opening in February. The purpose of the exhibition is to 
                         present the history of art as well as to allowing art to convey food for thought and a 
                         chance to reflect on life. A number of the familiar main works in our collection will, 
                         of course, be included in this new hanging.</p> 
                      </div>
                  </div>
                  <div id="artist-artworks">
                      <h4 class="list_title">Other artworks by this artist:</h4>
                  <div id="artwork-list"></div>
                </div>
               </section>
          `;
    }
}
