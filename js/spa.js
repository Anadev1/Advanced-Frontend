class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.page = document.querySelectorAll(".page");
    this.pageChange();
  }

  // Hide all pages
  hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
      page.style.display = "none";
    }
  }

  // Show page or tab
  showPage(pageId) {
    this.hideAllPages();
    if (pageId == "home") {
      document.querySelector(`#${pageId}`).style.display = "flex";
    } else {
      document.querySelector(`#${pageId}`).style.display = "block";
    }

  }

  //Change the page
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
    let navContainer = document.querySelector(".nav-container");
    navContainer.style.display = "none";
  }
}



const spaService = new SpaService();
export default spaService;