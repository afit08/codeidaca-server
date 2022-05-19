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
router.get("/", _IndexController.default.BootcampController.findBootcamp);
router.get("/regular", _IndexController.default.BootcampController.regular); // router.get("/berbayar", IndexController.BootcampController.berbayar);

router.post("/", _UploadDownloadHelper.default.uploadSingleFile, _IndexController.default.BootcampController.create);
router.put("/:id", _UploadDownloadHelper.default.uploadSingleFile, _IndexController.default.BootcampController.update);
router.get("/images/:filename", _UploadDownloadHelper.default.showProductImage);
router.get("/regular/images/:filename", _UploadDownloadHelper.default.showProductImage);
router.get("/berbayar/images/:filename", _UploadDownloadHelper.default.showProductImage);
router.delete("/:id", _IndexController.default.BootcampController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=BootcampRoute.js.map