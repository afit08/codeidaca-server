import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownloadHelper from "../helpers/UploadDownloadHelper"

const router = Router();

router.get("/", IndexController.BootcampController.findBootcamp);
router.get("/regular", IndexController.BootcampController.regular);
router.get("/berbayar", IndexController.BootcampController.berbayar);
router.post("/", uploadDownloadHelper.uploadSingleFile,IndexController.BootcampController.create);
router.put("/:id", uploadDownloadHelper.uploadSingleFile,IndexController.BootcampController.update);
router.get("/images/:filename",uploadDownloadHelper.showProductImage)
router.get("/regular/images/:filename",uploadDownloadHelper.showProductImage)
router.get("/berbayar/images/:filename",uploadDownloadHelper.showProductImage)
router.delete("/:id", IndexController.BootcampController.remove);

export default router;
