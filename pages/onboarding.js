export default class OnboardingPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding" class="page onboarding-page">
            <img src="/media/onboarding.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">Explore KüNSTE</h3>
                <p class="onboarding_text">The KüNSTE app easily allows you to browse
                    through the exhibitions that can be found in the museum and with the
                    help of our museum map you are able to locate a given exhibitions
                    within minutes.</p>
                <div id="onboarding-nav">
                    <button onclick="navigateTo('home')" class="skip_btn">SKIP</button>
                    <div id="progress-dots">
                    <span class="dot_active"></span>
                    <span onclick="navigateTo('onboarding2')" class="dot"></span>
                    <span onclick="navigateTo('onboarding3')" class="dot"></span>
                </div>
                    <img src="/media/arrow-big.svg" onclick="navigateTo('onboarding2')" alt="arrow" class="onboarding_arrow">
                </div>
            </div>
        </section>
        `;
    }
}

