import React from "react";
import LoginImage from "../assets/Login/Login.png";
import google_icon from "../assets/Logos/google_icon.png";
function Login() {
	return (
		<div className='min-h-full flex flex-col'>
			<img src={LoginImage} />
			<div className='grow w-full flex flex-col px-10'>
				{/* Google log in */}
				<div className='rounded-xl flex bg-primary'>
					<img
						src={google_icon}
						className='bg-white p-3 rounded-xl border'></img>
					<h4 className='text-s text-white grow text-center self-center'>
						Sign in with Google
					</h4>
				</div>

				<h4 className='text-xs text-semibold text-slate-500 grow text-center self-center'>
					Or Follow The Road Less Travelled
                </h4>
                
                <input className = "w-full bg-primary100"/>
			</div>
		</div>
	);
}

export default Login;
