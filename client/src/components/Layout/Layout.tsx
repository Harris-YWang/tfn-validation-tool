import React, { ReactNode } from 'react';
import './layout.css';

interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<main role="main">
		<section className="jumbotron bg-white">
			<div className="container">{children}</div>
		</section>
	</main>
);

export default Layout;
