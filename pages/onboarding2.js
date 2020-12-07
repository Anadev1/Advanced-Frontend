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
                    <a href="#home" class="skip_btn">SKIP</a>
                    <div id="progress-dots">
                    <a href="#onboarding"><span class="dot"></span></a>
                    <span class="dot_active"></span>
                    <a href="#onboarding3"><span class="dot"></span></a>
                </div>
                    <a href="#onboarding3"><img src="/media/arrow-big.svg" alt="arrow" class="onboarding_arrow"></a>
                </div>
            </div>
        </section>
        `;
    }
}