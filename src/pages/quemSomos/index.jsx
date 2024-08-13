// * IMPORTS
// Estilos
import "./styles.css";

//Components
import Container from "../../components/container";
import Loader from "../../components/loader";
import Card from "../../components/card";
import BoxAnimation from "../../components/boxAnimation";
import Curriculum from "../../components/curriculum";
import CtaCard from "../../components/ctaCard";

// Hooks
import { lazy, Suspense } from "react";

//Fotos
import michelle from "../../assets/img/webp/michelleCV.webp";
import juliana from "../../assets/img/webp/julianaCV.webp";
import laura from "../../assets/img/webp/lauraCV.webp";
import leila from "../../assets/img/webp/leilaCV.webp";
import cibele from "../../assets/img/webp/CibeleCV.webp";

//Icons
import peopleIcon from "../../assets/img/svgs/peopleIcon.svg";

// Lazy imports
const PlayerVideo = lazy(() => import("../../components/playerVideo"));
const QuemSomos = () => {
  return (
    <>
      <Container
        sectionClass="bgHeroQuemSomos"
        mainClass="heroQuemSomosContent"
      >
        <div className="quemSomosVideo">
          <Suspense fallback={<Loader />}>
            <PlayerVideo />
          </Suspense>
        </div>
        <div className="quemSomosCards">
          <div className="heroCard">
            <h2>Nossa Missão</h2>
            <p>
              <b>TRANSFORMAR</b> vidas através de um cuidado <b>ACOLHEDOR</b>,
              promovendo um impacto <b>POSITIVO</b> e <b>DURADOURO</b> na saúde
              das pessoas.
            </p>
          </div>

          <div className="heroCard">
            <h2>Nossa Visão </h2>
            <p>
              Oferecer uma experiência tão <b>EXCEPCIONAL</b> a ponto que
              sejamos sempre a <b>PRIMEIRA ESCOLHA</b> para quem busca
              Fisioterapia Pélvica na grande São Paulo.
            </p>
          </div>
        </div>
      </Container>

      <Container mainClass="ourValues">
        <h2>Nossos Valores</h2>
        <div className="ourValuesCards">
          <BoxAnimation animation="left">
            <Card
              img={peopleIcon}
              h2="ACOLHIMENTO"
              p={
                <p>
                  Na Pelvie, acreditamos que o <strong>ACOLHIMENTO</strong> é
                  tão fundamental quanto o tratamento em si. Oferecemos um
                  atendimento empático e com escuta ativa, onde nossos pacientes
                  se sintam seguros e em casa, com total atenção às suas
                  necessidades.
                </p>
              }
              addClass="bigCard"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <Card
              img={peopleIcon}
              h2="PREVENÇÃO"
              p={
                <p>
                  Nosso trabalho vai além do momento presente, pois valorizamos
                  orientações, mudanças de comportamento e hábitos saudáveis que
                  proporcionam benefícios a longo prazo.
                  <strong> PREVENÇÃO</strong> é uma prioridade e queremos que
                  nossos pacientes levem o conhecimento fisioterapêutico
                  adquirido para toda a vida.
                </p>
              }
              addClass="bigCard"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <Card
              img={peopleIcon}
              h2="APRENDIZADO"
              p={
                <p>
                  Acreditamos no <strong>APRENDIZADO CONTÍNUO</strong> e
                  valorizamos a troca de experiências e informações com outros
                  profissionais, assim como com nossos pacientes. Estamos
                  comprometidas em fornecer um cuidado completo e atualizado,
                  visando sempre o bem-estar e a saúde das pessoas que
                  atendemos.
                </p>
              }
              addClass="bigCard"
            />
          </BoxAnimation>
          <BoxAnimation animation="left">
            <Card
              img={peopleIcon}
              h2="IMPACTO SOCIAL"
              p={
                <p>
                  Sabendo dos benefícios da fisioterapia pélvica para a saúde da
                  população, nosso objetivo a médio-longo prazo é causar um
                  <strong> IMPACTO SOCIAL</strong> significativo, levando esse
                  cuidado a um número cada vez maior de pessoas, especialmente
                  aquelas que mais necessitam.
                </p>
              }
              addClass="bigCard"
            />
          </BoxAnimation>
          <BoxAnimation animation="right">
            <Card
              img={peopleIcon}
              h2="CELEBRAÇÃO"
              p={
                <p>
                  Apesar do trabalho intenso, buscamos sempre momentos para
                  <strong> CELEBRAÇÃO</strong>. Acreditamos que as risadas,
                  descontração e leveza são essenciais para renovar nossas
                  energias e continuar oferecendo o melhor atendimento a todos
                  os nossos pacientes.
                </p>
              }
              addClass="bigCard"
            />
          </BoxAnimation>
        </div>
      </Container>

      <Container sectionClass="bgTeam" />

      <Container mainClass="professionalDescription">
        <span className="spanLabel">Profissionais sempre atualizadas</span>
        <h2>Conheça a nossa equipe</h2>
      </Container>

      <Container sectionClass="bgCurriculumNoPic" id="DraJuliana">
        <Curriculum
          a="Agendar avaliação com a Dra. Juliana"
          aUrl="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação com a Dra. Juliana. Estou buscando a clínica porque…"
          altImg="Foto da Dra. Juliana"
          img={juliana}
        >
          <div className="descriptionCV">
            <h2>Dra. Juliana de Sá</h2>
            <span className="subtitleDra">
              Fisioterapeuta especializada em Saúde da Mulher e Instrutora do
              Método Pilates
            </span>
            <span className="crefito">CREFITO-3/226407-F</span>
            <ul>
              <li>
                Graduada em Fisioterapia pela Universidade Presbiteriana
                Mackenzie;
              </li>
              <li>
                Pós-graduada pelo Programa de Residência Multiprofissional em
                Saúde da Mulher (PUC-Campinas);
              </li>
              <li>Formação completa no método Pilates;</li>
              <li>
                Diversos cursos na área (disfunções sexuais femininas,
                disfunções pélvicas masculinas, laserterapia em uroginecologia,
                dryneedling…);
              </li>
              <li>
                Sócia e fundadora da PELVIE - Fisioterapia Pélvica Funcional.
              </li>
            </ul>
          </div>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculum" id="DraMichelle">
        <Curriculum
          a="Agendar avaliação com a Dra. Michelle"
          aUrl="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação com a Dra. Michelle. Estou buscando a clínica porque…"
          altImg="Foto da Dra.Michelle"
          img={michelle}
          addClass="reverse"
        >
          <div className="descriptionCV">
            <h2>Dra. Michelle Villas Bôas</h2>
            <span className="subtitleDra">
              Fisioterapeuta especializada em Saúde da Mulher, Doula e Educadora
              Perinatal
            </span>
            <span className="crefito">CREFITO-3/221316-F</span>
            <ul>
              <li>
                Graduada em Fisioterapia pela Universidade de Brasília (UnB);
              </li>
              <li>
                Pós-graduada pelo Programa de Residência Multiprofissional em
                Saúde da Mulher (PUC-Campinas);
              </li>
              <li>
                Pós-graduada pelo Programa de Especialização em Fisioterapia
                aplicada à Saúde da Mulher (UNICAMP/CAISM);
              </li>
              <li>
                Atuou como fisioterapeuta no Centro Obstétrico do Hospital
                SEPACO;
              </li>
              <li>Doula e Educadora Perinatal (Matriusca);</li>
              <li>
                Sócia e fundadora da PELVIE - Fisioterapia Pélvica Funcional.
              </li>
            </ul>
          </div>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculumNoPic" id="DraLaura">
        <Curriculum
          a="Agendar avaliação com a Dra. Laura"
          aUrl="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação com a Dra. Laura. Estou buscando a clínica porque…"
          altImg="Foto da Dra.Laura"
          img={laura}
        >
          <div className="descriptionCV">
            <h2>Dra. Laura Noronha</h2>
            <span className="subtitleDra">
              Fisioterapeuta especializada em Saúde da Mulher e Terapia pelo
              Movimento
            </span>
            <span className="crefito">CREFITO-3/309697-F</span>
            <ul>
              <li>Graduada em Fisioterapia pela FMU;</li>
              <li>Pós-Graduada em Saúde Pélvica Funcional (HCFMUSP);</li>
              <li>
                Pós-Graduada em Terapia pelo Movimento (Faculdade Angel Vianna);
              </li>
              <li>Formação completa no método Pilates;</li>
              <li>
                Diversos cursos na área (Biomecânica pélvica, O assoalho pélvico
                da Mulher Atleta, Terapias Manuais, Kinesiotaping…).
              </li>
            </ul>
          </div>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculum" id="DraCibele">
        <Curriculum
          a="Agendar avaliação com a Dra. Cibele"
          aUrl="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação com a Dra. Cibele. Estou buscando a clínica porque…"
          altImg="Foto da Dra.Cibele"
          img={cibele}
          addClass="reverse"
        >
          <div className="descriptionCV">
            <h2>Dra. Cibele Ferrari</h2>
            <span className="subtitleDra">
              Fisioterapeuta Acupunturista especializada em Saúde da Mulher e
              Gestantes
            </span>
            <span className="crefito">CREFITO-3/111858-F</span>
            <ul>
              <li>
                Graduada em Fisioterapia pelo Centro Universitário São Camilo;
              </li>
              <li>Pós-graduada em Fisiologia do Exercício pela UNIFESP;</li>
              <li>
                Formada em Medicina Tradicional Chinesa (Acupuntura), pelo
                Centro Brasileiro de Fisioterapia;
              </li>
              <li>
                Nos últimos anos, esteve focada nos atendimentos com acupuntura,
                especializando-se na saúde da mulher e da gestante;
              </li>
              <li>
                Além da acupuntura, utiliza diversas técnicas, como:
                auriculoterapia, moxabustão, ventosaterapia, Gua sha,
                eletroacupuntura, laseracupuntura, aromaterapia e
                fitoacupuntura.
              </li>
            </ul>
          </div>
        </Curriculum>
      </Container>

      <Container sectionClass="bgCurriculumNoPic" id="DraLeila">
        <Curriculum
          a="Agendar avaliação com a Dra. Leila"
          aUrl="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar uma avaliação com a Dra. Leila. Estou buscando a clínica porque…"
          altImg="Foto da Dra.Leila"
          img={leila}
        >
          <div className="descriptionCV">
            <h2>Dra. Leila Cristina </h2>
            <span className="subtitleDra">
              Fisioterapeuta especializada em Saúde da Mulher
            </span>
            <span className="crefito">CREFITO-3/322756-F</span>
            <ul>
              <li>
                Graduada em Fisioterapia pelo Centro Universitário Saúde ABC -
                FMABC;
              </li>
              <li>Pós-Graduada em Fisioterapia Pélvica (HCFMUSP);</li>
              <li>
                Atuou como Fisioterapeuta Pélvica na Maternidade Hospital
                Brasil;
              </li>
              <li>
                Foi intercambista na Escola Superior de Tecnologia de Saúde de
                Coimbra - Portugal.
              </li>
            </ul>
          </div>
        </Curriculum>
      </Container>

      <Container>
        <CtaCard
          googleBtn={true}
          url="https://wa.me/+5511913112992?text=Olá! Gostaria de agendar um horário para avaliação. Estou buscando a clínica porque…"
        >
          <p>
            Profissionais qualificadas para te oferecer
            <br /> um cuidado completo e atualizado.
          </p>
        </CtaCard>
      </Container>
    </>
  );
};

export default QuemSomos;
