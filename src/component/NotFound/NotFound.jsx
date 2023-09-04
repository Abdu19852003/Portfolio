import { Link } from "react-router-dom";
import "./notfound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <div className="notfound">
      <p className="notFoundPara">404 This is NotFound</p>

      <Link to="/">
        <button className="notFoundBtn">Go to the Home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
