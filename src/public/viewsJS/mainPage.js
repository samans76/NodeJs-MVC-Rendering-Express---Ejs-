const isLoggedIn = JSON.parse(document.currentScript.getAttribute("data"));

const authButtons = document.querySelector(".authBtns");
const dashboardBtn = document.querySelector(".dashboardBtn");

if (isLoggedIn) {
  authButtons.remove();
} else {
  dashboardBtn.remove();
}
