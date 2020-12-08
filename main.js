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

