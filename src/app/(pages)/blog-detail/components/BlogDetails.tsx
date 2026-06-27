import personal1 from "@/assets/images/personal/1.jpg";
import personal3 from "@/assets/images/personal/3.jpg";
import personal4 from "@/assets/images/personal/4.jpg";
import personal5 from "@/assets/images/personal/5.jpg";
import personal6 from "@/assets/images/personal/6.jpg";
import userImg1 from "@/assets/images/users/user-1.jpg";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { t } = useTranslation();
  const related = t("blogDetail.related", {
    returnObjects: true,
  }) as string[];
  return (
    <section className="section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={9}>
            <Card className="border-0 shadow-none">
              <CardBody>
                <div className="mb-5 text-center">
                  <p className="text-muted fw-semibold fs-18">
                    {t("blogDetail.date")}
                  </p>
                  <h3 className="my-3 fs-28 d-block fw-medium text-dark">
                    {t("blogDetail.title")}
                  </h3>
                  <p className="text-muted fw-semibold fs-16">
                    {t("blogDetail.subtitle")}
                  </p>
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">
                    {t("blogDetail.tags.minting")}
                  </span>
                  &nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">
                    {t("blogDetail.tags.nfts")}
                  </span>
                  &nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">
                    {t("blogDetail.tags.art")}
                  </span>
                  &nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">
                    {t("blogDetail.tags.music")}
                  </span>
                  &nbsp;
                </div>
                <img
                  src={personal1}
                  alt="personal1"
                  className="img-fluid rounded d-flex mx-auto"
                />
                <div className="my-5">
                  <p className="text-muted fs-16 mb-4">{t("blogDetail.body1")}</p>
                  <figure>
                    <blockquote className="blockquote">
                      <p>
                        <i>{t("blogDetail.quote")} </i>
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      {t("blogDetail.quoteAuthor")}{" "}
                      <cite title={t("blogDetail.quoteSource")}>
                        {t("blogDetail.quoteSource")}
                      </cite>
                    </figcaption>
                  </figure>
                  <p className="text-muted fs-16">{t("blogDetail.body2")}</p>
                </div>
                <div className="mb-5">
                  <h3 className="mt-3 fs-24 d-block fw-medium text-dark">
                    {t("blogDetail.latestPosts")}
                  </h3>
                  <p className="text-muted fw-semibold fs-14">
                    {t("blogDetail.date")}
                  </p>
                  <Row>
                    <Col xs={12}>
                      <Row className="row-cols-xl-4 row-cols-lg-4 row-cols-md-2 g-3 justify-content-center">
                        <Col>
                          <Link
                            to=""
                            className="d-block bg-card shadow p-2 rounded catagories-box"
                          >
                            <img
                              src={personal6}
                              alt="personal"
                              className="img-fluid rounded mb-2"
                            />
                            <h3 className="fs-15 m-0 fw-medium">
                              {related[0]}
                            </h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            to=""
                            className="d-block bg-card shadow p-2 rounded catagories-box"
                          >
                            <img
                              src={personal3}
                              alt="personal"
                              className="img-fluid rounded mb-2"
                            />
                            <h3 className="fs-15 m-0 fw-medium">
                              {related[1]}
                            </h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            to=""
                            className="d-block bg-card shadow p-2 rounded catagories-box"
                          >
                            <img
                              src={personal4}
                              alt="personal"
                              className="img-fluid rounded mb-2"
                            />
                            <h3 className="fs-15 m-0 fw-medium">
                              {related[2]}
                            </h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            to=""
                            className="d-block bg-card shadow p-2 rounded catagories-box"
                          >
                            <img
                              src={personal5}
                              alt="personal"
                              className="img-fluid rounded mb-2"
                            />
                            <h3 className="fs-15 m-0 fw-medium">
                              {related[3]}
                            </h3>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr className="hr-dashed my-3" />
                  <Row>
                    <div className="col-md">
                      <div className="media">
                        <img
                          src={userImg1}
                          alt="userImg1"
                          className="thumb-sm rounded-circle me-2"
                        />
                        <div className="media-body align-self-center text-truncate">
                          <h6 className="m-0 text-dark fw-medium">
                            {t("blogDetail.authorName")}
                          </h6>
                          <p className="mb-0 fs-12 text-muted fw-medium">
                            {t("blogDetail.authorRole")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Col md={"auto"}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary px-4"
                      >
                        {t("blogDetail.blogsButton")}
                      </button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
