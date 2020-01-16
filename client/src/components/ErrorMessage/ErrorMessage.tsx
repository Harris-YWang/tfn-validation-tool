import React from 'react';
import { IErrorMsgProps } from '../../types';

const ErrorMessage = ({ errorMsg }: IErrorMsgProps) =>
	errorMsg ? <div className="alert alert-warning mt-3">{errorMsg}</div> : null;

export default ErrorMessage;
