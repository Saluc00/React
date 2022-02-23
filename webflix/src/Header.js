import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div>
                <h1>WebFlix</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}

export default Header