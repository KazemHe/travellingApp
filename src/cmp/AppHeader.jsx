import { connect, useSelector } from "react-redux";
import { NavLink, useNavigate, withRouter } from "react-router-dom";


export function AppHeader(props) {

    const navigate = useNavigate()

    function onBack() {
        navigate(-1)
    }

    return (
        <header className="app-header">
            <section className="container">
                <nav className="nav-bar">
                    <NavLink to="/" >Form</NavLink>
                    <NavLink to="/table">Table</NavLink>
                </nav>
            </section>
        </header>
    )
}

