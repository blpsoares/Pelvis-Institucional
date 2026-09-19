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

import slugAncora from "../../utils/slugAncora";

import heroImg from "../../assets/img/webp/bgTratamentosDesktop.webp";
import heroImgMobile from "../../assets/img/webp/bgHeroTratamentoMobile.webp";
import cibele from "../../assets/img/webp/cibele.webp";
import juliana from "../../assets/img/webp/juliana.webp";
import laura from "../../assets/img/webp/laura.webp";
import leila from "../../assets/img/webp/leila.webp";
import isadora from "../../assets/img/webp/isadora.webp";
import thipphane from "../../assets/img/webp/thipphane.webp";

import whatsappGreen from "../../assets/img/svgs/wppGreen.svg";
import whatsappBranco from "../../assets/img/svgs/whatsappBranco.svg";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma sessão de Acupuntura. Estou buscando a clínica porque…";
export const WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${WHATSAPP_MESSAGE}`;

export const PRECO_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber os valores da Acupuntura.";
export const PRECO_WHATSAPP_HREF = `https://wa.me/+5511913112992?text=${PRECO_WHATSAPP_MESSAGE}`;

// Títulos, âncoras e rótulos dos blocos da seção principal, num lugar só.
// Diferente de /pilates e /massagem-e-drenagem-linfatica, aqui os blocos não
// vêm de um array: a marcação de cada um é própria (listas longas, parágrafo de
// fecho), e transformá-la em dados exigiria um mini-formato de conteúdo só para
// esta página. O que precisa de fonte única é a tríade título/âncora/rótulo —
// é ela que o índice e o corpo têm de enxergar igual —, e é só ela que mora
// aqui. O <h3> de cada bloco lê o título daqui; o id, a âncora derivada dele.
const BLOCOS = [
  { chave: "trata", titulo: "O que a acupuntura trata", rotulo: "O que trata" },
  {
    chave: "fertilidade",
    titulo: "Estímulo à fertilidade e Protocolo de Paulus",
    // O título inteiro ocupa três linhas numa coluna de 27rem. O Protocolo de
    // Paulus é aplicado justamente em FIV, e é esse o termo que a paciente
    // procura.
    rotulo: "Fertilidade e FIV",
  },
  {
    chave: "gestacao",
    titulo: "Gestação e preparo para o parto",
    rotulo: "Gestação e parto",
  },
  {
    chave: "tecnicas",
    titulo: "Técnicas utilizadas na sessão",
    rotulo: "Técnicas da sessão",
  },
];

const bloco = Object.fromEntries(BLOCOS.map((b) => [b.chave, b]));

// SEM agrupamento por família, ao contrário da /fisioterapia-pelvica: lá são 17
// condições e as famílias são o que torna a lista varrível. Quatro itens não
// têm o que agrupar.

// Rótulo curto SÓ para o índice de perguntas (proposta B, aprovada pelo
// usuário). O <h3> de cada pergunta no corpo continua com o texto completo,
// idêntico ao anexo; isto é navegação, não conteúdo.
const ROTULO_CURTO_FAQ = {
  "A acupuntura ajuda a engravidar?": "Ajuda a engravidar?",
  "Posso fazer acupuntura grávida?": "Posso fazer grávida?",
  "A acupuntura dói? As agulhas machucam?": "As agulhas doem?",
  "Quantas sessões de acupuntura são necessárias e com que frequência?":
    "Quantas sessões?",
  "Quanto custa a sessão de acupuntura?": "Quanto custa?",
  "Quem aplica a acupuntura na PELVIE? Preciso de encaminhamento médico?":
    "Quem aplica?",
};

// FAQ OFICIAL da cliente (anexo PELVIE — Perguntas Frequentes, 11/09/2026).
// Texto literal, palavra por palavra — não editar sem novo anexo da cliente.
// O mesmo array alimenta o h3/p visível e o JSON-LD do FaqPageSchema (R17: o
// texto do schema precisa ser idêntico ao renderizado).
const FAQS = [
  {
    pergunta: "A acupuntura ajuda a engravidar?",
    resposta:
      "A acupuntura é usada como tratamento complementar em casos de dificuldade para engravidar. Ela atua sobre fatores que influenciam a fertilidade — estresse, qualidade do sono, regulação do ciclo e circulação na região pélvica. Na PELVIE também realizamos o Protocolo de Paulus, aplicado antes e depois da transferência embrionária em ciclos de Fertilização In Vitro (FIV). A acupuntura caminha lado a lado do tratamento de fertilidade.",
  },
  {
    pergunta: "Posso fazer acupuntura grávida?",
    resposta:
      "Com toda certeza! É uma das indicações mais procuradas aqui. Durante a gestação a acupuntura é usada para enjoo, azia, dor lombar e pélvica, ansiedade, insônia e inchaço — queixas comuns e que costumam limitar o uso de medicamentos. A partir do terceiro trimestre ela também entra no preparo para o parto, favorecendo o início do trabalho de parto de forma espontânea. Os pontos utilizados na gestação são selecionados especificamente para essa fase, por fisioterapeuta acupunturista especializada em gestantes.",
  },
  {
    pergunta: "A acupuntura dói? As agulhas machucam?",
    resposta:
      "As agulhas de acupuntura são finíssimas — muito mais finas do que a de uma injeção — e a maioria das pacientes sente apenas um toque leve na aplicação. Depois, é comum sentir um peso, um formigamento ou um calor no local: isso é esperado e passa. Usamos agulhas descartáveis, de uso único, abertas na frente da paciente. Se em algum ponto o incômodo for maior, é só avisar: a agulha é reposicionada na hora.",
  },
  {
    pergunta: "Quantas sessões de acupuntura são necessárias e com que frequência?",
    resposta:
      "Depende da queixa. Em quadros agudos, algumas pacientes já percebem diferença nas primeiras sessões; em quadros crônicos — dor pélvica, enxaqueca, ansiedade — o efeito costuma se construir ao longo de algumas semanas. A frequência mais comum é de uma sessão por semana, e a fisioterapeuta acupunturista define o número de sessões na primeira consulta, depois de ouvir o seu histórico. No Protocolo de Paulus para FIV, o calendário segue as datas da transferência embrionária.",
  },
  {
    pergunta: "Quanto custa a sessão de acupuntura?",
    resposta:
      "Cada sessão dura cerca de uma hora e o atendimento é particular. Para saber o valor, é só chamar no WhatsApp. O número de sessões varia com a sua queixa, e quem define isso é a fisioterapeuta acupunturista na primeira consulta. Quando a acupuntura entra num plano combinado com a fisioterapia pélvica, o que é comum na gestação, ela é apresentada dentro de um plano único, com o valor fechado, após a avaliação. Emitimos nota fiscal com os dados necessários para quem for solicitar reembolso ao plano de saúde.",
    precoCta: true,
  },
  {
    pergunta: "Quem aplica a acupuntura na PELVIE? Preciso de encaminhamento médico?",
    resposta:
      "A acupuntura é aplicada pela Dra. Cibele Ferrari, fisioterapeuta acupunturista especializada em saúde da mulher e gestantes (CREFITO-3/111858-F). Não é preciso encaminhamento médico para agendar — o encaminhamento com CID só é necessário para pedir reembolso ao convênio. Se você estiver em tratamento de fertilidade ou em acompanhamento pré-natal, traga os seus exames e as datas do seu ciclo: eles orientam o plano de sessões.",
  },
];

const Acupuntura = () => {
  return (
    <>
      <Head>
        <title>Acupuntura para Fertilidade e Gestação | PELVIE SP</title>
        <meta
          name="description"
          content="Acupuntura para fertilidade, gestação, ansiedade, enxaqueca e dores crônicas. Fisioterapeuta acupunturista no Brooklin, São Paulo. Agende sua sessão."
        />
        <link
          rel="canonical"
          href="https://www.pelviefisioterapia.com.br/acupuntura"
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
        titleTextBe="Acupuntura"
        titleSpan="em São Paulo"
        pText="O que é acupuntura? É uma especialidade da Medicina Tradicional Chinesa que atua no reequilíbrio do organismo através da estimulação de pontos específicos do corpo. Quando voltada à saúde da mulher, busca o reequilíbrio de desarmonias em suas diferentes fases da vida — no período menstrual, na menopausa, na gestação, no pré e pós-parto — sempre de forma individualizada. Na PELVIE, a acupuntura também é utilizada como recurso de estímulo à fertilidade, inclusive através do Protocolo de Paulus, aplicado antes e depois da transferência embrionária em tratamentos de Fertilização In Vitro (FIV), e no preparo do corpo para o parto, favorecendo o início do trabalho de parto de forma espontânea. O tratamento é conduzido por fisioterapeuta especializada em Acupuntura, com avaliação individual antes de qualquer sessão."
        imgBg={heroImg}
        imgBgMobile={heroImgMobile}
        bgClass="bgHeroOverlay"
      >
        <a href={WHATSAPP_HREF} className="ctaBtnZap heroCta" target="noreferrer">
          Agendar sessão pelo WhatsApp
          <img
            src={whatsappBranco}
            alt="logo do whatsapp"
            width="20"
            height="20"
            loading="lazy"
          />
        </a>
      </Hero>

      <Container mainClass="acupunturaContent">
        <BoxAnimation animation="opacity">
          <h2>Acupuntura na saúde da mulher</h2>
          <p className="acupunturaIntro">
            <span className="leadSentence">
              Muitas mulheres chegam à PELVIE procurando acupuntura para
              engravidar ou acupuntura para gestante.
            </span>{" "}
            São dois dos motivos mais frequentes de atendimento aqui — e
            abaixo você vê como a técnica atua em cada fase, além dos demais
            quadros que tratamos.
          </p>
        </BoxAnimation>

        <div className="landingLayout landingLayoutAbas">
          {/* Índice de navegação: só HTML + CSS (href="#id" + :target), sem
              JavaScript. Os quatro blocos continuam inteiros no HTML servido.
              As regras estão em src/index.css, compartilhadas com /pilates e
              /massagem-e-drenagem-linfatica. */}
          <nav
            className="landingIndice"
            aria-label="Índice dos tópicos sobre acupuntura"
          >
            <p className="landingIndiceTitulo">Ir direto para</p>
            <ul>
              {BLOCOS.map((item) => (
                <li key={item.chave}>
                  <a href={`#${slugAncora(item.titulo)}`}>{item.rotulo}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="landingBlocos">
            <BoxAnimation animation="opacity">
              <div
                className="acupunturaBloco landingBloco"
                id={slugAncora(bloco.trata.titulo)}
              >
                <h3>{bloco.trata.titulo}</h3>
                <p>
                  <span className="leadSentence">
                    É uma especialidade da Medicina Tradicional Chinesa que tem foco
                    no tratamento de problemas relacionados à saúde.
                  </span>{" "}
                  Quando voltada
                  à saúde da mulher, busca o reequilíbrio de desarmonias em suas
                  diferentes fases da vida, como no período menstrual, na
                  menopausa, na gestação, no pré e pós-parto, entre outras fases
                  que serão sempre cuidadas de forma individualizada. Diversas
                  alterações e patologias podem ser tratadas com acupuntura como:
                </p>
                <ul>
                  <li>Dores pélvicas e osteoarticulares;</li>
                  <li>Cólicas/irregularidades menstruais;</li>
                  <li>TPM;</li>
                  <li>Baixa libido;</li>
                  <li>
                    Estímulo à fertilidade e realização do Protocolo de Paulus
                    - aplicado antes e depois da transferência embrionária em
                    FIV (Fertilização In Vitro);
                  </li>
                  <li>
                    Gestação e preparo para o parto (favorece o início do
                    trabalho de parto de forma espontânea);
                  </li>
                  <li>
                    Questões emocionais, como ansiedade, depressão, síndrome do
                    pânico;
                  </li>
                  <li>Incontinência urinária;</li>
                  <li>Alterações da menopausa.</li>
                </ul>
              </div>
            </BoxAnimation>

            <BoxAnimation animation="opacity">
              <div
                className="acupunturaBloco landingBloco"
                id={slugAncora(bloco.fertilidade.titulo)}
              >
                <h3>{bloco.fertilidade.titulo}</h3>
                <p>
                  <span className="leadSentence">
                    A acupuntura é um importante recurso de estímulo à fertilidade,
                    atuando no reequilíbrio hormonal e na melhora do fluxo sanguíneo
                    da região pélvica.
                  </span>{" "}
                  Na PELVIE, realizamos o Protocolo de Paulus —
                  aplicado antes e depois da transferência embrionária em
                  tratamentos de Fertilização In Vitro (FIV) — com o objetivo de
                  favorecer a receptividade uterina e apoiar o processo de
                  reprodução assistida.
                </p>
              </div>
            </BoxAnimation>

            <BoxAnimation animation="opacity">
              <div
                className="acupunturaBloco landingBloco"
                id={slugAncora(bloco.gestacao.titulo)}
              >
                <h3>{bloco.gestacao.titulo}</h3>
                <p>
                  <span className="leadSentence">
                    A acupuntura acompanha a mulher também na gestação, favorecendo
                    o início do trabalho de parto de forma espontânea e ajudando a
                    aliviar sintomas comuns desse período, como:
                  </span>
                </p>
                <ul>
                  <li>Enjoos e vômitos;</li>
                  <li>Constipação;</li>
                  <li>Insônia;</li>
                  <li>Dores no geral;</li>
                  <li>Enxaqueca;</li>
                  <li>Diabetes gestacional;</li>
                  <li>
                    &quot;Virar o bebê&quot; (para ficar em apresentação cefálica,
                    facilitando o parto normal);
                  </li>
                  <li>Preparo para o parto;</li>
                  <li>Alterações no pós-parto.</li>
                </ul>
              </div>
            </BoxAnimation>

            <BoxAnimation animation="opacity">
              <div
                className="acupunturaBloco landingBloco"
                id={slugAncora(bloco.tecnicas.titulo)}
              >
                <h3>{bloco.tecnicas.titulo}</h3>
                <p>
                  <span className="leadSentence">
                    Dentro da sessão de acupuntura, pode-se utilizar diferentes
                    técnicas e instrumentos da Medicina Tradicional Chinesa e da
                    Medicina Complementar:
                  </span>
                </p>
                <ul>
                  <li>
                    Agulhas: são de diferentes calibres e comprimentos, variando
                    de acordo com o ponto, o paciente e a função desejada. As
                    agulhas são sempre estéreis e de uso único. A aplicação quase
                    não causa dor. Não é colocado nenhum tipo de remédio;
                  </li>
                  <li>
                    Auriculoterapia: conhecida também como auriculopuntura, é uma
                    técnica que utiliza pontos na orelha para tratar todo o corpo,
                    como uma zona reflexa. Para realizar o estímulo, pode-se
                    utilizar sementes, cristais, esferas de prata e ouro e
                    agulhas próprias para aurículo. Normalmente a paciente fica
                    com os pontos por um período de 5 a 7 dias;
                  </li>
                  <li>
                    Moxabustão: conhecida como moxa, é um método que esquenta os
                    pontos de acupuntura ou de uma determinada região com o uso de
                    um bastão de Artemísia. O aquecimento remove bloqueios de
                    energia que obstruem o seu fluxo através dos meridianos
                    (canais de energia), eliminando a umidade e o frio que
                    promovem disfunções no organismo;
                  </li>
                  <li>
                    Ventosa: são cúpulas de vidro, silicone ou plástico que
                    realizam uma sucção da pele, para ajudar a desfazer tensões
                    musculares, promover relaxamento da fáscia muscular e levar
                    mais nutrientes para a região de aplicação, através do
                    aumento da circulação sanguínea;
                  </li>
                  <li>
                    Estimulação elétrica: é um aparelho que emite uma onda
                    elétrica pelas agulhas, otimizando o resultado da acupuntura;
                  </li>
                  <li>
                    Laseracupuntura: o laser é uma terapia à base de luz que
                    penetra em profundidade no corpo. A terapia à laser pode ter
                    as mesmas funções de um tratamento de acupuntura, com a
                    diferença que deve-se fazer um ponto de cada vez. A técnica
                    não causa nenhuma dor ou desconforto, sendo um método ideal
                    para crianças ou pessoas sensíveis a agulhas. Pode ser feito
                    com ou sem o uso das agulhas. Além das funções clássicas, o
                    laser permite também funções analgésica, regenerativa e de
                    relaxante muscular;
                  </li>
                  <li>
                    Fitoacupuntura: é uma técnica de tratamento que utiliza o
                    efeito das plantas nos pontos de acupuntura. As partes das
                    plantas são coladas diretamente na pele para atuarem nos
                    pontos, meridianos e órgãos, gerando o equilíbrio da energia;
                  </li>
                  <li>
                    Aromaterapia: uso dos óleos essenciais para estimular
                    diferentes partes do cérebro para o tratamento de doenças
                    físicas e emocionais.
                  </li>
                </ul>
                <p>
                  A escolha das técnicas a serem utilizadas na sessão é feita
                  após avaliação detalhada da paciente.
                </p>
              </div>
            </BoxAnimation>
          </div>
        </div>

        <CtaAcc
          aText="Agendar Acupuntura"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <Container mainClass="comoFuncionaResumo">
        <BoxAnimation animation="opacity">
          <h2>Como funciona o atendimento</h2>
          <p>
            O atendimento começa com uma avaliação detalhada, feita pela Dra.
            Cibele Ferrari, fisioterapeuta especializada em Acupuntura.
            Nessa consulta inicial, entendemos sua queixa, sua história e
            definimos as técnicas mais adequadas para o seu caso antes de
            propor qualquer conduta. A partir disso, você recebe um plano de
            sessões individual, ajustado conforme sua evolução e seus
            objetivos ao longo do tratamento.
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
        <p className="acupunturaEquipeIntro">
          As sessões de acupuntura na PELVIE são conduzidas pela Dra. Cibele
          Ferrari, fisioterapeuta acupunturista especializada em Saúde da
          Mulher e Gestantes. Conheça também o restante da nossa equipe:
        </p>
        <div className="ourTeamCards ourTeamCardsLanding">
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
        <NavLink to="/quem-somos" className="ctaBtn2 acupunturaEquipeCta">
          Saiba mais sobre a PELVIE
        </NavLink>
      </Container>

      <Container mainClass="faqSection" id="faq">
        <span className="spanLabel">Tire suas dúvidas</span>
        <h2>Perguntas frequentes</h2>
        {/* Índice da FAQ: só links âncora, sem esconder nada — as 6
            perguntas e respostas continuam inteiras e visíveis logo abaixo,
            no carregamento da página. */}
        <nav className="faqIndice" aria-label="Índice das perguntas frequentes">
          <ul>
            {FAQS.map((faq) => (
              <li key={faq.pergunta}>
                <a href={`#${slugAncora(faq.pergunta)}`}>
                  {ROTULO_CURTO_FAQ[faq.pergunta] ?? faq.pergunta}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="faqItens">
          {FAQS.map((faq) => (
            <BoxAnimation animation="opacity" key={faq.pergunta}>
              <div className="faqItem" id={slugAncora(faq.pergunta)}>
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
        </div>
      </Container>

      <Container mainClass="ctaLocalizacao">
        <CtaAcc
          aText="Agendar sessão pelo WhatsApp"
          href={WHATSAPP_HREF}
          img={whatsappGreen}
        />
      </Container>

      <LocationBlock>
        Rua James Watt, 142, Sala 42 — Brooklin, São Paulo/SP — CEP 04576-050
      </LocationBlock>

      <Container>
        <CtaCard googleBtn={true} url={WHATSAPP_HREF}>
          <p>Agende sua sessão de acupuntura!</p>
        </CtaCard>
      </Container>
    </>
  );
};

export default Acupuntura;
