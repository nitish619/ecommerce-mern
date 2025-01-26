import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { updateProductController, createProductController, getProductController, deleteProductController, getSingleProductController, productPhotoController, productFilterController, productCountController, productListController, searchProductController, relatedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController } from "../controllers/productController.js";


const router = express.Router();


router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFilterController);

router.get('/product-count', productCountController);

router.get('/product-list/:page', productListController);

router.get('/search/:keyword', searchProductController);

router.get('/related-product/:pid/:cid', relatedProductController);

router.get('/product-category/:slug', productCategoryController);

router.get('/braintree/token', braintreeTokenController);

router.get('/braintree/payment', requireSignIn,  brainTreePaymentController);

export default router;