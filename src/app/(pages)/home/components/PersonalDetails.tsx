import { personalData } from "../data";

import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="align-self-center">
            <h5 className="fs-24 text-dark fw-medium">
              <mark>Personal Details</mark>
            </h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">
              Mobile software engineer with 5+ years of experience in React
              Native and technical leadership. Specialized in TypeScript and
              mobile security for fintech applications.
            </h4>
            <div className="social">
              <Link
                to="https://www.linkedin.com/in/albertoigm/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin me-1"
              >
                <IconifyIcon icon="la:linkedin-in" />
              </Link>
              <Link
                to="https://github.com/betog92"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github me-1"
              >
                <IconifyIcon icon="la:github" />
              </Link>
            </div>
          </Col>
          <Col lg={5} className="ms-auto align-self-center">
            <div className="mb-5 mb-lg-0">
              <p className="mb-2">
                <span className="personal-detail-title">Date of birth</span>
                <span className="personal-detail-info">28 April 1992</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Spoken Languages</span>
                <span className="personal-detail-info">
                  English (B2++), Spanish (C2)
                </span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Nationality</span>
                <span className="personal-detail-info">México</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Interest</span>
                <span className="personal-detail-info">Padel</span>
              </p>
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
              {personalData.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm"
                  >
                    <div className="d-flex align-items-center">
                      <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                        <img src={item.image} alt="logos" height={34} />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0 fw-medium text-gray-700">
                          {item.name}
                        </h6>
                        <p className="text-muted mb-0 fs-12">
                          {item.experience} Experience
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PersonalDetails;
