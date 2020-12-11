import {
    firebaseDB
} from "../js/firebase_config.js";

export default class HomePage{
    constructor(){
        this.exhibitsImgRef = firebaseDB.collection("exhibitions");
        this.template();
        this.read();
    }

    read(){
        this.exhibitsImgRef.onSnapshot (snapshotData => {
            let exhibitsImgs = [];
            snapshotData.forEach(doc => {
                let exhibitImg = doc.data();
                exhibitImg.id = doc.id;
                exhibitsImgs.push(exhibitImg);
            });
            this.appendExhibitsImgs(exhibitsImgs);
        });
    }

    template(){
        document.querySelector("#app").innerHTML += /*html*/`
            <section id="home" class="page home-page">
                <div class="home-content">
                    <header class="applogo">
                        <img src="../media/aros-logo.svg" class="logo-main">
                    </header>
                <div class="nav-btn" onclick="openCloseNav()">
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div class="current-exhibitions">
                    <h3>Current exhibition</h3>
                    <div class="current-exhibitions-stuff"></div>
                    <a href="#exhibitions" class="more">See more</a>
                </div>
            </section>
        `;
    }
    
    appendExhibitsImgs(exhibitsImgs) {
        let htmlTemplate = "";
        for (let exhibitImg of exhibitsImgs) {
            htmlTemplate += `
                <img src="${exhibitImg.image}">
          `;
        }
        document.querySelector('.current-exhibitions-stuff').innerHTML = htmlTemplate;
    }
    
    openCloseNav(){
        console.log("Clicked nav");
        let navContainer = document.querySelector(".nav-container");
        navContainer.style.display = "block";
        navContainer.classList.add("open-nav");
    }
}