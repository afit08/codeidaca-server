import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

// get
router.get("/",IndexController.BatchController.findBatch);
router.get("/:id",IndexController.BatchController.findBatchById);

// // put
router.put("/:id",IndexController.BatchController.UpdateBatch,IndexController.BatchController.AddMembers);
router.put("/status/:id",IndexController.BatchController.UpdateBatchStatus)

// delete
router.delete("/:id",IndexController.BatchController.deleteBatch);

router.get("/images/:filename",UploadDownloadHelper.showProductImage)
router.put("/data/:id", UploadDownloadHelper.uploadSingleFile,IndexController.BatchController.update);


export default router;