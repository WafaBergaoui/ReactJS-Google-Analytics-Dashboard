import React from "react";
import Statistique from "../charts/numbersHeader";
import Percent from "../charts/bounceRate";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = (props) =>{

    return (
      <>
        <div className=" pb-4 pt-5 pt-md-7">
          <Container fluid>
            <div >
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            USERS
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                         <Statistique
                            viewID = {props.viewID}
                            metric = {"ga:users"}
                            dimension = {"ga:userType"}
                         />
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">   
                        <span className="text-nowrap">Last 30 days</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>

                
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            SESSIONS
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          <Statistique
                            viewID = {props.viewID}
                            metric = {"ga:sessions"}
                            dimension = {"ga:sessionDurationBucket"}
                         />
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-nowrap">Last 30 days</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>


                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Bounce Rate
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          <Percent
                            viewID = {props.viewID}
                            metric = {"ga:bounceRate"}
                            dimension = {"ga:sessionDurationBucket"}
                         />
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-nowrap">Last 30 days</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>


                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Currently active users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            <Statistique
                              viewID = {props.viewID}
                              metric = {"ga::cohortActiveUsers"}
                              dimension = {"ga:cohortNthDay"}
                            />
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-nowrap">.</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }


export default Header;
