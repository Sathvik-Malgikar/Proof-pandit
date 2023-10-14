import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UserForm">UserForm</Link>
          </li>
          <li>
            <Link to="/JudgeForm">JudgeForm</Link>
          </li>
          <li>
            <Link to="/EvidenceSubmitForm">EvidenceSubmitForm</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;