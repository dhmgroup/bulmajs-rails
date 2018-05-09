/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/bulma.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./src/bulma.js":
        /*!**********************!*\
          !*** ./src/bulma.js ***!
          \**********************/
        /*! no exports provided */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./src/core.js\");\n/* harmony import */ var _plugins_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/notification */ \"./src/plugins/notification.js\");\n/* harmony import */ var _plugins_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/navbar */ \"./src/plugins/navbar.js\");\n/* harmony import */ var _plugins_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/message */ \"./src/plugins/message.js\");\n/* harmony import */ var _plugins_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/dropdown */ \"./src/plugins/dropdown.js\");\n/* harmony import */ var _plugins_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/modal */ \"./src/plugins/modal.js\");\n/* harmony import */ var _plugins_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/file */ \"./src/plugins/file.js\");\n/* harmony import */ var _plugins_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/tabs */ \"./src/plugins/tabs.js\");\n/* harmony import */ var _plugins_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/accordion */ \"./src/plugins/accordion.js\");\n/* harmony import */ var _plugins_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/calendar */ \"./src/plugins/calendar.js\");\n/* eslint no-unused-vars: 0 */\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.Bulma = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/bulma.js?");

            /***/
        }),

    /***/
    "./src/core.js":
        /*!*********************!*\
          !*** ./src/core.js ***!
          \*********************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\nconst Bulma = {\n    /**\n     * Current BulmaJS version.\n     * @type {String}\n     */\n    VERSION: '0.4.0',\n\n    /**\n     * Helper method to create a new plugin.\n     * @param  {String} key The plugin's key\n     * @param  {Object} options The options to be passed to the plugin\n     * @return {Object} The newly created plugin instance\n     */\n    create(key, options) {\n        if (!key || !Bulma.hasOwnProperty(key)) {\n            throw new Error('[BulmaJS] A plugin with the key \\'' + key + '\\' has not been registered.');\n        }\n\n        return Bulma[key].create(options);\n    },\n\n    /**\n     * Register a new plugin\n     * @param  {String} key The key to register the plugin under\n     * @param  {Object} plugin The plugin's main constructor\n     * @return {undefined}\n     */\n    registerPlugin(key, plugin) {\n        if (!key) {\n            throw new Error('[BulmaJS] Key attribute is required.');\n        }\n\n        this[key] = plugin;\n    },\n\n    /**\n     * Parse the HTML DOM searching for data-bulma attributes. We will then pass\n     * each element to the appropriate plugin to handle the required processing.\n     * \n     * @return {undefined}\n     */\n    traverseDOM() {\n        let elements = document.querySelectorAll('[data-bulma]');\n\n        elements.forEach(function (element) {\n            let plugin = element.getAttribute('data-bulma');\n\n            if (!Bulma.hasOwnProperty(plugin)) {\n                throw new Error('[BulmaJS] Plugin with the key \\'' + plugin + '\\' has not been registered.');\n            }\n\n            if (Bulma[plugin].hasOwnProperty('handleDomParsing')) {\n                Bulma[element.getAttribute('data-bulma')].handleDomParsing(element);\n            }\n        });\n    },\n\n    /**\n     * Create an element and assign classes\n     * @param {string} name The name of the element to create\n     * @param {array} classes An array of classes to add to the element\n     * @return {HTMLElement} The newly created element\n     */\n    createElement(name, classes) {\n        if (!classes) {\n            classes = [];\n        }\n\n        if (typeof classes === 'string') {\n            classes = [classes];\n        }\n\n        let elem = document.createElement(name);\n\n        classes.forEach(className => {\n            elem.classList.add(className);\n        });\n\n        return elem;\n    }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    Bulma.traverseDOM();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bulma);\n\n//# sourceURL=webpack:///./src/core.js?");

            /***/
        }),

    /***/
    "./src/dismissableComponent.js":
        /*!*************************************!*\
          !*** ./src/dismissableComponent.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DismissableComponent; });\n/**\n * @module DismissableComponent\n * @since  0.2.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass DismissableComponent {\n    /**\n     * Plugin constructor\n     * @param  {string} name Plugin's name\n     * @param  {Object} options Plugin's options\n     * @return {this} The new plugin instance\n     */\n    constructor(name, options) {\n        /**\n         * The name of this component, this will be used as the root class\n         * @type {string}\n         */\n        this.name = name;\n\n        /**\n        * Body text.\n        * @type {string}\n        */\n        this.body = options.hasOwnProperty('body') ? options.body : '';\n\n        /**\n        * The parent element to inject HTML\n        */\n        this.parent = options.hasOwnProperty('parent') ? options.parent : document.body;\n\n        /**\n        * Color modifier.\n        * @type {string} Possible values are null, primary, info, success, warning, danger\n        */\n        this.color = options.hasOwnProperty('color') ? options.color : '';\n\n        /**\n        * How long to wait before auto dismissing the component.\n        * @type {int|null} If null component must be dismissed manually.\n        */\n        this.dismissInterval = options.hasOwnProperty('dismissInterval') ? this.createDismissInterval(options.dismissInterval) : null;\n\n        /**\n        * Does this component have a dismiss button?\n        * @type {Boolean}\n        */\n        this.isDismissable = options.hasOwnProperty('isDismissable') ? options.isDismissable : false;\n\n        /**\n        * Should this component be destroyed when it is dismissed.\n        * @type {Boolean}\n        */\n        this.destroyOnDismiss = options.hasOwnProperty('destroyOnDismiss') ? options.destroyOnDismiss : true;\n\n        /**\n        * The root element.\n        * @type {HTMLElement|null} If this is not provided a new element will be created.\n        */\n        this.root = options.hasOwnProperty('element') ? options.element : null;\n\n        /**\n        * The element used to close the component.\n        * @type {HTMLElement}\n        */\n        this.closeButton = options.hasOwnProperty('closeButton') ? options.closeButton : this.createCloseButton();\n\n        if (!this.root) {\n            this.createRootElement();\n            this.parent.appendChild(this.root);\n        }\n\n        if (this.body) {\n            this.insertBody();\n        }\n\n        if (this.color) {\n            this.setColor();\n        }\n    }\n\n    /**\n     * Create the main element.\n     * @return {undefined}\n     */\n    createRootElement() {\n        this.root = document.createElement('div');\n\n        this.root.classList.add(this.name);\n        this.hide();\n    }\n\n    /**\n     * Show the component.\n     * @return {undefined}\n     */\n    show() {\n        this.root.classList.remove('is-hidden');\n    }\n\n    /**\n     * Hide the component.\n     * @return {undefined}\n     */\n    hide() {\n        this.root.classList.add('is-hidden');\n    }\n\n    /**\n     * Insert the body text into the component.\n     * @return {undefined}\n     */\n    insertBody() {\n        this.root.innerHTML = this.body;\n    }\n\n    /**\n     * Create the element that will be used to close the component.\n     * @return {HTMLElement} The newly created close button\n     */\n    createCloseButton() {\n        var closeButton = document.createElement('button');\n        closeButton.setAttribute('type', 'button');\n        closeButton.classList.add('delete');\n\n        return closeButton;\n    }\n\n    /**\n     * Create an interval to dismiss the component after the set number of ms.\n     * @param  {int} interval The time to wait before dismissing the component\n     * @return {undefined}\n     */\n    createDismissInterval(interval) {\n        return setInterval(() => {\n            this.handleCloseEvent();\n        }, interval);\n    }\n\n    /**\n     * Insert the close button before our content.\n     * @return {undefined}\n     */\n    prependCloseButton() {\n        this.root.insertBefore(this.closeButton, this.root.firstChild);\n    }\n\n    /**\n     * Setup the event listener for the close button.\n     * @return {undefined}\n     */\n    setupCloseEvent() {\n        this.closeButton.addEventListener('click', this.handleCloseEvent.bind(this));\n    }\n\n    /**\n     * Handle the event when our close button is clicked.\n     * @return {undefined}\n     */\n    handleCloseEvent() {\n        if (this.destroyOnDismiss) {\n            this.destroy();\n        } else {\n            this.hide();\n        }\n    }\n\n    /**\n     * Set the colour of the component.\n     * @return {undefined}\n     */\n    setColor() {\n        this.root.classList.add('is-' + this.color);\n    }\n\n    /**\n     * Destroy the component, removing the event listener, interval and element.\n     * @return {undefined}\n     */\n    destroy() {\n        if (this.closeButton) {\n            this.closeButton.removeEventListener('click', this.handleCloseEvent.bind(this));\n        }\n\n        clearInterval(this.dismissInterval);\n\n        this.parent.removeChild(this.root);\n        this.parent = null;\n        this.root = null;\n    }\n}\n\n//# sourceURL=webpack:///./src/dismissableComponent.js?");

            /***/
        }),

    /***/
    "./src/plugins/accordion.js":
        /*!**********************************!*\
          !*** ./src/plugins/accordion.js ***!
          \**********************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Accordion\n * @since  0.3.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Accordion {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The plugin's options\n     * @return {this} The new plugin instance\n     */\n    constructor(options) {\n        if (!options) {\n            options = {};\n        }\n\n        /**\n         * Message body text.\n         * @type {string}\n         */\n        this.root = options.hasOwnProperty('element') ? options.element : '';\n\n        /**\n         * Accordion items\n         * @type {Array}\n         */\n        this.accordions = this.findAccordions();\n\n        /**\n         * Toggle buttons for each accordion item\n         * @type {Array}\n         */\n        this.toggleButtons = this.findToggleButtons();\n\n        this.addToggleButtonEvents();\n    }\n\n    /**\n     * Find the accordion items within this accordions element\n     * @returns {Array} The accordion elements found\n     */\n    findAccordions() {\n        return this.root.querySelectorAll('.accordion');\n    }\n\n    /**\n     * Find the toggle buttons within this accordions element\n     * @returns {Array} The toggle buttons found\n     */\n    findToggleButtons() {\n        let buttons = [];\n\n        this.accordions.forEach(accordion => {\n            buttons.push(accordion.querySelector('button.toggle'));\n        });\n\n        return buttons;\n    }\n\n    /**\n     * Add click events to toggle buttons\n     * @return {undefined}\n     */\n    addToggleButtonEvents() {\n        this.toggleButtons.forEach((toggleButton, index) => {\n            // If the button is null, the accordion item has no toggle button\n            if (toggleButton !== null) {\n                toggleButton.addEventListener('click', event => {\n                    this.handleToggleClick(event, index);\n                });\n            }\n        });\n    }\n\n    /**\n     * Handle the click\n     * @param {Object} event The event object\n     * @param {number} index Index of the accordion to toggle\n     * @return {undefined}\n     */\n    handleToggleClick(event, index) {\n        this.toggleAccordionVisibility(this.accordions[index]);\n    }\n\n    /**\n     * Show or hide the accordion\n     * @param {HTMLElement} accordion The accordion element\n     * @return {undefined}\n     */\n    toggleAccordionVisibility(accordion) {\n        this.accordions.forEach(function (a) {\n            a.classList.remove('is-active');\n        });\n\n        if (accordion.classList.contains('is-active')) {\n            accordion.classList.remove('is-active');\n        } else {\n            accordion.classList.add('is-active');\n        }\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options The plugin's options\n     * @return {Accordion} The newly created instance\n     */\n    static create(options) {\n        return new Accordion(options);\n    }\n\n    /**\n     * Destroy the message, removing the event listener, interval and element.\n     * @return {undefined}\n     */\n    destroy() {\n        this.root = null;\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this accordion\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        new Accordion({\n            element\n        });\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('accordion', Accordion);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n//# sourceURL=webpack:///./src/plugins/accordion.js?");

            /***/
        }),

    /***/
    "./src/plugins/calendar.js":
        /*!*********************************!*\
          !*** ./src/plugins/calendar.js ***!
          \*********************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Calendar\n * @since  0.3.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Calendar {\n    /**\n     * Plugin constructor\n     * @param  {Object} options Plugin instance's options\n     * @return {this} The newly created instance\n     */\n    constructor(options) {\n        if (!options.element) {\n            throw new Error('[BulmaJS] The Calendar component requires an element.');\n        }\n\n        /**\n         * The root Calendar element.\n         * @type {HTMLElement}\n         */\n        this.root = options.element;\n\n        /**\n         * The input element this calendar belongs to.\n         * @type {HTMLElement|null}\n         */\n        this.inputElement = null;\n\n        if (this.root.nodeName === 'INPUT') {\n            this.inputElement = this.root;\n            this.root = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div');\n        }\n\n        /**\n         * The wrapper for the calendar\n         * @type {HTMLElement}\n         */\n        this.wrapper = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', ['calendar']);\n\n        /**\n         * The current date for today tests\n         * @type {Date}\n         */\n        this.now = new Date();\n\n        /**\n         * The date this calendar starts at\n         * @type {Date}\n         */\n        this.date = options.hasOwnProperty('date') ? options.date : this.now;\n\n        /**\n         * The current year for the calendar\n         * @type {int}\n         */\n        this.year = this.date.getFullYear();\n\n        /**\n         * The current month for the calendar\n         * @type {int}\n         */\n        this.month = this.date.getMonth();\n\n        /**\n         * Month names\n         * @type {Array}\n         */\n        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\n        /**\n         * Short day names\n         * @type {Array}\n         */\n        this.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n\n        /**\n         * Number of days in each month\n         * @type {Array}\n         */\n        this.monthDays = [31, this.isLeapYear(this.year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n\n        /**\n         * Show the navigating buttons\n         * @type {boolean}\n         */\n        this.navButtons = options.hasOwnProperty('navButtons') ? options.navButtons : true;\n\n        /**\n         * The format string for the date output. Used when attached to an input element.\n         * @type {string}\n         */\n        this.format = options.hasOwnProperty('format') ? options.format : 'yyyy-mm-dd';\n\n        /**\n         * Should the calendar be shown as a modal. Used when attached to an input element\n         * @type {boolean}\n         */\n        this.overlay = options.hasOwnProperty('overlay') ? options.overlay : false;\n\n        if (this.overlay) {\n            this.buildModal();\n        }\n\n        if (this.inputElement !== null) {\n            this.inputElement.addEventListener('focus', event => {\n                this.handleInputFocus(event);\n            });\n        }\n\n        this.render();\n    }\n\n    ////////////////////////////////////////\n    ///// HELPER METHODS TO BUILD HTML /////\n    ////////////////////////////////////////\n\n    /**\n     * If we are to show as an overlay, build the modal's HTML\n     * @return {undefined}\n     */\n    buildModal() {\n        this.modal = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', ['modal']);\n        this.modalBackground = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', ['modal-background']);\n\n        let modalClose = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', ['modal-close']);\n\n        modalClose.addEventListener('click', () => {\n            this.modal.classList.remove('is-active');\n        });\n\n        this.modal.appendChild(this.modalBackground);\n        this.modal.appendChild(modalClose);\n\n        this.root.appendChild(this.modal);\n\n        this.wrapper.style.zIndex = 40;\n    }\n\n    /**\n     * Build the calendars nav HTML\n     * @return {undefined}\n     */\n    buildNav() {\n        let prevIcon, nextIcon;\n        let nav = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-nav');\n        let navLeft = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-nav-left');\n        let navRight = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-nav-right');\n\n        // Left side of nav (prev year/month buttons)\n        if (this.navButtons) {\n            this.prevYearButton = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', ['button', 'is-text']);\n            prevIcon = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('i', ['fa', 'fa-backward']);\n            this.prevYearButton.appendChild(prevIcon);\n\n            this.prevYearButton.addEventListener('click', event => {\n                this.handlePrevYearClick(event);\n            });\n\n            navLeft.appendChild(this.prevYearButton);\n\n            this.prevMonthButton = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', ['button', 'is-text']);\n            prevIcon = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('i', ['fa', 'fa-chevron-left']);\n            this.prevMonthButton.appendChild(prevIcon);\n\n            this.prevMonthButton.addEventListener('click', event => {\n                this.handlePrevMonthClick(event);\n            });\n\n            navLeft.appendChild(this.prevMonthButton);\n\n            // Right side of nav (next year/month buttons)\n            this.nextMonthButton = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', ['button', 'is-text']);\n            nextIcon = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('i', ['fa', 'fa-chevron-right']);\n            this.nextMonthButton.appendChild(nextIcon);\n\n            this.nextMonthButton.addEventListener('click', event => {\n                this.handleNextMonthClick(event);\n            });\n\n            navRight.appendChild(this.nextMonthButton);\n\n            this.nextYearButton = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', ['button', 'is-text']);\n            prevIcon = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('i', ['fa', 'fa-forward']);\n            this.nextYearButton.appendChild(prevIcon);\n\n            this.nextYearButton.addEventListener('click', event => {\n                this.handleNextYearClick(event);\n            });\n\n            navRight.appendChild(this.nextYearButton);\n        }\n\n        // Month/year label\n        this.monthYearLabel = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div');\n        this.monthYearLabel.innerHTML = this.months[this.month] + ' ' + this.year;\n\n        nav.appendChild(navLeft);\n        nav.appendChild(this.monthYearLabel);\n        nav.appendChild(navRight);\n\n        return nav;\n    }\n\n    /**\n     * Build the calendar's container HTML\n     * @return {HTMLElement} The calendar's container\n     */\n    buildContainer() {\n        return _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-container');\n    }\n\n    /**\n     * Build the calendar's header HTML\n     * @return {HTMLElement} The calendar's header element\n     */\n    buildHeader() {\n        let calendarHeader = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-header');\n\n        this.shortDays.forEach(dayName => {\n            let day = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-date');\n            day.innerHTML = dayName;\n            calendarHeader.appendChild(day);\n        });\n\n        return calendarHeader;\n    }\n\n    /**\n     * Build the calendar's body. This includes all days.\n     * @return {HTMLElement} The calendar's body element\n     */\n    buildBody() {\n        let calendarBody = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-body');\n\n        let daysInMonth = this.monthDays[this.now.getMonth()];\n\n        // Number of days to show from the previous month.\n        let daysBefore = new Date(this.year, this.month, 1).getDay();\n\n        // Number of days to show from the next month\n        let daysAfter;\n\n        let numDays = daysInMonth + daysBefore;\n\n        daysAfter = numDays;\n        while (daysAfter > 7) {\n            daysAfter -= 7;\n        }\n\n        numDays += 7 - daysAfter;\n\n        let cells = [];\n\n        for (let i = 0; i < numDays; i++) {\n            let d = new Date(this.year, this.month, 1 + (i - daysBefore));\n\n            let today = false;\n            let thisMonth = false;\n\n            if (d.getFullYear() === this.now.getFullYear() && d.getMonth() === this.now.getMonth() && d.getDate() === this.now.getDate()) {\n                today = true;\n            }\n\n            if (d.getMonth() === this.month) {\n                thisMonth = true;\n            }\n\n            cells.push({\n                day: d.getDate(),\n                isToday: today,\n                isThisMonth: thisMonth\n            });\n        }\n\n        cells.forEach(day => {\n            let d = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('div', 'calendar-date');\n\n            if (!day.isThisMonth) {\n                d.classList.add('is-disabled');\n            }\n\n            let button = _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement('button', 'date-item');\n\n            if (this.inputElement !== null && day.isThisMonth) {\n                button.addEventListener('click', event => {\n                    this.handleDayClick(event, day);\n                });\n            }\n\n            if (day.isToday) {\n                button.classList.add('is-today');\n            }\n\n            button.innerHTML = day.day;\n\n            d.appendChild(button);\n\n            calendarBody.appendChild(d);\n        });\n\n        return calendarBody;\n    }\n\n    //////////////////////////\n    ///// EVENT HANDLERS /////\n    //////////////////////////\n\n    /**\n     * Called when the input box is in focus.\n     * @return {undefined}\n     */\n    handleInputFocus() {\n        if (this.overlay) {\n            this.modal.classList.add('is-active');\n        }\n\n        this.inputElement.parentNode.insertBefore(this.root, this.inputElement.nextSibling);\n    }\n\n    /**\n     * Event hander for when a day is clicked.\n     * @param {Object} event The event object\n     * @param {Object} day The day that was clicked\n     * @return {undefined}\n     */\n    handleDayClick(event, day) {\n        day = new Date(this.year, this.month, day.day);\n\n        let dateString = this.formatDateString(day);\n\n        this.inputElement.value = dateString;\n\n        if (this.overlay) {\n            this.modal.classList.remove('is-active');\n        } else {\n            this.inputElement.parentNode.removeChild(this.root);\n        }\n    }\n\n    /**\n     * Event handler for the previous month button.\n     * @return {undefined}\n     */\n    handlePrevMonthClick() {\n        this.month--;\n\n        if (this.month < 0) {\n            this.year--;\n            this.month = 11;\n        }\n\n        this.render();\n    }\n\n    /**\n     * Event handler for the next month button.\n     * @return {undefined}\n     */\n    handleNextMonthClick() {\n        this.month++;\n\n        if (this.month > 11) {\n            this.year++;\n            this.month = 0;\n        }\n\n        this.render();\n    }\n\n    /**\n     * Event handler for the previous year button.\n     * @return {undefined}\n     */\n    handlePrevYearClick() {\n        this.year--;\n\n        this.render();\n    }\n\n    /**\n     * Event handler for the next year button.\n     * @return {undefined}\n     */\n    handleNextYearClick() {\n        this.year++;\n\n        this.render();\n    }\n\n    /**\n     * Format the date based on the supplied format string.\n     * @param {Object} day Date object representing the day to format\n     * @returns {string} The formatted date string\n     */\n    formatDateString(day) {\n        let dateString = this.format;\n\n        // May be a better/faster way of doing this?\n        if (dateString.indexOf('yyyy') !== -1) {\n            dateString = this.format.replace('yyyy', day.getFullYear());\n        } else {\n            dateString = this.format.replace('yy', day.getFullYear().toString().substr(-2));\n        }\n\n        if (dateString.indexOf('mm') !== -1) {\n            let month = day.getMonth() + 1;\n            if (month < 10) {\n                month = '0' + month.toString();\n            }\n            dateString = dateString.replace('mm', month);\n        } else {\n            dateString = dateString.replace('m', day.getMonth() + 1);\n        }\n\n        if (dateString.indexOf('dd') !== -1) {\n            let date = day.getDate();\n            if (date < 10) {\n                date = '0' + date.toString();\n            }\n            dateString = dateString.replace('dd', date);\n        } else {\n            dateString = dateString.replace('d', day.getDate());\n        }\n\n        return dateString;\n    }\n\n    /**\n     * Clear the calendar HTML, ready for a re-render.\n     * @return {undefined}\n     */\n    clearCalendar() {\n        while (this.wrapper.firstChild) {\n            this.wrapper.removeChild(this.wrapper.firstChild);\n        }\n    }\n\n    /**\n     * Check if the passed year is a leap year.\n     * @param {int} year The year to check against\n     * @return {boolean} Is the year a leap year or not\n     */\n    isLeapYear(year) {\n        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951\n        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n    }\n\n    /**\n     * Render/build the calendar's HTML.\n     * @return {undefined}\n     */\n    render() {\n        this.clearCalendar();\n\n        this.wrapper.appendChild(this.buildNav());\n\n        let container = this.buildContainer();\n        container.appendChild(this.buildHeader());\n        container.appendChild(this.buildBody());\n\n        this.wrapper.appendChild(container);\n\n        if (this.overlay) {\n            this.modal.insertBefore(this.wrapper, this.modalBackground.nextSibling);\n            this.root.appendChild(this.modal);\n        } else {\n            this.root.appendChild(this.wrapper);\n        }\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options The new calendar's options\n     * @return {Calendar} The newly created calendar instance\n     */\n    static create(options) {\n        return new Calendar(options);\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @return {undefined}\n     */\n    static handleDomParsing() {\n        return;\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('calendar', Calendar);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./src/plugins/calendar.js?");

            /***/
        }),

    /***/
    "./src/plugins/dropdown.js":
        /*!*********************************!*\
          !*** ./src/plugins/dropdown.js ***!
          \*********************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Dropdown\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Dropdown {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created instance\n     */\n    constructor(options) {\n        if (!options.element || !options.trigger) {\n            throw new Error('[BulmaJS] The dropdown component requires an element and trigger to function.');\n        }\n\n        /**\n         * The root dropdown element.\n         * @type {HTMLElement}\n         */\n        this.root = options.element;\n\n        /**\n         * The element to trigger when clicked.\n         * @type {HTMLElement}\n         */\n        this.trigger = options.trigger;\n\n        this.registerEvents();\n    }\n\n    /**\n     * Register all the events this module needs.\n     * @return {undefined}\n     */\n    registerEvents() {\n        this.trigger.addEventListener('click', this.handleTriggerClick.bind(this));\n    }\n\n    /**\n     * Handle the click event on the trigger.\n     * @return {undefined}\n     */\n    handleTriggerClick() {\n        if (this.root.classList.contains('is-active')) {\n            this.root.classList.remove('is-active');\n        } else {\n            this.root.classList.add('is-active');\n        }\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HtmlElement} element The root element for this instance\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        let trigger = element.querySelector('[data-trigger]');\n\n        new Dropdown({\n            element: element,\n            trigger: trigger\n        });\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('dropdown', Dropdown);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\n//# sourceURL=webpack:///./src/plugins/dropdown.js?");

            /***/
        }),

    /***/
    "./src/plugins/file.js":
        /*!*****************************!*\
          !*** ./src/plugins/file.js ***!
          \*****************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module File\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass File {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created plugin instance\n     */\n    constructor(options) {\n        if (!options.element) {\n            throw new Error('[BulmaJS] The file component requires an element to function.');\n        }\n\n        /**\n         * The root file element.\n         * @type {HTMLElement}\n         */\n        this.root = options.element;\n\n        /**\n         * The element to use as the trigger.\n         * @type {HTMLELement}\n         */\n        this.trigger = this.root.querySelector('input');\n\n        /**\n         * The element to show the file name.\n         * @type {HTMLElement}\n         */\n        this.target = this.root.querySelector('.file-name');\n\n        this.registerEvents();\n    }\n\n    /**\n     * Register all the events this module needs.\n     * @return {undefined}\n     */\n    registerEvents() {\n        this.trigger.addEventListener('change', this.handleTriggerChange.bind(this));\n    }\n\n    /**\n     * Handle the click event on the trigger.\n     * @param  {Object} event The event object\n     * @return {undefined}\n     */\n    handleTriggerChange(event) {\n        if (event.target.files.length === 0) {\n            this.clearFileName();\n        }\n\n        if (event.target.files.length === 1) {\n            this.setFileName(event.target.files[0].name);\n        }\n\n        if (event.target.files.length > 1) {\n            this.setFileName(event.target.files.length + ' files');\n        }\n    }\n\n    /**\n     * Clear the file name element.\n     * @return {undefined}\n     */\n    clearFileName() {\n        this.target.innerHTML = '';\n    }\n\n    /**\n     * Set the text for the file name element.\n     * @param {string} value The name of the file to update the label with\n     * @return {undefined}\n     */\n    setFileName(value) {\n        this.target.innerHTML = value;\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this plugin\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        new File({\n            element: element\n        });\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('file', File);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (File);\n\n//# sourceURL=webpack:///./src/plugins/file.js?");

            /***/
        }),

    /***/
    "./src/plugins/message.js":
        /*!********************************!*\
          !*** ./src/plugins/message.js ***!
          \********************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n/* harmony import */ var _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissableComponent */ \"./src/dismissableComponent.js\");\n\n\n\n/**\n * @module Message\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n * @extends DismissableComponent\n */\nclass Message extends _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created instance\n     */\n    constructor(options) {\n        if (!options) {\n            options = {};\n        }\n\n        super('message', options);\n\n        /**\n         * The size of the message\n         * @type {String} Possible values are small, normal, medium or large\n         */\n        this.size = options.hasOwnProperty('size') ? options.size : '';\n\n        /**\n         * The title of the message\n         * @type {String}\n         */\n        this.title = options.hasOwnProperty('title') ? options.title : '';\n\n        if (this.title) {\n            this.createMessageHeader();\n        }\n\n        // TODO: Move this into the DismissableComponent class. Due to the required\n        // changes between different components, we may need a way to trigger this\n        // when the component is ready.\n        if (this.isDismissable) {\n            if (!options.hasOwnProperty('closeButton')) {\n                this.prependCloseButton();\n            }\n\n            this.setupCloseEvent();\n        }\n\n        if (this.size) {\n            this.setSize();\n        }\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options THe options object for this instance\n     * @return {Message} The newly created message instance\n     */\n    static create(options) {\n        return new Message(options);\n    }\n\n    /**\n     * Create the message header\n     * @return {undefined}\n     */\n    createMessageHeader() {\n        let header = document.createElement('div');\n        header.classList.add('message-header');\n\n        header.innerHTML = '<p>' + this.title + '</p>';\n\n        this.title = header;\n\n        this.root.insertBefore(this.title, this.root.firstChild);\n    }\n\n    /**\n     * Set the size of the message.\n     * @return {undefined}\n     */\n    setSize() {\n        this.root.classList.add('is-' + this.size);\n    }\n\n    /**\n     * Insert the body text into the component.\n     * @return {undefined}\n     */\n    insertBody() {\n        let body = document.createElement('div');\n        body.classList.add('message-body');\n        body.innerHTML = this.body;\n\n        this.root.appendChild(body);\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this plugin\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        let closeBtn = element.querySelector('.delete');\n        let dismissInterval = element.getAttribute('data-dismiss-interval');\n\n        let options = {\n            body: null,\n            parent: element.parentNode,\n            element: element,\n            closeButton: closeBtn,\n            isDismissable: !!closeBtn,\n            destroyOnDismiss: true\n        };\n\n        if (dismissInterval) {\n            options['dismissInterval'] = parseInt(dismissInterval);\n        }\n\n        new Message(options);\n    }\n\n    /**\n     * Insert the close button before our content.\n     * @return {undefined}\n     */\n    prependCloseButton() {\n        this.title.appendChild(this.closeButton);\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('message', Message);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./src/plugins/message.js?");

            /***/
        }),

    /***/
    "./src/plugins/modal.js":
        /*!******************************!*\
          !*** ./src/plugins/modal.js ***!
          \******************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Modal\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Modal {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created plugin instance\n     */\n    constructor(options) {\n        if (!options) {\n            options = {};\n        }\n\n        /**\n         * Message body text.\n         * @type {string}\n         */\n        this.root = options.hasOwnProperty('element') ? options.element : '';\n\n        /**\n         * Closable toggle switch.\n         * @type {bool}\n         */\n        this.closable = options.hasOwnProperty('closable') ? options.closable : true;\n\n        /**\n         * The element used to close the message.\n         * @type {HTMLElement}\n         */\n        this.closeButton = this.findCloseButton();\n\n        if (this.closeButton && this.closable) {\n            this.setupCloseEvent();\n        }\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options THe options object for the new instance\n     * @return {Modal} The newly created instance\n     */\n    static create(options) {\n        return new Modal(options);\n    }\n\n    /**\n     * Show the message.\n     * @return {undefined}\n     */\n    open() {\n        this.root.classList.add('is-active');\n    }\n\n    /**\n     * Hide the message.\n     * @return {undefined}\n     */\n    close() {\n        this.root.classList.remove('is-active');\n    }\n\n    /**\n     * Find the close button.\n     * @return {HTMLElement} The newly created element\n     */\n    findCloseButton() {\n        let element = this.root.querySelector('.modal-close');\n\n        if (!element) {\n            return this.root.querySelector('.delete');\n        }\n\n        return element;\n    }\n\n    /**\n     * Setup the event listener for the close button.\n     * @return {undefined}\n     */\n    setupCloseEvent() {\n        this.closeButton.addEventListener('click', this.handleCloseEvent.bind(this));\n    }\n\n    /**\n     * Handle the event when our close button is clicked.\n     * @return {undefined}\n     */\n    handleCloseEvent() {\n        this.close();\n    }\n\n    /**\n     * Destroy the message, removing the event listener, interval and element.\n     * @return {undefined}\n     */\n    destroy() {\n        if (this.closable && this.closeButton) {\n            this.closeButton.removeEventListener('click', this.handleCloseEvent.bind(this));\n        }\n\n        this.root = null;\n        this.closeButton = null;\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @return {undefined}\n     */\n    static handleDomParsing() {\n        return;\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('modal', Modal);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/plugins/modal.js?");

            /***/
        }),

    /***/
    "./src/plugins/navbar.js":
        /*!*******************************!*\
          !*** ./src/plugins/navbar.js ***!
          \*******************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Navbar\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Navbar {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created plugin instance\n     */\n    constructor(options) {\n        if (!options.element || !options.trigger || !options.target) {\n            throw new Error('[BulmaJS] The navbar component requires an element, trigger and target to function.');\n        }\n\n        /**\n         * The root navbar element.\n         * @type {HTMLElement}\n         */\n        this.root = options.element;\n\n        /**\n         * The element used for the trigger.\n         * @type {HTMLElement}\n         */\n        this.trigger = options.trigger;\n\n        /**\n         * The target element.\n         * @type {HTMLELement}\n         */\n        this.target = options.target;\n\n        this.registerEvents();\n    }\n\n    /**\n     * Register all the events this module needs.\n     * @return {undefined}\n     */\n    registerEvents() {\n        this.trigger.addEventListener('click', this.handleTriggerClick.bind(this));\n    }\n\n    /**\n     * Handle the click event on the trigger.\n     * @return {undefined}\n     */\n    handleTriggerClick() {\n        if (this.target.classList.contains('is-active')) {\n            this.target.classList.remove('is-active');\n        } else {\n            this.target.classList.add('is-active');\n        }\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this instance\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        let trigger = element.querySelector('[data-trigger]'),\n            target = trigger.getAttribute('data-target');\n\n        new Navbar({\n            element: element,\n            trigger: trigger,\n            target: element.querySelector('#' + target)\n        });\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('navbar', Navbar);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/plugins/navbar.js?");

            /***/
        }),

    /***/
    "./src/plugins/notification.js":
        /*!*************************************!*\
          !*** ./src/plugins/notification.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n/* harmony import */ var _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissableComponent */ \"./src/dismissableComponent.js\");\n\n\n\n/**\n * @module Notification\n * @since  0.1.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n * @extends DismissableComponent\n */\nclass Notification extends _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created instance\n     */\n    constructor(options) {\n        if (!options) {\n            options = {};\n        }\n\n        super('notification', options);\n\n        // TODO: Move this into the DismissableComponent class. Due to the required\n        // changes between different components, we may need a way to trigger this\n        // when the component is ready.\n        if (this.isDismissable) {\n            if (!options.hasOwnProperty('closeButton')) {\n                this.prependCloseButton();\n            }\n\n            this.setupCloseEvent();\n        }\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options The options object for this instance\n     * @return {Notification} The newly created instance\n     */\n    static create(options) {\n        return new Notification(options);\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this instance\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        let closeBtn = element.querySelector('.delete');\n        let dismissInterval = element.getAttribute('data-dismiss-interval');\n\n        let options = {\n            body: null,\n            parent: element.parentNode,\n            element: element,\n            closeButton: closeBtn,\n            isDismissable: !!closeBtn,\n            destroyOnDismiss: true\n        };\n\n        if (dismissInterval) {\n            options['dismissInterval'] = parseInt(dismissInterval);\n        }\n\n        new Notification(options);\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('notification', Notification);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n//# sourceURL=webpack:///./src/plugins/notification.js?");

            /***/
        }),

    /***/
    "./src/plugins/tabs.js":
        /*!*****************************!*\
          !*** ./src/plugins/tabs.js ***!
          \*****************************/
        /*! exports provided: default */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core.js\");\n\n\n/**\n * @module Tabs\n * @since  0.4.0\n * @author  Thomas Erbe <vizuaalog@gmail.com>\n */\nclass Tabs {\n    /**\n     * Plugin constructor\n     * @param  {Object} options The options object for this plugin\n     * @return {this} The newly created instance\n     */\n    constructor(options) {\n        if (!options) {\n            options = {};\n        }\n\n        this.root = options.hasOwnProperty('root') ? options.root : null;\n\n        this.nav = this.findNav();\n        this.navItems = this.findNavItems();\n\n        this.content = this.findContent();\n        this.contentItems = this.findContentItems();\n\n        this.setupNavEvents();\n    }\n\n    findNav() {\n        return this.root.querySelector('[data-links]');\n    }\n\n    findNavItems() {\n        return this.nav.querySelectorAll('li');\n    }\n\n    findContent() {\n        return this.root.querySelector('[data-content]');\n    }\n\n    findContentItems() {\n        return this.content.querySelectorAll('li');\n    }\n\n    setupNavEvents() {\n        this.navItems.forEach((navItem, index) => {\n            navItem.addEventListener('click', () => {\n                this.handleNavClick(navItem, index);\n            });\n        });\n    }\n\n    handleNavClick(navItem, index) {\n        this.navItems.forEach(navItem => {\n            navItem.classList.remove('is-active');\n        });\n\n        this.contentItems.forEach(contentItem => {\n            contentItem.classList.remove('is-active');\n        });\n\n        navItem.classList.add('is-active');\n        this.contentItems[index].classList.add('is-active');\n    }\n\n    /**\n     * Helper method used by the Bulma core to create a new instance.\n     * @param  {Object} options The options object for this instance\n     * @return {Tabs} The newly created instance\n     */\n    static create(options) {\n        return new Tabs(options);\n    }\n\n    /**\n     * Handle parsing the DOMs data attribute API.\n     * @param {HTMLElement} element The root element for this instance\n     * @return {undefined}\n     */\n    static handleDomParsing(element) {\n        let options = {\n            root: element\n        };\n\n        new Tabs(options);\n    }\n}\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin('tabs', Tabs);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\n//# sourceURL=webpack:///./src/plugins/tabs.js?");

            /***/
        })

    /******/
});