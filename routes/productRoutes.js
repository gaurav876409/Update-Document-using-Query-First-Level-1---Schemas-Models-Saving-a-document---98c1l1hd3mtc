const express = require("express");

// Importing the controller functions.
const {getProductByID, createProduct, updateProduct, deleteProduct, searchProducts
} = require("../controllers/productControllers");
const {grantAccessTo} = require('../middlewares/grantAccessTo')

const router = express.Router();


router.get("/:id", grantAccessTo(['superadmin']), getProductByID);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;