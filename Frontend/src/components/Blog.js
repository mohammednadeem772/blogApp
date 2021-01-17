import React, { useState, useEffect } from "react";
import BlogDataService from "../services/blogService";

const Blog = (props) => {
  const initialBlogState = {
    id: null,
    title: "",
    content: "",
  };
  const [currentBlog, setCurrentBlog] = useState(initialBlogState);
  const [message, setMessage] = useState("");

  const getBlog = (id) => {
    BlogDataService.get(id)
      .then((response) => {
        setCurrentBlog(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBlog(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const updateBlog = () => {
    BlogDataService.update(currentBlog._id, currentBlog)
      .then((response) => {
        console.log(response.data);
        setMessage("The Blog was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteBlog = () => {
    BlogDataService.remove(currentBlog._id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/blog");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBlog ? (
        <div className="edit-form">
          <h4>Blog</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentBlog.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={currentBlog.content}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteBlog}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBlog}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Blog...</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
