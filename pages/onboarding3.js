export default class OnboardingPage3 {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding3" class="page onboarding-page">
            <img src="/media/onboarding-3.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">Purchase your ticket</h3>
                <p class="onboarding_text">Do you want to skip the line? Purchasing your tickets or 
                    annual passes through our app allows you to skip the line at the ticket office 
                    and you can start exploring our exhibitions in an instant.</p>
                <div id="onboarding-nav">
                    <a href="#home" class="skip_btn">SKIP</a>
                    <div id="progress-dots">
                    <a href="#onboarding"><span class="dot"></span></a>
                    <a href="#onboarding2"><span class="dot"></span></a>
                    <span class="dot_active"></span>
                </div>
                    <a href="#home"><img src="/media/arrow-big.svg" alt="arrow" class="onboarding_arrow"></a>
                </div>
            </div>
        </section>
        `;
    }
}