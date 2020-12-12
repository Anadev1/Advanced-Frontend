//Declare and init
import ExhibitionDetailPage from "../pages/exhibition-details.js";
import ArtDetails from "../pages/art-details.js";
import NavBar from "../components/nav.js";
import HomePage from "../pages/home.js";
import Map from "../pages/map.js";
import Profile from "../pages/profile.js";
import Exhibitions from "../pages/exhibitions.js";
import OnboardingPage from "../pages/onboarding.js";
import OnboardingPage2 from "../pages/onboarding2.js";
import OnboardingPage3 from "../pages/onboarding3.js";
import spaService from "../js/spa.js";
import TicketsPage from "../pages/tickets.js";
import welcomePage from "./pages/welcome.js";

//Declare and init
let map = new Map();
let profile = new Profile();
let exhibitionsPage = new Exhibitions();
let homePage = new HomePage();
let nav = new NavBar();
let exhibitionDetailPage = new ExhibitionDetailPage();
let artDetails = new ArtDetails();
let onboardingPage = new OnboardingPage();
let onboardingPage2 = new OnboardingPage2();
let onboardingPage3 = new OnboardingPage3();
let ticketsPage = new TicketsPage();

spaService.init();
welcomePage.init();

window.pageChange = () => spaService.pageChange();
window.openCloseNav = () => homePage.openCloseNav();
window.closeNav = () => nav.closeNav();
window.openHours = () => nav.openHours();
window.closeHours = () => nav.closeHours();
window.logout = () => welcomePage.logout();
window.openMapFloor = () => map.openMapFloor();
window.openMapFloor0 = () => map.openMapFloor0();
window.openMapFloor1 = () => map.openMapFloor1();
window.openMapFloor2 = () => map.openMapFloor2();
window.openMapFloor3 = () => map.openMapFloor3();
window.openMapFloor4 = () => map.openMapFloor4();
window.openMapFloor5 = () => map.openMapFloor5();
window.openMapFloor6 = () => map.openMapFloor6();
window.openFloors = () => map.openFloors();
window.zoomTicket = () => profile.zoomTicket();
window.closeTicket = () => profile.closeTicket();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
window.updateAmount = (that) => ticketsPage.updateAmount(that);
window.updateAmount1 = (that) => ticketsPage.updateAmount1(that);
window.updateAmount2 = (that) => ticketsPage.updateAmount2(that);
window.updateAmount3 = (that) => ticketsPage.updateAmount3(that);
window.updateAmount4 = (that) => ticketsPage.updateAmount4(that);
window.updateAmount5 = (that) => ticketsPage.updateAmount5(that);
window.updateAmount6 = (that) => ticketsPage.updateAmount6(that);
window.search = (value) => exhibitionsPage.search(value);

window.selectExhibition = (name, image, floor, description) => {
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

window.selectArtwork = (artworkTitle, artworkImage, artistImg, artworkFacts, artworkName, artworkDescription) => {
     console.log(artworkTitle, artworkImage, artistImg, artworkFacts, artworkName, artworkDescription);
     // references to the input fields
     let artworkTitleInput = document.querySelector('.artwork-title, .artwork-name');
     let artworkImageInput = document.querySelector('.artwork-image-container');
     let artistImgInput = document.querySelector('#artist-image-container');
     let artworkFactsInput = document.querySelector('.facts');
     let artworkNameInput = document.querySelector('.artist-name');
     let artworkDescriptionInput = document.querySelector(".description-text");

     artworkTitleInput.textContent = artworkTitle;
     artworkImageInput.style.backgroundImage = "url(" + artworkImage + ")";
     artistImgInput.style.backgroundImage = "url(" + artistImg + ")";
     artworkFactsInput.textContent = artworkFacts;
     artworkNameInput.textContent = artworkName;
     artworkDescriptionInput.textContent = artworkDescription;
     spaService.navigateTo("art-details");
};

