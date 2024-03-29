import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Starter from "./Pages/Starter";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Find from "./Pages/Find";
import 'mapbox-gl/dist/mapbox-gl.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/getstarted' element={<Starter />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/find' element={<Find />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
