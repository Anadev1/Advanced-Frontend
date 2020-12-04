export default class Map{
    constructor(){
        this.template();
    }

    template(){
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="map" class="page">

           <div>
               <h2>Kunste Museum Map</h2>
            </div>
            
        </section>
        
        `;
    }
}