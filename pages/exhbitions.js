export default class Exhibitions{
     constructor() {
          this.template();
     }

     template() {
           
          let htmlTemplate = "";
          for (const exhibition of exhibitions) {
               htmlTemplate += /*html*/ `
                    <article>
                         <h1>exhibition.name</h1>
                         <p>exhibition.date</p>
                    </article>
               `;
          }
          document.querySelector('#exhibitions').innerHTML += htmlTemplate;
     }
}
