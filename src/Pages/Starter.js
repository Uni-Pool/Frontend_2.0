import React from "react";
import Unipool from "../assets/Logos/unipool_tagline.png";
import Car from "../assets/Starter/car.png";
import Chat from "../assets/Starter/chat.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

function Starter() {
	return (
		<div className='flex flex-col h-full p-12 justify-around '>
			<img src={Unipool} alt='Unipool and tagline' />
			<div className='h-full'>
				<Swiper
					onSlideChange={(slide) => console.log(slide.activeIndex)}
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
				</Swiper>
			</div>
			<div className='px-8 my-6'>
				<h2 className='text-center font-bold'>Taxi Fare too high ?</h2>
				<h3 className='text-center text-xs text-gray-400'>
					With Unipool Find people for Carpools and Save Your Precious Money for
					the things that actually matter
				</h3>
			</div>
			<button className='rounded-3xl bg-primary font-semibold text-base text-white py-3 px-8'>
				{" "}
				Get Splitting !
			</button>
		</div>
	);
}

export default Starter;
