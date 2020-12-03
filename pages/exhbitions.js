export default class Exhibitions{
     constructor() {
          this.template();
     }

      template() {
          document.querySelector('#exhibitions').innerHTML += /*html*/ `
               <h1>Exhibitions Page</h1>
          `;
     }
}
