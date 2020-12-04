import {
    firebaseDB
} from "../js/firebase_config.js";

export default class ExhibitionDetailsPage {
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
            this.appendArtworks(artworks);
        });
    }

    appendArtworks(artworks) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
        <article>
            <img src='${artwork.image}'>
            <h1>${artwork.title}</h1>
            <p>${artwork.name}</p>
        </article>
        `;
        }
        document.querySelector("#artwork-list").innerHTML = template;
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibition-details" class="page exhibition-details">
                   <div class="nav-btn">
                    <div></div>
                    <div></div>
                </div>
                  <div id="details-banner">
                      <h3 class="exhibition_title">Human Nature</h3>
                  </div>
                  <div id="details-description">
                      <div>
                      <h1 class="floor_number">Floor 8</h1>
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
                  <div id="artwork-list"></div>

               </section>
          `;
    }
}
