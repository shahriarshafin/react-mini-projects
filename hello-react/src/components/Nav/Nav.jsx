import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
	return (
		<>
			<div className='upper-nav'>
				<div class='logo'>MUO</div>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/structures'>Structures</NavLink>
					</li>
					<li>
						<NavLink to='#contact'>Contact</NavLink>
					</li>
					<li>
						<NavLink to='#ainkbout'>About</NavLink>
					</li>
				</ul>
			</div>
			<div className='sidenav'>
				<NavLink activeClassName='isActive' exact to='/' className='link'>
					Home
				</NavLink>
				<NavLink
					activeClassName='isActive'
					exact
					to='/structures'
					className='link'
				>
					Structures
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
				<NavLink to='#' className='link'>
					Contact
				</NavLink>
			</div>
		</>
	);
};

export default Nav;
