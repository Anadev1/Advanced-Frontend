export default class OnboardingPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding" class="page onboarding-page">
            <img src="/media/onboarding.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">Explore ARoS</h3>
                <p class="onboarding_text">The ARoS app easily allows you to browse
                    through the exhibitions that can be found in the museum and with the
                    help of our museum map you are able to locate a given exhibitions
                    within minutes.</p>
                <div id="onboarding-nav">
                    <a href="#home" class="skip_btn">SKIP</a>
                    <div id="progress-dots">
                    <span class="dot_active"></span>
                    <a href="#onboarding2"><span class="dot"></span></a>
                    <a href="#onboarding3"><span class="dot"></span></a>
                </div>
                    <a href="#onboarding2"><img src="/media/arrow-big.svg" alt="arrow" class="onboarding_arrow"></a>
                </div>
            </div>
        </section>
        `;
    }
}

