"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserController = _interopRequireDefault(require("./UserController"));

var _BootcampController = _interopRequireDefault(require("./BootcampController"));

var _CurriculumReviewsController = _interopRequireDefault(require("./CurriculumReviewsController"));

var _BatchController = _interopRequireDefault(require("./BatchController"));

var _PlacementController = _interopRequireDefault(require("./PlacementController"));

var _InstructorController = _interopRequireDefault(require("./InstructorController"));

var _TalentController = _interopRequireDefault(require("./TalentController"));

var _BerbayarController = _interopRequireDefault(require("./BerbayarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  UserController: _UserController.default,
  BootcampController: _BootcampController.default,
  CurriculumReviewsController: _CurriculumReviewsController.default,
  BatchController: _BatchController.default,
  PlacementController: _PlacementController.default,
  InstructorController: _InstructorController.default,
  TalentController: _TalentController.default,
  BerbayarController: _BerbayarController.default
};
exports.default = _default;
//# sourceMappingURL=IndexController.js.map