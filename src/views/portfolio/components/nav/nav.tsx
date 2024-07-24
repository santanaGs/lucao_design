import { Item, NavS, Title, Image, LinkS, DivS, NavIcon, NavContainer } from "./nav.styles";

// image
import logo from '../../../../assets/logo.svg'

// interface
export interface NavProps {
	img?: string;
	title?: string;
	active?: boolean;
}

import me from '../../../../assets/me.svg';
import ilustracoes from '../../../../assets/ilustracoes.svg';
import social from '../../../../assets/social.svg';
import logos from '../../../../assets/logos.svg';
import videos from '../../../../assets/video.svg';
import sites from '../../../../assets/sites.svg';
import curriculo from '../../../../assets/curriculo.svg';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menu: NavProps = [
	{
		img: me,
		title: 'Eu',
		url: '#eu'
	},
	{
		img: ilustracoes,
		title: 'Ilustrações',
		url: '#ilustracoes',
	},
	{
		img: social,
		title: `Social \n Media`,
		url: '#socialmedia',
	},
	{
		img: logos,
		title: 'Logos',
		url: '#logos',
	},
	// {
	// 	img: videos,
	// 	title: 'Vídeos',
	// 	url: '#ilustracoes',
	// },
	{
		img: sites,
		title: 'Sites',
		url: '#sites',
	},
	{
		img: curriculo,
		title: 'Currículo'
	},
]

// Functional Component
export function Nav({ active }: NavProps) {
	// Const
	const [activeItem, setActiveItem] = useState<string | undefined>('');

	// Rendering
	return (
		<DivS>
			<NavS>
				<NavLink to={'/'}  >
					<Image src={logo} alt="Logo" style={{ width: 100, height: 100 }} />
				</NavLink>
				<NavContainer>
					{menu.map((item: NavProps) => {
						return (
							<LinkS href={item.url} onClick={() => { setActiveItem(item.title) }}>
								<Item active={activeItem === item.title}>
									<NavIcon src={item.img} alt="icone svg" />
									<Title>{item.title}</Title>
								</Item>
							</LinkS>
						)
					})}
				</NavContainer>
			</NavS>
		</DivS>

	)
}
