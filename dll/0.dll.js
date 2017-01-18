webpackJsonp_name_([0],{

/***/ "./src/app/features/lazy/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(\"./node_modules/@angular/core/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(\"./node_modules/@angular/common/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(\"./node_modules/@angular/router/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_routing__ = __webpack_require__(\"./src/app/features/lazy/lazy.routing.ts\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lazy_component__ = __webpack_require__(\"./src/app/features/lazy/lazy.component.ts\");\n/* harmony export (binding) */ __webpack_require__.d(exports, \"LazyModule\", function() { return LazyModule; });\n\r\n\r\n\r\n\r\n\r\nvar LazyModule = (function () {\r\n    function LazyModule() {\r\n    }\r\n    LazyModule = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"NgModule\"])({\r\n            imports: [\r\n                __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"CommonModule\"],\r\n                __WEBPACK_IMPORTED_MODULE_2__angular_router__[\"RouterModule\"].forChild(__WEBPACK_IMPORTED_MODULE_3__lazy_routing__[\"a\" /* routes */])\r\n            ],\r\n            declarations: [\r\n                __WEBPACK_IMPORTED_MODULE_4__lazy_component__[\"a\" /* LazyComponent */]\r\n            ]\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], LazyModule);\r\n    return LazyModule;\r\n}());\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/features/lazy/index.ts\n// module id = ./src/app/features/lazy/index.ts\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/features/lazy/index.ts?");

/***/ },

/***/ "./src/app/features/lazy/lazy.component.html":
/***/ function(module, exports) {

eval("module.exports = \"<header>\\n  <h5>\\n    This module is being loaded lazily.\\n  </h5>\\n</header>\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/features/lazy/lazy.component.html\n// module id = ./src/app/features/lazy/lazy.component.html\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/features/lazy/lazy.component.html?");

/***/ },

/***/ "./src/app/features/lazy/lazy.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(\"./node_modules/@angular/core/index.js\");\n/* harmony export (binding) */ __webpack_require__.d(exports, \"a\", function() { return LazyComponent; });\n\r\nvar LazyComponent = (function () {\r\n    function LazyComponent() {\r\n    }\r\n    LazyComponent = __decorate([\r\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\r\n            selector: 'my-lazy',\r\n            template: __webpack_require__(\"./src/app/features/lazy/lazy.component.html\")\r\n        }), \r\n        __metadata('design:paramtypes', [])\r\n    ], LazyComponent);\r\n    return LazyComponent;\r\n}());\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/features/lazy/lazy.component.ts\n// module id = ./src/app/features/lazy/lazy.component.ts\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/features/lazy/lazy.component.ts?");

/***/ },

/***/ "./src/app/features/lazy/lazy.routing.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_component__ = __webpack_require__(\"./src/app/features/lazy/lazy.component.ts\");\n/* harmony export (binding) */ __webpack_require__.d(exports, \"a\", function() { return routes; });\n\r\nvar routes = [\r\n    {\r\n        path: '',\r\n        component: __WEBPACK_IMPORTED_MODULE_0__lazy_component__[\"a\" /* LazyComponent */]\r\n    }\r\n];\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/features/lazy/lazy.routing.ts\n// module id = ./src/app/features/lazy/lazy.routing.ts\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/features/lazy/lazy.routing.ts?");

/***/ }

});