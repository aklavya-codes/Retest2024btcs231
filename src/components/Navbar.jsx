import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/test">Theory Questions</Link>

     
    </div>
  );
}

export default Navbar;