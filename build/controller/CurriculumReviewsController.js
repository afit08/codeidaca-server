"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const findCurr = async (req, res) => {
  try {
    const result = await req.context.models.curriculum_reviews.findAll({
      include: [{
        model: req.context.models.users,
        as: "curr_user",
        include: [{
          model: req.context.models.talent,
          as: "talents"
        }]
      }]
    });
    return res.send(result);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

var _default = {
  findCurr
};
exports.default = _default;
//# sourceMappingURL=CurriculumReviewsController.js.map