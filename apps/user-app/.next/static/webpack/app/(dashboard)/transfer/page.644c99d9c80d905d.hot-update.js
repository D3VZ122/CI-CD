"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/transfer/page",{

/***/ "(app-pages-browser)/./components/AddMoneyCard.tsx":
/*!*************************************!*\
  !*** ./components/AddMoneyCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddMoney: function() { return /* binding */ AddMoney; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _repo_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @repo/ui/button */ \"(app-pages-browser)/../../packages/ui/src/button.tsx\");\n/* harmony import */ var _repo_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @repo/ui/card */ \"(app-pages-browser)/../../packages/ui/src/card.tsx\");\n/* harmony import */ var _repo_ui_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @repo/ui/select */ \"(app-pages-browser)/../../packages/ui/src/Select.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _repo_ui_textinput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @repo/ui/textinput */ \"(app-pages-browser)/../../packages/ui/src/TextInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ AddMoney auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SUPPORTED_BANKS = [\n    {\n        name: \"HDFC Bank\",\n        redirectUrl: \"https://netbanking.hdfcbank.com\"\n    },\n    {\n        name: \"Axis Bank\",\n        redirectUrl: \"https://www.axisbank.com/\"\n    }\n];\nconst AddMoney = ()=>{\n    var _SUPPORTED_BANKS_, _SUPPORTED_BANKS_1;\n    _s();\n    const [redirectUrl, setRedirectUrl] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((_SUPPORTED_BANKS_ = SUPPORTED_BANKS[0]) === null || _SUPPORTED_BANKS_ === void 0 ? void 0 : _SUPPORTED_BANKS_.redirectUrl);\n    const [amount, setamount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [provider, setprovider] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((_SUPPORTED_BANKS_1 = SUPPORTED_BANKS[0]) === null || _SUPPORTED_BANKS_1 === void 0 ? void 0 : _SUPPORTED_BANKS_1.name);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        title: \"Add Money\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_textinput__WEBPACK_IMPORTED_MODULE_5__.TextInput, {\n                    label: \"Amount\",\n                    placeholder: \"Amount\",\n                    onChange: (value)=>{\n                        value;\n                    }\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-4 text-left\",\n                    children: \"Bank\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_select__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                    onSelect: (value)=>{\n                        var _SUPPORTED_BANKS_find;\n                        setRedirectUrl(((_SUPPORTED_BANKS_find = SUPPORTED_BANKS.find((x)=>x.name === value)) === null || _SUPPORTED_BANKS_find === void 0 ? void 0 : _SUPPORTED_BANKS_find.redirectUrl) || \"\");\n                    },\n                    options: SUPPORTED_BANKS.map((x)=>({\n                            key: x.name,\n                            value: x.name\n                        }))\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_repo_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>{\n                            window.location.href = redirectUrl || \"\";\n                        },\n                        children: \"Add Money\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\harki\\\\week-17\\\\week-17-final-code\\\\apps\\\\user-app\\\\components\\\\AddMoneyCard.tsx\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, undefined);\n};\n_s(AddMoney, \"8EsT45NUJ4OhnQJrfPaWZJM4vkY=\");\n_c = AddMoney;\nvar _c;\n$RefreshReg$(_c, \"AddMoney\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWRkTW9uZXlDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0o7QUFFSTtBQUNSO0FBQ2M7QUFFL0MsTUFBTUssa0JBQWtCO0lBQUM7UUFDckJDLE1BQU07UUFDTkMsYUFBYTtJQUNqQjtJQUFHO1FBQ0NELE1BQU07UUFDTkMsYUFBYTtJQUNqQjtDQUFFO0FBRUssTUFBTUMsV0FBVztRQUMyQkgsbUJBRVBBOztJQUZ4QyxNQUFNLENBQUNFLGFBQWFFLGVBQWUsR0FBR04sK0NBQVFBLEVBQUNFLG9CQUFBQSxlQUFlLENBQUMsRUFBRSxjQUFsQkEsd0NBQUFBLGtCQUFvQkUsV0FBVztJQUM5RSxNQUFNLENBQUNHLFFBQU9DLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDUyxVQUFTQyxZQUFZLEdBQUdWLCtDQUFRQSxFQUFDRSxxQkFBQUEsZUFBZSxDQUFDLEVBQUUsY0FBbEJBLHlDQUFBQSxtQkFBb0JDLElBQUk7SUFDaEUscUJBQU8sOERBQUNMLCtDQUFJQTtRQUFDYSxPQUFNO2tCQUNuQiw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNaLHlEQUFTQTtvQkFBQ2EsT0FBTztvQkFBVUMsYUFBYTtvQkFBVUMsVUFBVSxDQUFDQzt3QkFDckRBO29CQUNUOzs7Ozs7OEJBQ0EsOERBQUNMO29CQUFJQyxXQUFVOzhCQUFpQjs7Ozs7OzhCQUdoQyw4REFBQ2QsbURBQU1BO29CQUFDbUIsVUFBVSxDQUFDRDs0QkFDQWY7d0JBQWZJLGVBQWVKLEVBQUFBLHdCQUFBQSxnQkFBZ0JpQixJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVqQixJQUFJLEtBQUtjLG9CQUFyQ2YsNENBQUFBLHNCQUE2Q0UsV0FBVyxLQUFJO29CQUMvRTtvQkFBR2lCLFNBQVNuQixnQkFBZ0JvQixHQUFHLENBQUNGLENBQUFBLElBQU07NEJBQ2xDRyxLQUFLSCxFQUFFakIsSUFBSTs0QkFDWGMsT0FBT0csRUFBRWpCLElBQUk7d0JBQ2pCOzs7Ozs7OEJBQ0EsOERBQUNTO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDaEIsbURBQU1BO3dCQUFDMkIsU0FBUzs0QkFDYkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUd2QixlQUFlO3dCQUMxQztrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mLEVBQUM7R0EzQllDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkTW9uZXlDYXJkLnRzeD8xMmMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAcmVwby91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAcmVwby91aS9jYXJkXCI7XHJcbmltcG9ydCB7IENlbnRlciB9IGZyb20gXCJAcmVwby91aS9jZW50ZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIkByZXBvL3VpL3NlbGVjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tIFwiQHJlcG8vdWkvdGV4dGlucHV0XCI7XHJcblxyXG5jb25zdCBTVVBQT1JURURfQkFOS1MgPSBbe1xyXG4gICAgbmFtZTogXCJIREZDIEJhbmtcIixcclxuICAgIHJlZGlyZWN0VXJsOiBcImh0dHBzOi8vbmV0YmFua2luZy5oZGZjYmFuay5jb21cIlxyXG59LCB7XHJcbiAgICBuYW1lOiBcIkF4aXMgQmFua1wiLFxyXG4gICAgcmVkaXJlY3RVcmw6IFwiaHR0cHM6Ly93d3cuYXhpc2JhbmsuY29tL1wiXHJcbn1dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkZE1vbmV5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3JlZGlyZWN0VXJsLCBzZXRSZWRpcmVjdFVybF0gPSB1c2VTdGF0ZShTVVBQT1JURURfQkFOS1NbMF0/LnJlZGlyZWN0VXJsKTtcclxuICAgIGNvbnN0IFthbW91bnQsc2V0YW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3Byb3ZpZGVyLHNldHByb3ZpZGVyXSA9IHVzZVN0YXRlKFNVUFBPUlRFRF9CQU5LU1swXT8ubmFtZSk7XHJcbiAgICByZXR1cm4gPENhcmQgdGl0bGU9XCJBZGQgTW9uZXlcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPFRleHRJbnB1dCBsYWJlbD17XCJBbW91bnRcIn0gcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICh2YWx1ZSk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIEJhbmtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2VsZWN0IG9uU2VsZWN0PXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVkaXJlY3RVcmwoU1VQUE9SVEVEX0JBTktTLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHZhbHVlKT8ucmVkaXJlY3RVcmwgfHwgXCJcIilcclxuICAgICAgICB9fSBvcHRpb25zPXtTVVBQT1JURURfQkFOS1MubWFwKHggPT4gKHtcclxuICAgICAgICAgICAga2V5OiB4Lm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB4Lm5hbWVcclxuICAgICAgICB9KSl9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBBZGQgTW9uZXlcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9DYXJkPlxyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmQiLCJTZWxlY3QiLCJ1c2VTdGF0ZSIsIlRleHRJbnB1dCIsIlNVUFBPUlRFRF9CQU5LUyIsIm5hbWUiLCJyZWRpcmVjdFVybCIsIkFkZE1vbmV5Iiwic2V0UmVkaXJlY3RVcmwiLCJhbW91bnQiLCJzZXRhbW91bnQiLCJwcm92aWRlciIsInNldHByb3ZpZGVyIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9uU2VsZWN0IiwiZmluZCIsIngiLCJvcHRpb25zIiwibWFwIiwia2V5Iiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AddMoneyCard.tsx\n"));

/***/ })

});