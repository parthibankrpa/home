import useResumeContext from "../hooks/ResumeHooks";
import { Row, Col, Container, Button } from "react-bootstrap";
import ProfileImage from "./ProfileImage";
import SocialConnect from "./SocialConnect";
import Skills from "./Skills";

function Profileflash() {
  const resumeContext = useResumeContext();
  return (
    <Container className="flash-container">
      <Row>
        <Col sm={8}>
          <Row>
            <h5 className="profile-title">Hello, I'm</h5>
          </Row>
          <Row>
            <h2 className="profile-name">{resumeContext.name}</h2>
          </Row>
          <Row>
            <p className="summary">{resumeContext.professional_summary}</p>
          </Row>
          <Row>
            <Col sm={6} xs={4} className="flex flex-col items-start">
              <a href="./resume.pdf" download>
                <Button variant="outline-light" className="btn-outline">
                  Download Cv
                </Button>
              </a>
            </Col>
            <Col sm={6} xs={8}>
              <SocialConnect />
            </Col>
          </Row>
        </Col>
        <Col className="profile-image-container">
          <ProfileImage />
        </Col>
      </Row>
      <Skills />
    </Container>
  );
}

export default Profileflash;
