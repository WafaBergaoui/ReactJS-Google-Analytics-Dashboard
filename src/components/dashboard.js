import React , {useState} from 'react'
import DayVisits from '../charts/dayVisitsCharts'
import PieGraph from '../charts/countriesGraph'
import TableGraph from '../charts/PageViewGraph'
import ViewIdPage from "./viewIdForm"
import BrowsersReport from "../charts/browsersGraph"
import DevicesReport from "../charts/devicesGraph"
import SourceReport from "../charts/sourcesVisitsGraph"
import Navbar from "./navbar"
import Header from "../components/header"
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";

const Dashboard = () => {
    const[viewID, setViewID] = useState(null);

    return (
        <>
        <Navbar/>
        {viewID ? (
        <>
        <Header
            viewID = {viewID}
        />    
         <Container fluid>
          <Row>
            <Col lg="4" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                    <DayVisits
                        metric={"ga:users"}
                        title={"Users"}
                        viewID={viewID}
                    />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
<br/>
          <Row>
            <Col lg="4" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                    <DayVisits
                        metric={"ga:sessions"}
                        title={"Sessions"}
                        viewID={viewID}
                      />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
<br/>
        <Container fluid>
          <Row>
            <Col lg="4" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <PieGraph
                        viewID = {viewID}
                      />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
<br/>
          <Row>
            <Col lg="4" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <TableGraph
                        viewID = {viewID}
                      />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>

<br/>
        <Container fluid>
          <Row>
            <Col lg="4" xl="12">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                    <SourceReport 
                        viewID={viewID} 
                    />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>

<br/>
        <Container fluid>
          <Row>
            <Col  xl="6">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                        <BrowsersReport 
                            viewID={viewID}
                        />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
                       
            <Col  xl="6">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                    <DevicesReport
                       viewID={viewID}
                   />
                    </div>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
<br/><br/>
            </>
        ) : (
            <ViewIdPage submitViewId={(id) => setViewID(id)} />
     )}
     </>
   );
 };

export default Dashboard;