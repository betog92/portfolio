import imageP1 from "@/assets/images/p-1.svg";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ActionBox = () => {
  const { t } = useTranslation();
  return (
    <section className="section bg-light cta-pettern">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pattern-1 position-absolute">
              <img src={imageP1} alt="imageP1" height={80} />
            </div>
            <h2
              className="text-dark"
              style={{ lineHeight: "1.5", position: "relative" }}
            >
              {t("about.actionBox.title")}
            </h2>
            <p className="text-muted mb-0">{t("about.actionBox.subtitle")}</p>
          </Col>
          <Col lg={6} className="ml-auto">
            <div className="cta-search">
              <form className="position-relative">
                <input
                  type="email"
                  placeholder={t("about.actionBox.emailPlaceholder")}
                  required
                />
                <button type="submit" className="btn btn-dark">
                  {t("about.actionBox.sendButton")}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActionBox;
