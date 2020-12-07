export default class HomePage{
    constructor(){
        this.template();
    }

    template(){
        document.querySelector("#app").innerHTML += /*html*/`
            <section id="home" class="page home-page">
                <div class="home-content">
                    <header class="applogo">
                        <h1>KuNSTE</h1>
                        <h2>Art museum</h2>
                    </header>
                <div class="nav-btn" onclick="openCloseNav()">
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div class="current-exhibitions">
                    <h3>Current exhibition</h3>
                    <div class="current-exhibitions-stuff">
                        <img src="./media/human-nature.jpg">
                        <img src="./media/human-nature.jpg">
                        <img src="./media/human-nature.jpg">
                        <img src="./media/human-nature.jpg">
                    </div>
                    <a href="#exhibitions" class="more">See more</a>
                </div>
            </section>
        `;
    }    
}