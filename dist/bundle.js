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

/***/ "./src/clases/Empresa.js":
/*!*******************************!*\
  !*** ./src/clases/Empresa.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Empresa: () => (/* binding */ Empresa)\n/* harmony export */ });\nclass Empresa {\n  constructor(id, nombre, rut, importaciones) {\n    this.id = id;\n    this.nombre = nombre;\n    this.rut = rut;\n    this.importaciones = [];\n  }\n\n  //metodo agregar importacion\n  agregarImportacion(importacion) {\n    this.importaciones.push(importacion);\n  }\n\n  //metodo obtener total de importaciones\n  obtenerTotalImportaciones() {\n    let total = 0;\n    for (let importacion of this.importaciones) {\n      total += importacion.obtenerTotal();\n    }\n    return total;\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/clases/Empresa.js?");

/***/ }),

/***/ "./src/clases/Importacion.js":
/*!***********************************!*\
  !*** ./src/clases/Importacion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Importacion: () => (/* binding */ Importacion)\n/* harmony export */ });\nclass Importacion {\n  constructor(id, producto, numero, precioUnitario) {\n    this.id = id;\n    this.producto = producto;\n    this.numero = numero;\n    this.precioUnitario = precioUnitario;\n  }\n  obtenerTotal() {\n    return this.numero * this.precioUnitario;\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/clases/Importacion.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_clases_Empresa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../src/clases/Empresa.js */ \"./src/clases/Empresa.js\");\n/* harmony import */ var _src_clases_Importacion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../src/clases/Importacion.js */ \"./src/clases/Importacion.js\");\n\n\nlet empresas = {}; //aqui almaceno el array\nlet idEmpresa = 0;\n// let total = obtenerTotal();\n\ndocument.getElementById('empresa-form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  let id = document.getElementById('empresa-id').value;\n  let nombre = document.getElementById('empresa-nombre').value;\n  let rut = document.getElementById('empresa-rut').value;\n  let empresa = new _src_clases_Empresa_js__WEBPACK_IMPORTED_MODULE_0__.Empresa(id, nombre, rut);\n  empresas[id] = empresa;\n  console.log(empresas[id].id);\n  idEmpresa = empresas[id].id;\n  // document.getElementById('empresa-form').reset();\n});\n\nlet importaciones = {}; //\n\ndocument.getElementById('importacion-form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  let id = document.getElementById('importacion-id').value;\n  let producto = document.getElementById('importacion-producto').value;\n  let numero = document.getElementById('importacion-numero').value;\n  let precio = document.getElementById('importacion-precio').value;\n  console.log(id, producto, numero, precio);\n  let importacion = new _src_clases_Importacion_js__WEBPACK_IMPORTED_MODULE_1__.Importacion(id, producto, numero, precio);\n  console.log(importacion);\n  if (idEmpresa in empresas) {\n    empresas[idEmpresa].agregarImportacion(importacion);\n    updateTable(empresas[idEmpresa]);\n    let sumaTotal = obtenerSumaTotalImportaciones();\n    let numeroTotal = obtenerNumeroTotalImportaciones();\n    console.log('suma total de importaciones: ', sumaTotal);\n  } else {\n    alert(\"Empresa no encontrada. Asegúrese de haberla agregado antes de registrar una importación.\");\n  }\n  document.getElementById('importacion-form').reset();\n});\nfunction obtenerSumaTotalImportaciones() {\n  let sumaTotal = 0;\n  for (let id in empresas) {\n    sumaTotal += empresas[id].obtenerTotalImportaciones();\n  }\n  return sumaTotal;\n}\nfunction obtenerNumeroTotalImportaciones() {\n  let numeroTotal = 0;\n  for (let id in empresas) {\n    for (let importacion of empresas[id].importaciones) {\n      numeroTotal += parseInt(importacion.numero, 10);\n    }\n  }\n  return numeroTotal;\n}\nfunction updateTable(empresa) {\n  let table = document.getElementById('importaciones-table');\n\n  /*  borra todas las filas existentes, excepto la fila de encabezado */\n  while (table.rows.length > 1) {\n    table.deleteRow(1);\n  }\n\n  // Ahora, agrega una nueva fila por cada importación\n  for (let importacion of empresa.importaciones) {\n    let row = table.insertRow();\n    let idCell = row.insertCell();\n    idCell.textContent = importacion.id;\n    let productoCell = row.insertCell();\n    productoCell.textContent = importacion.producto;\n    let numeroCell = row.insertCell();\n    numeroCell.textContent = importacion.numero;\n    let precioCell = row.insertCell();\n    precioCell.textContent = importacion.precioUnitario;\n    let totalCell = row.insertCell();\n    totalCell.textContent = importacion.obtenerTotal();\n  }\n\n  //document.getElementById('total-importaciones').textContent = totalImportaciones;\n  document.getElementById('total-importaciones').textContent = `El total de las importaciones es de ${obtenerSumaTotalImportaciones()}`;\n  document.getElementById('numero-importaciones').textContent = `El numero de las importaciones es de ${obtenerNumeroTotalImportaciones()}`;\n  var myModal = document.getElementById('myModal');\n  var myInput = document.getElementById('myInput');\n  myModal.addEventListener('shown.bs.modal', function () {\n    myInput.focus();\n  });\n}\n\n//# sourceURL=webpack://webpack/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;