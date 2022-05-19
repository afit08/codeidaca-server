"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const findTalent = async (req, res) => {
  try {
    const result = await req.context.models.talent.findAll();
    return res.send(result);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

var _default = {
  findTalent
};
exports.default = _default;
//# sourceMappingURL=TalentController.js.map