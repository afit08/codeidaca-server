"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const findBootcamp = async (req, res) => {
  try {
    const result = await req.context.models.curriculum.findAll();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const regular = async (req, res) => {
  try {
    const result = await req.context.models.curriculum.findAll({
      where: {
        curr_type_payment: req.params.curr_type_payment = "Regular"
      }
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
}; // const berbayar = async (req,res) =>{
//     try {
//         const result  = await req.context.models.curriculum.findAll({
//             where: {curr_type_payment : req.params.curr_type_payment="Berbayar"}
//         });
//         return res.status(201).json(result)
//     } catch (error) {
//         return res.status(404).send("no data found")       
//     }
// }


const create = async (req, res) => {
  const {
    files,
    fields
  } = req.fileAttrb;

  try {
    const data = await req.context.models.curriculum.create({
      curr_name: fields[0].value,
      curr_title: fields[1].value,
      curr_duration: fields[2].value,
      curr_learning_type: fields[3].value,
      curr_type_payment: fields[4].value,
      curr_price: fields[5].value,
      curr_logo: files[0].file.newFilename
    });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const update = async (req, res, next) => {
  const {
    files,
    fields
  } = req.fileAttrb;

  try {
    const data = await req.context.models.curriculum.update({
      curr_name: fields[0].value,
      curr_title: fields[1].value,
      curr_duration: fields[2].value,
      curr_learning_type: fields[3].value,
      curr_type_payment: fields[4].value,
      curr_price: fields[5].value,
      curr_logo: files[0].file.newFilename
    }, {
      returning: true,
      where: {
        curr_id: req.params.id
      }
    });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const remove = async (req, res) => {
  try {
    const data = await req.context.models.curriculum.destroy({
      where: {
        curr_id: req.params.id
      }
    });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

var _default = {
  findBootcamp,
  regular,
  // berbayar,
  create,
  update,
  remove
};
exports.default = _default;
//# sourceMappingURL=BootcampController.js.map