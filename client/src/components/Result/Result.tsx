import React from 'react';
import { IResultProps } from '../../types';

const Result = ({ validity }: IResultProps) =>
	validity ? <div className="alert alert-primary mt-3">This TFN is {validity}.</div> : null;

export default Result;
