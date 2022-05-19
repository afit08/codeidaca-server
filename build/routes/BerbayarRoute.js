"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

var _UploadDownloadHelper = _interopRequireDefault(require("../helpers/UploadDownloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _IndexController.default.BerbayarController.berbayar);
router.get("/berbayar/images/:filename", _UploadDownloadHelper.default.showProductImage);
var _default = router;
exports.default = _default;
//# sourceMappingURL=BerbayarRoute.js.map