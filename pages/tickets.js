export default class TicketsPage {
    constructor() {
        this.template();
    }

    //tickets page template
    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="tickets" class="page tickets-page">
                <div>
                    <h2 class="tickets_title">TICKETS</h2>

                        <div id="ticket-types">
                        <h5 class="ticket_title">Adult<h5> 
                        <div id="ticket-amount">
                                <h5 class="ticket_price">150DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount(this);"><img src="./media/minus.svg" alt="minus" 
                        class="minus_btn"></button>
                        <span class="quantity_value" id="quantity">0</span>
                        <button type="button" value="plus" onclick="updateAmount(this);"><img src="./media/plus.svg" alt="plus" 
                        class="plus_btn"></button>
                        </div>    
                        </div>  

                        <div id="ticket-types">
                            <div>
                           <h5 class="ticket_title">Youth<h5> 
                              <p class="ticket_subtitle">(Under 31)<p>  
                           </div>
                           <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount1(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity1">0</span>
                        <button type="button" value="plus" onclick="updateAmount1(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>
                        
                        <div id="ticket-types">
                           <h5 class="ticket_title">Students<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">120DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount2(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity2">0</span>
                        <button type="button" value="plus" onclick="updateAmount2(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
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
                        <button type="button" value="minus" onclick="updateAmount3(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity3">0</span>
                        <button type="button" value="plus" onclick="updateAmount3(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
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
                        <button type="button" value="minus" onclick="updateAmount4(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity4">0</span>
                        <button type="button" value="plus" onclick="updateAmount4(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>

                    </div>

                <div>
                    <div id="tickets-container">
                    <h2 class="tickets_title">ANNUAL PASSES</h2>
                    <img src="./media/question.svg" alt="question mark" class="info_btn">
                    </div>
                    <div>
                        <div id="ticket-types">
                           <h5 class="ticket_title">ARoS27<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">200DKK<h5> 
                        <button type="button" value="minus" onclick="updateAmount5(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                        <span class="quantity_value" id="quantity5">0</span>
                        <button type="button" value="plus" onclick="updateAmount5(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                        </div> 
                        </div>  

                        <div id="ticket-types">
                           <h5 class="ticket_title">ARoS Art Club<h5> 
                            <div id="ticket-amount">
                            <h5 class="ticket_price">410DKK<h5> 
                                <form>
                                <button type="button" value="minus" onclick="updateAmount6(this);"><img src="./media/minus.svg" alt="minus" class="minus_btn"></button>
                                <span class="quantity_value" id="quantity6">0</span>
                                <button type="button" value="plus" onclick="updateAmount6(this);"><img src="./media/plus.svg" alt="plus" class="plus_btn"></button>
                                </form>
                        </div> 
                        </div>

                    </div>

                    <div id="price-total">
                    <h3 class="price_text">Total price: 0 DKK<h3>
                    <button class="checkout_btn" onclick="navigateTo('')">PROCEED TO CHECKOUT<img src="./media/arrow-big.svg" alt="arrow" class="checkout_arrow"><button>
                <div>

                </div>
                

               </section>
          `;
    }

    // increment, decrement and quantity functionality 
    updateAmount(that) {
        let number = document.getElementById('quantity');
        let num = Math.min(Math.max(parseInt(number.innerHTML), 0), 19);
        num = (that.value == "minus") ? --num : ++num;
        number.innerHTML = num;
        console.log("it works");
    }

    updateAmount1(that) {
        let number1 = document.getElementById('quantity1');
        let num1 = Math.min(Math.max(parseInt(number1.innerHTML), 0), 19);
        num1 = (that.value == "minus") ? --num1 : ++num1;
        number1.innerHTML = num1;
    }

    updateAmount2(that) {
        let number2 = document.getElementById('quantity2');
        let num2 = Math.min(Math.max(parseInt(number2.innerHTML), 0), 19);
        num2 = (that.value == "minus") ? --num2 : ++num2;
        number2.innerHTML = num2;
    }

    updateAmount3(that) {
        let number3 = document.getElementById('quantity3');
        let num3 = Math.min(Math.max(parseInt(number3.innerHTML), 0), 19);
        num3 = (that.value == "minus") ? --num3 : ++num3;
        number3.innerHTML = num3;
    }

    updateAmount4(that) {
        let number4 = document.getElementById('quantity4');
        let num4 = Math.min(Math.max(parseInt(number4.innerHTML), 0), 19);
        num4 = (that.value == "minus") ? --num4 : ++num4;
        number4.innerHTML = num4;
    }

    updateAmount5(that) {
        let number5 = document.getElementById('quantity5');
        let num5 = Math.min(Math.max(parseInt(number5.innerHTML), 0), 19);
        num5 = (that.value == "minus") ? --num5 : ++num5;
        number5.innerHTML = num5;
    }

    updateAmount6(that) {
        let number6 = document.getElementById('quantity6');
        let num6 = Math.min(Math.max(parseInt(number6.innerHTML), 0), 19);
        num6 = (that.value == "minus") ? --num6 : ++num6;
        number6.innerHTML = num6;
    }
}

