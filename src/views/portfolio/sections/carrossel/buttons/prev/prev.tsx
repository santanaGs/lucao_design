// some-inner-component.jsx
import { useSwiper } from "swiper/react";
import { Arrow, Button } from "./prev.style";

// images
import left from "../../../../../../assets/arrows/left-arrow.png";

export default function SlidePrevButton() {
	const swiper = useSwiper();

	return (
		<Button onClick={() => swiper.slidePrev()}>
			<Arrow src={left} alt="" />
		</Button>
	);
}