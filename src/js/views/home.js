import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<div className="row justify-content-center mt-3">
				<div className="col-4 d-flex flex-column justify-content-center">
					<input
						type="input"
						className="form-control"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
			</div>
			<button
				className="btn btn-primary my-4"
				onClick={async e => {
					let result = await actions.log_in(email, password);
					if (result) {
						history.push("/demo");
					} else {
						alert("credenciales malas...");
					}
				}}>
				Log in
			</button>
		</div>
	);
};
