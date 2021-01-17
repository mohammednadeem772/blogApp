const Blog = require("../models/blog");

/* Add Blog */
exports.create = async (request, response, next) => {
  try {
    const blog = {
      title: request.body.title,
      content: request.body.content,
    };
    const newBlog = await Blog.create(blog);
    response.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};

/* Get Bloges */
exports.getBlogs = async (request, response, next) => {
  try {
    const bloges = await Blog.find();
    response.status(200).json(bloges);
  } catch (error) {
    next(error);
  }
};

/* Get blog by id */
exports.getBlogById = async (request, response, next) => {
  let id = request.params.id;
  try {
    const blog = await Blog.findById(id);
    response.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

/* Update blog */
exports.updateBlog = async (request, response, next) => {
  if (!request.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  try {
    const blog = {
      title: request.body.title,
      content: request.body.content,
    };
    const updateBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
      useFindAndModify: true,
    });
    response.status(200).json(updateBlog);
  } catch (error) {
    next(error);
  }
};

/* Delete Blog */
exports.DeleteBlog = async (request, response, next) => {
  try {
    const id = request.params.id;
    await Blog.findByIdAndRemove(id, { useFindAndModify: false });
    response.status(200).send({
      message: "Blog was deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
