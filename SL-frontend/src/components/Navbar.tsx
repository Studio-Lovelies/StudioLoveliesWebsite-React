import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
  console.log("This is the Navbar!");
  return (
    <header>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/projects">Projects</Link>
      {" | "}
      <Link to="/contact">Contact</Link>
      {" | "}
      <Link to="/about">About</Link>
    </header>
  );
};

export default Navbar;
