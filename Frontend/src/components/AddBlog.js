import React, { useState } from "react";
import BlogDataService from "../services/blogService";

function AddBlog() {
  const initialBlogState = {
    id: null,
    title: "",
    content: "",
  };
  const [blog, setBlog] = useState(initialBlogState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const saveBlog = () => {
    var data = {
      title: blog.title,
      content: blog.content,
    };

    BlogDataService.create(data)
      .then((response) => {
        setBlog({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newBlog = () => {
    setBlog(initialBlogState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newBlog}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={blog.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              className="form-control"
              id="content"
              required
              value={blog.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <button onClick={saveBlog} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddBlog;
