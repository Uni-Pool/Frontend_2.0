import React, { useState } from "react";
import Unipool from "../assets/Logos/unipool_tagline.png";
import Car from "../assets/Starter/car.png";
import Chat from "../assets/Starter/chat.png";
import Dashboard from "../assets/Starter/Dashboard.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

function Starter() {
	const [index, setIndex] = useState(0);
	let navigate = useNavigate();
	const text = [
		{
			heading: "Taxi fare too high ?",
			content:
				"With Unipool Find people for Carpools and Save Your Precious Money for the things that actually matter",
		},
		{
			heading: "Chat With Your Mates",
			content:
				"Chat up with your Poolmates and discuss all that you need before your Famous Night Out or Trips!",
		},
		{
			heading: "Easy to Use UI",
			content:
				"We cam, We Saw, We Listened! And then we delivered! Unipool has a brand new easy to use UI with tons of power packed features to make your carpooling experience the best one in town!",
		},
	];

	return (
		<div className='flex flex-col h-full p-12 justify-around '>
			<img src={Unipool} alt='Unipool and tagline' />
			<div className='h-full'>
				<Swiper
					onSlideChange={(slide) => setIndex(slide.activeIndex)}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className='mySwiper'>
					<SwiperSlide>
						<img src={Car} alt='car' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Chat} alt='chat' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={Dashboard} alt='dashboard' />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className='px-8 my-6'>
				<h2 className='text-center font-bold'>{text[index].heading}</h2>
				<h3 className='text-center text-xs text-gray-400'>
					{text[index].content}
				</h3>
			</div>
			<button
				onClick={() => navigate("/login")}
				className='rounded-3xl bg-primary font-semibold text-base text-white py-3 px-8'>
				{" "}
				Get Splitting !
			</button>
		</div>
	);
}

export default Starter;
