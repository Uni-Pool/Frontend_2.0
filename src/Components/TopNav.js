import React from "react";
import Logo from "../assets/Logos/unipool_Logo_White.png";

function TopNav() {
	return (
		<div className='bg-primary flex items-center p-2 rounded-b-xl'>
			<img src={Logo} className='h-16' />
			<h3 className='text-white font-semibold text-lg'>Unipool</h3>
			{/* chat icon */}
		</div>
	);
}

export default TopNav;
