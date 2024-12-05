console.log("it works")
import pageLoad from './firstPageLoad';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

pageLoad()
// Initialize page structure
const homeButton = document.querySelector("#home-btn")
const menuButton = document.querySelector("#menu-btn")
const aboutButton = document.querySelector("#about-btn")

// Attach event listeners to navigation buttons
homeButton.addEventListener('click', loadHome);
menuButton.addEventListener('click', loadMenu);
aboutButton.addEventListener('click', loadAbout);