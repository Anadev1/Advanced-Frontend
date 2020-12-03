import _exhibitionDetailService from "../js/main.js";
export default class ExhibitionDetailPage {
    constructor() {
        this.template();
        this.initData();
    }

    initData() {

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
      <section id="persons" class="page">
        <header class="topbar">
          <h2></h2>
        </header>
        <div id="grid-exhibition-detail" class="grid-container"></div>
      </section>
    `;
    }

    appendArtwork(artwork) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
        <article>
          <img src="${artwork.picture}">
          <h2>${artwork.name}</h4>
          <h4>${artwork.artist}</h4>
        </article>
        `;
        }
        document.querySelector("#grid-exhibition-detail").innerHTML = template;
    }
}