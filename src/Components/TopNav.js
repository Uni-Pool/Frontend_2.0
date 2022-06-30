import React from "react";
import Logo from "../assets/Logos/unipool_Logo_White.png";

function TopNav() {
	return (
		<div className='bg-primary h-[10%] flex items-center justify-between p-2 rounded-b-xl'>
			<div className='flex items-center'>
				<img src={Logo} className='max-h-16' />
				<h3 className='text-white font-semibold text-lg'>Unipool</h3>
			</div>
			<i class='fa-solid fa-comment-dots text-white px-4 text-2xl'></i>
		</div>
	);
}

export default TopNav;
