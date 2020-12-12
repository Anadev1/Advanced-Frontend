import {
    firebaseDB
} from "../js/firebase_config.js";

export default class Profile {
    constructor() {
        this.exhibitionRef = firebaseDB.collection("artworks");
        this.template();
        this.read();
    }

    read() {
        this.exhibitionRef.onSnapshot(snapshotData => {
            let exhibitions = [];
            snapshotData.forEach(doc => {
                let exhibition = doc.data();
                exhibition.id = doc.id;
                exhibitions.push(exhibition);
            });
            // this.appendExhibitions(exhibitions);
        });

    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="profile" class="page profile_page">
        <div class="detailed_ticket">
            <img src="../media/detailed_ticket.png" alt="detailed ticket" class="detailed_card" onclick="closeTicket()">
        </div>
        <img src="./media/settings.png" class="settings_icon">
            <header class="topbar profile_top">
               <h2 id="profile-title">PROFILE</h2>
               <h2 id="user-name">Adam Smith</h2>
            </header>
            <div class="virtual_card">
                <h3 id="titles">Your virtual ticket</h3>
                <img src="./media/virtual_card.png" id="card-img" onclick="zoomTicket()"> 
                <div class="subscription_time">
                    <h4 class="subscription_time">Student ticket</h4>
                    <h4 class="subscription_time">243 days left</h4>
                </div>
            </div>

            <div class="coffee_stamps">
                <h3 id="titles">Coffee stamps collection</h3>
                <div class="collection">
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png"> 
                    <img class="coffee" src="./media/coffee.png">    
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                </div>
            </div>

            <div class="coffee_stamps">
                <h3 id="titles">Favourite artworks</h3>
                <div class="favourite_artworks">
                   
                </div>
            </div>
            
        </section>
        
        `;

    }

    // appendExhibitions(exhibitions) {
    //     let template = "";
    //     for (let exhibition of exhibitions) {
    //         template += /*html*/ `
    //          <article class="exhibition-favourite">
    //                    <img src="${exhibition.image}" alt="exhibition" class="favourite-image">
    //          </article>
    //          `;
    //     }
    //     document.querySelector(".favourite_artworks").innerHTML = template;
    // }

    zoomTicket() {
        document.querySelector(".profile_page").style.padding = "0";
        document.querySelector(".profile_page").style.overflow = "hidden";
        document.querySelector(".profile_page").style.height = "100vh";
        document.querySelector(".detailed_ticket").style.display = "flex";
    }

    closeTicket() {
        document.querySelector(".profile_page").style.padding = "30px";
        document.querySelector(".profile_page").style.overflow = "unset";
        document.querySelector(".profile_page").style.height = "unset";
        document.querySelector(".detailed_ticket").style.display = "none";
    }
}