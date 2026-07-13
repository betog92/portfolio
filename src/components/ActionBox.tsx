import imageP1 from "@/assets/images/p-1.svg";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { getWhatsAppUrl } from "@/context/constants";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ActionBox = () => {
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppUrl(t("contact.whatsappMessage"));

  return (
    <section className="section bg-light cta-pettern">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pattern-1 position-absolute">
              <img src={imageP1} alt="" height={80} />
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
            <div className="cta-whatsapp">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp-btn"
              >
                <IconifyIcon icon="tabler:brand-whatsapp" width={22} height={22} />
                <span>{t("about.actionBox.whatsappButton")}</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActionBox;
