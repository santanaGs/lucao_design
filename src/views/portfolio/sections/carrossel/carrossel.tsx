import { Background, Container, Img, Title, TitleContainer } from "./carrossel.style";

interface CarrosselProps {
	title: string;
	icon: string;
	data: string;
}

import lapis from '../../../../assets/lapis.svg'
import socialmidia from '../../../../assets/socialmidia.svg'
import { illustrations } from "./data";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import SlideNextButton from "./buttons/next/next";
import SlidePrevButton from "./buttons/prev/prev";

export function Carrossel({ title, icon }: CarrosselProps) {
	return (
		<Background>
			<Container>
				<TitleContainer>
					<Title>{title}</Title>
					{icon === 'celular' ?
						<img style={{ width: 50, height: 50 }} src={socialmidia} alt="icone de lapis" />
						: icon === 'lapis' ?
							<img style={{ width: 50, height: 50 }} src={lapis} alt="icone de lapis" />
							: <> </>}
				</TitleContainer>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Autoplay]}
					spaceBetween={30}
					slidesPerView={3.1}
					autoplay
					// navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						639: {
							slidesPerView: 1,
						},
						865: {
							slidesPerView: 3.1,
						},
						1000: {
							slidesPerView: 3.1,
						},
						1500: {
							slidesPerView: 3.1,
						},
						1700: {
							slidesPerView: 3.1,
						},
					}}
				>
					<SlideNextButton></SlideNextButton>
					{illustrations.map((item) => {
						return (
							<SwiperSlide>
								<Img src={item.image} alt="" />
							</SwiperSlide>
						)
					})}
					<SlidePrevButton></SlidePrevButton>
				</Swiper>

			</Container>
		</Background>
	)
}