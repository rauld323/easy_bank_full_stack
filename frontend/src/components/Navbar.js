import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = ({show, click}) => {
	return (
		<nav className="navbar">
			{/* logo  */}
				<div className="navbar_log">
				<img src="/images/logo.svg" alt="logo"/>
				</div>
			{/* links */}
				<ul className="navbar_links">
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
					<Link to="/CurrencyScreen">
					Currencies
					</Link>
					</li>
					<li>
					<Link to="/#">
						Contact
						</Link>
					</li>
					<li>
					<Link to="/#">
						Blog
						</Link>
					</li>
					<li>
					<Link to="/#">
						Careers
						</Link>
					</li>

				</ul>
			{/* button */}
				<button className="nav_button">
						Request Invite
				</button>
			{/* hamburger */}
			<div className="hamburger_menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	)
}

export default Navbar
