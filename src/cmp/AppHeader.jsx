import { connect, useSelector } from "react-redux";
import { NavLink, useNavigate, withRouter } from "react-router-dom";

export function AppHeader(props) {
  const navigate = useNavigate();

  function onBack() {
    navigate(-1);
  }

  return (
    <header className="app-header">
      <section className="container">
        <div className="header-content">
          <h1 className="header-title">Travel App</h1>
          <nav className="nav-bar">
            <NavLink to="/">Form</NavLink>
            <NavLink to="/table">Table</NavLink>
          </nav>
        </div>
      </section>
    </header>
  );
}
