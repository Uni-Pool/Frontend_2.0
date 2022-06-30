import React from "react";

export const FindForm = () => {
	return (
		<div className='h-1/2 px-8 py-6 bg-secondary10 rounded-b-3xl rounded-t-xl'>
			<h3 className='font-bold text-gray-600 mb-3'>Find a Pool</h3>
			<form>
				<div className='flex items-center'>
					<label for='drop' className='text-gray-600 font-semibold mr-4 w-1/5 '>
						Drop
					</label>
					<select
						id='drop'
						className='w-4/5 bg-secondary50 text-center text-primary rounded-full p-2'>
						<option>Railway Station</option>
						<option>Bus Station</option>
						<option>Airport</option>
						<option>Manipal University Jaipur</option>
					</select>
				</div>
				<div className='flex items-center mt-3'>
					<label for='drop' className='text-gray-600 font-semibold mr-4 w-1/5 '>
						Pickup
					</label>
					<select
						id='drop'
						className='w-4/5 bg-secondary50 text-center text-primary rounded-full p-2'>
						<option>Manipal University Jaipur</option>
						<option>Railway Station</option>
						<option>Bus Station</option>
						<option>Airport</option>
					</select>
        </div>
        <button className = "bg-primary px-6 py-2 rounded-full text-white mt-4 ">Proceed</button>
			</form>
		</div>
	);
};
