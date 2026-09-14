/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import "./styles.css";
import { NavLink, useLocation } from "react-router-dom";
import logoBranca from "/src/assets/img/svgs/logoBranca.svg";
import setaBtn from "../../assets/img/svgs/setaIconMenu.svg";
import { useEffect, useRef, useState } from "react";
import insta from "../../assets/img/svgs/instagram.svg";
import whats from "../../assets/img/svgs/whatsapp.svg";
import LANDING_PAGE_WHATSAPP_HREF from "../../utils/whatsappPorRota";

const DEFAULT_WHATSAPP_HREF =
  "https://wa.me/+5511913112992?text=Olá! Gostaria de mais informações. Estou buscando a clínica porque…";

// Landing pages de serviço (F1.x–F3.x). "Tratamentos" continua sendo um link real
// para /tratamento (página guarda-chuva institucional, R24) — a seta ao lado é o
// único controle que abre/fecha esta lista.
const tratamentosLinks = [
  { to: "/fisioterapia-pelvica", label: "Fisioterapia Pélvica" },
  { to: "/acupuntura", label: "Acupuntura" },
  { to: "/pilates", label: "Pilates" },
  {
    to: "/massagem-e-drenagem-linfatica",
    label: "Massagem e Drenagem Linfática",
  },
];

const Menu = ({ openMenu, setOpenMenu, hasInteracted }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  function closeMenu() {
    setOpenMenu(false);
  }

  const [open, setOpen] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const focusFirstItem = useRef(false);
  const { pathname } = useLocation();

  // Hover só faz sentido em ponteiro fino no desktop; no painel mobile o mesmo
  // componente é aberto por toque/teclado.
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (min-width: 1001px)");
    function sync() {
      setHoverEnabled(query.matches);
    }
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Fechar o menu mobile inteiro tem que zerar o submenu junto.
  useEffect(() => {
    if (!openMenu) setOpen(false);
  }, [openMenu]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeDropdown() {
    setOpen(false);
  }

  // Escolher um item fecha o submenu e, no mobile, o painel inteiro.
  function handleDropdownNavigate() {
    setOpen(false);
    closeMenu();
  }

  // Tab saindo do grupo (gatilho + itens) fecha o submenu.
  function handleBlur(event) {
    if (!containerRef.current?.contains(event.relatedTarget)) setOpen(false);
  }

  // No desktop o hover já abriu o painel antes do clique chegar, então um toggle
  // cru fecharia justamente quando o usuário clica esperando abrir. Clique de
  // mouse com hover disponível só abre (fechar é sair com o mouse, Esc, clicar
  // fora ou escolher um item); teclado (event.detail === 0) e toque continuam
  // alternando.
  function handleToggleClick(event) {
    const fromKeyboard = event.detail === 0;
    setOpen((value) => (hoverEnabled && !fromKeyboard ? true : !value));
  }

  function focusFirstLink() {
    panelRef.current?.querySelector("a")?.focus();
  }

  // Enquanto o <ul> está hidden os links dentro dele não são focáveis, então o
  // foco só pode ir para o primeiro item depois que o React já removeu o hidden.
  useEffect(() => {
    if (open && focusFirstItem.current) focusFirstLink();
    focusFirstItem.current = false;
  }, [open]);

  function handleToggleKeyDown(event) {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    if (open) {
      focusFirstLink();
      return;
    }
    focusFirstItem.current = true;
    setOpen(true);
  }

  const hasActiveChild = tratamentosLinks.some((link) => link.to === pathname);
  const whatsappHref =
    LANDING_PAGE_WHATSAPP_HREF[pathname] ?? DEFAULT_WHATSAPP_HREF;

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        background: scrollPosition === 0 ? "var(--roxo5)" : "var(--roxo7)",
      }}
      className={`${
        openMenu ? "header" : hasInteracted ? "headerClosed" : "headerClosedInitial"
      }`}
    >
      <div className="headerContent mainContent">
        <img
          className="logoColoridaDesktop"
          src={logoBranca}
          alt="logo pelvie"
          width="150"
          height="81"
        />
        {openMenu && (
          <div className="navigationTextMenu">
            <img src={logoBranca} alt="logo pelvie" width="150" height="81" />
            <span>Navegação</span>
            <h3>O que você deseja fazer?</h3>
          </div>
        )}
        <nav className="navMenu navMenuHeader">
          <NavLink to="/" end onClick={closeMenu}>
            Página Inicial
          </NavLink>
          <NavLink to="quem-somos" onClick={closeMenu}>
            Quem Somos
          </NavLink>
          <div
            className={`navDropdown${open ? " navDropdownOpen" : ""}`}
            ref={containerRef}
            onBlur={handleBlur}
            onMouseEnter={hoverEnabled ? () => setOpen(true) : undefined}
            onMouseLeave={hoverEnabled ? closeDropdown : undefined}
          >
            <div className="navDropdownTrigger">
              <NavLink
                to="/tratamento"
                className={({ isActive }) =>
                  isActive || hasActiveChild ? "active" : ""
                }
                onClick={handleDropdownNavigate}
              >
                Tratamentos
              </NavLink>
              <button
                type="button"
                ref={toggleRef}
                className="navDropdownToggle"
                aria-expanded={open}
                aria-controls="submenuTratamentos"
                aria-label={
                  open
                    ? "Fechar lista de tratamentos"
                    : "Abrir lista de tratamentos"
                }
                onClick={handleToggleClick}
                onKeyDown={handleToggleKeyDown}
              >
                <span className="navDropdownChevron" aria-hidden="true"></span>
              </button>
            </div>
            <ul
              id="submenuTratamentos"
              className="navDropdownPanel"
              ref={panelRef}
              hidden={!open}
            >
              {tratamentosLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} onClick={handleDropdownNavigate}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to="como-funciona" onClick={closeMenu}>
            Como Funciona
          </NavLink>
        </nav>

        <div className="contato">
          <a
            href="https://www.instagram.com/pelviefisioterapia/?igsh=cTg1d3NxejRnbTNs"
            target="noreferrer"
          >
            <img src={insta} alt="logo do instagram" width="43" height="42" />
          </a>
          <a href={whatsappHref} target="noreferrer">
            <img src={whats} alt="logo do whatsapp" width="43" height="42" />
          </a>
        </div>
        {openMenu && (
          <div className="footerMenuMobile">
            <div className="buttonsFooterMenu">
              <a href={whatsappHref} target="noreferrer">
                Fale Conosco
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
              <a
                href="https://www.instagram.com/pelviefisioterapia/?igsh=cTg1d3NxejRnbTNs"
                target="noreferrer"
              >
                Nosso instagram
                <img src={setaBtn} width="20" alt="seta com fundo branco" />
              </a>
            </div>
            <div className="textFooterMenu">
              <div>
                <h3>Atendimento</h3>
                <p>
                  Seg à Sex - 7h às 20h30
                  <br />
                  Sáb - 8h às 14h
                </p>
              </div>
              <div>
                <h3>Endereço</h3>
                <p>Rua James Watt, 142 - Sala 42, Brooklin, São Paulo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
