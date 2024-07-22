// some-inner-component.jsx
import { useSwiper } from "swiper/react";
import { Arrow, Button } from "./next.style";

// images
import rigth from "../../../../../../assets/arrows/right-arrow.png";

export default function SlideNextButton() {
	const swiper = useSwiper();

	return (
		<Button onClick={() => swiper.slideNext()}>
			<Arrow src={rigth} alt="" />
		</Button>
	);
}