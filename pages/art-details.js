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
        this.appendOtherArtworks(artworks)
        });
     }
     
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="art-details" class="page">
                  <div id="artwork-banner">
                      <div class="artwork-image-container"><img src="./media/boy.jpg" id="artwork-image"></div>
                      <div id="artwork-overlay"></div>
                      <img src="./media/Group 19.svg" id="back-arrow" alt="back arrow" onclick="navigateTo('#exhibition-details')">
                        <!-- add navigateTo function -->
                      <h3 class="artwork-title">Boy</h3>
                      <img src="./media/empty_heart.svg" id="heart" alt="heart">
                  </div>
                  <div id="artwork-description-top">
                        <div id="artist-image-container">
                            <img src="./media/ron-mueck.jpg" id="artist-image" alt="artist">
                        </div>
                        <div id="artwork-facts-container">
                            <p class="facts">Year: 1999</p>
                            <p class="facts">Type: Sculpture</p>
                            <p class="facts">Height: 4.5 m</p>
                            <p class="facts">Weight: 500 kg</p>
                        </div>
                      </div>
                  <div id="details-container">
                    <div id="artwork-description-left">
                         <h1 class="artist-name">Ron Mueck</h1>
                         <h3 class="artwork-name">Boy</h3>
                    </div>
                    <div id="artwork-description-right">
                         <h3 class="description-title">Description</h3>
                         <p class="description-text">Ron Mueck created Boy in 1999. It took the artist eight months to 
                             progress from a 40 cm high clay maquette to the present almost five metre high sculpture cast in glass fibre. 
                             The figure is executed with astonishing attention to detail: the surface of the skin, for instance, is utterly
                            convincing with veins and hair follicles clearly marked. This hyperrealism makes the boy 
                             at once a living and compelling presence and yet alien and unreal. </p> 
                      </div>
                  </div>
                  <div id="artist-artworks">
                      <h4 class="list-title">Other artworks by this artist</h4>
                  <div id="other-artworks-list"></div>
                </div>
               </section>
          `;
    }

    appendOtherArtworks(artworks) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
                <img class="other-artwork-image" src='${artwork.image}'>
            `;
        }
        document.querySelector("#other-artworks-list").innerHTML = template;
    }
}
