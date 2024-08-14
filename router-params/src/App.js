import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h2 className="title">TV APPS</h2>
        <div className="icons">
          <Link to="/netflix">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              className="nf"
            />
          </Link>
          <Link to="/hbomax">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
              alt="HBO Max"
              className="hb"
            />
          </Link>
          <Link to="/hulu">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
              alt="Hulu"
              className="hu"
            />
          </Link>
          <Link to="/primevideo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
              alt="Prime Video"
              className="pr"
            />
          </Link>
        </div>

        {/* Routes replaces Switch in React Router v6 */}
        <Routes>
          {/* Route syntax is updated to use the element prop */}
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div className="selection">
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
