/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\nRequire stack:\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/babel-loader/lib/index.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/loader-runner/lib/loadLoader.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/loader-runner/lib/LoaderRunner.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModule.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModuleFactory.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/Compiler.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/webpack.js\n- /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/bin/webpack.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1145:15)\n    at Module._load (node:internal/modules/cjs/loader:986:27)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/babel-loader/lib/index.js:3:13)\n    at Module._compile (node:internal/modules/cjs/loader:1358:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at loadLoader (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/Compilation.js:157:10)\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/Compilation.js:460:10\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/tapable/lib/Tapable.js:272:13)\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /Users/jess-n-k8/My Drive/work/swampthings-local/webroot/wp-content/plugins/jesse-james-wp-block-plugin-scaffold-jsx-dynamic/node_modules/webpack/lib/NormalModuleFactory.js:196:7\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)");

/***/ })
/******/ ]);