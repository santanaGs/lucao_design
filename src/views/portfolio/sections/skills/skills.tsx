import { Background, Container, ContainerTitle, Neon, SkillItem, SkillList, Title } from "./skills.style";

const skills = [
	"Identidade Visual",
	"Peças Gráficas",
	"Social Media",
	"Ilustrações",
	"Edição de Vídeo",
	"Criatividade (Pessoal)",
	"Inglês (Avançado)"
];


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
				</ContainerTitle>
			</Container>
			<Neon></Neon>
		</Background>
	)
}