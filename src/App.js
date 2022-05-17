import unipool_square from "./assets/Logos/unipool_square.png";
import { useNavigate } from "react-router-dom";

function App() {
	let navigate = useNavigate();

	setTimeout(() => {
		navigate("/getstarted");
	}, 2000);

	return (
		<div className="h-full bg-primary flex flex-col py-32">
			<div className="flex justify-center">
				<img src={unipool_square} alt="Unipool " />
			</div>
			<div className="grow py-10 flex flex-col justify-end">
				<h5 className="w-full text-center text-primary100 font-semibold text-lg">
					crafted by
				</h5>
				<h6 className="w-full text-center text-white font-semibold text-2xl">
					Vansh and Nick
				</h6>
			</div>
		</div>
	);
}

export default App;
