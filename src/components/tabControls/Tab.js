import {Card, Col, Nav, Row, Tab} from "react-bootstrap"
import AITextGenerate from "../promptAI/Text"
import AITextToImage from "../prompImages/AITextToImage"
const TabAI = () => {
  return (
   <Tab.Container defaultActiveKey="first">
      <Row className="m-2">
        <Col sm={3} className="p-2">
          <Card className="m-2">
            <Nav variant="pills" className="mt-1">
              <Nav.Item className="w-100 p-2">
                <Nav.Link eventKey="first" className="text-center text-white tab-textToText">Text to text</Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-100 p-2">
                <Nav.Link eventKey="second" className="text-center text-white tab-textToImage">Text to image</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card>
        </Col>
        <Col sm={9} className="p-2">
          <Card className="m-2">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AITextGenerate/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AITextToImage/>
              </Tab.Pane>
            </Tab.Content>
          </Card>
        </Col>
      </Row>
   </Tab.Container>
  )
}
export default TabAI