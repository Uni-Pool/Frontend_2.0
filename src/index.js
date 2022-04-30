import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Starter from "./Pages/Starter";
import Login from "./Pages/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/getstarted' element={<Starter/>} />
				<Route path='/login' element={<Login/>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
