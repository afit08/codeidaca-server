"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserRoute = _interopRequireDefault(require("./UserRoute"));

var _BootcampRoute = _interopRequireDefault(require("./BootcampRoute"));

var _CurriculumReviewsRoute = _interopRequireDefault(require("./CurriculumReviewsRoute"));

var _BatchRoute = _interopRequireDefault(require("./BatchRoute"));

var _PlacementRoute = _interopRequireDefault(require("./PlacementRoute"));

var _InstructorRoute = _interopRequireDefault(require("./InstructorRoute"));

var _TalentRoute = _interopRequireDefault(require("./TalentRoute"));

var _BerbayarRoute = _interopRequireDefault(require("./BerbayarRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  UserRoute: _UserRoute.default,
  BootcampRoute: _BootcampRoute.default,
  CurriculumReviewsRoute: _CurriculumReviewsRoute.default,
  BatchRoute: _BatchRoute.default,
  PlacementRoute: _PlacementRoute.default,
  TalentRoute: _TalentRoute.default,
  InstructorRoute: _InstructorRoute.default,
  BerbayarRoute: _BerbayarRoute.default
};
exports.default = _default;
//# sourceMappingURL=IndexRoute.js.map