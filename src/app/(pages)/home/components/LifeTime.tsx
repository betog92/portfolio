import jobLight from "@/assets/images/personal/job-light.png";
import job from "@/assets/images/personal/job.png";
import schoolLight from "@/assets/images/personal/school-light.png";
import school from "@/assets/images/personal/school.png";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

type TimelineEntry = {
  title: string;
  years: string;
  org: string;
  description: string;
  place: string;
  tags?: string[];
};

const LifeTime = () => {
  const { t } = useTranslation();
  const edu = t("home.lifetime.edu", {
    returnObjects: true,
  }) as TimelineEntry[];
  const exp = t("home.lifetime.exp", {
    returnObjects: true,
  }) as TimelineEntry[];

  return (
    <section className="section" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              {t("home.lifetime.badge")}
            </span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">
              {t("home.lifetime.title")}
            </h2>          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img
                        src={school}
                        alt="school"
                        className="vector-dark"
                        height={150}
                      />
                      <img
                        src={schoolLight}
                        alt="schoolLight"
                        className="vector-light"
                        height={150}
                      />
                      <h5 className="text-dark fs-22 fw-medium my-2">
                        {t("home.lifetime.education")}
                      </h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion
                      defaultActiveKey={"0"}
                      className="accordion-flush"
                      id="Education_accordion"
                    >
                      {edu.map((item, idx) => (
                        <AccordionItem eventKey={String(idx)} key={idx}>
                          <AccordionHeader as={"h2"}>
                            {item.title}
                            <span className="fw-medium text-primary ms-auto fs-14">
                              {item.years}
                            </span>
                          </AccordionHeader>
                          <AccordionBody className="accordion-body">
                            <p className="fw-semibold text-primary mb-1">
                              {item.org}
                            </p>
                            <p className="text-muted mb-2">{item.description}</p>
                            <p className="text-muted fs-13 mb-0">{item.place}</p>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr className="hr-dashed" />
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img
                        src={job}
                        alt="job"
                        className="vector-dark"
                        height={150}
                      />
                      <img
                        src={jobLight}
                        alt="jobLight"
                        className="vector-light"
                        height={150}
                      />
                      <h5 className="text-dark fs-22 fw-medium my-2">
                        {t("home.lifetime.experience")}
                      </h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion
                      defaultActiveKey={"0"}
                      className="accordion-flush"
                      id="Experience_accordion"
                    >
                      {exp.map((item, idx) => (
                        <AccordionItem eventKey={String(idx)} key={idx}>
                          <AccordionHeader>
                            {item.title}
                            <span className="fw-medium text-primary ms-auto fs-14">
                              {item.years}
                            </span>
                          </AccordionHeader>
                          <AccordionBody>
                            <p className="fw-semibold text-primary mb-1">
                              {item.org}
                            </p>
                            <p className="text-muted mb-2">{item.description}</p>
                            <p className="text-muted fs-13 mb-2">{item.place}</p>
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2 me-2"
                              >
                                {tag}
                              </span>
                            ))}
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LifeTime;
