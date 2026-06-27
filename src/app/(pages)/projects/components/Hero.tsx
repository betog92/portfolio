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
        <Row className="align-items-center justify-content-center py-100">
          <Col lg={7} className="text-center py-5 text-center">
            <h5 className="head-title py-4" aria-label={t("banner.projects")} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
