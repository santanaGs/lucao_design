import { Background, Container, ContainerTitle, Neon, SkillItem, SkillList, SoftwareContainer, SoftwareDiv, Title } from "./skills.style";

import Ai from '../../../../assets/ai.svg';
import Ps from '../../../../assets/ps.svg';
import Pr from '../../../../assets/pr.svg';
import Id from '../../../../assets/id.svg';
import Figma from '../../../../assets/figma.svg';
import Star from '../../../../assets/star.svg';
import StarEmpty from '../../../../assets/star_empty.svg';

const skills = [
	"Identidade Visual",
	"Peças Gráficas",
	"Social Media",
	"Ilustrações",
	"Edição de Vídeo",
	"Criatividade (Pessoal)",
	"Inglês (Avançado)"
];

const software = [
	{ icon: Ai, qtdStars: 4 },
	{ icon: Id, qtdStars: 4 },
	{ icon: Ps, qtdStars: 3 },
	{ icon: Figma, qtdStars: 3 },
	{ icon: Pr, qtdStars: 3 },
]


const renderStars = (qtdStars: any) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < qtdStars) {
			stars.push(<img key={i} src={Star} alt="star" />);
		} else {
			stars.push(<img key={i} src={StarEmpty} alt="empty star" />);
		}
	}
	return stars;
};

export function Skills() {
	return (
		<Background>
			<Container>
				<ContainerTitle>
					<Title>Habilidades</Title>
					<SkillList>
						{skills.map((item, index) => {
							return (
								<SkillItem key={index}>
									{item}
								</SkillItem>
							)
						})}
					</SkillList>
				</ContainerTitle>
				<ContainerTitle>
					<Title>Software</Title>
					<SoftwareContainer>
						{
							software.map((item, index) => {
								return (
									<SoftwareDiv key={index}>
										<img src={item.icon} alt="" />
										{renderStars(item.qtdStars)}
									</SoftwareDiv>
								)
							})
						}
					</SoftwareContainer>
				</ContainerTitle>
			</Container>
			<Neon></Neon>
		</Background>
	)
}