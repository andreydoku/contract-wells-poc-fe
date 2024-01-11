import { Link } from "react-router-dom";

import "./NavBar.scss";

export default function NavBar() {
	
	
	const logo = "LOGO";
	
	
	
	return (
		<div className='nav-bar'>
			
			<div className="left">
				<Link to="/"  className='nav-link'>{logo}</Link>
			</div>
			
			<div className="center">
				<Link to="/products"  className='nav-link'>Products</Link>
				<Link to="/about" className='nav-link'>About Us</Link>
			</div>
			
			<div className="right">
				<p>RIGHT</p>
			</div>

		</div>
	)
}


