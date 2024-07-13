"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/books/route";
exports.ids = ["app/api/books/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shashanklahoti_Desktop_Coding_Projects_test2_Front_book_r_front_app_api_books_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/books/route.ts */ \"(rsc)/./app/api/books/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/books/route\",\n        pathname: \"/api/books\",\n        filename: \"route\",\n        bundlePath: \"app/api/books/route\"\n    },\n    resolvedPagePath: \"/Users/shashanklahoti/Desktop/Coding Projects/test2-Front/book-r-front/app/api/books/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shashanklahoti_Desktop_Coding_Projects_test2_Front_book_r_front_app_api_books_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/books/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZib29rcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYm9va3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZib29rcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoYXNoYW5rbGFob3RpJTJGRGVza3RvcCUyRkNvZGluZyUyMFByb2plY3RzJTJGdGVzdDItRnJvbnQlMkZib29rLXItZnJvbnQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2hhc2hhbmtsYWhvdGklMkZEZXNrdG9wJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZ0ZXN0Mi1Gcm9udCUyRmJvb2stci1mcm9udCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkM7QUFDMUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXItZnJvbnQvPzRiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NoYXNoYW5rbGFob3RpL0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL3Rlc3QyLUZyb250L2Jvb2stci1mcm9udC9hcHAvYXBpL2Jvb2tzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ib29rcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jvb2tzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ib29rcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zaGFzaGFua2xhaG90aS9EZXNrdG9wL0NvZGluZyBQcm9qZWN0cy90ZXN0Mi1Gcm9udC9ib29rLXItZnJvbnQvYXBwL2FwaS9ib29rcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYm9va3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/books/route.ts":
/*!********************************!*\
  !*** ./app/api/books/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongoose */ \"(rsc)/./lib/mongoose.js\");\n/* harmony import */ var _models_newbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/newbook */ \"(rsc)/./models/newbook.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\n\nasync function GET(request) {\n    const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.auth)();\n    const userId = session.user.id;\n    const adminId = [\n        \"6681baf3edaf2e8a771432a2\"\n    ];\n    if (!adminId.includes(userId)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"You are not authorized to view this page\"\n        });\n    }\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    // Parse URL to get query parameters\n    const { searchParams } = new URL(request.url);\n    const id = searchParams.get(\"id\");\n    try {\n        if (id) {\n            const bookDocument = await _models_newbook__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n            if (!bookDocument) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: \"Book not found\"\n                }, {\n                    status: 404\n                });\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(bookDocument);\n        }\n        const bookDocuments = await _models_newbook__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(bookDocuments);\n    } catch (error) {\n        console.error(\"GET request error:\", error);\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jvb2tzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1M7QUFDTjtBQUNOO0FBR2pDLGVBQWVJLElBQUlDLE9BQU87SUFDN0IsTUFBTUMsVUFBVSxNQUFNSCwrQ0FBSUE7SUFDMUIsTUFBTUksU0FBU0QsUUFBUUUsSUFBSSxDQUFDQyxFQUFFO0lBQzlCLE1BQU1DLFVBQVU7UUFBQztLQUEyQjtJQUM1QyxJQUFJLENBQUNBLFFBQVFDLFFBQVEsQ0FBQ0osU0FBUztRQUMzQixPQUFPUCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBMkM7SUFDbkY7SUFDQSxNQUFNWix5REFBZUE7SUFFckIsb0NBQW9DO0lBQ3BDLE1BQU0sRUFBRWEsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSVYsUUFBUVcsR0FBRztJQUM1QyxNQUFNUCxLQUFLSyxhQUFhRyxHQUFHLENBQUM7SUFFNUIsSUFBSTtRQUNBLElBQUlSLElBQUk7WUFDSixNQUFNUyxlQUFlLE1BQU1oQix1REFBT0EsQ0FBQ2lCLFFBQVEsQ0FBQ1Y7WUFDNUMsSUFBSSxDQUFDUyxjQUFjO2dCQUNmLE9BQU9sQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFpQixHQUFHO29CQUFFTyxRQUFRO2dCQUFJO1lBQzFFO1lBQ0EsT0FBT3BCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNNO1FBQzdCO1FBRUEsTUFBTUcsZ0JBQWdCLE1BQU1uQix1REFBT0EsQ0FBQ29CLElBQUk7UUFDeEMsT0FBT3RCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNTO0lBQzdCLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtRQUNwQyxPQUFPLElBQUlFLFNBQVMseUJBQXlCO1lBQUVMLFFBQVE7UUFBSTtJQUMvRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1yLWZyb250Ly4vYXBwL2FwaS9ib29rcy9yb3V0ZS50cz84Y2Y5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IG1vbmdvb3NlQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvb3NlXCI7XG5pbXBvcnQgTmV3Qm9vayBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL25ld2Jvb2tcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIlxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi51c2VyLmlkO1xuICAgIGNvbnN0IGFkbWluSWQgPSBbJzY2ODFiYWYzZWRhZjJlOGE3NzE0MzJhMiddO1xuICAgIGlmICghYWRtaW5JZC5pbmNsdWRlcyh1c2VySWQpKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byB2aWV3IHRoaXMgcGFnZVwiIH0pO1xuICAgIH0gXG4gICAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XG5cbiAgICAvLyBQYXJzZSBVUkwgdG8gZ2V0IHF1ZXJ5IHBhcmFtZXRlcnNcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBib29rRG9jdW1lbnQgPSBhd2FpdCBOZXdCb29rLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgIGlmICghYm9va0RvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJCb29rIG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oYm9va0RvY3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvb2tEb2N1bWVudHMgPSBhd2FpdCBOZXdCb29rLmZpbmQoKTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGJvb2tEb2N1bWVudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgcmVxdWVzdCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtb25nb29zZUNvbm5lY3QiLCJOZXdCb29rIiwiYXV0aCIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiYWRtaW5JZCIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJnZXQiLCJib29rRG9jdW1lbnQiLCJmaW5kQnlJZCIsInN0YXR1cyIsImJvb2tEb2N1bWVudHMiLCJmaW5kIiwiZXJyb3IiLCJjb25zb2xlIiwiUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/books/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/resend */ \"(rsc)/./node_modules/next-auth/providers/resend.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.ts\");\n\n\n\n\n\nconst adminId = [\n    \"6681baf3edaf2e8a771432a2\"\n];\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        next_auth_providers_resend__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    pages: {\n        signIn: \"/auth/login\",\n        signOut: \"/auth/logout\"\n    },\n    callbacks: {\n        session: async ({ session, token, user })=>{\n            if (adminId.includes(session?.user?.id)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDZTtBQUNBO0FBQ087QUFDdEI7QUFFaEMsTUFBTUssVUFBVTtJQUFDO0NBQTJCO0FBRXJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdULHFEQUFRQSxDQUFDO0lBQzFEVSxXQUFXO1FBQUNULGtFQUFNQTtRQUFFQyxrRUFBTUE7S0FBQztJQUMzQlMsU0FBU1IscUVBQWNBLENBQUNDLDJDQUFhQTtJQUNyQ1EsT0FBTTtRQUNKTCxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUNBSyxXQUFVO1FBQ05DLFNBQVMsT0FBTyxFQUFDQSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFDO1lBQ3BDLElBQUlYLFFBQVFZLFFBQVEsQ0FBQ0gsU0FBU0UsTUFBTUUsS0FBSTtnQkFBQyxPQUFPSjtZQUFPLE9BQU07Z0JBQUMsT0FBTztZQUFLO1FBQzVFO0lBQ0Y7QUFDSixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1yLWZyb250Ly4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgUmVzZW5kIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3Jlc2VuZFwiXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4vZGJcIlxuXG5jb25zdCBhZG1pbklkID0gWyc2NjgxYmFmM2VkYWYyZThhNzcxNDMyYTInXVxuIFxuZXhwb3J0IGNvbnN0IHsgaGFuZGxlcnMsIHNpZ25Jbiwgc2lnbk91dCwgYXV0aCB9ID0gTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtHb29nbGUsIFJlc2VuZF0sXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwYWdlczp7XG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXG4gICAgc2lnbk91dDogXCIvYXV0aC9sb2dvdXRcIixcbiAgfSxcbiAgY2FsbGJhY2tzOntcbiAgICAgIHNlc3Npb246IGFzeW5jICh7c2Vzc2lvbiwgdG9rZW4sIHVzZXJ9KSA9PiB7XG4gICAgICAgIGlmIChhZG1pbklkLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmlkKSl7cmV0dXJuIHNlc3Npb259ZWxzZSB7cmV0dXJuIGZhbHNlfVxuICAgICAgfVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlIiwiUmVzZW5kIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiYWRtaW5JZCIsImhhbmRsZXJzIiwic2lnbkluIiwic2lnbk91dCIsImF1dGgiLCJwcm92aWRlcnMiLCJhZGFwdGVyIiwicGFnZXMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiaW5jbHVkZXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzNDO0FBRXZELElBQUksQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLFVBQVU7SUFDZEMsV0FBVztRQUNUQyxTQUFTUixxREFBZ0JBLENBQUNTLEVBQUU7UUFDNUJDLFFBQVE7UUFDUkMsbUJBQW1CO0lBQ3JCO0FBQ0Y7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVosSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUlhLGtCQUFrQkM7SUFJdEIsSUFBSSxDQUFDRCxnQkFBZ0JFLG1CQUFtQixFQUFFO1FBQ3hDSixTQUFTLElBQUliLGdEQUFXQSxDQUFDTSxLQUFLQztRQUM5QlEsZ0JBQWdCRSxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUN0RDtJQUNBSixnQkFBZ0JDLGdCQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXItZnJvbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIFNlcnZlckFwaVZlcnNpb24gfSBmcm9tIFwibW9uZ29kYlwiXG4gXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxufVxuIFxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHNlcnZlckFwaToge1xuICAgIHZlcnNpb246IFNlcnZlckFwaVZlcnNpb24udjEsXG4gICAgc3RyaWN0OiB0cnVlLFxuICAgIGRlcHJlY2F0aW9uRXJyb3JzOiB0cnVlLFxuICB9LFxufVxuIFxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG4gXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgbGV0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD5cbiAgfVxuIFxuICBpZiAoIWdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG4gXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsV2l0aE1vbmdvIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWpCLFNBQVNDO0lBQ3BCLElBQUlELDREQUFtQixDQUFDRyxVQUFVLEtBQUssR0FBRztRQUN0QyxPQUFPSCwwREFBbUIsQ0FBQ0ksU0FBUztJQUN4QyxPQUNLO1FBQ0QsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUM1QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1yLWZyb250Ly4vbGliL21vbmdvb3NlLmpzPzE2M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKXtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4gICAgICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwibW9uZ29vc2VDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJhc1Byb21pc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.js\n");

/***/ }),

/***/ "(rsc)/./models/newbook.ts":
/*!***************************!*\
  !*** ./models/newbook.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst newBookSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    year: {\n        type: Number,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    link: {\n        type: String,\n        required: true\n    },\n    images: {\n        type: [\n            {\n                type: String\n            }\n        ]\n    },\n    sorting: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId,\n        ref: \"Sorting\"\n    },\n    properties: {\n        type: Object\n    },\n    genre: {\n        type: String\n    }\n});\nconst NewBook = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).NewBook || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"NewBook\", newBookSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBook);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvbmV3Ym9vay50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDUjtBQUdoQyxNQUFNRSxnQkFBZ0IsSUFBSUYsNENBQU1BLENBQUM7SUFDN0JHLE9BQU87UUFDSEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FDLFFBQVE7UUFDSkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FFLE1BQU07UUFDRkosTUFBTUs7UUFDTkgsVUFBVTtJQUNkO0lBQ0FJLGFBQWE7UUFDVE4sTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FLLE1BQU07UUFDRlAsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FNLFFBQVE7UUFDSlIsTUFBTTtZQUFDO2dCQUFDQSxNQUFNQztZQUFNO1NBQUU7SUFDMUI7SUFDQVEsU0FBUztRQUNMVCxNQUFNSCx1REFBYyxDQUFDYyxRQUFRO1FBQzdCQyxLQUFLO0lBQ1Q7SUFDQUMsWUFBWTtRQUNSYixNQUFNYztJQUNWO0lBQ0FDLE9BQU87UUFDSGYsTUFBTUM7SUFDVjtBQUNBO0FBRUosTUFBTWUsVUFBVW5CLHdEQUFlLENBQUNtQixPQUFPLElBQUluQixxREFBYyxDQUFDLFdBQVdDO0FBRXJFLGlFQUFla0IsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2stci1mcm9udC8uL21vZGVscy9uZXdib29rLnRzPzJhNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCB9IGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuXG5jb25zdCBuZXdCb29rU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgYXV0aG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHllYXI6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWFnZXM6IHtcbiAgICAgICAgdHlwZTogW3t0eXBlOiBTdHJpbmd9XSxcbiAgICB9LFxuICAgIHNvcnRpbmc6IHtcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogJ1NvcnRpbmcnLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcbiAgICBnZW5yZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxuICAgIH0pXG5cbmNvbnN0IE5ld0Jvb2sgPSBtb25nb29zZS5tb2RlbHMuTmV3Qm9vayB8fCBtb25nb29zZS5tb2RlbCgnTmV3Qm9vaycsIG5ld0Jvb2tTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBOZXdCb29rIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwibmV3Qm9va1NjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYXV0aG9yIiwieWVhciIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwibGluayIsImltYWdlcyIsInNvcnRpbmciLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJvcGVydGllcyIsIk9iamVjdCIsImdlbnJlIiwiTmV3Qm9vayIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/newbook.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshashanklahoti%2FDesktop%2FCoding%20Projects%2Ftest2-Front%2Fbook-r-front&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();