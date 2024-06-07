import { Link } from "react-router-dom";
import "../App.css"

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <Link className="btn" to="/">Go Home</Link>
            <Link className="btn" to="/todo">Todo App</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
