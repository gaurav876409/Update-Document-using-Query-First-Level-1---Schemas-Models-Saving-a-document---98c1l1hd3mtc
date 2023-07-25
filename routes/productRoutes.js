const express = require("express");

// Importing the controller functions.
const {getProductByID, createProduct, updateProduct, deleteProduct, searchProducts
} = require("../controllers/productControllers");


const router = express.Router();


router.get("/:id", getProductByID);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;