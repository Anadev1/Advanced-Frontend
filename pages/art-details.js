import {
    firebaseDB
} from "../js/firebase_config.js";

export default class ArtDetails {
    constructor() {
        this.template();
        this.artworkRef = firebaseDB.collection("artworks");
        // this.read();
    }

    // read() {
    //     this.artworkRef.onSnapshot(snapshotData => {
    //         let artworks = [];
    //         snapshotData.forEach(doc => {
    //             let artwork = doc.data();
    //             artwork.id = doc.id;
    //             artworks.push(artwork);
    //         });
    //         this.appendOtherArtworks(artworks)
    //     });

    init() {
        // init all movies
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
            this.appendOtherArtworks(artworks);

        });
        this.appendFavArtworks();
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="art-details" class="page">
                  <div id="artwork-banner">
                      <div class="artwork-image-container"></div>
                      <div id="artwork-overlay"></div>
                      <img src="./media/back-arrow.svg" id="back-arrow" alt="back arrow" onclick="navigateTo('exhibition-details')">
                      <h3 class="artwork-title"></h3>
                      <div class="fav-button-container"></div>
                  </div>
                  <div id="artwork-description-top">
                      <div id="image-wrapper">
                        <div id="artist-image-container">
                        </div>
                        </div>
                        <div id="artwork-facts-container">
                            <p class="facts"></p>
                        </div>
                        </div>
                  <div id="details-container">
                    <div id="artwork-description-left">
                         <h1 class="artist-name"></h1>
                         <h3 class="artwork-name"></h3>
                    </div>
                    <div id="artwork-description-right">
                         <h3 class="description-title">Description</h3>
                         <p class="description-text"></p> 
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

    generateFavArtworkButton(artworkId) {
        let btnTemplate = `
          <button onclick="addToFavourites('${artworkId}')">Add to favourites</button>`;
        if (this.userHasFav(artworkId)) {
            btnTemplate = `
            <button onclick="removeFromFavourites('${artworkId}')" class="rm">Remove from favourites</button>`;
        }
        return btnTemplate;
    }

    userHasFav(favArtworkId) {
        if (authService.authUser.favorites && authService.authUser.favorites.includes(favArtworkId)) {
            return true;
        } else {
            return false;
        }
    }

    // adds a given artworkId to the favorites array inside _currentUser
    addToFavourites(artworkId) {
        // loaderService.show(true);
        authService.authUserRef.set({
            favorites: firebase.firestore.FieldValue.arrayUnion(artworkId)
        }, {
            merge: true
        });
    }

    // removes a given artworkId to the favorites array inside _currentUser
    removeFromFavourites(artworkId) {
        // loaderService.show(true);
        authService.authUserRef.update({
            favorites: firebase.firestore.FieldValue.arrayRemove(artworkId)
        });
    }

    async getFavArtworks() {
        let favorites = [];
        if (authService.authUser.favorites) {
            for (let artworkId of authService.authUser.favorites) {
                await this.artworkRef.doc(artworkId).get().then(function (doc) {
                    let artwork = doc.data();
                    artwork.id = doc.id;;
                    favorites.push(artwork);
                });
            }
        }
        return favorites;
    }

    async appendFavArtworks() {
        let artworks = await ArtDetails.getFavArtworks();
        let template = "";
        for (let artwork of artworks) {
            template += /* html */ `
            <article>
              <h2>${artwork.title}</h2>
              <img src="${artwork.image}">
              <button onclick="removeFromFavourites('${artwork.id}')" class="rm">Remove from favourites</button>
            </article>
          `;
        }
        if (artworks.length === 0) {
            template = `
                <p>No artworks added</p>
            `;
        }
        document.querySelector('#favourite_artworks').innerHTML = template;
    }

}
