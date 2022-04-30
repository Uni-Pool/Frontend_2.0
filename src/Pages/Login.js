import React from "react";
import LoginImage from "../assets/Login/Login.png";
import google_icon from "../assets/Logos/google_icon.png";
import { useNavigate } from "react-router-dom";

function Login() {
	let navigate = useNavigate();
	return (
		<div className='min-h-full flex flex-col'>
			<img src={LoginImage} />
			<form className='grow w-full flex flex-col px-10 justify-evenly'>
				{/* Google log in */}

				<div className='rounded-xl flex bg-primary'>
					<img
						src={google_icon}
						className='bg-white p-3 rounded-xl border'></img>
					<h4 className=' text-white grow text-center self-center'>
						Sign in with Google
					</h4>
				</div>

				<h4 className='text-xs text-semibold text-slate-500 text-center self-center'>
					Or Follow The Road Less Travelled
				</h4>

				<input
					type='text'
					placeholder='Enter Username'
					className='w-full bg-primary10 rounded-xl p-4 text-xs'
					required
				/>
				<input
					type='password'
					placeholder='Enter Password'
					className='w-full bg-primary10 rounded-xl p-4 text-xs'
					required
				/>
				<button
					type='submit'
					className='w-full bg-primary rounded-xl text-white text-lg font-semibold p-3'>
					Get Splitting {">"}
				</button>
			</form>
			<div className='mb-4'>
				<p className='text-center font-semibold text-xs text-slate-800'>
					Dont have an account ?
				</p>
				<p className='text-center font-semibold text-xs text-slate-800'>
					<span className='text-primary' onClick={() => navigate("/register")}>
						Sign Up
					</span>{" "}
					to Save
				</p>
			</div>
		</div>
	);
}

export default Login;
