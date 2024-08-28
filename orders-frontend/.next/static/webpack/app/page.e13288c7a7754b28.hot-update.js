"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_OrdersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/OrdersTable */ \"(app-pages-browser)/./components/OrdersTable.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function fetchOrders() {\n    let page = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;\n    const res = await fetch(\"http://localhost:4000/orders?page=\".concat(page, \"&limit=\").concat(limit));\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch orders\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const totalPages = 10; // Set total pages for pagination\n    const loadOrders = async (page)=>{\n        const fetchedOrders = await fetchOrders(page, 5);\n        setOrders(fetchedOrders);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadOrders(currentPage);\n    }, [\n        currentPage\n    ]);\n    const handleNext = ()=>setCurrentPage((prev)=>prev + 1);\n    const handlePrevious = ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OrdersTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                orders: orders\n            }, void 0, false, {\n                fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center mt-6 space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrevious,\n                        disabled: currentPage === 1,\n                        className: \"px-4 py-2 rounded-md text-white font-semibold \".concat(currentPage === 1 ? \"bg-gray-300 cursor-not-allowed\" : \"bg-blue-500 hover:bg-blue-600\"),\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-700 font-medium\",\n                        children: [\n                            \"Page \",\n                            currentPage,\n                            \" of \",\n                            totalPages\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        disabled: currentPage === totalPages,\n                        className: \"px-4 py-2 rounded-md text-white font-semibold \".concat(currentPage === totalPages ? \"bg-gray-300 cursor-not-allowed\" : \"bg-blue-500 hover:bg-blue-600\"),\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mfilter/Desktop/orders/orders-frontend/app/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"BuKoYVtxY3CFIN8fYNlJN3tgaSI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ0E7QUFFbkQsZUFBZUk7UUFBWUMsT0FBQUEsaUVBQU8sR0FBR0MsUUFBQUEsaUVBQVE7SUFDM0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHFDQUFtREYsT0FBZEQsTUFBSyxXQUFlLE9BQU5DO0lBQzNFLElBQUksQ0FBQ0MsSUFBSUUsRUFBRSxFQUFFO1FBQ1gsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0gsSUFBSUksSUFBSTtBQUNqQjtBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTWdCLGFBQWEsSUFBSyxpQ0FBaUM7SUFFekQsTUFBTUMsYUFBYSxPQUFPYjtRQUN4QixNQUFNYyxnQkFBZ0IsTUFBTWYsWUFBWUMsTUFBTTtRQUM5Q1csVUFBVUc7SUFDWjtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUmdCLFdBQVdMO0lBQ2IsR0FBRztRQUFDQTtLQUFZO0lBRWhCLE1BQU1PLGFBQWEsSUFBTU4sZUFBZU8sQ0FBQUEsT0FBUUEsT0FBTztJQUN2RCxNQUFNQyxpQkFBaUIsSUFBTVIsZUFBZU8sQ0FBQUEsT0FBUUUsS0FBS0MsR0FBRyxDQUFDSCxPQUFPLEdBQUc7SUFFdkUscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdkIsK0RBQVdBO2dCQUFDWSxRQUFRQTs7Ozs7OzBCQUNyQiw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsU0FBU047d0JBQ1RPLFVBQVVoQixnQkFBZ0I7d0JBQzFCYSxXQUFXLGlEQUVWLE9BRENiLGdCQUFnQixJQUFJLG1DQUFtQztrQ0FFMUQ7Ozs7OztrQ0FJRCw4REFBQ2lCO3dCQUFLSixXQUFVOzs0QkFBNEI7NEJBQ3BDYjs0QkFBWTs0QkFBS0k7Ozs7Ozs7a0NBR3pCLDhEQUFDVTt3QkFDQ0MsU0FBU1I7d0JBQ1RTLFVBQVVoQixnQkFBZ0JJO3dCQUMxQlMsV0FBVyxpREFFVixPQURDYixnQkFBZ0JJLGFBQWEsbUNBQW1DO2tDQUVuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EvQ3dCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3JkZXJzVGFibGUgZnJvbSAnQC9jb21wb25lbnRzL09yZGVyc1RhYmxlJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcmRlcnMocGFnZSA9IDEsIGxpbWl0ID0gMTApIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9vcmRlcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YCk7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggb3JkZXJzJyk7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHRvdGFsUGFnZXMgPSAxMDsgIC8vIFNldCB0b3RhbCBwYWdlcyBmb3IgcGFnaW5hdGlvblxuXG4gIGNvbnN0IGxvYWRPcmRlcnMgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hlZE9yZGVycyA9IGF3YWl0IGZldGNoT3JkZXJzKHBhZ2UsIDUpO1xuICAgIHNldE9yZGVycyhmZXRjaGVkT3JkZXJzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRPcmRlcnMoY3VycmVudFBhZ2UpO1xuICB9LCBbY3VycmVudFBhZ2VdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4gc2V0Q3VycmVudFBhZ2UocHJldiA9PiBwcmV2ICsgMSk7XG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4gc2V0Q3VycmVudFBhZ2UocHJldiA9PiBNYXRoLm1heChwcmV2IC0gMSwgMSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTZcIj5cbiAgICAgIDxPcmRlcnNUYWJsZSBvcmRlcnM9e29yZGVyc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNiBzcGFjZS14LTRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgJHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID09PSAxID8gJ2JnLWdyYXktMzAwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgUGFnZSB7Y3VycmVudFBhZ2V9IG9mIHt0b3RhbFBhZ2VzfVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLW1kIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnYmctZ3JheS0zMDAgY3Vyc29yLW5vdC1hbGxvd2VkJyA6ICdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3JkZXJzVGFibGUiLCJmZXRjaE9yZGVycyIsInBhZ2UiLCJsaW1pdCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJIb21lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm9yZGVycyIsInNldE9yZGVycyIsInRvdGFsUGFnZXMiLCJsb2FkT3JkZXJzIiwiZmV0Y2hlZE9yZGVycyIsImhhbmRsZU5leHQiLCJwcmV2IiwiaGFuZGxlUHJldmlvdXMiLCJNYXRoIiwibWF4IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});