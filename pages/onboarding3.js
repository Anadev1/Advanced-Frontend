
function onboardingTemplate3() {
    document.querySelector("#onboarding3").innerHTML += /*html*/ `
        <section id="onboarding" class="page onboarding-page">
            <img src="/media/onboarding3.jpg" alt="Art museum" class="onboarding_img">
            <div id="onboarding-content">
                <h3 class="onboarding_title">Purchase your ticket</h3>
                <p class="onboarding_text">Do you want to skip the line? Purchasing your tickets or 
                    annual passes through our app allows you to skip the line at the ticket office 
                    and you can start exploring our exhibitions in an instant.</p>
                <div id="onboarding-nav">
                    <button onclick="navigateTo('home')" class="skip_btn">SKIP</button>
                    <div id="progress-dots">
                    <span onclick="navigateTo('onboarding')" class="dot"></span>
                    <span onclick="navigateTo('onboarding2')" class="dot"></span>
                    <span class="dot_active"></span>
                </div>
                    <img src="/media/arrow-big.svg" onclick="navigateTo('home')" alt="arrow" class="onboarding_arrow">
                </div>
            </div>
        </section>
        `;
}

onboardingTemplate3();