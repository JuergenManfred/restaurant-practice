/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear existing content\r\n\r\n    const aboutDiv = document.createElement('div');\r\n    aboutDiv.style.textAlign = 'center';\r\n    aboutDiv.style.margin = '20px';\r\n    aboutDiv.style.padding = '20px';\r\n    aboutDiv.style.backgroundColor = '#e0f7fa';\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'About Us';\r\n    heading.style.color = '#00796b';\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = 'We are passionate about serving the best food in town. Our chefs use the freshest ingredients to craft delicious meals.';\r\n    description.style.fontSize = '18px';\r\n\r\n    aboutDiv.appendChild(heading);\r\n    aboutDiv.appendChild(description);\r\n    content.appendChild(aboutDiv);\r\n}\n\n//# sourceURL=webpack://restaurant-practice/./src/about.js?");

/***/ }),

/***/ "./src/firstPageLoad.js":
/*!******************************!*\
  !*** ./src/firstPageLoad.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ firstPageLoad)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\nfunction firstPageLoad() {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\n\n//# sourceURL=webpack://restaurant-practice/./src/firstPageLoad.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n// Home Module\r\nfunction loadHome() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear existing content\r\n\r\n    const homeDiv = document.createElement('div');\r\n    homeDiv.style.textAlign = 'center';\r\n    homeDiv.style.margin = '20px';\r\n    homeDiv.style.padding = '20px';\r\n    homeDiv.style.backgroundColor = '#f9f9f9';\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent = 'Welcome to Our Restaurant!';\r\n    heading.style.color = '#333';\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = 'Enjoy the finest dining experience with our exquisite dishes.';\r\n    description.style.fontSize = '18px';\r\n\r\n    homeDiv.appendChild(heading);\r\n    homeDiv.appendChild(description);\r\n    content.appendChild(homeDiv);\r\n}\n\n//# sourceURL=webpack://restaurant-practice/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firstPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstPageLoad */ \"./src/firstPageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\nconsole.log(\"it works\")\r\n;\r\n\r\n\r\n\r\n\r\n(0,_firstPageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n// Initialize page structure\r\nconst homeButton = document.querySelector(\"#home-btn\")\r\nconst menuButton = document.querySelector(\"#menu-btn\")\r\nconst aboutButton = document.querySelector(\"#about-btn\")\r\n\r\n// Attach event listeners to navigation buttons\r\nhomeButton.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nmenuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\naboutButton.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-practice/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear existing content\r\n\r\n    const menuDiv = document.createElement('div');\r\n    menuDiv.style.display = 'grid';\r\n    menuDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';\r\n    menuDiv.style.gap = '20px';\r\n    menuDiv.style.margin = '20px';\r\n    menuDiv.style.padding = '20px';\r\n    menuDiv.style.backgroundColor = '#fffbe0';\r\n\r\n    const items = [\r\n        { name: 'Pasta', price: '$12' },\r\n        { name: 'Pizza', price: '$15' },\r\n        { name: 'Salad', price: '$10' },\r\n        { name: 'Dessert', price: '$8' }\r\n    ];\r\n\r\n    items.forEach(item => {\r\n        const menuItem = document.createElement('div');\r\n        menuItem.style.border = '1px solid #ccc';\r\n        menuItem.style.padding = '10px';\r\n        menuItem.style.textAlign = 'center';\r\n\r\n        const itemName = document.createElement('h2');\r\n        itemName.textContent = item.name;\r\n        itemName.style.color = '#555';\r\n\r\n        const itemPrice = document.createElement('p');\r\n        itemPrice.textContent = item.price;\r\n        itemPrice.style.fontSize = '16px';\r\n\r\n        menuItem.appendChild(itemName);\r\n        menuItem.appendChild(itemPrice);\r\n        menuDiv.appendChild(menuItem);\r\n    });\r\n\r\n    content.appendChild(menuDiv);\r\n}\n\n//# sourceURL=webpack://restaurant-practice/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;