// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBlog from "./components/AddBlog";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/blog" className="navbar-brand">
            Mohammed Nadeem
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/blog"} className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/blog"]} component={BlogList} />
            <Route exact path="/add" component={AddBlog} />
            <Route path="/blog/:id" component={Blog} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
