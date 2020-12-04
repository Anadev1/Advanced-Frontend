export default class OnboardingPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding" class="page onboarding">

            
        </section>
        
        `;
    }
}