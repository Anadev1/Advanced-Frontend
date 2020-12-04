export default class ExhibitionDetails {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibition-details" class="page">
                  <div id="details_banner">
                      <img src="media/søndag-morgen.jpg" class="banner_img">
                      <h3>Human Nature</h3>
                  </div>
                  <div class="details_description">
                      <h1 class="floor_number">Floor 8</h1>
                      <div class="description_text">
                          <h3>Description</h3>
                          <p>There are certain elements that people, at all times, have 
                              had to respond to in life: nature, religion, philosophy, and science.
                              KüNSTE has decided to use these themes as common threads in a new presentation 
                              of works from the collection opening in February. The purpose of the exhibition is to 
                              present the history of art as well as to allowing art to convey food for thought and a 
                              chance to reflect on life. A number of the familiar main works in our collection will, 
                              of course, be included in this new hanging.</p> 
                      </div>

                  </div>

               </section>
          `;
    }
}
