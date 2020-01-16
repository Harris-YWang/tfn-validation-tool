import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import Loader from '../Loader';
import Result from '../Result';

const App = () => {
	const [tfnNumber, changeTfnNumber] = useState('');
	const [loading, triggerLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [validity, setValidity] = useState('');

	const handleTextChange = (event: { target: HTMLInputElement }) => {
		changeTfnNumber(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		triggerLoading(true);

		const config: AxiosRequestConfig = {
			url: 'http://localhost:5000/api/tfn',
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: {
				tfnNumber
			}
		};

		axios(config)
			.then(res => {
				triggerLoading(false);
				setErrorMsg(res.data.errorMsg);
				setValidity(res.data.validity);
			})
			.catch(err => {
				triggerLoading(false);
			});
	};

	return (
		<div>
			<Header />
			<Layout>
				<div className="row">
					<div className="col-9">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="TfnNumberLabel">TFN Number</label>
								<input
									type="text"
									className="form-control"
									onChange={handleTextChange}
									value={tfnNumber}
								/>
							</div>
							<button type="submit" className="btn btn-primary" disabled={loading}>
								Validate
							</button>
						</form>
						<Loader showLoader={loading} />
						<ErrorMessage errorMsg={errorMsg} />
						<Result validity={validity} />
					</div>
				</div>
			</Layout>
			<Footer />
		</div>
	);
};

export default App;
