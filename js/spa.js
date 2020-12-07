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
    document.querySelector(`#${pageId}`).style.display = "block";
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  //Change the page
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
  }
}



const spaService = new SpaService();
export default spaService;