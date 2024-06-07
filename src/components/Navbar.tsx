import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">gohome</Link>
          </li>
          <li>
            <Link to="/todo">todoapp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
