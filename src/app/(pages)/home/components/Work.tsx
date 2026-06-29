import { Fragment, useState } from "react";
import { workData, WorkDataType } from "../data";

import clsx from "clsx";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const filterOptions = [
  { id: "all", labelKey: "home.work.filters.all" },
  { id: "react-native", labelKey: "home.work.filters.reactNative" },
  { id: "react", labelKey: "home.work.filters.react" },
  { id: "nextjs", labelKey: "home.work.filters.nextjs" },
  { id: "web", labelKey: "home.work.filters.web" },
];

export const WorkCard = ({
  image,
  language,
  link,
  linkLabel,
  title,
  variant,
  fill,
  objectFit = "cover",
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
                style={{ objectFit, objectPosition: "center" }}
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
            <p className="mb-0 fs-13">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-decoration-none"
              >
                {linkLabel ?? link}{" "}
                <i className="ti ti-external-link fs-18 text-primary" />
              </a>
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
  const [category, setCategory] = useState("all");

  const gallery =
    category === "all"
      ? workData
      : workData.filter((item) => item.category?.includes(category));

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
        <Row>
          <Col xs={12} className="filters-group-wrap">
            <div className="filters-group mb-5">
              <ul className="mb-0 list-unstyled filter-options filter-tab">
                {filterOptions.map((option) => (
                  <li
                    key={option.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={category === option.id}
                    className={clsx(
                      "list-inline-item position-relative text-dark",
                      { active: category === option.id }
                    )}
                    onClick={() => setCategory(option.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setCategory(option.id);
                      }
                    }}
                  >
                    {t(option.labelKey)}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex  g-1 justify-content-center" id="grid">
          {gallery.map((item, idx) => (
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
