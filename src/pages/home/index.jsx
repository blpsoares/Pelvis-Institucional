/* eslint-disable react/jsx-no-target-blank */
/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
/* eslint-disable no-unused-vars */

// ** IMPORTS
// Estilos
import "./styles.css";

// Components
import HeroCarrossel from "../../components/HeroCarrossel";
import EspecialidadesCard from "../../components/EspecialidadesCard";
import Container from "../../components/container";
import SpecCard from "../../components/specCard";
import BoxAnimation from "../../components/boxAnimation";
import Loader from "../../components/loader";
import CardHome from "../../components/card";
import GoogleCard from "../../components/googleCard";
import CtaCard from "../../components/ctaCard";

// Hooks
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

//Fotos
import fisioPelvica from "../../assets/img/webp/especialidadeMobile1.webp";
import acupuntura from "../../assets/img/webp/especialidadeMobile2.webp";
import pilates from "../../assets/img/webp/especialidadeMobile3.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import cibele from "../../assets/img/webp/cibele.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";

//Icones
import acolhimento from "../../assets/img/svgs/acolhimento.svg";
import cuidado from "../../assets/img/svgs/cuidado.svg";
import notaMaxima from "../../assets/img/svgs/notaMaxima.svg";
import whats from "../../assets/img/svgs/whatsappBranco.svg";

// Lazy imports
const Maps = lazy(() => import("../../components/maps"));
const Carrossel = lazy(() => import("../../components/slider"));

const Home = () => {
	return (
		<>
			<HeroCarrossel />

			<Container mainClass="bgTitleCardsHome">
				<div className="cardsHomeHeader">
					<BoxAnimation animation="top">
						<div className="titleCardsHomeText">
							<h1>
								Somos uma clínica especializada em
								<br />
								<strong>Reabilitação Pélvica</strong>
							</h1>
							<span>Por que escolher a PELVIE?</span>
						</div>
					</BoxAnimation>
					<BoxAnimation animation="top">
						<div className="titleCardsHomeCtas">
							<NavLink to="/tratamento">Tratamentos</NavLink>
							<a
								href="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar minha avaliação. Estou buscando a clínica porque…"
								target="noreferrer"
							>
								Agendar sua avaliação
							</a>
						</div>
					</BoxAnimation>
				</div>
				<div className="cardsHome">
					<BoxAnimation animation="left">
						<CardHome
							img={acolhimento}
							h2="Acolhimento e Empatia "
							p={
								<p>
									Aqui você é recebida de braços abertos e vai se sentir em
									casa!
								</p>
							}
						/>
					</BoxAnimation>
					<BoxAnimation animation="left">
						<CardHome
							img={cuidado}
							h2="Cuidado Integral"
							p={
								<p>
									Um olhar abrangente com foco na prevenção e na promoção da
									saúde.
								</p>
							}
						/>
					</BoxAnimation>
					<BoxAnimation animation="left">
						<CardHome
							img={notaMaxima}
							h2="Nota Máxima no Google"
							p={<p>Pacientes 100% satisfeitas!</p>}
						/>
					</BoxAnimation>
				</div>
			</Container>

			<Container mainClass="especialidadesMain">
				<span className="spanLabel">Cuidado completo</span>
				<h3>Conheça nossas especialidades</h3>
				<div className="especialidades">
					<BoxAnimation animation="left" addClass="specCardsAnimate">
						<EspecialidadesCard
							h3="Fisioterapia Pélvica"
							aText="Saiba Mais"
							img={fisioPelvica}
							altImg={"Foto da Dra. Juliana com uma paciente"}
							href="/Tratamento"
						>
							<p>
								É uma especialidade da fisioterapia que busca tratar e prevenir
								disfunções relacionadas ao assoalho pélvico. Indicada para o
								tratamento de incontinência urinária, prolapsos genitais,
								disfunções sexuais, constipação intestinal, preparação para o
								parto e na recuperação pós-parto, como a diástase abdominal e
								outros.
							</p>
						</EspecialidadesCard>
					</BoxAnimation>
					<BoxAnimation animation="top">
						<EspecialidadesCard
							h3="Acupuntura"
							aText="Saiba Mais"
							img={acupuntura}
							altImg={"Foto mostrando o acupunturismo"}
							href="/Tratamento"
						>
							<p>
								É uma especialidade da Medicina Tradicional Chinesa que tem foco
								no tratamento de problemas relacionados à saúde. Quando voltada
								à saúde da mulher, busca o reequilíbrio de desarmonias em suas
								diferentes fases da vida, como no período menstrual, na
								menopausa, na gestação, no pré e pós-parto, entre outras.
							</p>
						</EspecialidadesCard>
					</BoxAnimation>
					<BoxAnimation animation="right">
						<EspecialidadesCard
							h3="Pilates"
							aText="Saiba Mais"
							img={pilates}
							altImg={"Foto da Dra. Juliana dando aula de pilates"}
							href="/Tratamento"
						>
							<p>
								É um método de exercícios que visa trabalhar a conexão entre
								mente e corpo. Sua prática traz benefícios como melhora da
								flexibilidade e da mobilidade, ganho de força muscular e alívio
								de dores. Oferecidas por fisioterapeuta especializada, as aulas
								de Pilates são totalmente focadas em gestantes e em mulheres no
								pós-parto.
							</p>
						</EspecialidadesCard>
					</BoxAnimation>
				</div>
			</Container>

			<Container sectionClass="bgOurTeam" mainClass="ourTeam" id="time">
				<span className="spanLabelLeaked">Profissionais qualificadas</span>
				<h3>Nossa equipe de especialistas</h3>
				<div className="ourTeamCards">
					<BoxAnimation animation="top">
						<SpecCard
							h3="Juliana de Sá"
							img={juliana}
							p="Fisioterapeuta especializada em Saúde da Mulher e Instrutora do Método Pilates"
							span="CREFITO-3/226407-F"
							id="DraJuliana"
						/>
					</BoxAnimation>

					<BoxAnimation animation="top">
						<SpecCard
							h3="Laura Noronha"
							img={laura}
							p="Fisioterapeuta especializada em Saúde da Mulher e Terapia do Movimento"
							span="CREFITO-3/309697-F"
							id="DraLaura"
						/>
					</BoxAnimation>

					<BoxAnimation animation="bottom">
						<SpecCard
							h3="Leila Cristina"
							img={leila}
							p="Fisioterapeuta especializada em Saúde da Mulher"
							span="CREFITO-3/322756-F"
							id="DraLeila"
						/>
					</BoxAnimation>

					<BoxAnimation animation="top">
						<SpecCard
							h3="Cibele Ferrari"
							img={cibele}
							p="Fisioterapeuta Acupunturista especializada em Saúde da Mulher e Gestantes"
							span="CREFITO-3/111858-F"
							id="DraCibele"
						/>
					</BoxAnimation>

					<BoxAnimation animation="top">
						<SpecCard
							h3="Thipphane"
							img={thipphane}
							p="Fisioterapeuta e Massoterapeuta"
							// span="CREFITO-3/111858-F"
							id="Dra. Thipphane Yuka"
						/>
					</BoxAnimation>

					<BoxAnimation animation="top">
						<SpecCard
							h3="Dra. Isadora Savi"
							img={isadora}
							p="Fisioterapeuta especializada em Saúde Pélvica e Obstétrica"
							span="CREFITO-3/402185-F"
							id="Dra. Isadora Savi"
						/>
					</BoxAnimation>
				</div>
			</Container>

			<Container sectionClass="ourSpace" id="ourSpace">
				<div className="titleCarrossel">
					<div className="titleCarrosselText">
						<span className="spanLabel">Ambiente moderno e aconchegante</span>
						<h3>Conheça nosso espaço</h3>
					</div>
					<div className="titleCarrosselLinks">
						<BoxAnimation animation="left">
							<NavLink to="/equipe" className="ctaBtn1">
								Mais sobre a equipe
							</NavLink>
						</BoxAnimation>
						<BoxAnimation animation="right">
							<a
								href="https://wa.me/+5511913112992?text=Olá! Gostaria de reservar um horário para avaliação. Estou buscando a clínica porque…"
								className="ctaBtnZap"
								target="noreferrer"
							>
								Reservar um horário
								<img
									src={whats}
									alt="logo do whatsapp"
									width="20"
									height="20"
									loading="lazy"
								/>
							</a>
						</BoxAnimation>
					</div>
				</div>
				<Suspense fallback={<Loader />}>
					<Carrossel />
				</Suspense>
			</Container>

			<Container sectionClass="bgGoogle" mainClass="google">
				<span className="spanLabelLeaked">
					Todas as pacientes indicam a PELVIE!
				</span>
				<h2>Confira as nossas avaliações no Google</h2>
				<div className="cardsGoogle">
					<BoxAnimation animation="left">
						<GoogleCard
							h3="Sandra Spartani"
							p="A equipe é composta por mulheres extremamente simpáticas e dedicadas, o que contribui para um ambiente positivo e acolhedor. A simpatia da equipe é fundamental para estabelecer uma conexão com os pacientes, transmitindo confiança e conforto durante o processo de reabilitação. Eu recomendo!"
							googleHref="https://g.co/kgs/jGCJyad"
						/>
					</BoxAnimation>
					<BoxAnimation animation="top">
						<GoogleCard
							h3="Danielle Oshiro"
							p="Escolhi a PELVIE pelo Google e por isso acho importante comentar, ajudando outras pessoas que estão buscando este tipo de tratamento. Excelentes profissionais, muito atenciosas e que me apoiaram durante minha gestação, a qual foi muito tranquila e sem queixas. Além do mais, a clínica é uma graça, bem nova, equipada e acolhedora."
							googleHref="https://g.co/kgs/UY9nRw6"
						/>
					</BoxAnimation>
					<BoxAnimation animation="right">
						<GoogleCard
							googleHref="https://g.co/kgs/oNUwVi5 "
							h3="Beatriz Lopes"
							p="Minha experiência com a Pelvie não poderia ser melhor. Fiz fisio pélvica para o parto e quando chegou perto do prazo máximo meu corpo não dava sinais e meu bebê estava super alto, decidi fazer acupuntura com a Cibele. Em dois dias entrei em trabalho de parto! Tive um parto dos sonhos e mega rápido. Obrigada equipe por todo apoio e acolhimento!"
						/>
					</BoxAnimation>
					<BoxAnimation animation="left">
						<GoogleCard
							h3="Ana Gratieri"
							p="A Pelvie é excelente! Desde meu primeiro contato já me senti muito acolhida. Fiz meu acompanhamento na gestação e no pós parto com a Laura, que é um amor de pessoa e muito competente. A fisioterapia se tornou um momento de descontração. Ainda fiz acupuntura com a Cibele que é ótima e super simpática. O espaço é excelente, bem equipado e com limpeza impecável. Só tenho elogios e saudade."
							googleHref="https://g.co/kgs/d5GGRF3"
						/>
					</BoxAnimation>
					<BoxAnimation animation="bottom">
						<GoogleCard
							h3="Thayza Campo"
							p="Gostaria de expressar minha profunda gratidão e admiração pelo excelente trabalho que a Leila realiza. Seu profissionalismo, atenção e cuidado com cada detalhe fizeram toda a diferença no meu tratamento. Traz muita confiança e segurança. O estabelecimento é incrível, muito bem estruturado e acolhedor. A equipe transmite uma sensação de bem-estar desde o primeiro contato."
							googleHref="https://g.co/kgs/gmGQT7A"
						/>
					</BoxAnimation>
					<BoxAnimation animation="right">
						<GoogleCard
							h3="Keila Fujikawa"
							p="Superou minhas expectativas tanto em relação ao profissionalismo e conduta do tratamento quanto pelo ambiente acolhedor, divertido e leve. A Ju, fisio que cuidou de mim (digo cuidou porque foi além de ser tratada como paciente) é uma profissional competente e incrível, super atualizada e extremamente acolhedora. Recomendo fortemente a Pelvie!"
							googleHref="https://g.co/kgs/5zF8Zsn"
						/>
					</BoxAnimation>
				</div>
				<a
					href="https://www.google.com/search?q=pelvie+-+fisioterapia+p%C3%A9lvica+funcional&oq=Pelvie&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyDQgCEC4YrwEYxwEYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgwIBRAAGAoYsQMYgAQyBggGEEUYPTIGCAcQRRg90gEIMzQ1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94ce573422e3ce3f:0xf18457c7bf00ec3f,1,,,,"
					target="noreferrer"
					className="ctaBtn2"
				>
					Veja as avaliações no Google
				</a>
			</Container>

			<Container mainClass="googleMaps">
				<span className="spanLabel">Localização acessível</span>
				<h3>Venha nos fazer uma visita!</h3>
				<Suspense fallback={<Loader />}>
					<Maps />
				</Suspense>

				<div className="adressMaps">
					<div className="adressText">
						<h3>Endereço</h3>
						<a
							href="https://www.google.com/maps?ll=-23.613567,-46.69575&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17403131375481056319"
							target="noreferrer"
						>
							Rua James Watt 142, sala 42 – Brooklin - São Paulo - SP
						</a>
					</div>
					<div className="phoneMaps">
						<h3>Telefone</h3>
						<a href="tel:+5511913112992" target="noreferrer">
							(11) 91311-2992
						</a>
					</div>
				</div>

				<CtaCard
					animationBtnUm="right"
					animationBtnDois="left"
					url="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar um horário para avaliação. Estou buscando a clínica porque…"
				>
					<p>
						Acolhimento, empatia e segurança:
						<br /> aqui os pacientes se sentem em casa!
					</p>
				</CtaCard>
			</Container>
		</>
	);
};

export default Home;
