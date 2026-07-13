import contactImg from "@/assets/images/personal/contact.svg";
import testipetImg from "@/assets/images/personal/testi-pet.png";

import TextAreaFormInput from "@/components/form/TextAreaFormInput";
import TextFormInput from "@/components/form/TextFormInput";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { getWhatsAppUrl } from "@/context/constants";
import { useContactForm } from "@/hooks/useContactForm";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type ContactSectionProps = {
  className?: string;
  id?: string;
};

const ContactSection = ({ className = "section", id }: ContactSectionProps) => {
  const { t } = useTranslation();
  const { control, register, onSubmit, status, clearStatus } = useContactForm();

  return (
    <section className={className} id={id}>
      <Container>
        <Row>
          <Col xs={12}>
            <Card
              className="bg-white"
              style={{
                background: `url(${testipetImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "15%",
                backgroundPosition: "right bottom",
              }}
            >
              <CardBody>
                <Row>
                  <Col md={8}>
                    <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">
                      {t("contact.title")}
                    </h2>
                    <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">
                      {t("contact.subtitle")}
                    </p>
                    <form onSubmit={onSubmit} onChange={clearStatus}>
                      <input
                        type="checkbox"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="d-none"
                        {...register("botcheck")}
                      />
                      <Row>
                        <Col md={6} className="mb-3">
                          <TextFormInput
                            control={control}
                            name="name"
                            placeholder={t("contact.form.namePlaceholder")}
                            label={t("contact.form.name")}
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput
                            control={control}
                            name="email"
                            placeholder={t("contact.form.emailPlaceholder")}
                            label={t("contact.form.email")}
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput
                            control={control}
                            name="subject"
                            placeholder={t("contact.form.subjectPlaceholder")}
                            label={t("contact.form.subject")}
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput
                            control={control}
                            name="contact"
                            placeholder={t("contact.form.contactPlaceholder")}
                            label={t("contact.form.contact")}
                          />
                        </Col>
                        <Col xs={12} className="mb-3">
                          <TextAreaFormInput
                            control={control}
                            name="message"
                            placeholder={t("contact.form.messagePlaceholder")}
                            label={t("contact.form.message")}
                          />
                        </Col>
                        <Col xs={12}>
                          <Button
                            type="submit"
                            id="submit"
                            className="btn btn-primary mt-2"
                            disabled={status === "loading"}
                          >
                            {status === "loading"
                              ? t("contact.form.sending")
                              : t("contact.form.send")}
                          </Button>
                          {status === "success" && (
                            <p
                              className="text-success mt-3 mb-0"
                              role="status"
                              aria-live="polite"
                            >
                              {t("contact.form.success")}
                            </p>
                          )}
                          {status === "error" && (
                            <p className="text-danger mt-3 mb-0" role="alert">
                              {t("contact.form.error")}
                            </p>
                          )}
                        </Col>
                      </Row>
                    </form>
                  </Col>
                  <Col md={4}>
                    <img
                      src={contactImg}
                      alt=""
                      height={200}
                      className=" mx-auto d-block mb-5"
                    />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon="tabler:mail" className="fs-22" />
                      </div>
                      <div
                        className="align-self-center ms-3"
                        style={{ minWidth: 0 }}
                      >
                        <a
                          href={`mailto:${t("contact.email")}`}
                          className="d-block lh-sm text-dark text-decoration-none text-break"
                        >
                          {t("contact.email")}
                        </a>
                        <span className="text-muted fs-14 mt-n2">
                          {t("contact.emailDays")}
                        </span>
                      </div>
                    </div>
                    <hr className="hr-dashed my-3" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon
                          icon="tabler:brand-whatsapp"
                          className="fs-22"
                        />
                      </div>
                      <div
                        className="align-self-center ms-3"
                        style={{ minWidth: 0 }}
                      >
                        <a
                          href={getWhatsAppUrl(t("contact.whatsappMessage"))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block lh-sm text-dark text-decoration-none text-break"
                          aria-label={`WhatsApp ${t("contact.phone")}`}
                        >
                          {t("contact.phone")}
                        </a>
                        <span className="text-muted fs-14 mt-n2">
                          {t("contact.whatsappNote")}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
