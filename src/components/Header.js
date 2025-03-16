import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div class="sticky-top border-bottom bg-light">
                <div class="d-flex justify-content-between align-items-bottom w-75 m-auto py-3">
                    <h2 class="border border-dark border-4 rounded-2 p-1 fw-bold">
                        MH
                    </h2>
                    <nav>
                        <li class="nav nva-pills fs-2 fw-bold">
                            <ul class="nav-item">
                                <Link to="/">Home</Link>
                            </ul>
                            <ul class="nav-item">
                                <Link to="/about">About</Link>
                            </ul>
                            <ul class="nav-item">
                                <Link to="/projects">Projects</Link>
                            </ul>
                            <ul class="nav-item">
                                <Link to="/music">Music</Link>
                            </ul>
                        </li>
                    </nav>
                </div>

            </div>
        </>
    );
}

<nav>
    <ul>
        <li>

        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
</nav>

export default Header;