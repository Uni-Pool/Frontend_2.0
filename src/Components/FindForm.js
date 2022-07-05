import React, { useEffect, useState } from "react";
import Line from "../assets/Find/FindLine.png";
export const FindForm = ({ setIsOpen }) => {
	const [open, setOpen] = useState(false);

	const handleDrawer = () => {
		setOpen((st) => !st);
	};

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	return (
		<div
			className={`${
				open ? `h-full ` : `h-3/5 `
			} px-8 py-6 pt-0 bg-secondary10 rounded-b-3xl rounded-t-xl`}>
			<div onClick={handleDrawer} className='flex pt-5 justify-center'>
				<img src={Line} />
			</div>
			<h3 className='font-bold text-gray-600 mb-3'>Find a Pool</h3>
			<form className={open && `h-4/5 flex flex-col`}>
				<div className='flex items-center'>
					<label for='drop' className='text-gray-600 font-semibold mr-4 w-1/5 '>
						Drop
					</label>
					<select
						id='drop'
						required
						className='w-4/5 bg-secondary50 text-center text-primary rounded-full p-2'>
						<option>Railway Station</option>
						<option>Bus Station</option>
						<option>Airport</option>
						<option>Manipal University Jaipur</option>
					</select>
				</div>
				<div className='flex items-center mt-3'>
					<label for='pick' className='text-gray-600 font-semibold mr-4 w-1/5 '>
						Pickup
					</label>
					<select
						required
						id='pick'
						className='w-4/5 bg-secondary50 text-center text-primary rounded-full p-2'>
						<option>Manipal University Jaipur</option>
						<option>Railway Station</option>
						<option>Bus Station</option>
						<option>Airport</option>
					</select>
				</div>
				{!open && (
					<button
						onClick={handleDrawer}
						className='bg-primary px-6 py-2 rounded-full text-white mt-4 '>
						Proceed
					</button>
				)}

				{open && (
					<>
						<div className='flex items-center justify-between mt-3'>
							<label
								for='date'
								className='text-gray-600 font-semibold mr-4 w-1/5 '>
								Date
							</label>
							<input
								required
								id='date'
								type='date'
								className='w-3/5 bg-secondary50 text-center text-primary rounded-full p-2'
							/>
						</div>
						<div className='flex items-center justify-between mt-3'>
							<label
								for='time'
								className='text-gray-600 font-semibold mr-4 w-1/5 '>
								Time
							</label>
							<input
								required
								id='time'
								type='time'
								className='w-2/5 bg-secondary50 text-center text-primary rounded-full p-2'
							/>
						</div>
						<div className='flex grow items-center justify-center'>
							<button
								onClick={handleDrawer}
								type='submit'
								className='bg-primary px-6 py-2 rounded-xl text-white mt-12'>
								Search Pools
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
};
