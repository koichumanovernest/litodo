import axios from "axios";
import { useEffect, useState } from "react";
import scss from "./LiTodo.module.scss";

const url = "https://rickandmortyapi.com/api/character";
const LiTodo = () => {
	const [toto, setToto] = useState([]);

	const get = async () => {
		const response = await axios.get(url);
		setToto(response.data.results);
	};

	useEffect(() => {
		get();
	}, []);

	const find = (status) => {
		return status.toLowerCase() === "alive"
			? scss.greenText
			: status.toLowerCase() === "dead"
			? scss.redText
			: status.toLowerCase() === "unknown"
			? scss.unknownText
			: "";
	};

	return (
		<div className={scss.container}>
			{toto.map((item, index) => (
				<div className={scss.kartochka} key={index}>
					<div>
						<img src={item.image} alt="" />
					</div>
					<div>
						<h1>{item.name}</h1>
						<div className={scss.text}>
							<p className={find(item.status)}>{item.status}</p>
							<p> - {item.species}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LiTodo;
