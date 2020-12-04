import {
    firebaseDB
} from "./firebase-config.js";

export default class ExhibitionDetails {
    constructor() {
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
        let htmlTemplate = "";
        for (const artwork of artworks) {
            htmlTemplate += `
            <article>
            <h2>${artwork.title}</h2>
            <h4>${artwork.name}</h4>
            `;
        }
        document.querySelector("#exhibition-details").innerHTML = htmlTemplate;
    }