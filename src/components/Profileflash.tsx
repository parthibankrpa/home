import data from "../data/resume.json";
import { Row, Col, Container, Button } from "react-bootstrap";
import ProfileImage from "./ProfileImage";
import SocialConnect from "./SocialConnect";

function Profileflash() {
  return (
    <Container className="flash-container">
      <Row>
        <Col sm={8}>
          <Row>
            <h5 className="profile-title">Hello, I'm</h5>
          </Row>
          <Row>
            <h2 className="profile-name">{data.name}</h2>
          </Row>
          <Row>
            <p className="summary">{data.professional_summary}</p>
          </Row>
          <Row>
            <Col sm={4}>
              <a href="./resume.pdf" download>
                <Button variant="outline-light" className="btn-outline">
                  Download Cv
                </Button>
              </a>
            </Col>
            <Col sm={8}>
              <SocialConnect />
            </Col>
          </Row>
        </Col>
        <Col className="profile-image-container">
          <ProfileImage />
        </Col>
      </Row>
    </Container>
  );
}

export default Profileflash;
