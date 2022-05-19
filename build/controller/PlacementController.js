"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const List = async (req, res) => {
  try {
    const result = await req.context.models.placement.findAll({
      include: [{
        model: req.context.models.client,
        as: "place_client"
      }, {
        model: req.context.models.talent_placement,
        as: "talent_placements",
        include: [{
          model: req.context.models.talent,
          as: "tapl_tale"
        }]
      }]
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

var _default = {
  List
};
exports.default = _default;
//# sourceMappingURL=PlacementController.js.map