import { useEffect, useState } from "react";

import personal1 from "@/assets/images/personal/1.png";
import mainBg from "@/assets/images/personal/main-bg.png";

import { getCvFile, getCvHref } from "@/context/constants";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

// Respeta la preferencia del sistema de reducir animaciones (accesibilidad).
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

const Hero = () => {
  const reducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();

  const isSpanish = (i18n.resolvedLanguage ?? "en").startsWith("es");
  const cvFile = getCvFile(i18n.resolvedLanguage);
  const cvHref = getCvHref(i18n.resolvedLanguage);

  const roles = t("hero.roles", { returnObjects: true }) as string[];
  const sequence = roles.flatMap((role) => [role, 2000]);

  const animatedRole = (
    <mark>
      {reducedMotion ? (
        <span className="fw-medium typewrite">{roles[0]}</span>
      ) : (
        <TypeAnimation
          key={i18n.resolvedLanguage}
          className="fw-medium typewrite"
          sequence={sequence}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 220 }}
          deletionSpeed={{ type: "keyStrokeDelayInMs", value: 110 }}
          repeat={Infinity}
          cursor={true}
        />
      )}
    </mark>
  );

  return (
    <section
      className="hero-one position-relative main-bg"
      id="home"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} className="mx-auto mt-0 mt-lg-0 hero-portrait-col order-2 order-lg-1">
            <div className="hero-portrait">
              <img src={personal1} alt="Alberto García" />
            </div>
          </Col>
          <Col
            lg={7}
            className="text-center px-0 px-xl-4 mt-0 pt-0 mt-lg-0 pt-lg-0 hero-text-col order-1 order-lg-2"
          >
            <h5 className="d-inline-block py-1 px-3 rounded text-muted font-secondary">
              {t("hero.greeting")}
            </h5>
            <h1 className="hero-title mb-4 font-secondary">
              <span className="visually-hidden">{t("hero.seoTitle")}</span>
              <span aria-hidden="true">
                {isSpanish ? (
                  <>
                    <span className="hero-title-line">{t("hero.suffix")}</span>
                    {animatedRole}
                  </>
                ) : (
                  <>
                    <span className="hero-title-line">
                      {t("hero.prefix")} {animatedRole}
                    </span>
                    {t("hero.suffix")}
                  </>
                )}
              </span>
            </h1>
            <div className="mb-2 mb-lg-0 hero-cta">
              <div className="d-inline-block">
                <Button
                  variant="primary"
                  as="a"
                  href={cvHref}
                  download={cvFile}
                >
                  {t("hero.downloadCv")}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-wave" aria-hidden="true">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
