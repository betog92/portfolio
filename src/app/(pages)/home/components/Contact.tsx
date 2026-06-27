import contactImg from "@/assets/images/personal/contact.svg";
import testipetImg from "@/assets/images/personal/testi-pet.png";

import TextAreaFormInput from "@/components/form/TextAreaFormInput";
import TextFormInput from "@/components/form/TextFormInput";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const Contact = () => {
  const { t } = useTranslation();

  const messageSchema = yup.object({
    name: yup.string().required(t("contact.errors.name")),
    email: yup
      .string()
      .email(t("contact.errors.emailInvalid"))
      .required(t("contact.errors.email")),
    subject: yup.string().required(t("contact.errors.subject")),
    contact: yup.string().required(t("contact.errors.contact")),
    message: yup.string().required(t("contact.errors.message")),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  });
  return (
    <section className="section bg-light" id="contact">
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
                    <form
                      method="post"
                      name="myForm"
                      onSubmit={handleSubmit(() => {})}
                    >
                      <span id="error-msg" />
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
                          >
                            {t("contact.form.send")}
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                  <Col md={4}>
                    <img
                      src={contactImg}
                      alt="contactImg"
                      height={200}
                      className=" mx-auto d-block mb-5"
                    />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon="tabler:phone" className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <a
                          href={`tel:${t("contact.phone").replace(/\s+/g, "")}`}
                          className="d-block lh-1 text-dark text-decoration-none"
                        >
                          {t("contact.phone")}
                        </a>
                        <span className="text-muted fs-14 mt-n2">
                          {t("contact.phoneHours")}
                        </span>
                      </div>
                    </div>
                    <hr className="hr-dashed my-3" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon="tabler:mail" className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <a
                          href={`mailto:${t("contact.email")}`}
                          className="d-block lh-1 text-dark text-decoration-none"
                        >
                          {t("contact.email")}
                        </a>
                        <span className="text-muted fs-14 mt-n2">
                          {t("contact.emailDays")}
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

export default Contact;
