//Declare and init
import ExhibitionDetailPage from "./pages/exhibition-details.js";
import ArtDetails from "./pages/art-details.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import Map from "/pages/map.js";
import Profile from "/pages/profile.js";
import Exhibitions from "./pages/exhibitions.js";
import OnboardingPage from "/pages/onboarding.js";
import OnboardingPage2 from "/pages/onboarding2.js";
import OnboardingPage3 from "/pages/onboarding3.js";
import spaService from "./js/spa.js";
import TicketsPage from "./pages/tickets.js";

//Declare and init
let map = new Map();
let profile = new Profile();
let exhibitions = new Exhibitions();
let homePage = new HomePage();
let nav = new NavBar();
let exhibitionDetailPage = new ExhibitionDetailPage();
let artDetails = new ArtDetails();
let onboardingPage = new OnboardingPage();
let onboardingPage2 = new OnboardingPage2();
let onboardingPage3 = new OnboardingPage3();
let ticketsPage = new TicketsPage();

spaService.init();

window.pageChange = () => spaService.pageChange();
window.openCloseNav = () => homePage.openCloseNav();
window.openCloseNav = () => new NavBar();
window.closeNav = () => nav.closeNav();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
window.updateAmount = (that) => ticketsPage.updateAmount(that);
window.updateAmount1 = (that) => ticketsPage.updateAmount1(that);
window.updateAmount2 = (that) => ticketsPage.updateAmount2(that);
window.updateAmount3 = (that) => ticketsPage.updateAmount3(that);
window.updateAmount4 = (that) => ticketsPage.updateAmount4(that);
window.updateAmount5 = (that) => ticketsPage.updateAmount5(that);
window.updateAmount6 = (that) => ticketsPage.updateAmount6(that);
// window.selectUser = (id, name, date, image) => exhibitions.selectUser(id, name, date, image);
window.selectUser = (name, image, floor, description) => {
     console.log(name, image, floor, description);
     // references to the input fields
     let nameInput = document.querySelector('.exhibition_title');
     let floorInput = document.querySelector('.floornumber');
     let imageInput = document.querySelector('#details-banner');
     let descriptionInput = document.querySelector(".description_text");
     nameInput.textContent = name;
     floorInput.textContent = "Floor " + floor;
     imageInput.style.backgroundImage = "url(" + image + ")";
     descriptionInput.textContent = description;
     spaService.navigateTo("exhibition-details");
};

