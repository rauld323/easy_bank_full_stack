import './TopDrawer.css'
import { Link } from 'react-router-dom';

const TopDrawer = ({show, click}) => {
	const topDrawerClass = ["topdrawer"]

	if(show) {
		topDrawerClass.push("show")
	}

	return (
		<div className={topDrawerClass.join(" ")}>
			<ul className="topdrawer_links" onClick={click}>

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
		</div>
	)
}

export default TopDrawer
