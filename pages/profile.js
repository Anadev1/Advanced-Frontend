export default class Profile {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
            
        <section id="profile" class="page profile_page">
        <img src="../media/settings.png" class="settings_icon">
            <header class="topbar profile_top">
               <h2>PROFILE</h2>
               <h2>Adam Smith</h2>
            </header>
           
            <div class="virtual_card">
                <h3>Your virtual ticket</h3>
                <img src="../media/virtual_card.png"> 
                <div class="subscription_time">
                    <h4 class="subscription_time">Student ticket</h4>
                    <h4 class="subscription_time">243 days left</h4>
                </div>
            </div>

            <div class="coffee_stamps">
                <h3>Coffee stamps collection</h3>
                <div class="collection">
                    <img class="coffee" src="../media/coffee.png"> 
                    <img class="coffee" src="../media/coffee.png"> 
                    <img class="coffee" src="../media/coffee.png"> 
                    <img class="coffee" src="../media/coffee.png"> 
                    <img class="coffee" src="../media/coffee.png">    
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                    <div class="coffee"></div> 
                </div>
            </div>

            <div class="coffee_stamps">
                <h3 class="profile_title">Favourite artworks</h3>
                <div class="favourite_artworks">
                   
                </div>
            </div>
            
        </section>
        
        `;
        
    }
}