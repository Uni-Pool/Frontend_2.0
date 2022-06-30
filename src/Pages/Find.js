import React from "react";
import BottomNav from "../Components/BottomNav";
import { FindForm } from "../Components/FindForm";
import { Map } from "../Components/Map";
import TopNav from "../Components/TopNav";
import OR_BAR_FIND from '../assets/Find/OR_BAR_Find.png'

function Find() {
	return (
		<div className='h-full'>
			<TopNav />
			<div className='h-[82%] mx-10 overflow-auto'>
				<div className='h-2/3 my-4 rounded-3xl shadow-md'>
					<Map />
					<FindForm />
				</div>
				<img src = {OR_BAR_FIND}/>
				
			</div>
			<BottomNav />
		</div>
	);
}

export default Find;
