import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type TimelineItem = { title: string; year: string; description: string };

const timelineIcons = [
  "tabler:trophy",
  "tabler:world",
  "tabler:users",
  "tabler:building",
  "tabler:camera",
  "tabler:school",
];

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
                  {timeline.map((item, idx) => (
                    <div className="timeline" key={idx}>
                      <Link to="" className="timeline-content">
                        <div className="timeline-icon">
                          <IconifyIcon
                            icon={
                              timelineIcons[idx % timelineIcons.length]
                            }
                          />
                        </div>
                        <div className="inner-content">
                          <h3 className="title">{item.title}</h3>
                          <p className="description">{item.description}</p>
                        </div>
                        <div className="timeline-year">
                          <span>{item.year}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
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
