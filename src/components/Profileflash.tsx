import data from "../data/resume.json";
import { Row, Col, Container, Button } from 'react-bootstrap';
import ProfileImage from "./ProfileImage";


function Profileflash() {
    return <Container className="flash-container">
        <Row>
            <Col sm={6}>
                <h5>Hello, I'm</h5>
                <h2 className="mb-0 d-block d-lg-block">{data.name}</h2>
                <p className="summary">{data.professional_summary}</p>
                <div>
                    <a href="./resume.pdf" download><Button variant="primary">Download Cv</Button></a>
                </div>

            </Col>
            <Col className="profile-image-container">
                <ProfileImage />
            </Col>

        </Row >
    </Container >;
}

export default Profileflash;