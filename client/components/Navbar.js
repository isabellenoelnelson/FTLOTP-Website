import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
	<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		<div className='container-fluid'>
			<span className='navbar-brand' href='#'>
				<Link to='/' className='nav-item'>
					For the Love of Theme Parks
				</Link>
			</span>
		</div>
		<div className='collapse navbar-collapse' id='navbarNav'>
			<ul className='navbar-nav'>
				<li className='nav-item nav-link text-nowrap'>
					<Link to='/' className='nav-item'>
						Home
					</Link>
				</li>
				<li className='nav-item nav-link'>
					<Link to='/merch' className='nav-item'>
						Merch
					</Link>
				</li>
				<li className='nav-item nav-link text-nowrap'>
					<Link to='/aboutus' className='nav-item'>
						About Us
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		isLoggedIn: !!state.auth.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleClick() {
			dispatch(logout());
		},
	};
};

export default connect(mapState, mapDispatch)(Navbar);
