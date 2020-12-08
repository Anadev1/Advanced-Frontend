export default class TicketsPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="tickets" class="page tickets-page">
                <div class="nav-btn">
                    <div></div>
                    <div></div>
                </div>
                <div id="tickets-container">
                    <h3 class="tickets_title">Tickets</h3>
                    <div id="ticket-types">
                        <button onclick="decrement()"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <input id=demoInput type=number min=0 max=100>
                        <button onclick="increment()"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>

                    </div>

                </div>
                

               </section>
          `;
    }


}