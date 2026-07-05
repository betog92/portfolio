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

const Resume = () => {
  const { t } = useTranslation();
  const timeline = t("resumePage.timeline", {
    returnObjects: true,
  }) as TimelineItem[];
  return (
    <section className="section">
      <Container>
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

export default Resume;
