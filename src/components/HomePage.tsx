import "../App.css";
import { CiStar } from "react-icons/ci";

function HomePage() {
  return (
    <div className="container">
      <h1>This is my homepage</h1>
      <h1>DoctorStrange </h1>
      <ul>
        <li>
          <CiStar />
          Care
        </li>
        <li>
          <CiStar />
          Tui
        </li>
        <li>
          <CiStar />
          Por
        </li>
        <li>
          <CiStar />
          Aomsin
        </li>
        <li>
          <CiStar />
          Ice
        </li>
        <li>
          <CiStar />
          Dew
        </li>
        <li>
          <CiStar />
          Boss
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
