import React from 'react';
import './footer.css';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<span>
				Copyright © {new Date().getFullYear()} by{' '}
				<a href="https://github.com/Harris-YWang">Harris Wang</a>
				{'.'}
			</span>
		</div>
	</footer>
);

export default Footer;
