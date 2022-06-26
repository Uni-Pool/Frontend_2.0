import React from "react";
import JoinUsImage from "../assets/Login/join.svg";
import google_icon from "../assets/Logos/google_icon.png";
import { useNavigate } from "react-router-dom";

function Register() {
	let navigate = useNavigate();
	return (
		<div className='min-h-full flex flex-col'>
			<img src={JoinUsImage} />
			<form className='grow w-full flex flex-col gap-2 px-10 justify-evenly'>
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

				<div className='flex justify-between gap-3 mt-2'>
					<input
						type='text'
						placeholder='Enter Name'
						className='w-full bg-primary10 rounded-xl p-4 text-xs'
						required
					/>
					<input
						type='email'
						placeholder='Enter Email'
						className=' w-full bg-primary10 rounded-xl p-4 text-xs'
						required
					/>
				</div>
				<div className='flex justify-between gap-3 mt-2'>
					<input
						type='password'
						placeholder='Enter Password'
						className='w-full bg-primary10 rounded-xl p-4 text-xs'
						required
					/>
					<input
						type='password'
						placeholder='Confirm Password'
						className=' w-full bg-primary10 rounded-xl p-4 text-xs'
						required
					/>
				</div>

				<button
					type='submit'
					className='w-full mt-2 bg-primary rounded-xl text-white text-lg font-semibold p-3'>
					Start your journey {">"}
				</button>
			</form>
			<div className='mb-4'>
				<p className='text-center font-semibold text-xs text-slate-800'>
					Already have an account ?
				</p>
				<p className='text-center font-semibold text-xs text-slate-800'>
					<span className='text-primary' onClick={() => navigate("/login")}>
						Log In
					</span>{" "}
				</p>
			</div>
		</div>
	);
}

export default Register;
