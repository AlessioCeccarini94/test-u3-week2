import "../App.css"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"

const MyNavbar = () => {
  return (
    <Navbar>
      <Container>
        <Link className="navbar-brand" to="./">
          EPIMETEO
        </Link>
        <Nav className="me-auto me-md-0">
          <Link className="nav-link" to="./">
            Home
          </Link>
          <Link className="nav-link" to="/italy">
            Italia
          </Link>
          <Link className="nav-link" to="/world">
            Mondo
          </Link>
          <Link className="nav-link text-dark" to="/search">
            <i className="bi bi-search"></i>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default MyNavbar
