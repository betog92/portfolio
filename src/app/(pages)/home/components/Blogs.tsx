import { blogsData, BlogsType } from "../data";

import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogsCard = ({ date, image, name, title, userImg }: BlogsType) => {
  const { t } = useTranslation();
  return (
    <Card className="shadow">
      <img src={image} alt="img" className="img-fluid rounded-top" />
      <CardBody>
        <Link to="/blog-detail" className="fs-20 my-0 d-block fw-medium">
          {title}
        </Link>
        <hr className="hr-dashed" />
        <div className="d-flex justify-content-between">
          <div className="meta-box">
            <div className="media">
              <img
                src={userImg}
                alt="userImg"
                className="thumb-sm rounded-circle me-2 align-self-center"
              />
              <div className="media-body align-self-center text-truncate">
                <h6 className="m-0 fs-14">{name}</h6>
                <p className="mb-0 fs-12 text-muted">{date}</p>
              </div>
            </div>
          </div>
          <div className="align-self-center">
            <Link to="/blog-detail" className="fs-14">
              {t("common.readMore")}{" "}
              <i className="ti ti-arrow-right align-self-center" />
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Blogs = () => {
  const { t } = useTranslation();
  return (
    <section className="section " id="blogs">
      <Container className="pb-5">
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              {t("home.blogs.badge")}
            </span>
            <h2 className="fs-2 fw-normal lh-1 text-dark my-3">
              {t("home.blogs.title")}
            </h2>          </Col>
        </Row>
        <Row className="align-items-center">
          {blogsData.map((item, idx) => (
            <Col lg={4} md={4} key={idx}>
              <BlogsCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
