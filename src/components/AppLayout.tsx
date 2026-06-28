import logoLight from "@/assets/images/logo-light.png";
import logoSm from "@/assets/images/logo-sm.png";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { currentYear } from "@/context/constants";
import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AppLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { t } = useTranslation();

  return (
    <>
      {children}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={5} className="border-e-dashed">
              <Link to="/">
                <img src={logoSm} alt="logoSm" height={18} />
                <img src={logoLight} alt="logoLight" height={16} />
              </Link>
              <p className="my-4">{t("footer.intro")}</p>
              <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
                <li className="list-inline-item">
                  <Link to="">
                    {" "}
                    <IconifyIcon
                      icon="feather:facebook"
                      className="icon-xs"
                    />{" "}
                  </Link>
                  &nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    {" "}
                    <IconifyIcon
                      icon="feather:twitter"
                      className="icon-xs"
                    />{" "}
                  </Link>
                  &nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    {" "}
                    <IconifyIcon
                      icon="feather:github"
                      className="icon-xs"
                    />{" "}
                  </Link>
                  &nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    {" "}
                    <IconifyIcon
                      icon="feather:instagram"
                      className="icon-xs"
                    />{" "}
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Row>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-5">
                    {t("footer.company")}
                  </h6>
                  <ul className="list-unstyled footer-list">
                    <li>
                      <Link to="/">{t("nav.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("nav.about")}</Link>
                    </li>
                    <li>
                      <Link to="/services">{t("nav.services")}</Link>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">
                    {t("footer.information")}
                  </h6>
                  <ul className="list-unstyled footer-list">
                    <li>
                      <Link to="/resume">{t("nav.resume")}</Link>
                    </li>
                    <li>
                      <Link to="/projects">{t("nav.projects")}</Link>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">
                    {t("footer.moreInfo")}
                  </h6>
                  <ul className="list-unstyled footer-list">
                    <li>
                      <Link to="/contact">{t("nav.contact")}</Link>
                    </li>
                    <li>
                      <Link to="/">{t("footer.terms")}</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col sm={6}>
              <p>
                {" "}
                © {currentYear} Selfown. {t("footer.createdWith")}{" "}
                <IconifyIcon icon="la:heart-solid" className="text-danger" />{" "}
                {t("footer.by")} Mannatthemes
              </p>
            </Col>
            <Col sm={6} className="text-sm-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    - {t("footer.terms")}
                    <sup className="text-danger">*</sup>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppLayout;
