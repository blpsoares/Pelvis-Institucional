import "./styles.css";

import { Head } from "vite-react-ssg";
import { NavLink } from "react-router-dom";

import MedicalBusinessSchema from "../../components/medicalBusinessSchema";
import FaqPageSchema from "../../components/faqPageSchema";
import Container from "../../components/container";
import BoxAnimation from "../../components/boxAnimation";
import Hero from "../../components/hero";
import CtaAcc from "../../components/ctaAcc";
import CtaCard from "../../components/ctaCard";
import SpecCard from "../../components/specCard";
import LocationBlock from "../../components/locationBlock";
import LeadParagraph from "../../components/leadParagraph";

import slugAncora from "../../utils/slugAncora";

import heroImg from "../../assets/img/webp/bgTratamentosDesktop.webp";
import heroImgMobile from "../../assets/img/webp/bgHeroTratamentoMobile.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import cibele from "../../assets/img/webp/cibele.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar um horário de Massagem ou Drenagem Linfática. Estou buscando a clínica porque…";
export const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

export const PRECO_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber os valores da Massagem e Drenagem Linfática.";
export const PRECO_WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${PRECO_WHATSAPP_MESSAGE}`;

// Texto-base de docs/seo-landing-pages/dados-por-pagina.md (seção 4, pronto,
// briefing 6.4), desacordeonizado a partir do bloco "Massagem Relaxante e
// Drenagem Linfática" hoje em src/pages/tratamento/index.jsx (linhas
// ~708-794, dentro de um Accordion) — aqui sempre visível, sem Accordion.
// Os parágrafos complementares (indicações, o que esperar da sessão) foram
// adicionados porque o texto-base do briefing, sozinho, é mais curto que o
// de Fisioterapia Pélvica e não fecha as 600 palavras visíveis mínimas (R7);
// usam termos de busca reais de pacientes, sem enchimento artificial.
const SERVICOS = [
  {
    title: "Massagem Relaxante",
    paragraphs: [
      "A saúde vai muito além da ausência de dor. Cuidar do corpo é também cuidar da mente — e a massagem relaxante é uma das formas mais eficazes de promover esse equilíbrio. Com técnicas suaves, movimentos rítmicos e foco no relaxamento muscular, a massagem relaxante proporciona alívio imediato do estresse, ansiedade e tensões acumuladas no dia a dia.",
    ],
    beneficiosLabel: "Benefícios da massagem relaxante:",
    beneficios: [
      "Redução do estresse e da ansiedade;",
      "Alívio de dores musculares e tensões;",
      "Melhora da circulação sanguínea;",
      "Melhora da qualidade do sono;",
      "Sensação profunda de bem-estar e relaxamento.",
    ],
    paragraphsAfter: [
      "A sessão é realizada por uma fisioterapeuta especializada, em um ambiente calmo, confortável e seguro. Permita-se esse cuidado!",
      "Muitas pacientes buscam a massagem relaxante perto de casa, no Brooklin, como uma pausa na rotina corrida de São Paulo — seja para aliviar a tensão acumulada no trabalho, seja para relaxar durante a gestação (respeitando as adaptações necessárias para gestantes), seja simplesmente para reservar um momento de autocuidado. Antes da primeira sessão, a fisioterapeuta faz uma breve avaliação — queixas, pontos de tensão e contraindicações — e ajusta a pressão e a técnica ao que faz sentido para o seu corpo naquele dia.",
    ],
  },
  {
    title: "Drenagem Linfática",
    paragraphs: [
      "A drenagem linfática é uma técnica manual suave, indicada para estimular o sistema linfático — responsável por eliminar toxinas, líquidos retidos e resíduos metabólicos do corpo. A drenagem linfática é muito bem indicada para gestantes e outras situações clínicas.",
    ],
    beneficiosLabel: "Benefícios da drenagem linfática:",
    beneficios: [
      "Redução do inchaço (edema) e da retenção de líquidos;",
      "Melhora da circulação sanguínea e linfática;",
      "Auxílio no pós-operatório (cirurgias plásticas, ortopédicas etc.);",
      "Alívio de dores e sensação de peso nas pernas;",
      "Estímulo ao sistema imunológico;",
      "Relaxamento corporal e redução do estresse.",
    ],
    paragraphsAfter: [
      "Além disso, a drenagem linfática é uma grande aliada em casos de linfedema, celulite, TPM, gestação (com liberação médica) e outros quadros que envolvem acúmulo de líquidos ou inflamação leve dos tecidos. Essa técnica é realizada por fisioterapeuta especializada, garantindo segurança, conforto e resultados reais.",
      "É comum buscar drenagem linfática pós-operatório logo após cirurgias plásticas (como lipoaspiração e abdominoplastia) para acelerar a recuperação e reduzir o inchaço, sempre com liberação do cirurgião responsável. Gestantes também recorrem à técnica — com liberação médica — para aliviar o inchaço nas pernas e nos pés, comum principalmente no fim da gestação. Na avaliação inicial, a fisioterapeuta identifica a causa do inchaço ou da retenção de líquido e define a frequência de sessões mais indicada para o seu caso, podendo combinar a drenagem com outras técnicas manuais conforme a evolução do tratamento.",
    ],
  },
];

// SEM rótulo curto e SEM agrupamento por família: os dois títulos já são curtos
// e a lista tem dois itens.

// FAQ OFICIAL da cliente (anexo PELVIE — Perguntas Frequentes, 11/09/2026).
// Texto literal, palavra por palavra — não editar sem novo anexo da cliente.
// O mesmo array alimenta o h3/p visível e o JSON-LD do FaqPageSchema (R17: o
// texto do schema precisa ser idêntico ao renderizado).
const FAQS = [
  {
    pergunta: "Qual a diferença entre massagem relaxante e drenagem linfática?",
    resposta:
      "A massagem relaxante trabalha a musculatura: usa movimentos mais amplos e rítmicos para soltar tensão, aliviar dor muscular e reduzir estresse e ansiedade. A drenagem linfática é um toque suave e superficial, que segue o caminho do sistema linfático para mobilizar líquido retido — indicada para inchaço, pós-operatório e retenção de líquido na gestação. A fisioterapeuta indica qual das duas faz sentido para o seu caso; às vezes, as duas.",
  },
  {
    pergunta: "Grávida pode fazer drenagem linfática?",
    resposta:
      "Com certeza, mas é interessante que haja liberação do obstetra. O inchaço nas pernas e nos pés é uma das queixas mais comuns da gestação, principalmente no terceiro trimestre, e a drenagem alivia a sensação de peso e melhora o conforto para dormir. O posicionamento é adaptado à barriga, com apoios, e a técnica é conduzida por fisioterapeuta especializada. Pressão alta, pré-eclâmpsia ou histórico de trombose precisam ser informados antes da sessão.",
  },
  {
    pergunta: "Quando posso fazer drenagem linfática depois de uma cirurgia?",
    resposta:
      "Em muitos casos a liberação vem já nos primeiros dias após o procedimento, porque a drenagem precoce ajuda a controlar o edema e o desconforto. Traga a orientação do seu médico e, se houver, o número de sessões recomendado. A técnica é adaptada à fase da cicatrização e às áreas operadas, e é realizada por fisioterapeuta.",
  },
  {
    pergunta: "A drenagem linfática dói? Precisa apertar forte para funcionar?",
    resposta:
      'Não. Essa é a confusão mais comum: a drenagem linfática é um toque leve e superficial, porque os vasos linfáticos ficam logo abaixo da pele. Pressão forte atrapalha justamente o que se quer estimular, além de causar desconforto ou até mesmo hematomas. O que muita gente conhece como "drenagem que dói" costuma ser massagem modeladora, que é outra técnica. Aqui a drenagem é feita na pressão correta, por fisioterapeuta.',
  },
  {
    pergunta: "Quantas sessões de drenagem linfática são necessárias?",
    resposta:
      "Depende do objetivo. Para inchaço na gestação ou retenção de líquido, uma sessão por semana costuma dar conta, e o alívio é percebido já nas primeiras. No pós-operatório as sessões são mais frequentes no começo — com a frequência definida pelo seu cirurgião — e vão sendo espaçadas conforme o edema cede. Para a massagem relaxante não há número mínimo ou máximo. Temos pacientes que marcam semanalmente, outras quinzenalmente, de acordo com a necessidade.",
  },
  {
    pergunta: "Quanto custa a sessão e quanto tempo dura?",
    resposta:
      "Cada sessão dura uma hora e é sempre realizada por fisioterapeuta — não por esteticista. O atendimento é particular, em sessão avulsa ou dentro de um Plano de Tratamento. Para saber os valores da massagem relaxante e da drenagem é só chamar no WhatsApp, que a nossa equipe responde na hora. Caso haja encaminhamento médico com CID, emitimos nota fiscal com os dados que a sua operadora costuma exigir para o pedido de reembolso, além do relatório da fisioterapeuta.",
    precoCta: true,
  },
];

const MassagemEDrenagemLinfatica = () => {
  return (
    <>
      <Head>
        <title>Massagem e Drenagem Linfática | PELVIE Brooklin, SP</title>
        <meta
          name="description"
          content="Massagem relaxante e drenagem linfática com fisioterapeuta. Pós-operatório, gestantes e retenção de líquido. Brooklin, São Paulo. Agende seu horário."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/massagem-e-drenagem-linfatica"
        />
        {/* F6.2 — imagem do hero é background-image (ver src/components/hero),
            então não herda fetchpriority de <img>; preload adianta a
            descoberta pelo preload scanner.
            F6.4 — o hero mobile agora usa uma imagem retrato diferente
            (ver src/components/hero/styles.css); preload por media query
            para o navegador buscar só a imagem que o breakpoint atual vai
            realmente pintar, senão o LCP mobile piora com 2 downloads. */}
        {/* eslint-disable-next-line react/no-unknown-property -- fetchpriority (minúsculo) é o
            atributo HTML real; React 18.2 já repassa props desconhecidas em minúsculo verbatim
            para o DOM, o plugin do eslint é que ainda não conhece o atributo. */}
        <link rel="preload" as="image" fetchpriority="high" href={heroImg} media="(min-width: 1001px)" />
        {/* eslint-disable-next-line react/no-unknown-property -- ver acima */}
        <link rel="preload" as="image" fetchpriority="high" href={heroImgMobile} media="(max-width: 1000px)" />
      </Head>
      <MedicalBusinessSchema />
      <FaqPageSchema faqs={FAQS} />

      <Hero
        titleTextBe="Massagem Relaxante e Drenagem Linfática"
        titleSpan="em São Paulo"
        pText="Massagem relaxante e drenagem linfática são duas técnicas manuais com objetivos diferentes, mas que se completam: uma cuida do corpo e da mente através do relaxamento muscular e do alívio do estresse; a outra estimula o sistema linfático para reduzir inchaço, retenção de líquidos e apoiar a recuperação em situações como pós-operatório e gestação. As duas são realizadas por fisioterapeutas especializadas, com técnicas seguras e ajustadas ao momento de cada paciente. Se você busca aliviar tensões do dia a dia, se recuperar de uma cirurgia ou cuidar do inchaço na gestação, a avaliação inicial define a abordagem mais indicada e a frequência de sessões ideal para o seu caso."
        imgBg={heroImg}
        imgBgMobile={heroImgMobile}
        bgClass="bgHeroOverlay"
      >
        <a href={WHATSAPP_HREF} className="ctaBtnZap heroCta" target="noreferrer">
          Agendar horário pelo WhatsApp
          <img
            src={whatsappBranco}
            alt="logo do whatsapp"
            width="20"
            height="20"
            loading="lazy"
          />
        </a>
      </Hero>

      <Container mainClass="massagemContent">
        <BoxAnimation animation="opacity">
          <h2>Massagem Relaxante e Drenagem Linfática</h2>
        </BoxAnimation>
        <div className="landingLayout">
          {/* Índice de navegação em HTML + CSS puro, sem JavaScript. As regras
              estão em src/index.css, compartilhadas com /pilates e /acupuntura.

              SEM `landingLayoutAbas`, ao contrário das outras duas: aqui o modo
              aba NÃO está ligado, e os dois blocos continuam inteiros e
              visíveis. Com 2 blocos ele esconderia metade do texto da seção
              (400 → ~195 palavras visíveis) para poupar ~950px de rolagem —
              menos de uma tela em 1440x900 — e um sumário de dois itens não
              funciona como sumário: ninguém precisa de índice para descobrir
              que existe um segundo bloco logo abaixo. O que a queixa do usuário
              ("conteúdo jogado") pede aqui é a outra metade do padrão: o atalho
              e as duas colunas, que estreitam a medida de linha e alinham o
              texto no mesmo eixo das outras três páginas. Ligar o modo aba, se
              o usuário mudar de ideia, é acrescentar `landingLayoutAbas` na
              linha acima — nada mais muda. */}
          <nav
            className="landingIndice"
            aria-label="Índice dos serviços de massagem e drenagem"
          >
            <p className="landingIndiceTitulo">Ir direto para</p>
            <ul>
              {SERVICOS.map((servico) => (
                <li key={servico.title}>
                  <a href={`#${slugAncora(servico.title)}`}>{servico.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="landingBlocos">
            {SERVICOS.map((servico) => (
              <BoxAnimation animation="opacity" key={servico.title}>
                <div
                  className="massagemBloco landingBloco"
                  id={slugAncora(servico.title)}
                >
                  <h3>{servico.title}</h3>
                  {servico.paragraphs.map((paragrafo, indice) =>
                    indice === 0 ? (
                      <LeadParagraph key={paragrafo.slice(0, 40)}>
                        {paragrafo}
                      </LeadParagraph>
                    ) : (
                      <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                    )
                  )}
                  <p>
                    <b>{servico.beneficiosLabel}</b>
                  </p>
                  <ul>
                    {servico.beneficios.map((beneficio) => (
                      <li key={beneficio.slice(0, 40)}>{beneficio}</li>
                    ))}
                  </ul>
                  {servico.paragraphsAfter.map((paragrafo) => (
                    <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                  ))}
                </div>
              </BoxAnimation>
            ))}
          </div>
        </div>

        <CtaAcc
          aText="Agendar Massagem ou Drenagem Linfática"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="comoFuncionaResumo">
        <BoxAnimation animation="opacity">
          <h2>Como funciona o atendimento</h2>
          <p>
            O atendimento começa com uma breve avaliação, feita por uma
            fisioterapeuta especializada, para entender sua queixa — seja
            tensão muscular e estresse, seja inchaço e retenção de líquidos —
            e verificar contraindicações antes da sessão. A partir disso, a
            técnica (massagem relaxante, drenagem linfática ou uma combinação
            das duas) e a frequência das sessões são ajustadas ao seu
            objetivo, respeitando situações específicas como pós-operatório e
            gestação. Cada sessão é realizada em ambiente calmo e reservado,
            com atenção individual do início ao fim do atendimento.
          </p>
          <NavLink to="/como-funciona" className="ctaBtn2">
            Veja como funciona o atendimento
          </NavLink>
        </BoxAnimation>
      </Container>

      <Container sectionClass="bgOurTeam" mainClass="ourTeam" id="equipe">
        <span className="spanLabelLeaked">
          Atendimento empático e escuta ativa
        </span>
        <h2>Conheça nossa equipe</h2>
        <div className="ourTeamCards ourTeamCardsLanding">
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
              h3="Thipphane Yuka"
              img={thipphane}
              p="Fisioterapeuta e Massoterapeuta"
              span="CREFITO-3/439481-F"
              id="DraThipphane"
            />
          </BoxAnimation>
          <BoxAnimation animation="top">
            <SpecCard
              h3="Isadora Savi"
              img={isadora}
              p="Fisioterapeuta especializada em Saúde Pélvica e Obstétrica"
              span="CREFITO-3/402185-F"
              id="DraIsadora"
            />
          </BoxAnimation>
        </div>
        <NavLink to="/quem-somos" className="ctaBtn2 massagemEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes</h2>
        {FAQS.map((faq) => (
          <BoxAnimation animation="opacity" key={faq.pergunta}>
            <div className="faqItem">
              <h3>{faq.pergunta}</h3>
              <p>{faq.resposta}</p>
              {faq.precoCta && (
                <div className="faqPrecoCta">
                  <CtaAcc
                    aText="Consultar valores pelo WhatsApp"
                    href={PRECO_WHATSAPP_HREF}
                    img={whatsappGreen}
                  />
                </div>
              )}
            </div>
          </BoxAnimation>
        ))}
      </Container>

      <Container mainClass="ctaLocalizacao">
        <CtaAcc
          aText="Agendar horário pelo WhatsApp"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <LocationBlock>
        Rua James Watt, 142, Sala 42 — Brooklin, São Paulo/SP — CEP 04576-050
      </LocationBlock>

      <Container>
        <CtaCard googleBtn={true} url={WHATSAPP_HREF}>
          <p>Agende seu horário de massagem ou drenagem linfática!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default MassagemEDrenagemLinfatica;
