import logoSm from "@/assets/images/logo-sm.png";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useScrollEvent from "@/hooks/useScrollEvent";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = ({ isDark }: { isDark?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { scrollY } = useScrollEvent();

  const { pathname } = useLocation();

  const { t } = useTranslation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top sticky ${
        isDark && "light-active"
      } ${scrollY > 80 && "nav-sticky"}`}
      id="navbar"
    >
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logoSm} className="logo-sm" alt="" height={24} />
          &nbsp;
          <span className="logo-light logo-text">
            Alberto García<span className="logo-accent">.</span>
          </span>
          <span className="logo-dark logo-text">
            Alberto García<span className="logo-accent">.</span>
          </span>
        </Link>
        <Link
          to=""
          onClick={toggleMenu}
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon">
            <IconifyIcon width={24} height={24} icon="feather:menu" />
          </span>
        </Link>
        <div
          className={`collapse navbar-collapse ${open && "show"}`}
          id="navbarNav"
        >
          <div className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                {t("nav.about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${
                  pathname === "/services" ? "active" : ""
                }`}
              >
                {t("nav.services")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className={`nav-link ${pathname === "/resume" ? "active" : ""}`}
              >
                {t("nav.resume")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                {t("nav.projects")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                {t("nav.contact")}
              </Link>
            </li>
          </div>
          <LanguageSwitcher />
        </div>
      </Container>
    </nav>
  );
};

export default TopNavbar;
