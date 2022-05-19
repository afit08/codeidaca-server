"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const berbayar = async (req, res) => {
  try {
    const result = await req.context.models.curriculum.findAll({
      where: {
        curr_type_payment: req.params.curr_type_payment = "Berbayar"
      }
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

var _default = {
  berbayar
};
exports.default = _default;
//# sourceMappingURL=BerbayarController.js.map