import React from 'react';
import { ILoaderProps } from '../../types';

const Loader = ({ showLoader }: ILoaderProps) =>
	showLoader ? (
		<div className="m-3">
			<div className="spinner-border text-primary" role="status" />
			<span className="m-2">Loading...</span>
		</div>
	) : null;

export default Loader;
