"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

var _UploadDownloadHelper = _interopRequireDefault(require("../helpers/UploadDownloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // get

router.get("/", _IndexController.default.BatchController.findBatch);
router.get("/:id", _IndexController.default.BatchController.findBatchById); // // put

router.put("/:id", _IndexController.default.BatchController.UpdateBatch, _IndexController.default.BatchController.AddMembers);
router.put("/status/:id", _IndexController.default.BatchController.UpdateBatchStatus); // delete

router.delete("/:id", _IndexController.default.BatchController.deleteBatch);
router.get("/images/:filename", _UploadDownloadHelper.default.showProductImage);
router.put("/data/:id", _UploadDownloadHelper.default.uploadSingleFile, _IndexController.default.BatchController.update);
var _default = router;
exports.default = _default;
//# sourceMappingURL=BatchRoute.js.map