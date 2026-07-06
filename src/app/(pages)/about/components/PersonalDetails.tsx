import personal1 from "@/assets/images/personal/1.png";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { personalData } from "../data";

const PersonalDetails = () => {
  const { t } = useTranslation();
  const skills = t("about.personal.skills", {
    returnObjects: true,
  }) as string[];
  return (
    <section className="section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="align-self-center about-portrait-col">
            <div className="about-portrait">
              <img src={personal1} alt="Alberto García" />
            </div>
          </Col>
          <Col lg={6} className="ms-auto align-self-center">
            <h5 className="fs-24 text-dark fw-medium mb-3">
              <mark>{t("about.personal.badge")}</mark>
            </h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-5 fs-20">
              {t("about.personal.intro")}
            </h4>
            <div className="mb-5 mb-lg-0">
              <p className="mb-2 personal-detail-row">
                <span className="personal-detail-title">
                  {t("about.personal.labels.dob")}
                </span>
                <span className="personal-detail-info">
                  {t("about.personal.values.dob")}
                </span>
              </p>
              <p className="mb-2 personal-detail-row">
                <span className="personal-detail-title">
                  {t("about.personal.labels.languages")}
                </span>
                <span className="personal-detail-info">
                  {t("about.personal.values.languages")}
                </span>
              </p>
              <p className="mb-2 personal-detail-row">
                <span className="personal-detail-title">
                  {t("about.personal.labels.nationality")}
                </span>
                <span className="personal-detail-info">
                  {t("about.personal.values.nationality")}
                </span>
              </p>
              <p className="mb-2 personal-detail-row">
                <span className="personal-detail-title">
                  {t("about.personal.labels.interest")}
                </span>
                <span className="personal-detail-info">
                  {t("about.personal.values.interest")}
                </span>
              </p>
            </div>
            <div className="social mt-5">
              <Link to="" className="icon github me-1">
                <IconifyIcon icon="la:github" />
              </Link>
              <Link to="" className="icon twitter me-1">
                <IconifyIcon icon="la:twitter" />
              </Link>
              <Link to="" className="icon google me-1">
                <IconifyIcon icon="la:google" />
              </Link>
              <Link to="" className="icon linkedin me-1">
                <IconifyIcon icon="la:linkedin-in" />
              </Link>
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
              {personalData.map((item, idx) => (
                <div
                  key={idx}
                  className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm"
                >
                  <div className="d-flex align-items-center">
                    <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                      <IconifyIcon icon={item.icon} width={34} height={34} />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-medium text-gray-700">
                        {item.name}
                      </h6>
                      <p className="text-muted mb-0 fs-12">
                        {skills[idx] ?? item.experience} {t("common.experience")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PersonalDetails;
