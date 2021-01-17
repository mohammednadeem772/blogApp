const express = require("express");
const router = express.Router();

const {
  create,
  getBlogs,
  getBlogById,
  updateBlog,
  DeleteBlog,
} = require("../controller/blog");
router.post("/blog", create);
router.get("/blog", getBlogs);
router.get("/blog/:id", getBlogById);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", DeleteBlog);

module.exports = router;
