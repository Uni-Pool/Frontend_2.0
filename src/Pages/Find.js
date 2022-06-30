import React from "react";
import BottomNav from "../Components/BottomNav";
import { FindForm } from "../Components/FindForm";
import { Map } from "../Components/Map";
import TopNav from "../Components/TopNav";
import OR_BAR_Find from "../assets/Find/OR_BAR_Find.png";
import OR_BAR_Create from "../assets/Find/OR_BAR_Create.png";

function Find() {
	return (
		<div className='h-full'>
			<TopNav />
			<div className='h-[82%] mx-10 overflow-auto'>
				<div className='h-2/3 my-4 rounded-3xl shadow-md'>
					<Map />
					<FindForm />
				</div>
				<img src={OR_BAR_Find} />
				<div className='h-2/5 my-4 px-12 py-8 rounded-3xl bg-secondary10 shadow-md'>
					<div className='h-1/2 flex flex-col items-center '>
						<h3 className='text-center font-bold'> Create Your Own Pool</h3>
						<button className='bg-primary px-6 py-2 rounded-full text-white mt-4 '>
							Create a Pool
						</button>
					</div>
					<img src={OR_BAR_Create} />
					<div className='h-1/2 flex flex-col items-center'>
						<h3 className='text-center font-bold pt-5'> Join an Existing Pool</h3>
						<input type = "text" placeholder = "Type in your code here" className='bg-secondary50 text-center text-primary placeholder-primary px-6 py-2 rounded-full text-white mt-4 '/>
							
						
					</div>
				</div>
			</div>
			<BottomNav />
		</div>
	);
}

export default Find;
