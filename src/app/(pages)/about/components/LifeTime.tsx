import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type TimelineItem = { title: string; year: string; description: string };

const LifeTime = () => {
  const { t } = useTranslation();
  const timeline = t("about.lifetime.timeline", {
    returnObjects: true,
  }) as TimelineItem[];
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              {t("about.lifetime.badge")}
            </span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">
              {t("about.lifetime.title")}
            </h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">{t("about.lifetime.bgText")}</h1>
            </div>          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <div className="main-timeline">
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon="tabler:trophy" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">{timeline[0]?.title}</h3>
                        <p className="description">{timeline[0]?.description}</p>
                      </div>
                      <div className="timeline-year">
                        <span>{timeline[0]?.year}</span>
                      </div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon="tabler:users" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">{timeline[1]?.title}</h3>
                        <p className="description">{timeline[1]?.description}</p>
                      </div>
                      <div className="timeline-year">
                        <span>{timeline[1]?.year}</span>
                      </div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon="tabler:school" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">{timeline[2]?.title}</h3>
                        <p className="description">{timeline[2]?.description}</p>
                      </div>
                      <div className="timeline-year">
                        <span>{timeline[2]?.year}</span>
                      </div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon="tabler:building" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">{timeline[3]?.title}</h3>
                        <p className="description">{timeline[3]?.description}</p>
                      </div>
                      <div className="timeline-year">
                        <span>{timeline[3]?.year}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LifeTime;
