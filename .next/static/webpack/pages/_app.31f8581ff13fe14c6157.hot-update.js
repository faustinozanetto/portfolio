webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var K_Programming_Full_Stack_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./styles/index.ts");



var _jsxFileName = "K:\\Programming\\Full Stack\\portfolio\\pages\\_app.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(K_Programming_Full_Stack_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["ChakraProvider"], {
    theme: _styles__WEBPACK_IMPORTED_MODULE_4__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["CSSReset"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/index.ts":
/*!*************************!*\
  !*** ./styles/index.ts ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./styles/theme.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_0__["theme"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/theme.tsx":
/*!**************************!*\
  !*** ./styles/theme.tsx ***!
  \**************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");


var breakpoints = Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__["createBreakpoints"])({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
}); // -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

var theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif'
  },
  breakpoints: breakpoints,
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;'
  },
  styles: {
    global: {
      'html, #__next': {
        height: '100%'
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column'
      },
      '.body': {
        // todo check how to do this without breaking the site
        // height: '100%',
        overflowY: 'scroll' // Always show scrollbar to avoid flickering

      },
      html: {
        scrollBehavior: 'smooth'
      },
      '#nprogress': {
        pointerEvents: 'none'
      },
      '#nprogress .bar': {
        background: 'purple.200',
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px'
      }
    }
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3RoZW1lLnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImV4dGVuZFRoZW1lIiwiZm9udHMiLCJib2R5IiwiaGVhZGluZyIsInNoYWRvd3MiLCJsYXJnZVNvZnQiLCJzdHlsZXMiLCJnbG9iYWwiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsImh0bWwiLCJzY3JvbGxCZWhhdmlvciIsInBvaW50ZXJFdmVudHMiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBbUM7QUFBQSxNQUFoQ0MsU0FBZ0MsUUFBaENBLFNBQWdDO0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUM3QyxzQkFDRSxxRUFBQywrREFBRDtBQUFnQixTQUFLLEVBQUVDLDZDQUF2QjtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRDs7S0FBTUYsRztBQVNTQSxrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1JLFdBQVcsR0FBR0MsZ0ZBQWlCLENBQUM7QUFDcENDLElBQUUsRUFBRSxNQURnQztBQUVwQ0MsSUFBRSxFQUFFLE1BRmdDO0FBR3BDQyxJQUFFLEVBQUUsTUFIZ0M7QUFJcENDLElBQUUsRUFBRSxNQUpnQztBQUtwQyxTQUFPO0FBTDZCLENBQUQsQ0FBckMsQyxDQVFBO0FBQ0E7O0FBRU8sSUFBTU4sS0FBSyxHQUFHTyxvRUFBVyxDQUFDO0FBQy9CQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLDhCQUREO0FBRUxDLFdBQU8sRUFBRTtBQUZKLEdBRHdCO0FBSy9CVCxhQUFXLEVBQVhBLFdBTCtCO0FBTS9CVSxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBREosR0FOc0I7QUFTL0JDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFDTix1QkFBaUI7QUFDZkMsY0FBTSxFQUFFO0FBRE8sT0FEWDtBQUlOLGlCQUFXO0FBQ1RDLGVBQU8sRUFBRSxNQURBO0FBRVRDLHFCQUFhLEVBQUU7QUFGTixPQUpMO0FBUU4sZUFBUztBQUNQO0FBQ0E7QUFDQUMsaUJBQVMsRUFBRSxRQUhKLENBR2M7O0FBSGQsT0FSSDtBQWFOQyxVQUFJLEVBQUU7QUFDSkMsc0JBQWMsRUFBRTtBQURaLE9BYkE7QUFnQk4sb0JBQWM7QUFDWkMscUJBQWEsRUFBRTtBQURILE9BaEJSO0FBbUJOLHlCQUFtQjtBQUNqQkMsa0JBQVUsRUFBRSxZQURLO0FBRWpCQyxnQkFBUSxFQUFFLE9BRk87QUFHakJDLGNBQU0sRUFBRSxNQUhTO0FBSWpCQyxXQUFHLEVBQUUsQ0FKWTtBQUtqQkMsWUFBSSxFQUFFLENBTFc7QUFNakJDLGFBQUssRUFBRSxNQU5VO0FBT2pCWixjQUFNLEVBQUU7QUFQUztBQW5CYjtBQURGO0FBVHVCLENBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMWY4NTgxZmYxM2ZlMTRjNjE1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENTU1Jlc2V0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENTU1Jlc2V0IC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiZXhwb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJztcclxuIiwiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQnJlYWtwb2ludHMgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJztcclxuXHJcbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe1xyXG4gIHNtOiAnMzBlbScsXHJcbiAgbWQ6ICc0OGVtJyxcclxuICBsZzogJzYyZW0nLFxyXG4gIHhsOiAnODBlbScsXHJcbiAgJzJ4bCc6ICc5NmVtJyxcclxufSk7XHJcblxyXG4vLyAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcclxuLy8gICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiAnSW50ZXIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZicsXHJcbiAgICBoZWFkaW5nOiAnV29yayBTYW5zLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHMsXHJcbiAgc2hhZG93czoge1xyXG4gICAgbGFyZ2VTb2Z0OiAncmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDEwcHggNnB4OycsXHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICAnaHRtbCwgI19fbmV4dCc6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgfSxcclxuICAgICAgJyNfX25leHQnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmJvZHknOiB7XHJcbiAgICAgICAgLy8gdG9kbyBjaGVjayBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGJyZWFraW5nIHRoZSBzaXRlXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgLy8gQWx3YXlzIHNob3cgc2Nyb2xsYmFyIHRvIGF2b2lkIGZsaWNrZXJpbmdcclxuICAgICAgfSxcclxuICAgICAgaHRtbDoge1xyXG4gICAgICAgIHNjcm9sbEJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgfSxcclxuICAgICAgJyNucHJvZ3Jlc3MnOiB7XHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICAnI25wcm9ncmVzcyAuYmFyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdwdXJwbGUuMjAwJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICB6SW5kZXg6ICcxMDMxJyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9