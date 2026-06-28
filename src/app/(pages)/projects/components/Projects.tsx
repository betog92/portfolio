import IconifyIcon from "@/components/wrappers/IconifyIcon";
import clsx from "clsx";
import { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ProjectData, ProjectType } from "../data";

const filterOptions = [
  { id: "all", labelKey: "common.filters.all" },
  { id: "angular", labelKey: "common.filters.angular" },
  { id: "mongodb", labelKey: "common.filters.mongodb" },
  { id: "bootstrap", labelKey: "common.filters.bootstrap" },
];
const ProjectsCard = ({ image, link, title, variant }: ProjectType) => {
  return (
    <Card className="rounded shadow border-0 m-2">
      <div className={`text-center ${variant} py-5 rounded`}>
        <img src={image} alt="lagImg" className="thumb-xl rounded" />
      </div>
      <CardBody className="p-4 m-2">
        <h5 className="text-dark fs-18 fw-medium m-0">{title}</h5>
        <p className="text-muted mb-0 fs-13">
          {link}{" "}
          <Link to="">
            <IconifyIcon
              icon="tabler:external-link"
              className="fs-18 text-primary"
            />
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const titles = t("projectsPage.items", {
    returnObjects: true,
  }) as { title: string }[];
  const localizedProjects = ProjectData.map((item, idx) => ({
    ...item,
    title: titles[idx]?.title ?? item.title,
  }));

  const [category, setCategory] = useState("all");

  const gallery =
    category === "all"
      ? localizedProjects
      : localizedProjects.filter((album) => album.category?.includes(category));

  return (
    <section className="section">
      <Container>
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
            <Col
              lg={4}
              md={6}
              key={idx}
              className="picture-item"
              data-groups='["angular", "bootstrap"]'
            >
              <ProjectsCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
