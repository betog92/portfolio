import { Fragment } from "react";
import { workData, WorkDataType } from "../data";

import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WorkCard = ({
  image,
  language,
  link,
  title,
  variant,
  fill,
  titleKey,
}: WorkDataType) => {
  const { t } = useTranslation();
  const displayTitle = titleKey ? t(titleKey) : title;
  return (
    <Card className="rounded shadow border-0 m-2">
      <CardBody className="p-4 m-2">
        <div className="media mb-3">
          {fill ? (
            <div className="thumb-xl rounded overflow-hidden">
              <img
                src={image}
                alt={displayTitle}
                className="d-block w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ) : (
            <div
              className={`bg-${variant} d-flex justify-content-center align-items-center thumb-xl  rounded`}
            >
              <img src={image} alt={displayTitle} className="thumb-md" />
            </div>
          )}
          <div className="media-body ms-3 align-self-center">
            <h5 className="text-dark fs-18 fw-medium m-0">{displayTitle}</h5>
            <p className="text-muted mb-0 fs-13">
              {link}{" "}
              <Link to="">
                <i className="ti ti-external-link fs-18 text-primary" />
              </Link>
            </p>
          </div>
        </div>
        {language.map((lag, idx) => (
          <Fragment key={idx}>
            <span
              key={idx}
              className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase"
            >
              {lag}
            </span>
            &nbsp;
          </Fragment>
        ))}
      </CardBody>
    </Card>
  );
};

const Work = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="projects">
      <Container>
        <Row className=" justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              {t("home.work.badge")}
            </span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">
              {t("home.work.title")}
            </h2>
          </Col>
        </Row>
        <Row className=" d-flex  g-1 justify-content-center" id="grid">
          {workData.map((item, idx) => (
            <Col lg={4} md={6} key={idx} className="picture-item">
              <WorkCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
