export default class OnboardingPage2 {
    constructor() {
        this.template();
    }


    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="onboarding2" class="page onboarding-page">
            <img src="/media/onboarding-2.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">Discover exhibitions</h3>
                <p class="onboarding_text">The app also helps you stay up to date with the 
                    KüNSTE newest exhibitions and makes it easier for you to read more about
                     the different artworks.</p>
                <div id="onboarding-nav">
                    <button onclick="navigateTo('home')" class="skip_btn">SKIP</button>
                    <div id="progress-dots">
                    <span onclick="navigateTo('onboarding')" class="dot"></span>
                    <span class="dot_active"></span>
                    <span onclick="navigateTo('onboarding3')" class="dot"></span>
                </div>
                    <img src="/media/arrow-big.svg" onclick="navigateTo('onboarding3')" alt="arrow" class="onboarding_arrow">
                </div>
            </div>
        </section>
        `;
    }
}