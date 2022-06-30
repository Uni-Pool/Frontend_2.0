import React from "react";

function BottomNav() {
	return (
		<div className='bg-primary h-[8%] flex items-center justify-between p-4 rounded-t-xl w-full'>
			<i class='fa-solid fa-right-from-bracket text-white px-4 text-2xl'></i>
			<i class='fa-solid fa-gear text-white px-4 text-2xl'></i>
			{/* <div className='rounded-full h-16 w-16 bg-fuchsia-400 fixed left-1/2 right-1/2'></div> */}
		</div>
	);
}

export default BottomNav;
