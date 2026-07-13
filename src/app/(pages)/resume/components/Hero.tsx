import mainBg from "@/assets/images/personal/main-bg.png";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className="hero-one position-relative bg-black"
      id="about"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center page-banner">
          <Col lg={7} className="text-center">
            <h5 className="head-title" aria-label={t("banner.resume")} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
