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

                <div>
                    <h2 class="tickets_title">TICKETS</h2>

                        <div id="ticket-types">
                        <h5 class="ticket_title">Adult<h5> 
                        <div id="ticket-amount">
                                <h5 class="ticket_price">150DKK<h5> 
                            <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div>    
                        </div>  

                        <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Youth<h5> 
                              <p class="ticket_subtitle">(Under 31)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div> 
                        </div>
                        
                        <div id="ticket-types">
                           <h5 class="ticket_title">Students<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div> 
                        </div>  

                        <div>
                            <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Groups<h5> 
                              <p class="ticket_subtitle">(Min 20 person)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">130DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div>
                        </div> 

                        <div>
                            <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Children<h5> 
                              <p class="ticket_subtitle">(Under 18)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">FREE<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div> 
                        </div>

                    </div>

                <div>
                    <div id="tickets-container">
                    <h2 class="tickets_title">ANNUAL PASSES</h2>
                    <img src="/media/question.svg" alt="question mark" class="info_btn">
                    </div>
                    <div>
                        <div id="ticket-types">
                           <h5 class="ticket_title">ARoS27<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">200DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div> 
                        </div>  

                        <div id="ticket-types">
                           <h5 class="ticket_title">The ARoS Club<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">410DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this)"><img src="/media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span id="number">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this)"><img src="/media/plus.svg" alt="minus" class="plus_btn"></button>
                        </div> 
                        </div>

                    </div>

                    <div id="price-total">
                    <h3 class="price_text">Total price: 300 DKK<h3>
                    <button class="checkout_btn" onclick="navigateTo('')">PROCEED TO CHECKOUT<img src="/media/arrow-big.svg" alt="arrow" class="checkout_arrow"><button>
                <div>

                </div>
                

               </section>
          `;
    }

    updateAmount(that) {
        let number = document.getElementById('number');
        let num = parseInt(number.innerHTML);
        num = (that.value == "minus") ? --num : ++num;
        number.innerHTML = num;
    }


}

