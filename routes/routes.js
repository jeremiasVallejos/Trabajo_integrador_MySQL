const express = require("express");
const router = express.Router();
const {
  getAllContent,
  getContentById,
  addNewContent,
  updateContentById,
  deleteContentById,
} = require("../controllers/trailerflix.controllers");

router.get("/", getAllContent);

router.get("/:id", getContentById);

router.post("/", addNewContent);

router.put("/:id", updateContentById);

router.delete("/:id", deleteContentById);

module.exports = router;
