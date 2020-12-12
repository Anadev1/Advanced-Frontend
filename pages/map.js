import {
    firebaseDB
} from "../js/firebase_config.js";

let exhibitionsData = [];

export default class Map {
    constructor() {
        this.exhibitionRef = firebaseDB.collection("exhibitions");
        this.template();
        this.read();
    }
    
    read() {
        this.exhibitionRef.onSnapshot(snapshotData => {
             
             snapshotData.forEach(doc => {
                  let exhibition = doc.data();
                  exhibition.id = doc.id;
                  exhibitionsData.push(exhibition);
             });
             this.appendExhibitions(exhibitionsData);

        });

   }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="map" class="page map_page">
            <header class="topbar">
               <h2>Kunste Museum Map</h2>
            </header>
            <div class="map_container">
            <div class="map_exhibition_details_filtered"></div>
                <div class="map_exhibition_details">
                    <h1 class="floornumbermap"></h1>
                    <h3 class="exhibition_title_map"></h3>
                </div>
                
                <div class="map_floors">
                    <div class="floor_button" onclick="openFloors()">
                        <p>FLOORS</p>
                        <div class="floors_container">
                        <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor4()">4</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor3()">3</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor()">-3</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor6()">-2</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle"onclick="openMapFloor5()" >-1</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor0()">0</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor1()">1</div>
                            </div>
                            <div class="circles_numbers">
                                <div class="circle" onclick="openMapFloor2()">2</div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
        `;
        
    }

    openFloors() {
        document.querySelector(".floors_container").style.display = "flex"
    }

    openMapFloor(){
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background2.png')",
        document.querySelector(".floors_container").style.display = "none"
    };

    openMapFloor0() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background.png')",
        document.querySelector(".floors_container").style.display = "none"
    };

    openMapFloor1() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background2.png')",
        document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("1"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor2() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background.png')",
        document.querySelector(".floors_container").style.display = "none"

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("2"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor3() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background2.png')",
        document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("3"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor4() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background.png')",
        document.querySelector(".floors_container").style.display = "none";

        let filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.floor.includes("4"));
        this.appendExhibitions(filteredExhibitions);
        console.log(filteredExhibitions);

        document.querySelector(".map_exhibition_details_filtered").style.display = "flex";
        document.querySelector(".map_exhibition_details").style.display = "none";
    };
    openMapFloor5() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background2.png')",
        document.querySelector(".floors_container").style.display = "none";
    };
    openMapFloor6() {
        document.querySelector(".map_page").style.backgroundImage= "url('../media/map_background.png')",
        document.querySelector(".floors_container").style.display = "none"
    };

    appendExhibitions(exhibitions) {
        let template = "";
        for (let exhibition of exhibitions) {
             template += /*html*/ `
                  <h1 class="exhibition-name">${exhibition.name}</h1>
                  <h3 class="exhibition-floor">FLOOR ${exhibition.floor}</h1>
        </article>
        `;
        }
        document.querySelector(".map_exhibition_details_filtered").innerHTML = template;
   }  

}