"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[211],{5211:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberCelebrity)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4747);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1249);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8478);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7042);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1038);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nfunction _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _characters = /*#__PURE__*/new WeakMap();\n\nvar _selected = /*#__PURE__*/new WeakMap();\n\nvar _createCharacterItem = /*#__PURE__*/new WeakSet();\n\nvar CyberCelebrity = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberCelebrity, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberCelebrity);\n\n  function CyberCelebrity() {\n    var _this;\n\n    _classCallCheck(this, CyberCelebrity);\n\n    _this = _super.call(this);\n\n    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createCharacterItem);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _characters, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selected, {\n      writable: true,\n      value: void 0\n    });\n\n    _this.btnRetry.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.random);\n\n    _this.btnNext.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.next);\n\n    _this.panelCharacter.vScrollBar.elasticDistance = 150;\n    return _this;\n  }\n\n  _createClass(CyberCelebrity, [{\n    key: "init",\n    value: function init() {\n      this.random();\n    }\n  }, {\n    key: "close",\n    value: function close() {\n      _classPrivateFieldSet(this, _selected, null);\n\n      this.vboxCharacter.destroyChildren(true);\n    }\n  }, {\n    key: "random",\n    value: function random() {\n      var _this2 = this;\n\n      _classPrivateFieldSet(this, _selected, null);\n\n      this.vboxCharacter.destroyChildren(true);\n\n      _classPrivateFieldSet(this, _characters, core.characterRandom());\n\n      _classPrivateFieldGet(this, _characters).forEach(function (character) {\n        var item = _classPrivateMethodGet(_this2, _createCharacterItem, _createCharacterItem2).call(_this2, character);\n\n        _this2.vboxCharacter.addChild(item);\n\n        item.click(function () {\n          if (_classPrivateFieldGet(_this2, _selected)) _classPrivateFieldGet(_this2, _selected).switch(false);\n\n          _classPrivateFieldSet(_this2, _selected, item);\n\n          item.switch(true);\n          item.event(Laya.Event.RESIZE);\n        });\n      });\n    }\n  }, {\n    key: "next",\n    value: function next() {\n      if (!_classPrivateFieldGet(this, _selected)) {\n        $$event(\'message\', [\'M_PleaseSelectOne\']);\n        return;\n      }\n\n      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _selected).dataSource,\n          propertyAllocate = _classPrivateFieldGet2.property,\n          talents = _classPrivateFieldGet2.talent;\n\n      var replace = core.remake(talents.map(function (talent) {\n        return talent.id;\n      }));\n\n      if (replace.length > 0) {\n        $$event(\'message\', [replace.map(function (v) {\n          return [\'F_TalentReplace\', v];\n        })]);\n      }\n\n      $ui.switchView(UI.pages.TRAJECTORY, {\n        propertyAllocate: propertyAllocate,\n        talents: talents,\n        enableExtend: false\n      });\n    }\n  }]);\n\n  return CyberCelebrity;\n}(ui.view.CyberTheme.CelebrityUI);\n\nfunction _createCharacterItem2(dataSource, click) {\n  var _this3 = this;\n\n  var name = dataSource.name,\n      property = dataSource.property,\n      talent = dataSource.talent;\n\n  var item = _classStaticPrivateFieldSpecGet(CyberCelebrity, CyberCelebrity, _createComponent).call(CyberCelebrity, \'boxCharacter\');\n\n  var vboxStates = item.getChildByName(\'vboxStates\');\n  var boxName = item.getChildByName(\'boxName\');\n  boxName.getChildByName(\'label\').text = name;\n  vboxStates.getChildByName(\'label\').text = $_.format($lang.F_PropertyStr, property);\n\n  var _iterator = _createForOfIteratorHelper(talent),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var t = _step.value;\n\n      var i = _classStaticPrivateFieldSpecGet(CyberCelebrity, CyberCelebrity, _createComponent).call(CyberCelebrity, \'boxTalent\');\n\n      i.getChildByName(\'label\').text = $_.format($lang.F_TalentSelection, t);\n      i.y = vboxStates.height + vboxStates.space;\n      var g = i.getChildByName("grade".concat(t.grade));\n      if (g) g.visible = true;\n      vboxStates.addChild(i);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var box = new Laya.Box();\n  box.height = vboxStates.space;\n  box.y = vboxStates.height;\n  vboxStates.addChild(box);\n  vboxStates.scaleY = 0;\n  item.dataSource = dataSource;\n\n  item.switch = function (showDetails) {\n    return vboxStates.scaleY = !!showDetails ? 1 : 0;\n  };\n\n  item.click = function (cb, caller) {\n    boxName.offAll(Laya.Event.CLICK);\n    boxName.on(Laya.Event.CLICK, caller || _this3, cb);\n  };\n\n  if (click) item.click(click);\n  return item;\n}\n\nvar _createComponent = {\n  writable: true,\n  value: Laya.plugin.extractComponents(CyberCelebrity.uiView, [\'boxCharacter\', \'boxTalent\'])\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIxMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTs7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTtBQUpBO0FBS0E7Ozs7QUFvQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQXBGQTs7QUFXQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQUFBOztBQUFBO0FBT0E7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBOUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZV9yZXN0YXJ0Ly4vc3JjL3VpL3RoZW1lcy9jeWJlci9jZWxlYnJpdHkuanM/ZmYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDeWJlckNlbGVicml0eSBleHRlbmRzIHVpLnZpZXcuQ3liZXJUaGVtZS5DZWxlYnJpdHlVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnRuUmV0cnkub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5yYW5kb20pO1xyXG4gICAgICAgIHRoaXMuYnRuTmV4dC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm5leHQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGFyYWN0ZXIudlNjcm9sbEJhci5lbGFzdGljRGlzdGFuY2UgPSAxNTA7XHJcbiAgICB9XHJcblxyXG4gICAgI2NoYXJhY3RlcnM7XHJcbiAgICAjc2VsZWN0ZWQ7XHJcbiAgICBzdGF0aWMgI2NyZWF0ZUNvbXBvbmVudCA9IExheWEucGx1Z2luLmV4dHJhY3RDb21wb25lbnRzKEN5YmVyQ2VsZWJyaXR5LnVpVmlldywgWydib3hDaGFyYWN0ZXInLCdib3hUYWxlbnQnXSk7XHJcbiAgICAjY3JlYXRlQ2hhcmFjdGVySXRlbShkYXRhU291cmNlLCBjbGljaykge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBwcm9wZXJ0eSwgdGFsZW50fSA9IGRhdGFTb3VyY2U7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IEN5YmVyQ2VsZWJyaXR5LiNjcmVhdGVDb21wb25lbnQoJ2JveENoYXJhY3RlcicpO1xyXG4gICAgICAgIGNvbnN0IHZib3hTdGF0ZXMgPSBpdGVtLmdldENoaWxkQnlOYW1lKCd2Ym94U3RhdGVzJyk7XHJcbiAgICAgICAgY29uc3QgYm94TmFtZSA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2JveE5hbWUnKTtcclxuICAgICAgICBib3hOYW1lLmdldENoaWxkQnlOYW1lKCdsYWJlbCcpLnRleHQgPSBuYW1lO1xyXG4gICAgICAgIHZib3hTdGF0ZXMuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykudGV4dCA9ICRfLmZvcm1hdCgkbGFuZy5GX1Byb3BlcnR5U3RyLCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHQgb2YgdGFsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSBDeWJlckNlbGVicml0eS4jY3JlYXRlQ29tcG9uZW50KCdib3hUYWxlbnQnKTtcclxuICAgICAgICAgICAgaS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS50ZXh0ID0gJF8uZm9ybWF0KCRsYW5nLkZfVGFsZW50U2VsZWN0aW9uLCB0KTtcclxuICAgICAgICAgICAgaS55ID0gdmJveFN0YXRlcy5oZWlnaHQrdmJveFN0YXRlcy5zcGFjZTtcclxuICAgICAgICAgICAgbGV0IGcgPSBpLmdldENoaWxkQnlOYW1lKGBncmFkZSR7dC5ncmFkZX1gKTtcclxuICAgICAgICAgICAgaWYoZykgZy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmJveFN0YXRlcy5hZGRDaGlsZChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYm94ID0gbmV3IExheWEuQm94KCk7XHJcbiAgICAgICAgYm94LmhlaWdodCA9IHZib3hTdGF0ZXMuc3BhY2U7XHJcbiAgICAgICAgYm94LnkgPSB2Ym94U3RhdGVzLmhlaWdodDtcclxuICAgICAgICB2Ym94U3RhdGVzLmFkZENoaWxkKGJveCk7XHJcbiAgICAgICAgdmJveFN0YXRlcy5zY2FsZVkgPSAwO1xyXG5cclxuICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgICAgIGl0ZW0uc3dpdGNoID0gc2hvd0RldGFpbHMgPT4gdmJveFN0YXRlcy5zY2FsZVkgPSAhIXNob3dEZXRhaWxzPzE6MDtcclxuICAgICAgICBpdGVtLmNsaWNrID0gKGNiLCBjYWxsZXIpID0+IHtcclxuICAgICAgICAgICAgYm94TmFtZS5vZmZBbGwoTGF5YS5FdmVudC5DTElDSyk7XHJcbiAgICAgICAgICAgIGJveE5hbWUub24oTGF5YS5FdmVudC5DTElDSywgY2FsbGVyIHx8IHRoaXMsIGNiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2xpY2spIGl0ZW0uY2xpY2soY2xpY2spO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLiNzZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52Ym94Q2hhcmFjdGVyLmRlc3Ryb3lDaGlsZHJlbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb20oKSB7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmJveENoYXJhY3Rlci5kZXN0cm95Q2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy4jY2hhcmFjdGVycyA9IGNvcmUuY2hhcmFjdGVyUmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy4jY2hhcmFjdGVycy5mb3JFYWNoKGNoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLiNjcmVhdGVDaGFyYWN0ZXJJdGVtKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgIHRoaXMudmJveENoYXJhY3Rlci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5jbGljaygoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy4jc2VsZWN0ZWQpIHRoaXMuI3NlbGVjdGVkLnN3aXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzZWxlY3RlZCA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN3aXRjaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZXZlbnQoTGF5YS5FdmVudC5SRVNJWkUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLiNzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAkJGV2ZW50KCdtZXNzYWdlJywgWydNX1BsZWFzZVNlbGVjdE9uZSddKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7cHJvcGVydHk6IHByb3BlcnR5QWxsb2NhdGUsIHRhbGVudDogdGFsZW50c30gPSB0aGlzLiNzZWxlY3RlZC5kYXRhU291cmNlO1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2UgPSBjb3JlLnJlbWFrZSh0YWxlbnRzLm1hcCh0YWxlbnQgPT4gdGFsZW50LmlkKSk7XHJcbiAgICAgICAgaWYocmVwbGFjZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQkZXZlbnQoJ21lc3NhZ2UnLCBbcmVwbGFjZS5tYXAodiA9PiBbJ0ZfVGFsZW50UmVwbGFjZScsIHZdKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkdWkuc3dpdGNoVmlldyhcclxuICAgICAgICAgICAgVUkucGFnZXMuVFJBSkVDVE9SWSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlBbGxvY2F0ZSwgdGFsZW50cyxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUV4dGVuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5211\n')}}]);