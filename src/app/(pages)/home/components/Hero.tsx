import { useEffect, useState } from "react";

import personal1 from "@/assets/images/personal/1.png";
import mainBg from "@/assets/images/personal/main-bg.png";

import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const basePath = import.meta.env.PROD ? "/portfolio" : "";

const roles = ["React Native", 2000, "Next.js", 2000] as const;

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

  const animatedRole = (
    <mark>
      {reducedMotion ? (
        <span className="fw-medium typewrite">React Native</span>
      ) : (
        <TypeAnimation
          className="fw-medium typewrite"
          sequence={[...roles]}
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
          <Col lg={5} className="mx-auto mt-5">
            <img src={personal1} alt="personal" className="img-fluid ml-lg-5" />
          </Col>
          <Col
            lg={7}
            className="text-center px-0 px-xl-4 mt-5 mt-lg-0 pt-5 pt-lg-0"
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
            <div className="mb-5 mb-lg-0">
              <div className="d-inline-block">
                <Button
                  variant="primary"
                  as="a"
                  href={`${basePath}/Alberto_Garcia_CV.pdf`}
                  download="Alberto_Garcia_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.downloadCv")}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
