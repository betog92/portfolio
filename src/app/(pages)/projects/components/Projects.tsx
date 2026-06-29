import clsx from "clsx";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { workData } from "@/app/(pages)/home/data";
import { WorkCard, filterOptions } from "@/app/(pages)/home/components/Work";

const Projects = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");

  const gallery =
    category === "all"
      ? workData
      : workData.filter((item) => item.category?.includes(category));

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
            <Col lg={4} md={6} key={idx} className="picture-item">
              <WorkCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
