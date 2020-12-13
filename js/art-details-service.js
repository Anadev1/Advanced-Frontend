import {
    firebaseDB
} from "../js/firebase_config.js";
import welcomePage from "../pages/welcome.js";
import Loader from "./loader.js";

class ArtDetailsService {
    constructor() {
        this.artworkRef = firebaseDB.collection("artworks");
    }

    init() {
        
        // init all artworks
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
        });
        this.appendFavArtworks();
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
        if (welcomePage.authUser.favorites && welcomePage.authUser.favorites.includes(favArtworkId)) {
            return true;
        } else {
            return false;
        }
    }

    // adds a given artworkId to the favorites array inside _currentUser
    addToFavourites(artworkId) {
        Loader.show(true);
        welcomePage.authUserRef.set({
            favorites: firebase.firestore.FieldValue.arrayUnion(artworkId)
        }, {
            merge: true
        });
    }

    // removes a given artworkId to the favorites array inside _currentUser
    removeFromFavourites(artworkId) {
        Loader.show(true);
        welcomePage.authUserRef.update({
            favorites: firebase.firestore.FieldValue.arrayRemove(artworkId)
        });
    }

    async getFavArtworks() {
        let favorites = [];
        if (welcomePage.authUser.favorites) {
            for (let artworkId of welcomePage.authUser.favorites) {
                await this.artworkRef.doc(artworkId).get().then(function (doc) {
                    let artwork = doc.data();
                    artwork.id = doc.id;
                    favorites.push(artwork);
                });
            }
        }
        return favorites;
    }

    async appendFavArtworks() {
        let artworks = await this.getFavArtworks();
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

const artDetailsService = new ArtDetailsService();
export default artDetailsService;