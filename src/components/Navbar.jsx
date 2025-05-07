import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  const { user, handleLogout } = useContext(AuthContext);
  console.log(user, handleLogout);

  return (
    <div className="navbar justify-between bg-base-100 shadow-sm py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>My Profile</a>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h1 className="text-2xl font-bold text-violet-500">
            Canine<span className="text-slate-500">Box</span>
          </h1>
        </NavLink>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal items-center space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <NavLink to="/login" className="btn">
          Login
        </NavLink>
        <NavLink to="/register" className="btn">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
