import express from "express";
import asyncHandler from "express-async-Handler";
import Product from "../models/productModel.js";
const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc Fetch single products
// @route GET /api/products/id
// @access Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
