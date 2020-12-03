export default class Nav{
    constructor(){
        this.template();
    }

    template(){
        document.querySelector("#app").innerHTML += `
            
            <div class="nav-container>
                
                <nav class="navigation>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#home">Museum Map</a></li>
                        <li><a href="#home">Exhibition</a></li>
                        <li><a href="#home">Ticket store</a></li>
                        <li><a href="#home">Profile</a></li>
                    </ul>
                </nav>
            </div>
            
        `
    }
}